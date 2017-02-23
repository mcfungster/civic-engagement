import Axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export function bingNews(name) {
  console.log('in PoliticianSearchActions bing:', name);
  const request = Axios.get(`${ROOT_URL}/bingNews/${name}`);
  return {
    type: 'Politician_Search_bing',
    payload: request
  };
}

export function nytimes(name) {
  console.log('in PoliticianSearchActions nytimes:', name);
  const request = Axios.get(`${ROOT_URL}/nytimes/${name}`);
  return {
    type: 'Politician_Search_nytimes',
    payload: request
  };
}

export function bio(name) {
  const request = Axios.get(`${ROOT_URL}/repBios/${name}`);
  return {
    type: 'Politician_Search_bio',
    payload: request
  };
}