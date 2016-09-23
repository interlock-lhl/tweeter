function updateCountdown() {
  var remaining = 140 - Array.from($('.text').val()).length;
  $('.counter').text(remaining);
  if (remaining < 0) {
    $("#compose").attr("disabled","disabled");
    $('.alert').show();
    $('.counter').addClass("redText").on('click', function(event) {
      event.preventDefault();
    });
  } else {
    $('.counter').removeClass("redText");
    $('.alert').hide();
    $("#compose").removeAttr("disabled","disabled");
  }
}


