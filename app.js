var Twitter = require("twitter");
var config = require("./config.js");

// All magic starts with a simple T, yeah maybe an "m"
var T = new Twitter(config);

// Set up search parameters
var params = {
	q: "#yourhashtaggoeshere", //Here you put your custom search query for instance a hashtag #####
	count: 10,
	result_type: "mixed", // For other options check the documentation: https://dev.twitter.com/rest/reference/get/search/tweets
	lang: "en"
};

// With the help of the npm Twitter module, we are able to make a get request to ‘search/tweets’ and pass in our search params we set previously. This get request returns a callback.
T.get("search/tweets", params, function(err, data, response) {
	if (!err) {
		// This is where the real magic will happen to favorite the tweets
		// Loop through the returned tweets
		for (let i = 0; i < data.statuses.length; i++) {
			// Get the tweet Id from the returned data -- it has to be an object
			let id = { id: data.statuses[i].id_str };
			// Try to Favorite the selected Tweet
			T.post("favorites/create", id, function(err, response) {
				// If the favorite fails, log the error message
				if (err) {
					console.log(err[0].message);
				} else {
					// If the favorite is successful, log the url of the tweet
					let username = response.user.screen_name;
					let tweetId = response.id_str;
					console.log(
						"Favorited: ",
						`https://twitter.com/${username}/status/${tweetId}`
					);
				}
			});

			// Let's do retweet of these posts
			let retweet = data.statuses[i].id_str;
			T.post(`statuses/retweet/${retweet}`, id, function(err, response) {
				if (err) {
					console.log(err);
				} else {
					let username = response.user.screen_name;
					let tweetId = response.id_str;
					console.log(
						`Retweeted: https://twitter.com/${username}/status/${tweetId}` //This is going to be the retweeted post
					);
				}
			});
		}
	} else {
		console.log(err);
	}
});

// How to follow influencer from a certain topic? Look below!!!

T.get("search/tweets", params, function(err, data, response) {
	if (!err) {
		for (let i = 0; i < data.statuses.length; i++) {
			let screen_name = data.statuses[i].user.screen_name;

			T.post("friendships/create", { screen_name }, function(err, res) {
				if (err) {
					console.log(err);
				} else {
					console.log(screen_name, ": **FOLLOWED**"); //Logging out the accounts we follow
				}
			});
		}
	} else {
		console.log(err);
	}
});
