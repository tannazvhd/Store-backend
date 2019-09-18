const express = require('express');
const router = express.Router();
const Message = require('../models/msg.model');


// msg save


router.post('/', (req, res) => {
    const { firstname,lastname,text, email } = req.body;

    if (email && firstname && lastname && text){

        Message
             
                    let newMessage = new Message(req.body);
                        newMessage
                            .save()
                            .then(msg => {
                                res.json({
                                    status: true,
                                    data: msg,
                                    msg: 'your msg successfully sent'
                                });
                            })
                            .catch(err => {
                                res.status(500).send({
                                    status: false,
                                    msg: 'Errorsending msg'
                                });
                                throw new Error(err);
                            })
                
    } else {
        res.status(500).send({
            status: false,
            msg: 'incorrect data'
        });
    }
});






module.exports = router;