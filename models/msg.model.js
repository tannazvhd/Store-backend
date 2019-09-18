const db = require('../bootstrap/db');
const Schema = db.Schema;


const MessageSchema = new Schema({
    firstname : { type: String, required: true },
    lastname : { type: String, required: true },
    text : { type: String, required: true },
    email : { type: String, required: true, unique: true }
},{
    collection: 'messages',
    timestamps: true
});



module.exports = db.model('Message', MessageSchema);