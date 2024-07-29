var express = require('express');
var router = express.Router();
const User = require("./users")

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    const data  = await User.find()
    res.json(data)
  } catch (error) {
    console.log(error)
  }
})


router.post("/auth", async (req, res) => {
  try {
    const { authId, fullname, email } = req.body;

    // Validate request body
    if (!authId || !email) {
      return res.status(400).json({ message: 'authId and email are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ authId });

    if (existingUser) {
      // User exists, handle login logic here
      return res.status(200).json({
        message: 'User logged in successfully',
        user: existingUser,
      });
    } else {
      // User does not exist, handle registration logic here
      const newUser = new User({
        authId,
        fullname: fullname || 'Anonymous', // Default value if fullname is not provided
        email,
      });

      await newUser.save();

      return res.status(201).json({
        message: 'User registered successfully',
        user: newUser,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
