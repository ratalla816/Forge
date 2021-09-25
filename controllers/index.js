const router = require('express').Router();

const apiRoutes = require('./api/');
const pageRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', pageRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;