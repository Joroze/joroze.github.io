/*function adjust_body_offset() {
    $('body').css('padding-top', $('.navbar-default').outerHeight(true) + 'px' );
}

$(window).resize(adjust_body_offset);

$(document).ready(adjust_body_offset);

*/

setTimeout(function(){
        $(".element0").typed({
            strings: ["- open to new ideas and eager to learn"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        })(jQuery);
    }, 0);

setTimeout(function(){
        $(".element1").css("display", "inherit");
        $(".element1").typed({
            strings: ["- able to think outside the box"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        })(jQuery);
    }, 2000);

setTimeout(function(){
        $(".element2").css("display", "inherit");
        $(".element2").typed({
            strings: ["- organized and to the point"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        })(jQuery);
    }, 4000);
