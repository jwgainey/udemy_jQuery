// script.js

$(function() {

    //alert("Hello?");
        $('button').click(function() {
            $('#box').fadeOut(1000);
        });

        // $('h2,h3,h4').css('border','solid 1px red');
    
        // $('div#container').css('border','solid 1px red');
        // $('p.lead').css('border','solid 1px red');

        // $('li:even').css('border','solid 1px red');
        // $('div em').css('border','solid 1px red');

        // $('div > p').css('border','solid 1px red');
        // $(':header').css('border','solid 1px red');

        $(':contains("Joel")').css('border','solid 1px red');
});

