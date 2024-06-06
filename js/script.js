// hamburger menu & top button
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

// banner
/*
window.addEventListener("scroll", () => {
    const banner = document.querySelector("#banner-index");
    const bannerImg = document.querySelector("#banner-index img");
    const aboutSection = document.querySelector("#about");

    let bannerHeight = banner.offsetHeight;
    let aboutSectionTop = aboutSection.getBoundingClientRect().top;

    let newWidth = 32 + (window.scrollY / 2);
    newWidth = Math.min(newWidth, 100);

    bannerImg.style.width = newWidth + 'vw';
    bannerImg.style.height = newWidth + 'vw';

    if (newWidth === 100 ) {
        banner.classList.remove("fixed");
    } else {
        banner.classList.add("fixed");
    }
});
*/