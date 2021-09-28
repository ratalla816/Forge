const router = require('express').Router();
const apiRoutes = require('./api/');
const loginRoutes = require('./login-routes.js');
const homeRoutes = require('./home-routes.js');
const adminRoutes = require('./admin-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/admin', adminRoutes);

module.exports = router;