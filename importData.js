const mongoose = require('mongoose');
const dotenv = require('dotenv');  // Asegúrate de cargar dotenv

dotenv.config();  // Carga las variables de entorno

const City = require('./models/City');  // Asegúrate de que el path al modelo City sea correcto
const citiesData = require('./models/data/cities');  // Asegúrate de que el path a los datos de las ciudades sea correcto

const importData = async () => {
  try {
    await City.deleteMany(); // Limpia la colección antes de insertar nuevos datos
    await City.insertMany(citiesData); // Inserta los datos
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

mongoose.connect(process.env.URI_MONGO, {  // Usa la URI de tu archivo .env
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  importData();
});
