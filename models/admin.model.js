const db = require('../bootstrap/db');
const Schema = db.Schema;
const bcrypt = require('bcrypt');

const AdminSchema = new Schema({
    username : { type: String, required: true },
    password : { type: String, required: true },
},{
    collection: 'admin'
});

// Mongoose Hooks
AdminSchema.pre('save', function(next){
    let admin = this;
    if (admin.isModified('password') || admin.isNew){
        bcrypt.genSalt(10, function(err, salt){
            if (err) throw new Error(err);
            bcrypt.hash(admin.password, salt, function(err, hashedPass){
                if (err) throw new Error(err);
                admin.password = hashedPass;
                next();
            })
        });
    } else { next() }
});


AdminSchema.methods.comparePassword = function(password, cb){
    bcrypt.compare(password, this.password, function(err, isMatch){
        cb(err, isMatch);
    });
}



module.exports = db.model('Admin', AdminSchema);