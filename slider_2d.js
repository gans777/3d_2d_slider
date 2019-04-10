$(document).ready(function($){

    //$('#slider_down').find('img').attr('src');

    var vseImg=$("img").map(function(v_index,elem){  //собираются все ссылки на изображения

            var zx=$(elem).attr("src");
            console.log($(elem).attr("src"));
            return zx;

    });

    console.log('изобр 6 =' + vseImg[6]);
    console.log(vseImg[0]);
    $('.slider_ekran').append($("<img src='"+vseImg[0]+"' >").css({
        "position":"absolute",
        "top": 0,
        "left": "500px",
        "width":"300px",
        "zIndex": 7

    }));

    $('.slider_ekran').append($("<img src='"+vseImg[1]+"' >").css({
        "position":"absolute",
        "top": "40px",
        "left": "470px",
        "width":"200px",
        "zIndex": 6
    }));

    $('.slider_ekran').append($("<img src='"+vseImg[2]+"' >").css({
        "position":"absolute",
        "top": "70px",
        "left": "450px",
        "width":"100px",
        "zIndex": 5
    }));
    /* право */
    $('.slider_ekran').append($("<img src='"+vseImg[1]+"' >").css({
        "position":"absolute",
        "top": "40px",
        "left": "670px",
        "width":"200px",
        "zIndex": 6
    }));

    $('.slider_ekran').append($("<img src='"+vseImg[2]+"' >").css({
        "position":"absolute",
        "top": "70px",
        "left": "650px",
        "width":"100px",
        "zIndex": 5
    }));


});