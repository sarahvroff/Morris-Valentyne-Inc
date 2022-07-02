/*
Hey 👋 I'm Sarah Roff, developer of this site! 

A little bit about me...

    - I'm a full time highschool student from Toronto, Canada
    - I do freelance front-end development on the side (currently working on my fullstack skills as well!)
    - I'm an innovater @ The Knowledge Society
    - I'm super passionate about blockchain/web3!

You can find me on any of the platforms listed below, or shoot me an email at sarahroff2006@gmail.com, I'd love to hear from you!

    GitHub: https://github.com/sarahvroff
    LinkedIn: https://www.linkedin.com/in/sarahroff/
    Twitter: https://twitter.com/SarahRoff27
    Medium: https://medium.com/@sarahroff
    Instagram: https://www.instagram.com/sarah.vroff/
    Telegram: @sarahroff
    Discord: sarah.vroff #2765

“Truth can only be found in one place: the code.”
    - Robert C. Martin
*/

//MAKE SURE PAGE LOADS AT THE TOP
$(document).ready(function(){
    $(this).scrollTop(0);
});


//REPONSIVE BURGER MENU
function burgerMenu() {
    const nav = document.querySelector('nav');
    if (nav.className === 'default-nav') {
        nav.className += ' responsive-nav';
    } else {
        nav.className = 'default-nav';
    }
}

//HERO SECTION TWEENING
gsap.registerPlugin(ScrollTrigger);
gsap.set(".row1", {transformOrigin: "right center", rotation: -20})

gsap.to(".row1", {
    x: -400, //DIRECTION OF ANIMATION (NEGATIVE = LEFT)
    scrollTrigger: {
    trigger: ".row1",
    start: "top center", //TWEENING START POINT
    end: "+=4500", //TWEENING SPEED
    scrub: true,
    id: "scrub"
}
});

gsap.set(".row2", {transformOrigin: "right center", rotation: -20})
gsap.to(".row2", {
    x: 400, //DIRECTION OF ANIMATION (POSITIVE = RIGHT)
    scrollTrigger: {
    trigger: ".row2",
    start: "top center", //TWEENING START POINT
    end: "+=4500", //TWEENING SPEED
    scrub: true,
    id: "scrub"
}
});

//SERVICES ANIMATION
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -600; //START LOCATION
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 600; //START LOCATION
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 2, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); //ELEMENT IS HIDDEN FIRST
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } //ELEMENT IS HIDDEN FIRST
      });
    });
  });
