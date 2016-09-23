$(document).ready(function() {

  updateCountdown();
    $('.text').on("keyup change", (updateCountdown));

  loadTweets();

  $('#hideshow').on('click', function(event) {
    $('#compose-tweet').toggle('show');
    $('#textarea').focus();
  });



  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: function(result) {
        console.log('Success, you"re so smart!');
        renderTweets(result);
      }
    });
  }

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      $('#tweetcontainer').append(createTweetElement(tweet));
    });
  }

  function createTweetElement(tweet) {
    var articleTweet = $('<article>').addClass('tweet');
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
        <img src="/images/icon-flag.png"/>
        <img src="/images/icon-retweet.png"/>
        <img src="/images/icon-like.png"/>
        </div>
      </footer>`
    ));
    return articleTweet;
  };

  $("form").on("submit", function newTweet(event) {
    event.preventDefault();
    var tweet = $(this).serialize();  //'this' being your form info
    $.ajax( {
      url: '/tweets',
      method: 'POST',
      data: tweet,
      dataType: 'json',
      success: function(tweet) {
         $('#tweetcontainer').prepend(createTweetElement(tweet));
      }
    });
  });
});