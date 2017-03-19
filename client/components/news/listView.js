import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import search from '../actions/politicianSearchActions';
import Layer from 'grommet/components/Layer';
import Spinning from 'grommet/components/icons/Spinning';

import { nytimes, bingNews } from '../../actions/politicianSearchActions';


import NewsList from './newsList';

// this is more of a 'ListViewItem'
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      visible: false
    };
  }
  componentWillReceiveProps(nextProps) {
    // check if 'news' props is defined for update conditional
    const { name, News } = this.props;
    if (nextProps.News[name]) {
      // console.log(`recieved news for ${this.props.name}`);
      if (!this.state.searched) this.setState({ searched: true });
    }
  }

  handleClick() {
    // console.log('clicky clicky', this.props.name);
    this.setState({ visible: !this.state.visible });

    if (!this.state.searched) {
      // console.log(`searching for ${this.props.name}`);
      this.props.bingNews(this.props.name);
      this.props.nytimes(this.props.name);
    }
  }

  render() {
    const { name, title, party, phone } = this.props;
    return (
      <div>
        <br />
        <span>Name</span>
        <h3>{ name }</h3>
        <span>Title</span>
        <h3>{ title }</h3>
        <span>Party</span>
        <h3>{ party }</h3>
        <span>Phone</span>
        <h3>{ phone }</h3>
        <button onClick={() => this.handleClick()}>In the news...</button>
        { this.state.visible ?
          (<Layer
            closer={true}
            onClose={() => this.setState({ visible: false })}
          >
            { this.state.searched ? (
              <NewsList news={this.props.News[this.props.name]} />
              ) : (
                <Spinning
                  size="huge"
                />
              )
            }
          </Layer>
          ) : (
            <div />
          )
        }
      </div>
    );
  }
}

ListView.propTypes = {
  name: React.PropTypes.string,
  title: React.PropTypes.string,
  party: React.PropTypes.string,
  phone: React.PropTypes.string
};

ListView.defaultProps = {
  name: 'n/a',
  title: 'n/a',
  party: 'n/a',
  phone: 'n/a'
};

function mapStateToProps(state) {
  return {
    News: state.News
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nytimes, bingNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
// export default ListView;
