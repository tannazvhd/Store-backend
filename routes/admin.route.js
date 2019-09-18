const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');



//add admin


router.post('/add', (req, res) => {
    const { username,password } = req.body;

    if (username,password){

        Admin
            .findOne({username})
            .then(user => {
                if (!user){
                    let newAdmin = new Admin(req.body);
                        newAdmin
                            .save()
                            .then(user => {
                                res.json({
                                    status: true,
                                    data: user,
                                    msg: 'Admin is successfully registered'
                                });
                            })
                            .catch(err => {
                                res.status(500).send({
                                    status: false,
                                    msg: 'Error registering Admin'
                                });
                                throw new Error(err);
                            })
                } else {
                    res.status(409).send({
                        status: false,
                        msg: 'admin already exist please choose another username'
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



//login admin
router.post('/login', (req, res) => {
    
    const { username, password } = req.body;
    
    console.log(username ,password);


    if (username!=='' && password!==''){



        Admin
            .findOne({username})
            .then(admin => {
                // console.log(admin);
                if (admin){

                    // console.log(admin);
                    
                    // Compare Password
                    admin.comparePassword(password, function(err, isMatch){
                        if (err) throw new Error(err);

                        if (!err && isMatch){
                            
                            // Token

                            let claims = {
                                expiresIn : '6h',
                                issuer: 'tannazvhd',
                                audience: 'tannaz'
                            };

                            let payload = {
                                username: admin.username
                            }

                            jwt.sign(payload, 'T@e&S-t', claims, function(err, token){
                                if (!err){
                                    res.json({
                                        status: true,
                                        msg: 'Login successful',
                                        data: token
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





module.exports = router;