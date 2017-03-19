import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { toggleInfoWindow, closeInfoWindow } from '../../actions/meetupMapActions';

class MapContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      defaultCenter: {
        lat: 40.746275,
        lng: -73.988249
      },
      defaultZoom: 9
    };
  }

  componentDidUpdate(prevProps) {
    console.log('In Component Did Update');
    const old = JSON.stringify(prevProps.Events);
    const current = JSON.stringify(this.props.Events);
    if (old === current) { return; }
    this._fitTheBounds();
  }

  _fitTheBounds() {
    const bounds = new window.google.maps.LatLngBounds();
    const results = this.props.Events;
    const map = this.map;
    results.forEach((event) => {
      let vLat = event.venue ? event.venue.lat || event.group.group_lat : event.group.group_lat;
      let vLng = event.venue ? event.venue.lon || event.group.group_lon : event.group.group_lon;
      vLat = Number(vLat);
      vLng = Number(vLng);
      bounds.extend(new window.google.maps.LatLng(vLat, vLng));
    });
    map.fitBounds(bounds);
    map.panToBounds(bounds);
    const currentZoom = map.getZoom();
    if (currentZoom > 15) {
      map.setZoom(15);
      setTimeout(() => {
        this.setState({ defaultZoom: 15 });
      }, 100);
    }
  }

  render() {
    const results = this.props.Events;
    let markers = [];
    if (results) {
      markers = results.map((event, index) => {
        const vLat = event.venue ? event.venue.lat || event.group.group_lat : event.group.group_lat;
        const vLng = event.venue ? event.venue.lon || event.group.group_lon : event.group.group_lon;
        return (
          <Marker
            position={{ lat: vLat, lng: vLng }}
            key={event.id}
            index={index}
            onClick={this.props.toggleInfoWindow.bind(this, event)}
          />
        );
      });
    }
    return (
      <section className="meetup-map" style={{ height: '100%', width: '100%' }}>
        <GoogleMapLoader
          containerElement={
            <div style={{ height: '100%' }} />
          }
          googleMapElement={
            <GoogleMap
              ref={(comp) => { this.map = comp; }}
              defaultZoom={this.state.defaultZoom}
              defaultCenter={this.state.defaultCenter}
            >
              { markers }
              {
                this.props.InfoWindow.showInfoWindow &&
                <InfoWindow
                  position={this.props.InfoWindow.windowPosition}
                  onCloseclick={this.props.closeInfoWindow}
                  options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
                >
                  {
                    `<h2>${this.props.InfoWindow.current_event.name}</h2>
                    <h4>Hosted By: ${this.props.InfoWindow.current_event.group.name}</h4>
                    <h4>When: ${new Date(this.props.InfoWindow.current_event.time)}</h4>
                    <p>${this.props.InfoWindow.current_event.description}</p>`
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

MapContainer.propTypes = {
  // Events: PropTypes.arrayOf(PropTypes.object),
  toggleInfoWindow: PropTypes.func,
  closeInfoWindow: PropTypes.func,
  InfoWindow: PropTypes.objectOf(PropTypes.object)
};

MapContainer.defaultProps = {
  // Events: 'n/a',
  toggleInfoWindow: 'n/a',
  closeInfoWindow: 'n/a',
  InfoWindow: 'n/a'
};

function mapStateToProps(state) {
  return {
    Events: state.Events.eventResults.results,
    InfoWindow: state.EventsMap
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleInfoWindow, closeInfoWindow }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
