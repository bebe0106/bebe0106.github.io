let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".blason",0.0001,{"z-index":-1})
  .to(".bg", 3, { y: -500 })
  .to(".content",3,{ y: -500 },"-=3")
  .to(".blason",3,{ y: 0 },"-=3")
  /*.to(".blason",3,{opacity: 0.5},"-=3")*/

  let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);