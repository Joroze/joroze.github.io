/*function adjust_body_offset() {
    $('body').css('padding-top', $('.navbar-default').outerHeight(true) + 'px' );
}

$(window).resize(adjust_body_offset);

$(document).ready(adjust_body_offset);

*/

$("button").on("touchstart", function(){ 
    $(this).removeClass("mobileHoverFix");
});
$("button").on("touchend", function(){ 
    $(this).addClass("mobileHoverFix");
});

setTimeout(function(){
        $(".element00").typed({
            strings: ["...", " a programmer"],
            typeSpeed: 70, // typing speed
            backDelay: 14000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 1000);

setTimeout(function(){
        $(".element0").typed({
            strings: ["- a problem solver"],
            typeSpeed: 55, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 2000);

setTimeout(function(){
        $(".element1").typed({
            strings: ["- organized and to the point"],
            typeSpeed: 45, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 5500);

setTimeout(function(){
        $(".element2").typed({
            strings: ["- open to new ideas", "- eager to learn"],
            typeSpeed: 40, // typing speed
            backDelay: 1000, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 9500);
