(function() {
    "use strict";
    $(window).load(function() {
        $("#loader").fadeOut();
        $("#mask").delay(1000).fadeOut("slow");
    });
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 1) {
            $('.header-area').addClass('navbar-fixed-top');
            $('html').addClass('has-fixed-nav');
        } else {
            $('.header-area').removeClass('navbar-fixed-top');
            $('html').removeClass('has-fixed-nav');
        }
    });
    $(document).ready(function($) {
        $('#tab-container').easytabs({
            updateHash: false
        });
        $('.view-profile').click(function(e) {
            e.preventDefault();
            $('#tab-container').easytabs('select', '#profile');
        });
    });
    $(".nav-toggle").click(function() {
        $(".navigation-area").toggle();
    });
    $('.carousel').carousel({
        interval: 5000
    })
    $('.portfolio-gal').magnificPopup({
        delegate: 'a',
        type: 'image'
    });
    $("html").niceScroll({
        cursorcolor: "#2B4450",
        cursorwidth: "10px",
        cursorborder: "1px solid #ccc",
        cursorborderradius: "1px",
        zindex: "99999"
    });
})(jQuery);