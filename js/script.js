$(function () {
    $(".nav-toggle").click(function () {
        $(".line").toggleClass("active");
        $(".navbar").toggleClass("active");
    });

    $("#btn-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#btn-top").stop().fadeTo("fast", 1);
        } else {
            $("#btn-top").stop().fadeOut();
        }
    });
})


