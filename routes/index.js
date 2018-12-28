var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile("/Users/mac/Desktop/nodePro/myNodePro/views/index.html" )
});

module.exports = router;
