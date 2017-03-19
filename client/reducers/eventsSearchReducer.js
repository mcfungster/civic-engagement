export default function eventsReducer(state = { eventResults: [] }, action) {
  switch (action.type) {
    case 'Meetup_Search':
      // console.log('hit meetupReducer');
      return { ...state, eventResults: action.payload.data };
    default:
      return state;
  }
}
