const rp = require('request-promise');
const param = require('jquery-param');

const propublicaApiKey = process.env.PROPUBLICA_APIKEY;
const SESSION = 115;
const headers = { 'X-API-Key': propublicaApiKey };

const BASE_URL = 'https://api.propublica.org/congress/v1';

const propublica = {

  memberList: (req, res) => {
    console.log('test');
    const chamber = req.params.chamber;
    const url = `${BASE_URL}/${SESSION}/${chamber}/members.json`;
    const config = { url, headers };

    rp.get(config)
    .then((data) => {
      // PARSE THE DATA AS NECESSARY
      // const parsed = { articles, query, api: 'bing' };
      // res.status(200).send(parsed);
      res.status(200).send(data);
    })
    .catch(err => console.error(err));
  },

  memberBio: (req, res) => {
    console.log('test');
    const id = req.params.id;
    console.log(id);
    const url = `${BASE_URL}/members/${id}.json`;
    // const url = 'https://api.propublica.org/congress/v1/members/K000388.json';
    const config = { url, headers };

    rp.get(config)
    .then((data) => {
      // PARSE THE DATA AS NECESSARY
      // const parsed = { articles, query, api: 'bing' };
      // res.status(200).send(parsed);
      res.status(200).send(data);
    })
    .catch(err => console.error(err));
  },

  memberVotes: (req, res) => {
    console.log('test');
    const id = req.params.id;
    console.log(id);
    const url = `${BASE_URL}/members/${id}/votes.json`;
    const config = { url, headers };

    rp.get(config)
    .then((data) => {
      // PARSE THE DATA AS NECESSARY
      // const parsed = { articles, query, api: 'bing' };
      // res.status(200).send(parsed);
      res.status(200).send(data);
    })
    .catch(err => console.error(err));
  },

  memberBills: (req, res) => {
    console.log('test');
    const id = req.params.id;
    console.log(id);
    const url = `${BASE_URL}/members/${id}/bills/cosponsored.json`;
    const config = { url, headers };

    rp.get(config)
    .then((data) => {
      // PARSE THE DATA AS NECESSARY
      // const parsed = { articles, query, api: 'bing' };
      // res.status(200).send(parsed);
      res.status(200).send(data);
    })
    .catch(err => console.error(err));
  },


};

module.exports = propublica;
