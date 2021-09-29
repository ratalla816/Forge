const router = require('express').Router();
const apiRoutes = require('./api/');
const loginRoutes = require('./login-routes.js');
const homeRoutes = require('./home-routes.js');
const peopleRoutes = require('./people-routes.js');
const adminRoutes = require('./admin-routes.js');
const profileRoutes = require('./profile-routes.js');
const reviewRoutes = require('./review-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/people', peopleRoutes);
router.use('/admin', adminRoutes);
router.use('/profile', profileRoutes);
router.use('/review', reviewRoutes);

module.exports = router;