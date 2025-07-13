


document.addEventListener('DOMContentLoaded', function () {
    const titles = ["Black", "Sujuki", "Yamaha","heloo","world"];
     const subheadings = ["Black", "Sujuki", "Yamaha","heloo","world"];
    const models = [
        "asset/cafe_racer_motorcycle.glb",
        "asset/kawashaki_ninja_h2.glb",
        "asset/classic_motorbike.glb",
        "asset/1.glb",
        "asset/2.glb",
    ];
    const bgColors = [
        "#000000",
        "#DDF6D2",
        "#064e3b",
        "#F14A00",
         "#2F5249",
        "#555879",
    ];

    let index = 0;
    const roleElement = document.getElementById('role');
    const profileModel = document.getElementById('honda');
    const subheading = document.getElementById('subheading');

    const body = document.body; // background change karne ke liye

    // Initial animation
    // gsap.to("#greeting", { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    gsap.to("#subheading", { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
    gsap.to("#role", { opacity: 1, y: 0, duration: 0.8, delay: 0.6 });
    // gsap.to("#cta-button", { opacity: 1, y: 0, duration: 0.8, delay: 0.8 });
    // gsap.to("#image-container", { opacity: 1, scale: 1, duration: 0.8, delay: 1 });

    // Set initial background color
    body.style.backgroundColor = bgColors[index];

    // Role switcher
    setInterval(() => {
        index = (index + 1) % titles.length;
         index = (index + 1) % subheadings.length;

        // Update role text
        gsap.to(roleElement, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            onComplete: () => {
                roleElement.textContent = titles[index];
                gsap.to(roleElement, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                });
            }
        });
        gsap.to(subheading, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            onComplete: () => {
                subheading.textContent = subheadings[index];
                gsap.to(roleElement, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                });
            }
        });


        // Update 3D model
        gsap.to(profileModel, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            onComplete: () => {
                profileModel.setAttribute("src", models[index]);

                // Change background color
                gsap.to(body, {
                    backgroundColor: bgColors[index],
                    duration: 1
                });

                gsap.to(profileModel, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5
                });
            }
        });
    }, 8000);
});

// gsap.registerPlugin(ScrollTrigger);
// var tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#main",
//       start: "0% 80%",
//       end: "70% 50%",
//       // rotateX: 90, 
//       scrub: 1,
//       // markers: true     
//     }
//   });
//   tl2.to("#honda", {
//     height: "60%",
//     top: "215%",
//     left: "40%",
//   }, 'fanta')
  