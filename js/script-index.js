// banner effect
// temporarily disable wheel function when the animation is playing
const animationDuration = 2300;     // 2.3s
function disableScroll(event) {
    event.preventDefault();
}

window.addEventListener("wheel", disableScroll, { passive: false });

setTimeout(() => {
    window.removeEventListener("wheel", disableScroll);
}, animationDuration);
// scrollTo the top when the page is reloaded
window.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
});

// booking section - circle effect
const handleStep = () => {
    const steps = document.querySelectorAll(".step");

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


// about section - parallax scrolling effect
window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector("#about");
    const borderBox = document.querySelector(".border");
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;

    const intro1 = document.querySelector(".intro1");
    const intro2 = document.querySelector(".intro2");
    const intro3 = document.querySelector(".intro3");

    if (aboutSectionTop <= 0 && aboutSectionBottom >= window.innerHeight) {
        let translateValue1 = Math.max(aboutSectionTop, -250);
        let translateValue2 = Math.max(aboutSectionTop, -500);
        let scale1 = 1 - Math.abs(aboutSectionTop - 500) / window.innerHeight / 10;
        let scale2 = 1 - Math.abs(aboutSectionTop) / window.innerHeight / 10;

        borderBox.style.transform = `translateY(${-aboutSectionTop}px)`;
        intro1.style.transform = `scale(1)`;
        intro2.style.transform = `translateY(${translateValue1}px)`;
        intro3.style.transform = `translateY(${translateValue2}px)`;

        if (aboutSectionTop < -100) {
            intro1.style.transform = `scale(${scale1})`;
        }
        if (aboutSectionTop < -350) {
            intro2.style.transform = `translateY(${translateValue1}px) scale(${scale2})`;
        }
    }

    if (aboutSectionTop < (window.innerHeight / 2)) {
        borderBox.classList.add("active");
    }

});


// section effect
// const handleSection = () => {
//     const sections = document.querySelectorAll("section");

//     sections.forEach(section => {
//         const sectionBottom = section.getBoundingClientRect().bottom;

//         if (sectionBottom < (window.innerHeight / 3 * 2)) {
//             section.classList.add("fade-out");
//         } else {
//             section.classList.remove("fade-out");
//         }
//     });
// };
// handleSection();
// window.addEventListener("scroll", handleSection);
// window.addEventListener("resize", handleSection);