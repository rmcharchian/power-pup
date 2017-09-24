CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(80) NOT NULL UNIQUE,
password VARCHAR(240) NOT NULL
);

SELECT * FROM users;

DROP TABLE users;

CREATE TABLE dogs (
dog_id SERIAL PRIMARY KEY,
dog_name VARCHAR(80) NOT NULL,
breed VARCHAR(240) NOT NULL,
photo VARCHAR(240),
user_id Serial REFERENCES users (user_id)
);

SELECT * FROM dogs;

INSERT INTO dogs (dog_name, breed)
VALUES ('Scraps', 'Beagle-Terrier Mix');

DROP TABLE dogs;

SELECT * FROM dogs WHERE user_id = 1;

CREATE TABLE commands (
id SERIAL PRIMARY KEY,
command VARCHAR(40) NOT NULL,
description VARCHAR(200),
teach VARCHAR
);


SELECT * FROM commands;

INSERT INTO commands (command, description, teach)
VALUES ('Sit', 'Training your dog to sit on command is a vital part of any dog training program.', 'Start with your dog on a short leash.  If your dog is small, put her on an elevated surface and grasp the leash a few inches from her collar so you’re ready to limit her mobility.  A large dog can stay on the ground.  Hold, or anchor, the leash to keep the dog from moving away from you.  Use a treat your dog is excited about, and hold it about 6” in front of her.  She will lunge for it.  You will hold her in place until she stops lunging.  Now, move the treat along a 45-degree arc over her head.  Her head will follow the treat, lifting farther and farther upward.  As you move the treat, say SIT.  When this becomes uncomfortable to her, she will naturally sit.  The moment her butt hits the ground, say “Good sit”.  Try this in many locations.  Soon, she will be able to do this without a treat as a reward.
'),
('Down - Big to Medium Dogs', 'When your dog lies down with his belly to the ground, it puts him in a submissive position and helps you gain control.', 'Big to Medium Dogs- 1)Put your dog in the Double Leash Lock-Off position by using two leashes.  One anchored to a leg of a couch or heavy table, the other acting as your guide leash.  2)Using a treat, lure him toward you until he has pulled the leash tight.  Once he reaches the end of the anchor leash, hold the treat in one hand at the same level as his head and about 6” away from his mouth.  Because he is secured, he won’t be able to lunge forward to grab it.  You now have his attention.  3)Lower the treat straight to the ground while still holding it in your hand.  At the same time, say the word DOWN.  Some dogs will go straight into the DOWN position.  Give him praise immediately.  While he is down, step on the leash a few inches from the clip to keep him from standing up.  If he starts to stand up, keep your foot on the leash and say DOWN again until he relaxes.  When he does, reward him with a treat.

'),
('Down - Small Dogs', 'A well trained dog should remain where his or her owner commands.', 'Small Dogs – 1) Small dogs usually put up more of a struggle with this command and the leash lock doesn’t work as well for them.  Place her on the edge of the couch making sure she doesn’t jump off.  If she does, keep putting her back.  The best way to keep her attention is by focusing her attention on the treat in your hand.  2) Hold the treat about 6” away from her snout.  Now, slowly lower it below the edge of the couch while giving the command DOWN.  Only lower it about 4” below the edge of the couch, just so her head will be hanging over the edge to follow.  She can see it, but can’t take until her position changes.  Continue to say the word DOWN.  When she hits the down position, reward with the treat and say, “Good Down”.  3)  She will now want to pop back up.  Pet her slowly and firmly down her entire back to keep her in a down position.  When she is settled again in down, immediately give her a treat.
'),
('Stay', 'A well trained dog should remain where his or her owner commands.', '1) Place your dog in a corner in the SIT position with her butt backed into the corner and have her treats ready.  She should not be able to run away.  2) Stand 1’ away from her and lift one hand like a traffic officer halting traffic.  This is the STAY hand signal.  Show this hand signal and say STAY.  Once you give the STAY command, hold her in this position for one second only.  If she is successful, praise and give her a treat.  If she budges, firmly tap her on the chest and have her sit again until she can sit for one second.  3) Next, you are going to back away another 1’.  This time you are going to tell her to STAY and wait for two seconds.  Repeat the reward process from step 2.  4) Next, you are going to back away another 1’.  This time you are going to tell her to STAY and wait for three seconds.  You now have an open gap for her to escape.  Hold hands low to block with your hands held in the “stop sign”.  Repeat the reward process from step 2.  5)  When she can STAY for 10 seconds, move her out of the corner along a wall and follow the same process.  6)  When she has mastered STAY at the wall for 10 seconds, bring her out into the middle of an open area.  Repeat the steps used in the corner and along the wall.
'),
('No', 'The word No is one word that all dogs must learn.', '1) Hold one of the treats flat out in your hand at eye level, about 6” from his mouth, and say the word NO right away.  When he tries to take it, say the word NO and close your hand into a fist with the treat inside.  Many dogs will keep trying to get the treat.  If this is the case, pull your hand away and give him a chance to reset.  2) Place your open hand with the treat at eye level again, about 6” from his mouth.  When he goes for the treat, close your hand into a fist again, saying NO.  Repeat this process 5 times.  3) Once he stops lunging toward the treat, you can repeat the same steps with your palm open.  Once he can do this, place the treat on the ground between the two of you and say NO.  When he no longer seems interested, you’ve taught him the command.  4) Place a treat down in front of your dog, and say NO, then back off by 1’.  Keep moving back while saying NO at the same time.  Then slowly move back to him, while still saying NO.  5)  Once he has learned NO, you can teach him OK.  OK gives him permission to eat the treat.  Once you are near him, put the treat near his mouth and say OKAY, and let him eat it.
'),
('Come', 'The most important command that your dog needs to learn and obey is to get your dog’s attention and call them to return to you.', 'Things you’ll need: 25’leash, harness, clicker, variety of treats your dog will really like.  1) With treats at hand and leash hanging loose from his harness, start in as single room with few distractions.  When he is a few feet away, say the command COME in a cheerful voice, and watch what he do does.  If he looks at you, click the clicker.  If he walks toward you, click again.  If he comes all the way, click, praise, and give reward, telling him “Good Come”.  If you get no response, give the leash a little tug.  As soon as he turns, click and give the COME command again, with reward and praise when he gets to you. 2) Leave leash attached to harness and have clicker and treats at hand.  Move into a space where he has room to roam.  Give the COME command, and if he turns toward you, click.  When he gets to you, click a give him a treat.  If he doesn’t come, give the leash a tug. 3) Repeat the COME command from different spaces in your home.  Follow the same click and reward system.  4) Once he masters the COME command inside, begin the process in an enclosed space outdoors.  Follow the same steps as indoor training. 5) When you are certain he has the COME command mastered you can move to open spaces and begin to reduce treats.  Keep up the praise!
'),
('Heel - Medium to Big Dogs', 'It is important that any dog learn to walk beside its owner on a loose lead, neither pulling ahead nor lagging behind.', 'Things you’ll need: really attractive treats, hungry dog, 4-6’ leash.  1) Hold a treat in your right hand and position your dog on your left side.  The leash will be in your left hand coiled up so she has just a little slack.  Hold the treat in your right fist with a closed hand about 6” from her snout. 2) Begin walking at a normal pace and say HEEL.  Most dogs will start jumping for the treat, but will stop after about 10 seconds.  Praise her and give a treat during the short interval she is walking correctly beside you.  Do this repeatedly.  3) Your dog must make the association between the command and sticking by your side no matter what direction you go.  Start mixing up your walking pattern, turning left, right, and in ways she can’t predict.  As you make a turn, hold the leash close and give the HEEL command again.  4) Once you feel she understands the command, begin to reduce the frequency of treats as rewards.  The first and last time should be rewarded with a treat.  5) Over the course of the week, begin to move your hand back into its normal position, which will take a few days.
'),
('Heel - Small Dogs', 'It is important that any dog learn to walk beside its owner on a loose lead, neither pulling ahead nor lagging behind.', 'Things you’ll need: lure stick (longer stick with clip on the end to hold a treat), really attractive treats, hungry dog, 4-6’ leash. 1) Position your dog at your left side and hold his leash coiled in your hand so there’s a little slack.  Hold the lure stick in your right hand and attach a dog treat to the end. 2) Start walking at a normal pace and hold the treat on the lure stick a few inches in front of and above his snout, but don’t let him grab it.  If he lunges for the treat, lift it out of reach, pull back on the leash to stop him from lunging, and keep waling.  Keep repeating.  Eventually he will begin to walk beside you.  When he does, say “Good Heel” and give him a reward.  Once he grasps the concept, start waiting for another second or two each time before giving him the treat. 3) 3) Your dog must make the association between the command and sticking by your side no matter what direction you go.  Start mixing up your walking pattern, turning left, right, and in ways she can’t predict.  As you make a turn, hold the leash close and give the HEEL command again.  
');

DROP TABLE commands;


CREATE TABLE as_needed_commands (
id SERIAL PRIMARY KEY,
command VARCHAR(80) NOT NULL,
description VARCHAR(200),
teach VARCHAR
);

INSERT INTO as_needed_commands (command, description, teach)
VALUES ('Off - Jumping on You', 'description', 'Technique 1 - Turn Your Back.  Wait for your dog to jump on you.  The instant she jumps on you, say OFF in a firm voice and turn your back.  Have no further interaction.  Repeat every time she jumps on you.  Technique 2 – Hold Those Paws (large dogs only).  Wait for your dog to jump on you.  Grab her paws and hold for about thirty seconds and give the OFF command.  She will try to get away, but you won’t let her.  Keep repeating OFF while in this awkward position.  Once she is no longer resisting, hold for three more seconds, say OFF one more time, and release.  Technique 3 – Use a bottle filled with pennies or loud shaker, hold it behind your back.  Wait until your dog jumps on you, give the OFF command, followed by a shake of the bottle.  The sound will startle her, and she’ll get down.  Repeat as needed.
'),
('Off - Jumping on Others', 'description', 'Technique 1 - Use the bottle method from Off – Jumping on You.  Technique 2 – Correct with a leash.  If you know you are going to have visitors, attach a collar to your dog before they arrive.  With leash in hand, wait for him to jump up.  When he does, say the word OFF, the pull the leash straight down or down and to the side.  Try to correct your dog before he jumps and don’t pull on the leash too hard.'),
('Off - Jumping on Furniture', 'description', 'With penny bottle in hand, approach your dog while she is in the spot you want her off.  Say OFF, and give the bottle a one to two second shake, then say OFF one more time.
');

SELECT * FROM as_needed_commands;

DROP TABLE as_needed_commands;


CREATE TABLE dogs_commands (
id serial PRIMARY KEY,
dog_id integer REFERENCES dogs,
commands_id integer REFERENCES commands,
day1 INT default 0,
day2 INT default 0,
day3 INT default 0,
day4 INT default 0, 
day5 INT default 0,
day6 INT default 0,
day7 INT default 0
);

SELECT * FROM dogs_commands;

DROP TABLE dogs_commands;

INSERT INTO dogs (dog_name, breed, user_id) VALUES ('Fred', 'mix', '1')
returning id;

WITH new_dog_temp_table AS (INSERT INTO dogs (dog_name, breed, user_id) VALUES ('Fred', 'mix', '1')
returning id)


INSERT INTO dogs_commands (dog_id, commands_id)
VALUES 
((SELECT id FROM new_dog_temp_table), '1'),
((SELECT id FROM new_dog_temp_table), '2'),
((SELECT id FROM new_dog_temp_table), '3'),
((SELECT id FROM new_dog_temp_table), '4'),
((SELECT id FROM new_dog_temp_table), '5'),
((SELECT id FROM new_dog_temp_table), '6'),
((SELECT id FROM new_dog_temp_table), '7'),
((SELECT id FROM new_dog_temp_table), '8'
);

SELECT * FROM dogs 
JOIN dogs_commands ON dogs.id = dogs_commands.dog_id
JOIN commands ON commands.id = dogs_commands.commands_id
WHERE dogs.id = 9;

UPDATE dogs_commands SET day1=1, day2=1, day3=1, day4=1, day5=1, day6=1, day7=1
WHERE dog_id=1 and commands_id= 1;

