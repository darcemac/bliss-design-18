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

    var pageSection = $(".hero, .connect");

    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    $(window).scroll(function() { 

        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            $(".nav-background, .nav-container, a.nav-logo svg").addClass("scrolling");
        } else {
            $(".nav-background, .nav-container, a.nav-logo svg").removeClass("scrolling");
        }

    });

    $(function(){

        $(".slider").each(function(key) {
            
            var sliderId = "slider" + key;
            this.id = sliderId;
            
            $(this).glide({
                type: "slideshow", //type - slider, carousel, slideshow
                autoplay: false
            });
        
        });

    });

    // fade page in on load
    var page_load = function() {
        $('body').removeClass('fade-out');
    };

    // testimonial slider
    var testSlider = function() {
        
        $('.carousel').each(function(key, item) {
            
            var sliderId = 'carousel' + key;
            this.id = sliderId;
            
            $(this).glide({
                type: "carousel", //slider, carousel
                autoplay: 8000,  
            });
        
        });

    };

    // init
    $(function(){
        page_load();
        testSlider();
    });

})(jQuery); 

