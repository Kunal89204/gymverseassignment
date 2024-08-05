const express = require("express")
const router = express.Router()

const {userAuth, getUsers} = require('../controllers/user.controllers')

router.post('/auth', userAuth)
router.get('/getUsers', getUsers)


module.exports = router;