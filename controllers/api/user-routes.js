const express = require('express');
const router = express.Router();
const { CustomUser } = require('../../models');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUser = await CustomUser.create({
      username,
      password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a new user.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await CustomUser.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'Invalid credentials.' });
      return;
    }

    const validPassword = user.checkPassword(password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid credentials.' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'Failed to login.' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({ message: 'Logged out successfully.' });
    });
  } else {
    res.status(404).json({ message: 'User not logged in.' });
  }
});

module.exports = router;
