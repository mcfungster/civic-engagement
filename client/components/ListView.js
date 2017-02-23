import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import search from '../actions/politicianSearchActions';
import { nytimes, bingNews } from '../actions/politicianSearchActions';

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
    // compare lengths for update conditional
    if (nextProps.News[this.props.name]){
      // console.log(`recieved news for ${this.props.name}`);
      if (!this.state.searched) this.setState({ searched: true });
    }
  }

  handleClick() {
    console.log('clicky clicky', this.props.name);
    this.setState({ visible: !this.state.visible });

    if (!this.state.searched) {
      // console.log(`searching for ${this.props.name}`);
      this.props.bingNews(this.props.name);
      this.props.nytimes(this.props.name);
    }
  }

  render() {
    return (
      <div>
        <h3>Name </h3><span className="listViewItem">{this.props.name}</span>
        <h3>Title </h3><span className="listViewItem">{this.props.title}</span>
        <h3>Party </h3><span className="listViewItem">{this.props.party}</span>
        <h3>Phone </h3><span className="listViewItem">{this.props.phone}</span>
        <br />
        <button onClick={() => this.handleClick()}>In the news...</button>
        { this.state.visible ? 
          (
          this.state.searched ? (
            <NewsList news={this.props.News[this.props.name]} />
            ) : (
              <div>loading...</div>
            )
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
