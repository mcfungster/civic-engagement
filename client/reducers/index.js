import { combineReducers } from 'redux';
import locBarReducer from './locBarReducer';
import newsSearchReducer from './politicianSearchReducer';
// import politicianSearchReducer from './politicianSearchReducer'; // this is an awful name
import propublicaReducer from './propublicaReducer';
import eventsReducer from './eventsSearchReducer';
import eventsMapReducer from './eventsMapReducer';
import setLogin from './setLogin';


const rootReducer = combineReducers({
  GoogleResults: locBarReducer,
  News: newsSearchReducer,
  // News: politicianSearchReducer, // ugh this name is so bad
  Propublica: propublicaReducer,
  Events: eventsReducer,
  EventsMap: eventsMapReducer,
  LoggedIn: setLogin
});

export default rootReducer;
