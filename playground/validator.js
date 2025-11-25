const router = require('express').Router()


router.get('/validator', (req, res, next) => {
    res.status(200).json('All is Well')
})

router.post('/validator', (req, res, next) => {

})

router.get('/validator', (req, res, next) => {

})

module.exports = router