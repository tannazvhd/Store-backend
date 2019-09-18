const express = require('express');
const router = express.Router();
const Laptop = require('../models/laptops.model');
const Smartphone = require('../models/smartphones.model');
const Tablet = require('../models/tablets.model');
const Accessory = require('../models/accessories.model');




// list of products


router.get('/laptops', (req, res) => {


        Laptop
                            .find({})
                            .then(laptop => {
                                res.json({
                                    status: true,
                                    data: laptop,
                                    msg: 'laptops list successfully recieved'
                                });
                            })
                            .catch(err => {
                                res.status(500).send({
                                    status: false,
                                    msg: 'error recieving laptop list'
                                });
                                throw new Error(err);
                            })
                
   
});



router.get('/smartphones', (req, res) => {


    Smartphone
                        .find({})
                        .then(smartphone => {
                            res.json({
                                status: true,
                                data: smartphone,
                                msg: 'smartphones list successfully recieved'
                            });
                        })
                        .catch(err => {
                            res.status(500).send({
                                status: false,
                                msg: 'error recieving smartphone list'
                            });
                            throw new Error(err);
                        })
            

});


router.get('/tablets', (req, res) => {


    Tablet
                        .find({})
                        .then(tablet => {
                            res.json({
                                status: true,
                                data: tablet,
                                msg: 'tablets list successfully recieved'
                            });
                        })
                        .catch(err => {
                            res.status(500).send({
                                status: false,
                                msg: 'error recieving tablet list'
                            });
                            throw new Error(err);
                        })
            

});



router.get('/accessories', (req, res) => {


    Accessory
                        .find({})
                        .then(accessory => {
                            res.json({
                                status: true,
                                data: accessory,
                                msg: 'accessories list successfully recieved'
                            });
                        })
                        .catch(err => {
                            res.status(500).send({
                                status: false,
                                msg: 'error recieving accessory list'
                            });
                            throw new Error(err);
                        })
            

});



//Add Products


router.post('/laptops/add', (req, res) => {
    const { title,price,image,description } = req.body;
    if (title && price && image && description){
        let newLaptop = new Laptop(req.body);
        newLaptop
            .save()
            .then(lap => {
                res.json({
                    status: true,
                    data: lap,
                    msg: 'laptop successfully added'
                });
            })
            .catch(err => {
                res.status(500).send({
                    status: false,
                    msg: 'Error adding laptop'
                });
                throw new Error(err);
            })
     }     
});

router.post('/smartphones/add', (req, res) => {
    const { title,price,image,description } = req.body;
    if (title && price && image && description){
        let newSmartphone = new Smartphone(req.body);
        newSmartphone
            .save()
            .then(phone => {
                res.json({
                    status: true,
                    data: phone,
                    msg: 'smartphone successfully added'
                });
            })
            .catch(err => {
                res.status(500).send({
                    status: false,
                    msg: 'Error adding smartphone'
                });
                throw new Error(err);
            })
     }     
});

router.post('/tablets/add', (req, res) => {
    const { title,price,image,description } = req.body;
    if (title && price && image && description){
        let newTablet = new Tablet(req.body);
        newTablet
            .save()
            .then(tablet => {
                res.json({
                    status: true,
                    data: tablet,
                    msg: 'tablet successfully added'
                });
            })
            .catch(err => {
                res.status(500).send({
                    status: false,
                    msg: 'Error adding tablet'
                });
                throw new Error(err);
            })
     }     
});

router.post('/accessories/add', (req, res) => {
    const { title,price,image,description } = req.body;
    if (title && price && image && description){
        let newAccessory = new Accessory(req.body);
        newAccessory
            .save()
            .then(access => {
                res.json({
                    status: true,
                    data: access,
                    msg: 'accessory successfully added'
                });
            })
            .catch(err => {
                res.status(500).send({
                    status: false,
                    msg: 'Error adding accessory'
                });
                throw new Error(err);
            })
     }     
});

//Remove Products

router.post('/laptops/remove', (req, res) => {
    const { id } = req.body;
    if (id){

        Laptop
          .findByIdAndDelete(id)
          .then(lap => {
            res.json({
                status: true,
                data: lap,
                msg: 'Laptop successfully removed'
            });
        })
          .catch(err => {
            res.status(500).send({
                status: false,
                msg: 'Error removing Laptop'
            });
            throw new Error(err);
        })

     }     
});
router.post('/smartphones/remove', (req, res) => {
    const { id } = req.body;
    if (id){

        Smartphone
          .findByIdAndDelete(id)
          .then(phone => {
            res.json({
                status: true,
                data: phone,
                msg: 'Smartphone successfully removed'
            });
        })
          .catch(err => {
            res.status(500).send({
                status: false,
                msg: 'Error removing sSmartphone'
            });
            throw new Error(err);
        })

     }     
});
router.post('/tablets/remove', (req, res) => {
    const { id } = req.body;
    if (id){

        Tablet
          .findByIdAndDelete(id)
          .then(tablet => {
            res.json({
                status: true,
                data: tablet,
                msg: 'Tablet successfully removed'
            });
        })
          .catch(err => {
            res.status(500).send({
                status: false,
                msg: 'Error removing Tablet'
            });
            throw new Error(err);
        })

     }     
});
router.post('/accessories/remove', (req, res) => {
    const { id } = req.body;
    if (id){

        Accessory
          .findByIdAndDelete(id)
          .then(access => {
            res.json({
                status: true,
                data: access,
                msg: 'Accessory successfully removed'
            });
        })
          .catch(err => {
            res.status(500).send({
                status: false,
                msg: 'Error removing Accessory'
            });
            throw new Error(err);
        })

     }     
});




module.exports = router;