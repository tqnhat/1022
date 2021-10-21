/* ===================================
                Preloader
======================================*/
$(window).on('load', function () { //make sure website is full loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===================================
                Navigation
======================================*/
/*Show & Hide White Navigation*/
$(function () {
    //show/hide on page load
    showHideNavigation();

    $(window).scroll(function () {
        //show/hide on window scroll
        showHideNavigation();
    });

    function showHideNavigation() {
        if ($(window).scrollTop() > 20) {
            //show white navigation
            $("nav").addClass('white-nav-top');
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Show back to top button
            $("#back-to-top").fadeIn();
        } else {
            //hide white navigation
            $("nav").removeClass('white-nav-top');
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

/* Smooth Scrooling */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //get section id like #about, #services....
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 60
        }, 200, "easeInOutExpo");
    });
});


/* ===================================
                Mobile Menu
======================================*/
$(function () {
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css('height', '100%');
        $(".navbar-header").css('width', '100%');
    });

    //hide mobile menu
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css('height', '0%');
        $(".navbar-header").css('width', '0%');
    });
});

/* ===================================
                Animation
======================================*/
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () { //make sure website is full loaded
});