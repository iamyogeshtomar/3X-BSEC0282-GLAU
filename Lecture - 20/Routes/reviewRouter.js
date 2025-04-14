const express = require(`express`);
const router = express.Router();

const { postReview } = require("../Controllers/reviewControllers");

router.post(`/products/:productId/review`, postReview);

module.exports = router;
