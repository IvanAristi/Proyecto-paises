const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://brayan:1077999260@cluster0.whirsf5.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB Atlas');
});

module.exports = db;
