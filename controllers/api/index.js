const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bibleverseRoutes = require('./bibleVersesRoutes');

router.use('/users', userRoutes);
router.use('/bibleverses', bibleverseRoutes);

module.exports = router;
