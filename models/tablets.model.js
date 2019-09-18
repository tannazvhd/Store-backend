const db = require('../bootstrap/db');
const Schema = db.Schema;


const TabletSchema = new Schema({
    image : { type: String, required: true },
    title : { type: String, required: true },
    price : { type: String, required: true },
    description : { type: String, required: true, unique: true }
},{
    collection: 'tablets',
    timestamps: true
});



module.exports = db.model('Tablet', TabletSchema);