const { Router } = require('express');
const { Quote } = require('../models/Quote.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const quote = await Quote.insert(req.body);
    if (req.body.character_id) res.json(quote);
  } catch (e) {
    next(e);
  }
});
