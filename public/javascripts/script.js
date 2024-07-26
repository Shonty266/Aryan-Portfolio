function menuBar() {
    const menu = document.querySelector('#menu');
    const close = document.querySelector('.close');
    const bars = document.querySelector('.bars');


    bars.addEventListener("click", () => {
        menu.classList.toggle('hidden');
        close.classList.toggle('hidden');
        bars.classList.toggle('hidden');
    })

    close.addEventListener("click", () => {
        menu.classList.toggle('hidden');
        close.classList.toggle('hidden');
        bars.classList.toggle('hidden');
    })
}
menuBar()

function reload(){
    window.onload = function() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 0);
    }
  }

  reload();


const texts = document.querySelectorAll('.intro-text');

// Loop through each element in NodeList
texts.forEach(text => {
    const textAnimation = gsap.to(text, {
        duration: 1.6,
        y: -25,
        ease: 'power2.inOut',
        paused: true
    });

    // Event listener for mouseenter
    text.addEventListener('mouseenter', () => {
        // Play the animation forward
        textAnimation.play();
        
        // Reverse the animation when it completes
        textAnimation.eventCallback("onComplete", () => {
            textAnimation.reverse();
        });
    });
});

var tl = gsap.timeline();


tl.from('.links', {
    y: -120,
    duration: 0.5,
    opacity: 0,
    stagger: 0.10, // Stagger each element by 0.2 seconds
});

// gsap.from('.links', {
//     y: -120,
//     duration: 1,
//     opacity: 0,
//     stagger: 0.2, // Stagger each element by 0.2 seconds
// });

tl.from('.nav-center', {
    duration: 0.5, // Duration of the animation
    rotationX : 360, // Rotate around the Y axis
    ease: 'linear',
    opacity:0 // Linear easing for constant speed
});

tl.from('.social', {
    y: -120,
    duration: 0.5,
    opacity: 0,
    // delay:1,
    stagger: 0.10, // Stagger each element by 0.2 seconds
});

gsap.from('.section2', {
    scrollTrigger: {
        trigger: '.work',
        start: 'top 75%', // Start the animation when the top of the trigger hits 75% from the top of the viewport
        end: 'top 55%', // End the animation when the bottom of the trigger hits 25% from the top of the viewport
        scrub: true, // Link animation progress to the scroll progress
        // markers: true // Show scroll trigger markers (for debugging purposes)
    },
    opacity: 0, // Initial opacity
    y: 100, // Initial vertical offset // Stagger the animation for each box
    duration: 1, // Duration of the animation for each box
    ease: 'power1.out' // Easing function
});

tl.from('.section1', {
    duration:1,
    y:20,
    opacity:0,
    }
)



// tl.from('.section2', {
//     duration:1,
//     opacity:0,
//     }
// )

tl.from('.section3', {
    duration:1,
    opacity:0,
    }
)


gsap.from('.hr-heading', {
    x:-120,
    duration:3,
    opacity:0,
    scrollTrigger:{
    trigger:".hr-heading",
    scroller:"body",
    start:"top 60%",
    end: "top 80%",
    //   markers:true,
scrub:2,
    }
})





const images = document.querySelectorAll('.abt-image');

// Loop through each element in NodeList
images.forEach(image => {
    const textAnimation = gsap.to(image, {
        duration: 3,
        y: -10,
        ease: 'power2.inOut',
        repeat: -1, // Repeat infinitely
        yoyo: true,// Reverse the animation smoothly
    });

    // Play the animation initially
    textAnimation.play();
});

// const images = document.querySelectorAll('.abt-image');

// // Loop through each element in NodeList
// images.forEach(image => {
//     const pulseAnimation = gsap.to(image, {
//         duration: 5,
//         scale: 1.1,
//         ease: 'power2.inOut',
//         repeat: -1, // Repeat infinitely
//         yoyo: true, // Reverse the animation smoothly
//     });

//     // Play the animation initially
//     pulseAnimation.play();
// });

// const images = document.querySelectorAll('.abt-image');

// // Loop through each element in NodeList
// images.forEach(image => {
//     const rotateAnimation = gsap.to(image, {
//         duration: 10,
//         rotationY: 360,
//         ease: 'power2.inOut',
//         repeat: -1, // Repeat infinitely
//         yoyo: true, // Reverse the animation smoothly
//     });

//     // Play the animation initially
//     rotateAnimation.play();
// });




const blobs = document.querySelectorAll('.blob');

// Loop through each element in NodeList
blobs.forEach(blob => {
    const textAnimation = gsap.to(blob, {
        duration: 3,
        x: 20, // Move 20 pixels to the right
        y: -20, // Move 20 pixels upwards
        ease: 'power2.inOut',
        repeat: -1, // Repeat infinitely
        yoyo: true // Reverse the animation smoothly
    });

    // Play the animation initially
    textAnimation.play();
});

const blob2 = document.querySelectorAll('.blob2');

// Loop through each element in NodeList
blob2.forEach(blob => {
    const textAnimation = gsap.to(blob, {
        duration: 3,
        scale:0.5, // Move 20 pixels upwards
        ease: 'power2.inOut',
        repeat: -1, // Repeat infinitely
        yoyo: true ,
        delay:2// Reverse the animation smoothly
    });

    // Play the animation initially
    textAnimation.play();
});


// const nameElements = document.querySelectorAll('.anime-text');

// // Loop through each element in NodeList
// nameElements.forEach(name => {
//     const textAnimation = gsap.fromTo(name, 
//         { // Starting position
//             x: -50,
//             y: 50
//         }, 
//         { // Ending position
//             duration: 10,
//             x: 50, // Move 100 pixels to the right
//             y: -50, // Move until 100 pixels upwards
//             ease: 'power2.inOut',
//             repeat: -1, // Repeat infinitely
//             yoyo: true // Reverse the animation smoothly
//         }
//     );

//     // Play the animation initially
//     textAnimation.play();
// });


// const textElements = document.querySelectorAll('.anime-text');

// textElements.forEach(textElement => {
//   const textAnimation = gsap.to(textElement, {
//     duration: 3,
//     ease: 'power2.inOut',
//     repeat: -1, // Repeat infinitely
//     yoyo: true, // Reverse the animation smoothly
//     repeatDelay: 10, // Delay after each animation cycle
//   });

//   // Play the animation initially
//   textAnimation.play();
// });
// document.querySelectorAll('.n span').forEach((span, index) => {
//     span.style.animationDelay = `${5}s`;})






