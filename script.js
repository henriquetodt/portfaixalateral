document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-aos='fade-up']");
    
    function handleScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

