const express = require('express');
const router = express.Router();
const {
  getCities,
  getCityById,
  addCity,
  updateCity,
  deleteCity,
} = require('../controllers/cities');

router.get('/', getCities);
router.get('/:id', getCityById);
router.post('/', addCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

module.exports = router;