const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');


const {
    getAllAds,
    setAd,
    getUserAds
} = require('../controllers/adController');

router.route('/').get(getAllAds).post(protect, setAd);
router.route('/users').get(protect, getUserAds);


module.exports = router