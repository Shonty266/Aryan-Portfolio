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

gsap.from('.navbar', {
    y:-120,
    duration:1,
    opacity:0,
    }
)

gsap.from('.section1', {
    duration:2,
    y:10,
    opacity:0,
    }
)

gsap.from('.section2', {
    duration:2,
    opacity:0,
    }
)

gsap.from('.section3', {
    duration:2,
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
        yoyo: true,
        delay:2 // Reverse the animation smoothly
    });

    // Play the animation initially
    textAnimation.play();
});


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




