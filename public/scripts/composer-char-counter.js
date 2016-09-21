$(document).ready(function($) {
  function updateCountdown() {
  var remaining = 140 - Array.from($('.text').val()).length;
  $('.counter').text(remaining);
  if (remaining < 0) {
    $('.counter').addClass("redText");
  } else {
    $('.counter').removeClass("redText");
  }
}
  updateCountdown();
    // $('.text').paste(updateCountdown);
    $('.text').on("keyup change", (updateCountdown));

})

