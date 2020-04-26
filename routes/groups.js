var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let groups = await db.Groups.findAll({attributes: ['id','name']});
    res.json( {status: "ok", groups} );
  } catch (error) {
    res.json( {status: 'error', error: error.message} );
  }
});

module.exports = router;
