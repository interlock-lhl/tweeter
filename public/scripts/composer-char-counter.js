function updateCountdown() {
  var remaining = 140 - $('.text').val().length;
  $('.counter').text(remaining);
  if (remaining < 0) {
    $('.counter').addClass("redText");
  } else {
    $('.counter').removeClass("redText");
  }
}

$(document).ready(function($) {
  updateCountdown();
    $('.text').change(updateCountdown);
    $('.text').keyup(updateCountdown);
})

