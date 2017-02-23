import Axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export default function (location) {
  const request = Axios.get(`${ROOT_URL}/meetup/${location}`);
  return {
    type: 'Location_Search',
    payload: request
  };
}
