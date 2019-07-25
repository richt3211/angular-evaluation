const express = require('express');
const app = express();
const db = require('./data-service');
const bp = require('body-parser');
try {
  app.use(bp.json());

  app.post('/person/list', (req, res) => {
    res.json(db.getPeople());
  });

  app.post('/person/get', (req, res) => {
    if (req.body != null && req.body.id != null) res.json(db.getPerson(req.body.id));
    else res.json(null);
  });

  app.post('/person/update', (req, res) => {
    if (req.body != null && req.body.id != null && req.body.updates != null) res.json(db.updatePerson(req.body.id, req.body.updates));
    else res.json(null);
  });

  app.post('/card/query', (req, res) => {
    if (req.body != null && req.body.person != null) res.json(db.getPersonCards(req.body.person));
    else res.json([]);
  });

  app.post('/card/get', (req, res) => {
    if (req.body != null && req.body.id != null) res.json(db.getCard(req.body.id));
    else res.json(null);
  });

  app.post('/card/add', (req, res) => {
    if (req.body != null && req.body.person_id != null && req.body.card_number)
      res.json(db.addCard(req.body.person_id, req.body.card_number));
    else res.json(null);
  });

  app.listen(3000, () => console.log('server listening on port 3000'));
} catch (err) {
  console.error(err);
}
