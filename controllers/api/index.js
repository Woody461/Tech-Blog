const express = require('express');
const router = express.Router();

// Import your custom routes instead of the placeholders below
const customUserRoutes = require('./custom-user-routes');
const customPostRoutes = require('./custom-post-routes');
const customCommentRoutes = require('./custom-comment-routes');

// Use your custom routes with appropriate endpoints
router.use('/custom-user', customUserRoutes);
router.use('/custom-post', customPostRoutes);
router.use('/custom-comment', customCommentRoutes);

module.exports = router;