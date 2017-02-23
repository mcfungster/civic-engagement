export default function locBar(state = {}, action) {
  switch (action.type) {
    case 'Location_Search':
      console.log('inside the locBarReducer');
      console.log('action: ', action);
      console.log(action.payload.data);
      return { ...state, GoogleResults: action.payload.data };
    default:
      return state;
  }
}
//
// export default function locBar(state = '', action) {
//   switch (action.type) {
//     case 'Location_Search':
//       console.log('inside the locBarReducer');
//       console.log('action: ', action);
//       console.log(action.payload.data);
//       return { ...state, GoogleResults: action.payload.data };
//     default:
//       return state;
//   }
// }
