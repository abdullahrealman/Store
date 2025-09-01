const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
})

function videoconanimation() {
  var videocon = document.querySelector("#videocontainer");
var playbtn = document.querySelector("#play");

videocon.addEventListener("mouseenter", function() {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1
  });
});
videocon.addEventListener("mouseleave", function() {
  gsap.to(playbtn, {
    scale: 0,
    opacity: 0
  })
})
videocon.addEventListener("mousemove", function(dest) {
  gsap.to(playbtn, {
    left: dest.x - 60,
    top: dest.y - 70
  })
})
  
}
videoconanimation()
function loadinganimation() {
  gsap.from("#page1 h1",
{
  y: 100,
  opacity: 0,
  duration: 0.7,
  delay: 0.2,
  stagger: 0.3
})
}
loadinganimation()
function videoanimation() {
  gsap.from("#page1 #videocontainer",
{
  scale: 0.9,
  opacity: 0,
  duration: 0.3,
  delay: 1.3,
  
})
}
videoanimation()

document.addEventListener("mousemove",function(dets) {
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
 }) 
})


document.querySelectorAll(".child").forEach (function(elem) {
  elem.addEventListener("mouseenter",function(){
   gsap.to("#cursor", {
transform: "translate(-50%,-50%) scale(1)",
})
})

elem.addEventListener("mouseleave",function(){
   gsap.to("#cursor", {
transform: "translate(-50%,-50%) scale(0)",
})
})
})