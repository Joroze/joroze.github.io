/*function adjust_body_offset() {
    $('body').css('padding-top', $('.navbar-default').outerHeight(true) + 'px' );
}

$(window).resize(adjust_body_offset);

$(document).ready(adjust_body_offset);

*/

setTimeout(function(){
        $(".element0").typed({
            strings: ["- open to new ideas"],
            typeSpeed: 55, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 1000);

setTimeout(function(){
        $(".element1").typed({
            strings: ["- organized", "- to the point"],
            typeSpeed: 45, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 4000);

(function(){
        $(".element2").typed({
            strings: ["- creative"],
            typeSpeed: 40, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 8000);
