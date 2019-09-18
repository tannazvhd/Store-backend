const db = require('../bootstrap/db');
const Schema = db.Schema;
const ObjectId = Schema.ObjectId;


const SearchSchema = new Schema({
    _id : { type: ObjectId },
    image : { type: String },
    title : { type: String },
    price : { type: String },
    description : { type: String}
},{
    collection: 'search',
    timestamps: true
});



module.exports = db.model('Search', SearchSchema);