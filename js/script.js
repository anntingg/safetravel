$(function () {
    $(".nav-toggle").click(function () {
        $(".line").toggleClass("active");
        $(".navbar").toggleClass("active");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#btn-top").stop().fadeTo("fast", 1);
        } else {
            $("#btn-top").stop().fadeOut();
        }
    });
})


