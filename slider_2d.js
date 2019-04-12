$(document).ready(function($){

    //$('#slider_down').find('img').attr('src');

    var vseImg=$("img").map(function(v_index,elem){  //собираются все ссылки на изображения

            var zx=$(elem).attr("src");
            console.log($(elem).attr("src"));
            return zx;

    });

    console.log('изобр 6 =' + vseImg[6]);
    console.log(vseImg[0]);


    /* второй от центра лево */

    $('.slider_ekran').append($("<img src='"+vseImg[0]+"' >").css({ //последний слева
        "position":"absolute",
        "top": "70px",
        "left": "450px",
        "width":"100px",
        "zIndex": 5
    }));

    /* первый от центра  лево*/

    $('.slider_ekran').append($("<img src='"+vseImg[1]+"' >").css({
        "position":"absolute",
        "top": "40px",
        "left": "470px",
        "width":"200px",
        "zIndex": 6
    }));
    /* центр */
    $('.slider_ekran').append($("<img src='"+vseImg[2]+"' >").css({ // центральный
        "position":"absolute",
        "top": 0,
        "left": "500px",
        "width":"300px",
        "zIndex": 7

    }));

    /* первый отцентра право */
    $('.slider_ekran').append($("<img src='"+vseImg[3]+"' >").css({
        "position":"absolute",
        "top": "40px",
        "left": "620px",
        "width":"200px",
        "zIndex": 6
    }));

    /* второй от центра право */
    $('.slider_ekran').append($("<img src='"+vseImg[4]+"' >").css({
        "position":"absolute",
        "top": "70px",
        "left": "740px",
        "width":"100px",
        "zIndex": 5
    }));

    /*переход от правого первого к центру */
    $('.slider_ekran>img[src="'+vseImg[3]+'"]').animate({
        top: 0,
        left: "500px",
        width:"300px",
        opacity: 0.6,

    },1000, function() {
        $('.slider_ekran>img[src="'+vseImg[3]+'"]').animate({
            zIndex: 6,
            opacity: 1
        });
    });

    //css("border","5px solid red");
     /* Переход от центра к левому первому */
     $('.slider_ekran>img[src="'+vseImg[2]+'"]').animate({
         width: "200px",
         left: "470px",
         top: "40px",
         opacity: 0.5,
         zIndex: 6
     },1000, function(){
         $('.slider_ekran>img[src="'+vseImg[2]+'"]').animate({
             opacity: 1
         });
     }); //css("border","2px solid red");
});