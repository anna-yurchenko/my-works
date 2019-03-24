$('.base').animate({
    height: '291px'
}, 60000).animate({
    height: '0'
}, 60000)
$('.progressBar').animate({
    opacity: '0.5'
}, 60000).animate({
    opacity: '1'
}, 60000)
setTimeout(function () {
    $('.amount').html('1');
    $('.unit').html('minute')
}, 60000)
setTimeout(function () {
    $('.amount').html('0');
    $('.unit').html('minutes')
}, 120000)