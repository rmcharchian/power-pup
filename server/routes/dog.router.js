var express = require('express');
var router = require('express').Router();
var pool = require('../modules/pool');

router.get('/', function(req, res){
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM dogs', function (errorMakingQuery, result) {
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

router.post('/', function(req, res){
	console.log('dog post was hit!');
	// Add an INSERT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
            client.query('INSERT INTO dogs (dog_name, breed, user_id) VALUES ($1, $2, $3);', 
            [req.body.dog_name, req.body.breed, req.user.id], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(201);
				}
			});
		}
    });
});    

module.exports = router;