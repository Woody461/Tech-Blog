const express = require('express');
const router = express.Router();

// Import your custom routes instead of the placeholders below
const customHomeRoutes = require('./custom-home-routes');
const customDashboardRoutes = require('./custom-dashboard-routes');
const customApiRoutes = require('./custom-api-routes');

// Use your custom routes with appropriate endpoints
router.use('/', customHomeRoutes);
router.use('/dashboard', customDashboardRoutes);
router.use('/api', customApiRoutes);

module.exports = router;
