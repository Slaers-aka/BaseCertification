$(".nav-icon").click(function(event) {
    $('.nav-icon, .nav').toggleClass('active');
    $('body').toggleClass('lock');
})

$('.footer-h4').click(function(event){
    var width = $(window).width();
    if (width <= 750) {
        if ($('.footer-partitions').hasClass('one')) {
            $('.footer-h4').not($(this)).removeClass('active-footer');
            $('.save-footer-item-container').not($(this)).slideUp(300);
        }
        $(this).toggleClass('active-footer').next().slideToggle(300);
    } 
})

var windowsize = $(window).width();
$(window).resize(function() {
    windowsize = $(window).width();
    if (windowsize > 750) {
        $('.save-footer-item-container').css({'display' : 'block'});
    }
    else {
        $('.save-footer-item-container').css({'display' : 'none'});
    }
    $('.footer-h4').removeClass('active-footer');
})