import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//
// const defaultMapConfig = {};
//
// class MapWrapper extends Component {
//   componentDidMount() {
//     const mapOptions = {
//       zoom: 10,
//         center: new google.maps.LatLng(40.7058253, -74.1180872) // Filled in with coordinates for the center of NYC
//       // mapTypeControl: false,
//       // fullscreenControl: false,
//       // zoomControlOptions: {
//       //   position: google.maps.ControlPosition.TOP_RIGHT
//       // },
//       // streetViewControlOptions: {
//       //   position: google.maps.ControlPosition.TOP_RIGHT
//       // }
//     };
//     const node = ReactDOM.findDOMNode(this.refs.map);
//     this.map = new google.maps.Map(node, mapOptions);
//   }
//
//   render() {
//     // TODO
//   }
// }
//
// function mapStateToProps(state) {
//   return {
//     // TODO
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   // TODO
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
//

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class SimpleMap extends Component {
  render() {

    return (
      <section style={{height: "100%"}}>
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={9}
              defaultCenter={{ lat: 40.7058253, lng: -74.1180872 }}
            />
          }
        />
      </section>
    );
  }
}

export default SimpleMap;
