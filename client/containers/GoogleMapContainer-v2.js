import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import meetupSearch from '../actions/meetupSearchActions';
// import sampleData from '../reference/markerDummyData';
// import meetupData from '../reference/meetupDummyData';

class MapContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      defaultCenter: {
        lat: 49,
        lng: -105
      },
      windowPosition: null,
      showInfoWindow: false,
      current_event: ''
    };
    this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
  }
  componentWillMount() {
    this.props.meetupSearch('1216 Broadway, New York, NY');
  }
  // componentWillMount() {
  //   this.context.store.subscribe(() => {
  //     const state = this.context.store.getState();
  //     this.setState({
  //       windowPosition: state.position,
  //       showInfoWindow: state.showInfoWindow,
  //       current_name: state.key
  //     });
  //   });
  // }
  toggleInfoWindow(event, loc) {
    if (loc === null) {
      this.setState({ windowPosition: null });
      return;
    }
    const markerLoc = {
      lat: loc.latLng.lat(),
      lng: loc.latLng.lng()
    };
    this.setState({
      current_event: event,
      windowPosition: markerLoc,
      showInfoWindow: true
    });
  }

  render() {
    const { results } = this.props.MeetupEvents;
    console.log('Google Maps Line 53   ', this.props);
    let markers = [];
    if (results) {
      markers = results.map((event, index) => {
        const venueLat = event.venue ? event.venue.lat : event.group.group_lat;
        const venueLng = event.venue ? event.venue.lon : event.group.group_lon;
        return (
          <Marker
            position={{ lat: venueLat, lng: venueLng }}
            key={event.id}
            index={index}
            onClick={this.toggleInfoWindow.bind(this, event)}
          />
        );
      });
    }
    return (
      <section style={{ height: '100%', width: '100%' }}>
        <GoogleMapLoader
          containerElement={
            <div style={{ height: '100%' }} />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => { console.log(map); }}
              defaultZoom={9}
              defaultCenter={{ lat: 40.7058253, lng: -74.1180872 }}
            >
              { markers }
              {
                this.state.showInfoWindow &&
                <InfoWindow
                  position={this.state.windowPosition}
                  onCloseclick={(e) => { this.setState({ showInfoWindow: false }); }}
                  options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
                >
                  {
                    `<h2>${this.state.current_event.name}</h2>
                    <h4>Hosted By: ${this.state.current_event.group.name}</h4>
                    <h4>When: ${new Date(this.state.current_event.time)}</h4>
                    <p>${this.state.current_event.description}</p>`
                  }
                </InfoWindow>
              }
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    MeetupEvents: state.Meetup.eventResults
  };
}

export default connect(mapStateToProps, { meetupSearch })(MapContainer);
