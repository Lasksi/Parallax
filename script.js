let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
/*let scroller = new SmoothScroll({
    target: document.querySelector("container"), // element container to scroll
    scrollEase: 0.1, // scroll speed
    maxOffset: 500
  });
*/
/*TweenLite.set(contentToScroll, {
    y: -window.scrollY
  });
smooth scroll
  */
timeline
    .to(".frontmountains", 3, {y: -200})
    .to(".main-title", 3, {y:-450},"-=3")
    .fromTo(".sharpmole", {y:0}, {y:-200, duration: 2},"-=3")
    /*.to(".sharp mole", 3, {y:-200},"-=3")*/
    .fromTo(".background", {y:2}, {y:-150, duration: 3},"-=3")
    /*.to(".background", 3, {y:-150},"-=3")*/
    /* .fromTo(".content", {y:0}, {y:-200, duration: 3},"-=3") no worky*/
    .to(".content", 3, {top:"0%"},"-=3")
    .fromTo('.content-images', {opacity:0.5}, {opacity:1, duration: 2});

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "150%",
    triggerHook: 0.,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);

/*
timeline.fromTo(".text", {opacity:0}, {opacity:1, duration: 3}) 
fades in Text, relies on gsap script
*/
/* 
timeline
.to('.text', 5, {x:500})
.to('.content-images', 2, {opacity: 0}, '-=2');
*/