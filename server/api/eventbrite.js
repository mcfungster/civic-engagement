const rp = require('request-promise');
const param = require('jquery-param');
const Google = require('./google');

const eventbriteApiKey = process.env.EVENTBRITE_APIKEY;

const eventSearchURL = 'https://www.eventbriteapi.com/v3/events/search/';

const eventbrite = {
  getEvents: (req, res) => {
    const location = req.params.location;

    Google.geocode(location || 10001)
    .catch(err => console.error(err))
    .then((geoInfo) => {
      const { lat, lng } = geoInfo[0].geometry.location;
      return { lat, lng };
    })
    .then((coords) => {
      const options = {
        token: eventbriteApiKey,
        categories: 112,
        location: {
          within: '10mi',
          latitude: coords.lat,
          longitude: coords.lng
        }
          
      };
      rp.get(`${eventSearchURL}?${param(options)}`)
      .catch(err => console.error(err))
      .then((data) => res.status(200).send(data));
    });
  }
};

module.exports = eventbrite;
