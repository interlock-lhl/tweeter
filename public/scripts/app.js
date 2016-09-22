$(function() {

  updateCountdown();
    // $('.text').paste(updateCountdown);
    $('.text').on("keyup change", (updateCountdown));

 var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

renderTweets(data);

// $.getJSON("/tweets", function(json) {
// }

  // function renderTweets(tweets) {
  //   for each (var user in tweetData) {
  //     createTweetElement()();
  //     $('.tweet').prepend(newTweet);
  //   }
  // }

 function renderTweets(tweets) {
  // loops through tweets
  tweets.forEach(function(tweet) {
    $('.tweet').prepend(createTweetElement(tweet));
    return tweet;
  });
}

// for (var i = 0; i < )


function createTweetElement(tweet) {
  // debugger;
  var articleTweet = $('<article>').addClass('after');
  articleTweet.append($(`
    <header>
      <img src="${tweet.user.avatars.regular}"/>
      <p class='handle'>${tweet.user.handle}</p>
      <p class='username'>${tweet.user.name}</p>
    </header>
    <span class='tweet-content'>${tweet.content.text}</span>
    <footer>
      <p class='date'>${tweet.created_at}</p>
      <div class="buttons-right">
      <img src="/images/flag.png"/>
      <img src="/images/retweet.png"/>
      <img src="/images/heart.png"/>
      </div>
    </footer>`
  ));
  return articleTweet;
};

  // $('form input').on('load', function (e) {
  //   e.preventDefault();
  //   renderTweets(data);
  //   // $.ajax({
  //   //   url: '../../server/db/tweets.json',
  //   //   method: 'GET',
  //   //   datatype: 'json',
  //   //   success: function (JSON_Tweets) {
  //   //     console.log('Success: ', JSON_Tweets);
  //   //     renderTweets(JSON_Tweets);
  //   //   }
  //   // });
  // });


});


