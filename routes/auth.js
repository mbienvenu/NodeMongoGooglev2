const express = require('express');
const passport = require('passport');
const router = express.Router();

// desc: Auth with Google
// GET /auth/google

router.get('/google',passport.authenticate('google', {scope: ['profile']}) )


//Dashboards page
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/' }), (req, res) => {res.redirect('/dashboard')});


//@desc Logout user
//@route /auth/logout

router.get('/logout', (req, res)=> {
    //req.logout();
    //res.redirect('/');
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
        


})


module.exports = router 