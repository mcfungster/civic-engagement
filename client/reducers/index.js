import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import politicianSearchReducer from './politicianSearchReducer';
import meetupReducer from './meetupSearchReducer';

const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: politicianSearchReducer,
  Meetup: meetupReducer
});

export default rootReducer;
