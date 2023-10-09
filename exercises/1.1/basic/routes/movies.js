var express = require('express');
var router = express.Router();

const PROGRAMME = [
  {
    id: 1,
    title: 'Joker',
    duration: 122,
    budget: 150000000,
    link:'https://www.imdb.com/title/tt7286456/',
  },
  {
    id: 2,
    title: 'Her',
    duration: 126,
    budget: 23000000,
    link:'h/ttps:/www.imdb.com/title/tt1798709/?ref_=fn_al_tt_1',
  },
  {
    id: 3,
    title: 'Le Chat Potté 2 : la dernière quête',
    duration: 100,
    budget: 85000000,
    link:'https://www.imdb.com/title/tt3915174/',
  }
];

// Read all the movies from the menu
router.get('/movies', (req, res, next) => {
  console.log('GET /movies');
  res.json(PROGRAMME);
});

module.exports = router;
