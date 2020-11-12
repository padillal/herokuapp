var express = require('express');
var router = express.Router();

const content = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: content , title: 'PROJECT HOME PAGE', header: 'CONTENT LIST' });
});

/*GET new page*/
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'NEW PAGE', header: 'CONTENT LIST' });
});

router.post('/new', function(req, res, next) {
  let cont = req.body;
  let textcont = cont.text;
  let usercont = cont.user;

  let newmessage = {
    text:textcont,
    user:usercont,
    added:new Date()
  }

  content.push(newmessage);
  res.redirect('/');

});

router.get('/delete',function(req,res,next){
  content.pop();
  res.render('index', { messages: content , title: 'DELETE PAGE', header: 'CONTENT LIST' })
});

module.exports = router;
