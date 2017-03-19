import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';

import ListView from './listView';

// import search from '../actions/politicianSearchActions';

class GoogleList extends Component {
  render() {
    // console.log("this.props.GoogleResults", this.props.GoogleResults);
    const data = this.props.GoogleResults;
    //if there GoogleResults on the state, fill out the component
    if(data.GoogleResults){
      let GoogleResultsOffices = data.GoogleResults.offices;
      let GoogleResultsOfficials = data.GoogleResults.officials;
      // console.log(GoogleResultsOffices, "GoogleResultsOffices");
      let GoogleResults = GoogleResultsOffices.map((Office, index) => {
        let key = shortid.generate();
        let profile = GoogleResultsOfficials[Office.officialIndices[0]] || "N/A"
        let title = Office.name || "N/A"
        let name = profile.name || "N/A"
        let party = profile.party || "N/A"
        let phoneNum = profile.phones[0] || "N/A"

        // // grab news articles for each result
        // this.props.search(name);

        return (
          <Box key={key} >
            <ListView
              title={title}
              name={name}
              party={party}
              phone={phoneNum}
            />
          </Box>
        );
      });

      return (
        <Columns>
          {GoogleResults}
        </Columns>
      );
    }
    // if the GoogleResults property doesn't exist, return an empty div
    return <div />;
  }
}


function mapStateToProps(state) {
  return {
    GoogleResults: state.GoogleResults
  };
}


// export default connect(mapStateToProps, { search })(GoogleList);
export default connect(mapStateToProps)(GoogleList);
