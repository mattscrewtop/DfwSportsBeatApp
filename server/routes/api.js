const express = require('express');
const actions = require('../methods/actions');

const router = express.Router();


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.post('/sendmail', actions.sendMail);

module.exports = router;