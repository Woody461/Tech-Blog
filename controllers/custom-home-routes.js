const express = require('express');
const router = express.Router();
const { CustomPost, CustomComment, CustomUser } = require('../models');

// Get all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await CustomPost.findAll({
      include: [CustomUser],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts.' });
  }
});

// Get a single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await CustomPost.findByPk(req.params.id, {
      include: [
        CustomUser,
        {
          model: CustomComment,
          include: [CustomUser],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).json({ error: 'Post not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch the post.' });
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
});

module.exports = router;