const houseID = require('../id_tables/house');
const senateID = require('../id_tables/senate');

const rp = require('request-promise');

const propublicaApiKey = process.env.PROPUBLICA_APIKEY;
const SESSION = 115;
const headers = {
  'X-API-Key': propublicaApiKey
};

const BASE_URL = 'https://api.propublica.org/congress/v1';

const propublica = {

  memberList: (req, res) => {
    const chamber = req.params.chamber;
    const url = `${BASE_URL}/${SESSION}/${chamber}/members.json`;
    const config = { url, headers };

    rp.get(config)
    .then((data) => {

      /* this was used to generate the id-lookup tables
       * otherwise this is just a key-ed route into the propublica API */
      // parsed = {};
      // JSON.parse(data).results[0].members
      //   .forEach(member => {
      //     const { id, first_name, middle_name, last_name } = member;
      //     const name1 = [first_name, last_name].join(' ').split('  ').join(' ');
      //     const name2 = [first_name, middle_name, last_name].join(' ').split('  ').join(' ');
      //     parsed[name1] = id;
      //     parsed[name2] = id;
      //   });
      // res.status(200).send(parsed);
      
      res.status(200).send(data);
    })
    .catch(err => console.error(err));
  },

  memberBio: (req, res) => {
    const name = req.params.name;
    const id = senateID[name] || houseID[name];

    const url = `${BASE_URL}/members/${id}.json`;
    const config = { url, headers };

    rp.get(config)
    .then((data) => {
      // PARSE THE DATA AS NECESSARY
      const bio = JSON.parse(data).results[0];
      const parsed = { bio, name };
      res.status(200).send(parsed);
      // res.status(200).send({ data, name });
    })
    .catch(err => console.error(err));
  },

  memberVotes: (req, res) => {
    const name = req.params.name;
    const id = senateID[name] || houseID[name];

    const url = `${BASE_URL}/members/${id}/votes.json`;
    const config = { url, headers };

    rp.get(config)
    .then((data) => {
      // PARSE THE DATA AS NECESSARY
      const votes = JSON.parse(data).results[0];
      const parsed = { votes, name };
      res.status(200).send(parsed);
      // res.status(200).send(data);
    })
    .catch(err => console.error(err));
  },

  memberBills: (req, res) => {
    const name = req.params.name;
    const id = senateID[name] || houseID[name];

    const url = `${BASE_URL}/members/${id}/bills/cosponsored.json`;
    const config = { url, headers };

    rp.get(config)
    .then((data) => {
      // PARSE THE DATA AS NECESSARY
      const bills = JSON.parse(data).results[0];
      const parsed = { bills, name };
      res.status(200).send(parsed);
      // res.status(200).send(data);
    })
    .catch(err => console.error(err));
  }
};

module.exports = propublica;
