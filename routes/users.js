var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req,res,next){
  const {email,password}= req.body
  console.log(email)
  if( email!==undefined &&  password!==undefined){
    return  res.status(200).send({
      token:'698482uffhkls',
      isAuthorized:true
    })
  }else {
    return res.status(404).send({
      isAuthorized:false,
    })
  }
})

module.exports = router;
