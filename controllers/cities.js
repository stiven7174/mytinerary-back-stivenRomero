const City = require('../models/City');
const citiesData = require('../models/data/cities');


const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (city == null) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.json(city);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addCity = async (req, res) => {
  const city = new City(req.body);
  try {
    const newCity = await city.save();
    res.status(201).json(newCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCity = async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCity) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.json(updatedCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (city == null) {
      return res.status(404).json({ message: 'City not found' });
    }
    await city.remove();
    res.json({ message: 'City deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCities,
  getCityById,
  addCity,
  updateCity,
  deleteCity,
};
