# Twitter-bot
Twitter bot for favoriting tweets, following accounts and retweeting

This little Twitter bot is using the Twitter API to follow accounts, favorite tweets and retweet them.
I highly recommend to snack the official [documentation](https://dev.twitter.com/rest/reference), cause there are some great gems.

**How to install**

0. Create your folder on your machine, fork the repo or clone it to the folder you created, then:
1. Open your console / terminal
2. Navigate to the folder where all the content of the clone can be found
3. npm install in the console - (if you don't have npm just yet: https://www.npmjs.com/get-npm)
4. Then you see the progress is running and all the dependencies about the install

**Make it useful**

1. If you open up the folder, you see the config.js is screaming for access keys
2. Log into Twitter with the account you want to use the app with
3. You can get your own keys here to fill up config.js: https://apps.twitter.com/
4. After you created the app, and randomized your key nothing can stop you to fill up the config.js for you

**Settings**

1. Open the app.js and navigate to the params, these are the details you will pass in as an object
There are a lot of customization here, reference: https://dev.twitter.com/rest/reference/get/search/tweets
2. If you want to go easy just change the count number and put some custom hashtag in there
3. I've separated the influencer following GET request, because not everyone is into that, so feel free to comment out the whole block
4. Save it, you are ready to blow up Twitter. In the console start the app typing: *node app.js*
