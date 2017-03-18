import Axios from 'axios';


export default function top20Search(category, cycle) {
  const request = Axios.get(`/api/propublica/top20/${cycle.value}/${category.value}`);

  return {
    type: 'Top20_Search',
    payload: request
  };
}
