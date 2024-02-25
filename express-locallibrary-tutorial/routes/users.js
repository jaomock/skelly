var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('fuck')
  res.send('respond with a resource');
});

router.get('/cool', function(req,res,next){
  console.log('test')
  res.send('Your\'e ssso cool')
});

module.exports = router;
