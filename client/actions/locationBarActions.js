import Axios from 'axios';

export default function (location) {
  const request = Axios.get(`/api/representatives/${location}`);
  return {
    type: 'Location_Search',
    payload: request
  };
}
