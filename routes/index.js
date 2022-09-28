const express = require('express');
const router = express.Router();

// desc: Login/landing pages
// GET /

router.get('/', (req, res) => {
    res.render('login', {layout: 'login'} )
})


//Dashboards page
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})



module.exports = router 