import React from 'react';
import { Link, hashHistory } from 'react-router';
import Radium from 'radium';

const style = {
  display: 'inline-block',
  border: 0,
  width: '196px',
  height: '0px',
  position: 'relative',
  WebkitTransition: 'all 200ms ease-in',
  WebkitTransform: 'scale(1)',
  MsTransition: 'all 200ms ease-in',
  MsTransform: 'scale(1)',
  MozTransition: 'all 200ms ease-in',
  MozTransform: 'scale(1)',
  transition: 'all 200ms ease-in',
  transform: 'scale(1)',
  ':hover': {
    boxShadow: '0px 0px 150px #000000',
    zIndex: 2,
    WebkitTransition: 'all 200ms ease-in',
    WebkitTransform: 'scale(1.5)',
    MsTransition: 'all 200ms ease-in',
    MsTransform: 'scale(1.5)',
    MozTransition: 'all 200ms ease-in',
    MozTransform: 'scale(1.5)',
    transition: 'all 200ms ease-in',
    transform: 'scale(1.5)'
  }
};

class HeaderIconView extends React.Component {
  //
  render() {
    return (
      <div style={style}>
        <Link to={this.props.route}>
          <img src={this.props.url} />
          {this.props.description}
        </Link>
      </div>
    );
  }
}


export default Radium(HeaderIconView);
