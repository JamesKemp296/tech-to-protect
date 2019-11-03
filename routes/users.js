const router = require('express').Router()
const User = require('../User.model')

// get method
// this method fetches all available data in our database
router.get('/getUser', (req, res) => {
    User.find((err, user) => {
        if (err) return `this is the error ${err}`
        return res.json({ user })
    })
})

//create method
router.post('/putUser', (req, res) => {
    const userId = req.body;
    const user = new User(userId)
    // user.id = id;
    user.save((err) => {
        if (err) return `This is the error ${err}`
        return res.json({ user })
    })
})

module.exports = router