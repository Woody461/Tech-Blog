const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/post-comment', withAuth, async (req, res) => {
  try {
    // Extract the necessary data from the request body
    const { commentText } = req.body;

    // Get the authenticated user's ID from the session
    const userId = req.session.userId;

    // Create a new comment in the database
    const newComment = await Comment.create({
      commentText,
      userId,
    });

    // Return the newly created comment in the response
    res.json(newComment);
  } catch (err) {
    // If an error occurs, handle it appropriately
    res.status(500).json({ error: 'Failed to create comment.' });
  }
});

module.exports = router;
