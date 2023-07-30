const express = require('express');
const router = express.Router();
const { CustomPost } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/create-post', withAuth, async (req, res) => {
  const postDetails = req.body;

  try {
    const newPost = await CustomPost.create({
      ...postDetails,
      userId: req.session.userId
    });

    res.json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create the post.' });
  }
});

router.put('/:id/update-post', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const [affectedRows] = await CustomPost.update(req.body, {
      where: {
        id: postId
      }
    });

    if (affectedRows > 0) {
      res.status(200).json({ message: 'Post updated successfully.' });
    } else {
      res.status(404).json({ error: 'Post not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update the post.' });
  }
});

router.delete('/:id/delete-post', withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const affectedRows = await CustomPost.destroy({
      where: {
        id: postId
      }
    });

    if (affectedRows > 0) {
      res.status(200).json({ message: 'Post deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Post not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the post.' });
  }
});

module.exports = router;
