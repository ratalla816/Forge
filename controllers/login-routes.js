const router = require('express').Router();

// router.get('/login', (req, res) => {
//     res.render('loginpage', { layout: 'signinup' });
// });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('loginpage', { layout: 'signinup' })
  });
  
  module.exports = router;