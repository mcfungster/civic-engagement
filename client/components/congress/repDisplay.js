import _ from 'underscore';
import shortid from 'shortid';

import Box from 'grommet/components/Box';
import Tab from 'grommet/components/Tab';
import Tabs from 'grommet/components/Tabs';
import Spinning from 'grommet/components/icons/Spinning';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RepBio from './repBio';
import RepBillsList from './repBillsList';
import RepVoteStats from './repVoteStats';

import RepVoteStatsLineGraph from './repVoteStatsLineGraph';
import RepVoteStatsDoughnut from './repVoteStatsDoughnut';

import { bio, bills, votes } from '../../actions/politicianSearchActions';
import testing from '../../actions/locationBarActions';

// import { Propublica, testReps } from './defaultProps';

/* this component will need a location
 * already searched and seeded into app state */
class RepDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: null
    };
    console.log(props);
    // fire off propublica actions
    this.props.reps.forEach(({ name }) => {
      this.props.bio(name);
      this.props.bills(name);
      this.props.votes(name);
    });

    this.handleClick = this.handleClick.bind(this);

    setTimeout(() => {
      // this.setState({ current: this.props.reps[0].name });
      this.handleClick(this.props.reps[0].name);
      // console.log('remove spinner: ', this.props.reps[0].name);
    }, 1000);
  }

  handleClick(current) {
    // console.log(current);
    if (this.state.current !== current) {
      this.setState({ current });
    }
  }

  render() {
    // reps have been saved to state! this should always be populated.
    const { reps, propublica } = this.props;
    /*
      <RepBillsList
        key={shortid.generate()}
        rep={propublica[rep.name]}
      />
    */
    const tabArray = _.map(propublica, rep =>
      <Tab
        key={shortid.generate()}
        title={rep.name || ''}
        onClick={() => this.handleClick(rep.name)}
      />
    );

    // parse the correct obj from the GoogleResults
    const rep = reps.filter(({ name }) => name === this.state.current)[0];

    // create a component-generating function for the grommet-box component
    // to avoid repeating property assignments
    const BawksCreator = component => (
      <Box
        align='center'
        pad='small'
        margin='small'
        basis='medium'
      >
        {component}
      </Box>
    );

    return (
      <div>
        <Tabs>{tabArray}</Tabs>
        {this.state.current ? (
          <Box
            direction='row'
            justify='center'
            full={true}
          >
            {BawksCreator(
              <RepBio
                key={shortid.generate()}
                bio={propublica[this.state.current]}
                google={rep}
              />
            )}
            {BawksCreator(
              <RepVoteStatsLineGraph rep={propublica[this.state.current]} />
            )}
            {BawksCreator(
              <RepVoteStats rep={propublica[this.state.current]} />
            )}
          </Box>
        ) : (
            <Box
              align='center'
            >
              <Spinning />
              <div>fetching congressional activity</div>
            </Box>
          )}
      </div>
    );
  }
}

RepDisplay.defaultProps = {
  // propublica: Propublica,
  // reps: testReps
  reps: [
    { name: 'Charles E. Schumer' },
    { name: 'Kirsten E. Gillibrand' },
    { name: 'Carolyn B. Maloney' }
  ]
};

function mapStateToProps(state) {
  return {
    reps: state.GoogleResults.reps,
    propublica: state.Propublica
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ testing, bills, bio, votes }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RepDisplay);
