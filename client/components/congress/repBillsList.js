import _ from 'lodash';
import shortid from 'shortid';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { bio as search } from '../../actions/politicianSearchActions';

class RepBillsList extends Component {
  constructor(props) {
    super(props);

    if (props.rep && props.rep.bills) {
      const { rep } = props;
      const { bills } = rep;
    }

    // console.log('repBillsList! rep: ', rep, 'bills: ', bills);
  }

  render() {
    return <div>rep bills list: nothing!</div>;
  }
}

function mapStateToProps(state) {
  return {
    district: state.GoogleResults.district
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RepBillsList);
// export default RepBillsList;
