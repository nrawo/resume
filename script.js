/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },

        {
            threshold: 0.10
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   MOUSE GLASS EFFECT
========================================= */

const glassCards =
    document.querySelectorAll(".glass");


glassCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -3;


        const rotateY =
            ((x / rect.width) - 0.5) * 3;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-4px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



/* =========================================
   AMBIENT MOUSE MOVEMENT
========================================= */

const glows =
    document.querySelectorAll(".glow");


window.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth) - 0.5;


    const y =
        (event.clientY / window.innerHeight) - 0.5;


    glows.forEach((glow, index) => {

        const strength =
            (index + 1) * 8;


        glow.style.marginLeft =
            `${x * strength}px`;


        glow.style.marginTop =
            `${y * strength}px`;

    });

});



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".navigation a");


function updateNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 220;


        if (
            window.scrollY >=
            sectionTop
        ) {

            currentSection =
                section.id;

        }

    });


    navigationLinks.forEach((link) => {

        const target =
            link.getAttribute("href")
            .replace("#", "");


        if (target === currentSection) {

            link.style.color =
                "#c798ff";

        } else {

            link.style.color = "";

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);


updateNavigation();



/* =========================================
   SMOOTH ANCHOR FALLBACK
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });



/* =========================================
   CONTACT BUTTON RIPPLE
========================================= */

const contactButtons =
    document.querySelectorAll(
        ".contact-button, .btn"
    );


contactButtons.forEach((button) => {

    button.addEventListener(
        "mousedown",
        () => {

            button.style.transform =
                "scale(.98)";

        }
    );


    button.addEventListener(
        "mouseup",
        () => {

            button.style.transform = "";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform = "";

        }
    );

});