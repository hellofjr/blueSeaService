let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.type('html');
  res.sendFile("/Users/mac/Desktop/nodePro/myNodePro/views/index.html")
  // res.render('index');
});

module.exports = router;
