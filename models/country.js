const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  continent: { type: String, required: true },
  capital: { type: String, required: true },
  language: { type: String, required: true },
  currency: { type: String, required: true },
},
{
versionKey:false,
timestamps:true
}
);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
