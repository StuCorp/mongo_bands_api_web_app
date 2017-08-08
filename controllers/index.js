var express = require('express');
var router = express.Router();
var path = require('path');

var bandsQuery = require('../client/db/bandsQuery');
var query = new bandsQuery(); 

router.use('/api/bands', require('./bands'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/about', function(req, res){
  // res.json({data: "Fuck this!"});
    query.all(function(results){
      res.json(results);
    })
  });

module.exports = router;