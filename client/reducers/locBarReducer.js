import _ from 'lodash';

export default function locBar(state = {}, action) {
  switch (action.type) {
    case 'Location_Search': {
      const { offices, officials } = action.payload.data;

      const reps = offices
        .filter(office => office.name.slice(0, 13) === 'United States')
        .reduce((acc, index) => acc.concat(index.officialIndices), [])
        .map(i => officials[i])

      reps.forEach(rep => {
        const split = rep.name.split(' ');
        rep.name = [split[0], split[split.length - 1]].join(' ');
      });

      const district = offices
        .filter(office =>
          office.name.slice(0, 19) === 'United States House')[0].name.slice(39);

      return {
        ...state,
        reps,
        district,
        GoogleResults: action.payload.data
      };
    }
    default:
      return state;
  }
}
