const db = require('../bootstrap/db');
const Schema = db.Schema;


const LaptopSchema = new Schema({
    image : { type: String, required: true },
    title : { type: String, required: true },
    price : { type: String, required: true },
    description : { type: String, required: true }
},{
    collection: 'laptops',
    timestamps: true
});



module.exports = db.model('Laptop', LaptopSchema);