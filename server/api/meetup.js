const rp = require('request-promise');
const param = require('jquery-param');
const Google = require('./google');

const meetupApiKey = process.env.MEETUP_APIKEY;

const eventSearchURL = 'https://api.meetup.com/2/open_events';

const meetup = {
  getEvents: (req, res) => {
    const location = req.params.location;

    Google.geocode(location || 10001)
    .catch(err => console.error(err))
    .then((geoInfo) => {
      // console.log(geoInfo[0].geometry.location);
      // console.log(Object.keys(geoInfo));
      const { lat, lng } = geoInfo[0].geometry.location;
      return { lat, lng };
    })
    .then((coords) => {
      // console.log(coords);
      const options = {
        key: meetupApiKey,
        lat: coords.lat,
        lon: coords.lng,
        category: 13
      };
      rp.get(`${eventSearchURL}?${param(options)}`)
      .catch(err => console.error(err))
      .then((data) => res.status(200).send(data));
    });
  }
};

module.exports = meetup;
