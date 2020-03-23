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