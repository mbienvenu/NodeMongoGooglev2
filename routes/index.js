const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('/middleware/auth')

// desc: Login/landing pages
// GET /

router.get('/', ensureGuest ,  (req, res) => {
    res.render('login', {layout: 'login'} )
})


//Dashboards page
router.get('/dashboard', ensureAuth ,(req, res) => {
    res.render('dashboard')
})



module.exports = router 