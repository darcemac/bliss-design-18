(function ($) {
    "use strict"; // Start of use strict

    // platform detect
    var mobileTest;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        mobileTest = true;
        $("html").addClass("mobile");
    }
    else {
        mobileTest = false;
        $("html").addClass("no-mobile");
    }

    var mozillaTest;
    if (/mozilla/.test(navigator.userAgent)) {
        mozillaTest = true;
    }
    else {
        mozillaTest = false;
    }
    var safariTest;
    if (/safari/.test(navigator.userAgent)) {
        safariTest = true;
    }
    else {
        safariTest = false;
    }

   // detect touch devices    
   if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

    var pageSection = $(".hero, .post-feature");

    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // scroll function
    function init_scrollUpDown() {
        $("div.arrow-down").click(function() {
            $("html, body").animate({
                scrollTop: $(".projects, .post-hero").offset().top
            }, 1000);
        }); 
        $("div.arrow-up").click(function (){
            $("html, body").animate({
            scrollTop: $(".banner, .journal").offset().top
            }, 1000);
        }); // jshint ignore:line
    }

    // scroll change
    function init_scrollChange() {

        var $heading = $('.heading');
        var $menu = $('.menu');
        var $win = $(window); 

        var winH = $win.height() - 100;   // Get the window height.
       
        $win.on("scroll", function () {
            
            if ($(this).scrollTop() > winH ) {
                $heading.addClass("is-dark");
                $menu.addClass('rotate');
            } else {
                $heading.removeClass("is-dark");
                $menu.removeClass('rotate');
            }

        }).on("resize", function(){ // If the user resizes the window
            winH = $(this).height(); // you'll need the new height value
        });

    }


    // Adds and removes body class depending on screen width. - to do
    // function screenClass() {

    //     var $heading = $('.heading');
    //     var $menu = $('.menu');
    //     var $win = $(window); 
    //     var $win2 = $(window);

    //     var winH100 = $win.height() - 100;   // Get the window height.
    //     var winH20 = $win2.height() - 100;

    //     if($(window).innerWidth() > 550) {
            
    //         $('body').addClass('big-screen').removeClass('small-screen');

    //         $win.on("scroll", function () {
                
    //             if ($(this).scrollTop() > winH20 ) {
    //                 $heading.addClass("is-dark");
    //                 $menu.addClass('rotate');
    //             } else {
    //                 $heading.removeClass("is-dark");
    //                 $menu.removeClass('rotate');
    //             }

    //         }).on("resize", function(){ // If the user resizes the window
    //             winH20 = $(this).height(); // you'll need the new height value
    //         });

    //     } else {
    //         $('body').addClass('small-screen').removeClass('big-screen');

    //         $win2.on("scroll", function () {
                
    //             if ($(this).scrollTop() > winH100 ) {
    //                 $heading.addClass("is-dark");
    //                 $menu.addClass('rotate');
    //             } else {
    //                 $heading.removeClass("is-dark");
    //                 $menu.removeClass('rotate');
    //             }

    //         }).on("resize", function(){ 
    //             winH100 = $(this).height(); 
    //         });

    //     }
    // }

    // // Fire.
    // screenClass();

    // // And recheck when window gets resized.
    // $(window).bind('resize',function(){
    //     screenClass();
    // });


    // wow animation
    function init_wow(){
        (function($){    
        
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 200,
                mobile: false, 
                live: true 
            });
            
            wow.init();      
            
        })(jQuery);
    }

    var init_slider = function() {
        
        $('.slider-gallery').each(function(key, item) {
            
            var sliderId = 'slider-gallery' + key;
            this.id = sliderId;
            
            $(this).glide({
                type: "carousel", //slider, carousel
                autoplay: 3000,  
            });
        
        });

    };

    // fade page in on load
    var page_load = function() {
        $('body').removeClass('fade-out');
    };

    // init
    $(function(){
        init_slider();
        init_wow();
        init_scrollChange();
        init_scrollUpDown();
        page_load();
    });

})(jQuery); 

// modal
var modal = document.getElementById('infoModal');
var body = document.getElementById('main');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
};
span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
};
