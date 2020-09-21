/**
 * This game isn't fully functional. The tweet doesn't display properly and the parameters
 * are not operating properly so the tweets do include pictures and mentions. Otherwise, the core
 * mechanics of the game are here and the user is able to input everything and take a guess and find
 * out if they are right or wrong. It also returns the user's score after 10 rounds.
 */ 

var Twit = require('twit')
 
var T = new Twit({
  consumer_key: '6Kib6Ly2neYzWh8aFbK5jhsku',
  consumer_secret: 'FLeLMofS2RoRIZNx2sctznOhPmFtRjxqZAhNmmdwnKTlQCykuS',
  access_token: '1307463418195181569-Zb6DfrPv1ZUv8p9YP8Cyye1rn6jUqS',
  access_token_secret: 'zz74MxDBbSg9e1TT8MKE47hGqx3Y9FugtcZ71FLWldDtn'
})

var paramsK = {
  q: 'from:kanyewest -is:retweet -is:quote -has:mentions -has:media -has:images -has:videos',
  count: 5
}

var paramsE = {
  q: 'from:elonmusk -is:retweet -is:quote -has:mentions -has:media -has:images -has:videos',
  count: 5
}

var elonTweets = [];
var kanyeTweets = [];

T.get('search/tweets', paramsK, gotData);
function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    kanyeTweets.push(tweets[i].text);
  }
}

T.get('search/tweets', paramsE, gotData2);
function gotData2(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    elonTweets.push(tweets[i].text);
  }
}

var score = 0;
var i = Math.floor(Math.random() * 5);
var j = Math.round(Math.random());
var play = 0;
while (play != 10) {
    if (j == 0) {
        console.log(elonTweets[i])
    }
    else if (j == 1) {
        console.log(kanyeTweets[i])
    }
    var name = prompt("Is this tweet from 'Elon' or 'Kanye?\n");
        if (name == 'Elon' && j == 0) {
            console.log("That's correct!\n");
            score++;       
        }
        else if (name == 'Kanye' && j == 1) {
            console.log("That's correct!\n");
            score++;
        }
        else {
            console.log("Sorry that's wrong :(\n");
        }
    play++;
    i = Math.floor(Math.random() * 5);
    j = Math.round(Math.random());
}

console.log("Your final score is: " + score);