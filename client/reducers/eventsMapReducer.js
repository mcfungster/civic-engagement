const initialState = {
  windowPosition: null,
  showInfoWindow: false,
  current_event: ''
};

export default function eventsMapReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_INFOWINDOW':
      console.log('---hit Toogle Info Window in meetupMapReducer---');
      if (action.data.current_event) {
        return { ...state,
          windowPosition: action.data.windowPosition,
          showInfoWindow: action.data.showInfoWindow,
          current_event: action.data.current_event
        };
      }
      return { ...state, windowPosition: action.data.windowPosition };
    case 'CLOSE_INFOWINDOW':
      console.log('---hit CLOSE Info Window in meetupMapReducer---');
      return { ...state, showInfoWindow: false };
    default:
      return state;
  }
}
