function updateCountdown() {
    var remaining = 140 - jQuery('.text').val().length;
    jQuery('.counter').text(remaining);
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('.text').change(updateCountdown);
    $('.text').keyup(updateCountdown);
});