const express = require("express");
const products = require("./users.json");

const router = express.Router();

//get all products request
router.get("/getUsers", (_req, res)=>{
    try {
        res.status(200).send({
            responseCode: "00",
            responseMessage: "Product fetched successfully",
            data: products
        })
    } catch (error) {
        res.status(500).send({
            responseCode: "96",
            responseMessage: "error: " + error,
            data: null,
        });
        
    }

})

module.exports.router = router