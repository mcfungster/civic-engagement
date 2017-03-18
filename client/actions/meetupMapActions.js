export function toggleInfoWindow(event, loc) {
  let update = {};
  if (loc === null) {
    update.windowPosition = null;
  } else {
    const markerLoc = {
      lat: loc.latLng.lat(),
      lng: loc.latLng.lng()
    };
    update = {
      current_event: event,
      windowPosition: markerLoc,
      showInfoWindow: true
    };
  }
  return {
    type: 'TOGGLE_INFOWINDOW',
    data: update
  };
}

export function closeInfoWindow() {
  return {
    type: 'CLOSE_INFOWINDOW'
  };
}
