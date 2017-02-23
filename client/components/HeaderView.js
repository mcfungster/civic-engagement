import React, { Component } from 'react';
import HeaderIconView from './HeaderIconView';

class HeaderView extends Component {

  render() {
    console.log('this.props.headerIcons', this.props.headerIcons);
    const headerIcons = this.props.headerIcons;
    if (headerIcons) {
      let header = headerIcons.map((url, index) => {
        return (<HeaderIconView url={url[0]} description={url[1]} route ={url[2]}/>);
      });

      return (
        <div className="header" style={{ width: '1000px', align: 'center' }}>
          {header}
        </div>
      );
    }
    // if the header property doesn't exist, return an empty div
    return <div />;
  }
}


export default HeaderView;
