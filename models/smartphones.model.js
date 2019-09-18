const db = require('../bootstrap/db');
const Schema = db.Schema;


const SmartphoneSchema = new Schema({
    image : { type: String, required: true },
    title : { type: String, required: true },
    price : { type: String, required: true },
    description : { type: String, required: true }
},{
    collection: 'smartphones',
    timestamps: true
});



module.exports = db.model('Smartphone', SmartphoneSchema);