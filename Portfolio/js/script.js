$(window).scroll(function(){
    var st = $(this).scrollTop();
    $(".baner_text").css({
        "transform" : "translate(0%, -" + st /3+ "%"
    });
    $(".scroll_arrow").css({
        "transform" : "translate(0%, -" + st /5+ "%"
    });
});