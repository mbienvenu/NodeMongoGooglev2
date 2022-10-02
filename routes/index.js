const express = require('express');
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const router = express.Router();


// desc: Login/landing pages
// GET /

router.get('/', ensureGuest ,  (req, res) => {
    res.render('login', {layout: 'login'} )
})


//Dashboards page
router.get('/dashboard', ensureAuth ,(req, res) => {
    console.log(req.user);
    res.render('dashboard')
})



module.exports = router 