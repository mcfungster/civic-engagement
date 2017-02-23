const rp = require('request-promise');
const param = require('jquery-param');

const bingNewsApiKey = process.env.BINGNEWS_APIKEY;

const articleSearchURL = 'https://api.cognitive.microsoft.com/bing/v5.0/news/search';

const bingNews = {
  getArticles: (req, res) => {
    const query = req.params.name;
    const options = {
      q: query,
      count: 20,
      mkt: 'en-us',
      safeSearch: 'Moderate'
    };
    const config = {
      url: `${articleSearchURL}?${param(options)}`,
      headers: {
        'Ocp-Apim-Subscription-Key': bingNewsApiKey
      }
    };
    rp.get(config)
    .then((data) => {
      const articles = JSON.parse(data).value.map((article, index) => {
        // console.log(index, article.image);
        const thumb = (article.image) ?
          (article.image.thumbnail) ?
            article.image.thumbnail.contentUrl : null : null;

        return {
          thumb,
          title: article.name,
          blurb: article.description,
          url: article.url
        };
      });
      const parsed = { articles, query, api: ['bing'] };
      res.status(200).send(parsed);
      // res.status(200).send(data);
    })
    .catch(err => console.error(err));
  }
};

module.exports = bingNews;
