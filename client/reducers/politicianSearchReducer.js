export default function search(state = {}, action) {
  switch (action.type) {
    case 'Politician_Search_bing': { // bing News search
      console.log('Politican_Search bing dispatched and received');
      const { data } = action.payload;
      const { query, api } = action.payload.data;

      if (state[query]) {
        data.api = data.api.concat(state[query].api);
        data.articles = data.articles.concat(state[query].articles)
      }
      return { ...state, [query]: data };
    }
    case 'Politician_Search_nytimes': {
      console.log('Politican_Search nytimes dispatched and received');
      const { data } = action.payload;
      const { query } = action.payload.data;
      
      if (state[query]) {
        data.api = data.api.concat(state[query].api);
        data.articles = data.articles.concat(state[query].articles)
      }
      return { ...state, [query]: data };
    }
    default:
      return state;
  }
}
