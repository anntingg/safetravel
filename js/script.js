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

// title-m effect
const titleM = document.querySelectorAll('.title-m');

const handleTitleM = () => {
    titleM.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;

        if (titleTop < (window.innerHeight / 2)) {
            title.classList.add("active");
        } else {
            title.classList.remove("active");
        }
    });
};
handleTitleM();
window.addEventListener("scroll", handleTitleM);
window.addEventListener("resize", handleTitleM);

// booking section - circle effect

const steps = document.querySelectorAll(".step");

const handleStep = () => {
    steps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;

        if (stepTop < (window.innerHeight / 2)) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}
handleStep();
window.addEventListener("scroll", handleStep);
window.addEventListener("resize", handleStep);

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