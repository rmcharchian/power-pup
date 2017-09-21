var express = require('express');
var router = require('express').Router();
var pool = require('../modules/pool');

router.get('/', function(req, res){
    if(req.isAuthenticated()){
    pool.connect(function(errorConnectingToDatabase, client, done){ 
        if(errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM dogs WHERE user_id = $1', [req.user.id], function (errorMakingQuery, result) {
                if(errorMakingQuery) {
                    console.log('Error Making Query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }); //end of query
        } //end of else
    }); //end of pool
    } else {
        res.sendStatus(403);
    }
}); //end of get

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

router.get('/details', function(req, res){
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT * FROM dogs 
            JOIN dogs_commands ON dogs.id = dogs_commands.dog_id
            JOIN commands ON commands.id = dogs_commands.commands_id
            WHERE dogs.id = $1;`, [req.query.id], function (errorMakingQuery, result) {
                done();
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

//what do I put, if anything, after the wack?

router.put('/details', function(req, res){
    console.log(' put route was hit!');
    console.log('req.query.body is: ', req.body);
	//Add an INSERT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
            // query like this: UPDATE messages SET message='Have a really terrific day!' WHERE id=1;
            //do I follow the same logic as the query in the details get?  dogs_commands?  dHow do I reference each day data cell?
			client.query('UPDATE dogs_commands SET day1=$1, day2=$2, day3=$3, day4=$4, day5=$5, day6=$6, day7=$7 WHERE dog_id=$8 and commands_id=$9;', 
				[req.body.day1, req.body.day2, req.body.day3, req.body.day4, req.body.day5, req.body.day6, req.body.day7, req.body.dog_id, req.body.commands_id], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(200);
				}
			});
		}
	});
});

// /message/7 gets CHOMPED and becomes /7
// now we set id equal to 7 with :id
// router.delete('/:id', function(req, res){
// 	var messageId = req.params.id; // messageId is 7
// 	console.log('message delete was hit!');
// 	// Add an INSERT query
// 	pool.connect(function(errorConnectingToDatabase, client, done){
// 		if(errorConnectingToDatabase) {
// 			// when connecting to database failed
// 			console.log('Error connecting to database', errorConnectingToDatabase);
// 			res.sendStatus(500);
// 		} else {
// 			// when connecting to database worked!
// 			// query like this: UPDATE messages SET message='Have a really terrific day!' WHERE id=1;
// 			client.query('DELETE FROM messages WHERE id=$1;', 
// 							[messageId], 
// 							function(errorMakingQuery, result) {
// 				done();
// 				if(errorMakingQuery) {
// 					console.log('Error making database query', errorMakingQuery);
// 					res.sendStatus(500);
// 				} else {
// 					res.sendStatus(200);
// 				}
// 			});
// 		}
// 	});
// });

module.exports = router;