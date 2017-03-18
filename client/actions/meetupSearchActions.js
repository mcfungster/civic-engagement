import Axios from 'axios';

export default function (location) {
  if (location) {
    const request = Axios.get(`/api/meetup/${location}`);
    return {
      type: 'Meetup_Search',
      payload: request
    };
  }
}
