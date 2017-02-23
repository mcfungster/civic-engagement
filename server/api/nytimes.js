const rp = require('request-promise');
const param = require('jquery-param');

const nytimesApiKey = process.env.NYTIMES_APIKEY;

const articleSearchURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const nytimes = {
  getArticles: (req, res) => {
    const query = req.params.name;
    const options = {
      'api-key': nytimesApiKey,
      q: req.params.name,
      fq: 'news_desk:("politics")',
      sort: 'newest'
    };
    rp.get(`${articleSearchURL}?${param(options)}`)
    .then((data) => {

      const articles = JSON.parse(data).response.docs.map((article, index) => {
        const thumbUrl = (article.multimedia) ?
          (article.multimedia[0]) ?
            article.multimedia[0].url : null : null;
        const thumb = `http://www.nytimes.com/${thumbUrl}` || null;

        return {
          // thumb: `http://www.nytimes.com/${thumbUrl}`,
          thumb,
          title: article.headline.main,
          blurb: article.snippet,
          url: article.web_url
        };
      });
      
      const parsed = { articles, query, api: ['nytimes'] };
      res.status(200).send(parsed);
      // res.status(200).send(data);
    })
    .catch(err => console.error(err));
  }
};

module.exports = nytimes;
