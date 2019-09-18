const express = require('express');
const router = express.Router();
const Search = require('../models/search.model');
const Laptop = require('../models/laptops.model');
const Smartphone = require('../models/smartphones.model');
const Tablet = require('../models/tablets.model');
const Accessory = require('../models/accessories.model');






// list of products


router.get('/:letter', (req, res) => {

    let { letter } = req.params;

        Laptop              
                         .find( {$or: [ {title : {$regex: letter,$options:'i'}} , {description : {$regex: letter,$options:'i' }} ] })
                        // .aggregate( [
                        //     {$match:{title : {$regex: letter,$options:'i'}}},
                        //     {$merge: { into: "search", whenMatched: "replace", whenNotMatched: "insert" } }
                        // ] )                            
                         .then (                            
                                            products =>{
                                                res.json({
                                                    status:true,
                                                    data: products,
                                                    msg:"search successfully completed"
                                                })
                                            }

                          
                            )
                                                                               
        
                            //     laptop => {
                            //         if (laptop){
                            //             for (i = 0; i < laptop.length; i++) {
                            //                 console.log(laptop[i] );
                            //             let newSearch = new Search(laptop[0]);
                            //                 newSearch
                            //                     .then()
                            //                     .catch(err => {
                            //                         res.status(500).send({
                            //                             status: false,
                            //                             msg: 'error search'
                            //                         });
                            //                         throw new Error(err);
                            //                         }
                            //                         )

                            //                     }
                            //     }else{
                            //         console.log("there is not such product");
                            //     }
                            // }
                            
                                                                   
                            .catch(err => {
                                res.status(500).send({
                                    status: false,
                                    msg: 'error search'
                                });
                                throw new Error(err);
                            });
          

});    
    

   


module.exports = router;
                          