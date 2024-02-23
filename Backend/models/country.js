const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true , unique: true },
  code:{type:String, required:true , unique: true},
  continent: { type: String, required: true },
  capital: { type: String, required: false },
  language: { type: String, required: false},
  currency: { type: String, required: false },
},
{
versionKey:false,
timestamps:true
}
);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
