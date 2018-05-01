/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.hdrcontainer'
})

// Closes the Responsive Menu on Menu Item Click
$("#menyy").click(function () {
    $(".hdrcontainer").addClass("fullscreen");
    $(".headermenu").addClass("allevents");
    $("#yles").removeClass("hidden");
    console.log("showmenyy");
});
$('.headermenu ul li').click(function () {
    $(".hdrcontainer").removeClass("fullscreen");
    $(".headermenu").removeClass("allevents");
    $("#yles").addClass("hidden");
    console.log("removemenyy");
});
$('.hdrcontainer').click(function () {
    $(".hdrcontainer").removeClass("fullscreen");
    $(".headermenu").removeClass("allevents");
    $("#yles").addClass("hidden");
    console.log("removemenyy");
});
// Velocity for headermenu
$(".hdrlink")
    .mouseover(function () {
        function rgba_rand() {
            var r = Math.floor((Math.random() * 255) + 1);
            var g = Math.floor((Math.random() * 255) + 1);
            var b = Math.floor((Math.random() * 255) + 1);
            result = '0 0 0 rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
            return result;
        }
        $(this).css("box-shadow", rgba_rand);
        var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
        var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
        $(this).velocity({
            boxShadowX: -x,
            boxShadowY: -y,
        }, 700, [500, 15]);
    });

$(".hdrlink").mouseout(function () {
    $(this).velocity({
        boxShadowY: "0",
        boxShadowX: "0",
    }, 200, "swing");

});

// Animate galerii

$(".portfolio-link").hover(
    function () {
        $(".i-wrap .icon-ul", this).addClass("anim-ul");
        var r = Math.floor((Math.random() * 200) + 1);
        var g = Math.floor((Math.random() * 200) + 1);
        var b = Math.floor((Math.random() * 200) + 1);

        function rgba_rand() {
            result = 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
            return result;
        }
        $('.bg_colour', this).css("background-color", rgba_rand);
        var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
        $(".caption", this).velocity({
            translateY: "-100"
        }, 700, [500, 15]);
        $(".img-zoom", this).velocity({
            rotateZ: x,
            translateY: "-10",
            scale: "1.3"
        }, 700, [500, 15]);
    },
    function () {
        $(".i-wrap .icon-ul", this).removeClass("anim-ul");
        $(".caption", this).velocity({
            translateY: "0"
        }, 300, "ease-in-out");
        $(".img-zoom", this).velocity({
            rotateZ: 0,
            translateY: "0",
            scale: "1"
        }, 300, "ease-in-out");
    }
);

// Velocity for socials
$(".bounce")
    .mouseenter(function () {
        $(this).velocity({
            scale: 1.1
        }, 700, [500, 15]);
    });

$(".bounce").mouseleave(function () {
    $(this).velocity({
        scale: 1
    }, 700, [500, 15]);

});
/*--- old bg thing --- $(document).ready(function () {

$(document).ready(function () {
    // Cache the Window object
    $window = $(window);

    $('#bg[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function () {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!								
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = yPos + 'px' + ' 50%';

            // Move the background
            $bgobj.css('background-position', coords);


        }); // window scroll Ends

    });

});

$(document).ready(function () {
    // Cache the Window object
    $window = $(window);
    $('#bg_mirror[data-type="background"]').each(function () {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function () {

            // Scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!								
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = yPos + 'px' + ' 50%';

            // Move the background
            $bgobj.css('background-position', coords);

        }); // window scroll Ends

    });

});
*/







$(document).ready(function () {
    console.log('ready');
    var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
    var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
    var r = Math.floor((Math.random() * 255) + 1);
    var g = Math.floor((Math.random() * 255) + 1);
    var b = Math.floor((Math.random() * 255) + 1);

    $('#madisvahersvg #valgejoon')
        .velocity({
            'stroke-dashoffset': 500,
            opacity: 1
        }, 0)
        .velocity({
            'stroke-dashoffset': 0
        }, {
            duration: 3000,
            delay: 1500,
            easing: "ease-in-out"
        })
        .velocity({
            'translateX': 0,
            'translateY': 0,
            strokeWidth: 2,
        }, 1100, [500, 10]);
    $('#madisvahersvg #valgepind')
        .velocity({
            'translateX': x,
            'translateY': x,
            opacity: [1, "ease-in-out", 300]
        }, {
            delay: 4500,
            duration: 1100,
            easing: [500, 10]
        });
    $('#madisvahersvg #mustpind')
        .velocity({
            fillRed: r,
            fillGreen: g,
            fillBlue: b,
            'translateX': -y,
            'translateY': -y,
            opacity: [1, "ease-in-out", 300]
        }, {
            delay: 4500,
            duration: 1100,
            easing: [500, 10]
        });
    $("#madisvahersvg")
        .mousedown(function () {
            var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 1);
            var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 1);
            var r = Math.floor((Math.random() * 255) + 1);
            var g = Math.floor((Math.random() * 255) + 1);
            var b = Math.floor((Math.random() * 255) + 1);
            $("#madisvahersvg #mustpind").velocity({
                'fillRed': r,
                'fillGreen': g,
                'fillBlue': b,
                'translateX': x,
                'translateY': y
            }, {
                delay: false,
                duration: 1100,
                easing: [500, 10]
            });
        });
    $("#madisvahersvg")
        .mousedown(function () {
            var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 1);
            var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 1);
            $("#madisvahersvg #valgepind").velocity({
                'translateX': -x,
                'translateY': -y
            }, {
                delay: false,
                duration: 1100,
                easing: [500, 10]
            });
        });
    $("#madisvahersvg")
        .mousedown(function () {
            var x = Math.floor((Math.random() * 600) + 50);
            $("#madisvahersvg #valgejoon").velocity({
                'stroke-dashoffset': x,
            }, {
                delay: false,
                duration: 1100,
                easing: [500, 10]
            });
        });
    $("#madisvahersvg").mousedown(
        function () {
            $("#klikimind").addClass("klikk");
        }
    );
});

