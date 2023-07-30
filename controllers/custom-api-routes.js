const express = require('express');
const router = express.Router();

// Import any required models or modules here
const db = require('../models'); // Assuming you have your Sequelize models defined in the 'models' folder

// Define your custom API routes here
router.get('/api/posts', async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ['username'],
        },
        {
          model: db.Comment,
          include: [{ model: db.User, attributes: ['username'] }],
        },
      ],
    });

    // Return the posts as JSON response
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

router.post('/api/posts', async (req, res) => {
  try {
    // Create a new post in the database
    const newPost = await db.Post.create({
      title: req.body.title,
      body: req.body.body,
      UserId: req.session.userId, // Assuming you have the authenticated user's ID in the session
    });

    // Return the newly created post as JSON response
    res.json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Failed to create post' });
  }
});

// Add more custom API routes as needed...

module.exports = router;
