const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const guard = require('../services/guard');
const User = require('../models/User.model');





// LIST
router.get('/', (req, res) => {
    User
        .find({})
        .populate('type' ,["name"])
        .then(users => {
            res.json({
                status: true,
                data: users,
                msg: 'Listing users success'
            });
        })
        .catch(err => {
            throw new Error(err);
        })
});






// REGISTER


router.post('/', (req, res) => {
    const { firstname,lastname,city,address,zip, number,mobile, password, email } = req.body;

    if (password && email && firstname && lastname && city && address && zip && number && mobile){

        User
            .findOne({ email })
            .then(user => {
                if (!user){
                    let newUser = new User(req.body);
                        newUser
                            .save()
                            .then(user => {
                                res.json({
                                    status: true,
                                    data: user,
                                    msg: 'user is successfully registered'
                                });
                            })
                            .catch(err => {
                                res.status(500).send({
                                    status: false,
                                    msg: 'Error registering User'
                                });
                                throw new Error(err);
                            })
                } else {
                    res.status(409).send({
                        status: false,
                        msg: 'user already exist please choose another email'
                    });
                }
            })
    } else {
        res.status(500).send({
            status: false,
            msg: 'incorrect data'
        });
    }
});



router.post('/login', (req, res) => {
    
    const { email, password } = req.body;


    if (email && password){

        User
            .findOne({email})
            .then(user => {
                if (user){
                    
                    // Compare Password
                    user.comparePassword(password, function(err, isMatch){
                        if (err) throw new Error(err);

                        if (!err && isMatch){
                            
                            // Token

                            let claims = {
                                expiresIn : '6h',
                                issuer: 'tannazvhd',
                                audience: 'tannaz'
                            };

                            let payload = {
                                email: user.email
                            }

                            jwt.sign(payload, 'T@e&S-t', claims, function(err, token ){
                                if (!err){
                                    res.json({
                                        status: true,
                                        msg: 'Login successful',
                                        data: token,
                                    });
                                }
                            });

                        } else {
                            res.json({
                                status: false,
                                msg: 'User/Password incorrect'
                            });
                        }

                    });
                    
                } else {
                    res.status(404).send({
                        status: false,
                        msg: 'user not found'
                    });
                }
            })

    } else {
        res.status(500).send({
            status: false,
            msg: 'incorrect data'
        });
    }

});






// AUTH
// Update
router.post('/:id', (req, res) => {
    const { id } = req.params;
    User
    .findByIdAndUpdate(id , req.body)
    .then ( usr => {
        res.json(usr).send({
            status: true,
            msg: 'user sucessfully updated'
        });
    })
    .catch(err =>{
        res.send('ERROR');
        throw new Error(err);
    })

});


// Delete
router.delete('/:id', (req, res) => {
    const {id}=req.params;
    User
    .findByIdAndDelete(id)
    .then ( usr => {
        res.json({
            status : true,
            data: usr,
            msg:'user successfully deleted'
        });
    })
    .catch(err =>{
        res.send('ERROR');
        throw new Error(err);
    })

});


module.exports = router;