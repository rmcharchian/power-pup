var express = require('express');
var router = require('express').Router();
var pool = require('../modules/pool');

router.get('/', function(req, res){
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM commands', function (errorMakingQuery, result) {
                if(errorMakingQuery) {
                    console.log('Error Making Query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});
   

module.exports = router;