//mag popup

$('.single-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-fade',
    closeOnContentClick: true
});

$('.popup-ajax').magnificPopup({
    type: 'ajax',
    modal: false,
    closeOnContentClick: false,
    closeOnBgClick: true,
    mainClass: 'mfp-with-fade',
    gallery: {
        enabled: true
    }
});

$('.gallery').magnificPopup({

    type: 'ajax',
    delegate: 'a',
    removalDelay: 300,
    mainClass: 'mfp-with-fade',
    preload: [0, 2],
    gallery: {
        enabled: true
    }

});

// randomgradient
var back1 = [
    "#3400FC", "#F5445F", "#F3341C", "#02F195", "#FD5467"];
var back2 = [
    "#3400FC", "#F5445F", "#F3341C", "#02F195", "#FD5467"];

var myFunction = function () {

    // First random color
    var rand1 = back1[Math.floor(Math.random() * back1.length)];
    // Second random color
    var rand2 = back2[Math.floor(Math.random() * back2.length)];

    var grad = $('.boop');

    // Convert Hex color to RGB
    function convertHex(hex, opacity) {
        hex = hex.replace('#', '');
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);

        // Add Opacity to RGB to obtain RGBA
        result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    }

    // Gradient rules
    grad.css('background-color', rand1);
    grad.css("background", "-webkit-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
    grad.css("background", "-webkit-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
    grad.css("background", "-o-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
    grad.css("background", "-ms-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
    grad.css("background", "linear-gradient(to bottom, " + rand1 + ", " + rand2 + ")");
    grad.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + rand1 + "', endColorstr='" + rand2 + "',GradientType=0 )");
    grad.css("transition", "background 1s ease-out;");
    grad.css("-webkit-transition", "background 1s ease-out;");
    grad.css("-moz-transition", "background 1s ease-out;");
    grad.css("-o-transition", "background 1s ease-out;");
}
$(document).ready(myFunction)
$("#madisvahersvg").mouseup(myFunction)
    
var randomurl = ['url("../img/gradient.png") fixed', 'url("../img/gradient2.png") fixed', 'url("../img/gradient3.png") fixed'];
var randombg = function () {
    var randbg = randomurl[Math.floor(Math.random() * randomurl.length)];
    var poopy = $('#bg');
    var butt = $('#bg_mirror');
    poopy.css('background', randbg);
    butt.css('background', randbg);
    console.log(randbg);
    }
$(document).ready(randombg)
$("#madisvahersvg").mouseup(randombg)
/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

var cbpAnimatedHeader = (function () {

    var docElem = document.documentElement,
        header = document.querySelector('.hdrcontainer'),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'hdr-bg');
        } else {
            classie.remove(header, 'hdr-bg');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();

var cbpAnimatedHeader = (function () {

    var docElem = document.documentElement,
        header = document.querySelector('.headermenu'),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'headermenu-transp');
        } else {
            classie.remove(header, 'headermenu-transp');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();

var cbpAnimatedHeader = (function () {

    var docElem = document.documentElement,
        header = document.querySelector('.toggle-before'),
        didScroll = false,
        changeHeaderOn = 300;

    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'hdr-toggle');
        } else {
            classie.remove(header, 'hdr-toggle');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();


// Load is used to ensure all images have been loaded, impossible with document

jQuery(window).load(function () {



    // Takes the gutter width from the bottom margin of .post

    var gutter = parseInt(jQuery('.post').css('marginBottom'));
    var container = jQuery('#posts');



    // Creates an instance of Masonry on #posts

    container.masonry({
        gutter: 30,
        itemSelector: '.post',
        columnWidth: '.post',
        isFitWidth: true
    });



    // This code fires every time a user resizes the screen and only affects .post elements
    // whose parent class isn't .container. Triggers resize first so nothing looks weird.

    jQuery(window).bind('resize', function () {
        if (!jQuery('#posts').parent().hasClass('container')) {



            // Resets all widths to 'auto' to sterilize calculations

            post_width = jQuery('.post').width() + gutter;
            jQuery('#posts, body > #grid').css('width', 'auto');



            // Calculates how many .post elements will actually fit per row. Could this code be cleaner?

            posts_per_row = jQuery('#posts').innerWidth() / post_width;
            floor_posts_width = (Math.floor(posts_per_row) * post_width) - gutter;
            ceil_posts_width = (Math.ceil(posts_per_row) * post_width) - gutter;
            posts_width = (ceil_posts_width > jQuery('#posts').innerWidth()) ? floor_posts_width : ceil_posts_width;
            if (posts_width == jQuery('.post').width()) {
                posts_width = '100%';
            }



            // Ensures that all top-level elements have equal width and stay centered

            jQuery('#posts, #grid').css('width', posts_width);
            jQuery('#grid').css({
                'margin': '0 auto'
            });



        }
    }).trigger('resize');



});
$(document).ready(function() {
var movementStrength = 600;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("body").mousemove(function(e){
          var pageX = e.pageX - ($(window).width());
          var pageY = e.pageY - ($(window).height());
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#bg').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});
$(document).ready(function() {
var movementStrength = 600;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("body").mousemove(function(e){
          var pageX = e.pageX - ($(window).width());
          var pageY = e.pageY - ($(window).height());
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#bg_mirror').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});