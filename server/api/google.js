const request = require('request');
const Promise = require('bluebird');

const civApiKey = process.env.GOOGLE_CIV_APIKEY;
const mapsApiKey = process.env.GOOGLE_MAPS_APIKEY;
const repApiURL = 'https://www.googleapis.com/civicinfo/v2/representatives';
const voterApiURL = 'https://www.googleapis.com/civicinfo/v2/voterinfo';

// geocoding API key
const googleMapsClient = require('@google/maps').createClient({
  key: mapsApiKey
});

const Google = {
  // Google API too representativeInfoQuery endpoint
  getReps: (req, res) => {
    const address = req.params.address;
    request(
      {
        method: 'GET',
        uri: `${repApiURL}?key=${civApiKey}&address=${address}`,
        gzip: true
      },
      (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          res.status(200).send(body);
        }
      });
  },
  // Google API too voterInfoQuery endpoint for election related data
  getVoterInfo: (req, res) => {
    const address = req.params.address;
    request(
      {
        method: 'GET',
        uri: `${voterApiURL}?key=${civApiKey}&address=${address}`,
        gzip: true
      },
      (error, response, body) => {
        let resBody = JSON.parse(body);
        if (error) {
          console.error(error);
        } else if (response.statusCode === 400 && resBody.error.message === 'Election unknown') {
          res.status(200).send('No Election Data');
        } else {
          res.status(200).send(body);
        }
      }
    );
  },

  // Geocode an address or zipcode - more of a helper function
  // not super useful as an API call
  geocode: (location = 10001) => {
    const geocoder = Promise.promisify(googleMapsClient.geocode);
    // returns a promise!
    return geocoder({ address: location })
      .then(response => response.json.results)
      .catch(err => console.error(err));
  }
};

module.exports = Google;
