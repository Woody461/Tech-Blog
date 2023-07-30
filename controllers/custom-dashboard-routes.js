const express = require('express');
const router = express.Router();
const { CustomPost } = require('../models');
const withAuth = require('../utils/auth');

router.get('/all-posts', withAuth, async (req, res) => {
  try {
    const postData = await CustomPost.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('/login');
  }
});

router.get('/new-post', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit-post/:id', withAuth, async (req, res) => {
  try {
    const postData = await CustomPost.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).json({ message: 'Post not found.' });
    }
  } catch (err) {
    res.redirect('/login');
  }
});

module.exports = router;
