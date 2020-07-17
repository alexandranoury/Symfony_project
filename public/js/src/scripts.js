window.onload = function(){
    TweenMax.from('.title', 2,{
        x: -900,
       
    })
    TweenMax.from('.hover', 2.5,{
        y: -500,
       
    })





   
}

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom([".box1", ".tapis"], 1.25, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  ease: Bounce.Out,
  stagger: {
    from: "left",
    amount: 0.25
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".title",
  triggerHook: 0
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 5
  // })
  .setTween(tl)
  .addTo(controller);



var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".box", 2, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  ease: Elastic.easeOut,
  stagger: {
    from: "center",
    amount: 0.25
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: ".section_box",
  triggerHook: 0
})
  // .addIndicators({
  //   colorTrigger: "white",
  //   colorStart: "white",
  //   colorEnd: "white",
  //   indent: 5
  // })
  .setTween(tl)
  .addTo(controller);





  $('.box').mouseenter(function(){
    $(this).children().fadeToggle("slow");
    $(this).css("background-color", "#E8EAED");
    
    });

$('.box').mouseleave(function(){
    $(this).children().fadeToggle("3000");
    $(this).css("background-color", "#f3f4f6");
    
    });

$('.mobile').hide();
$('.burger').click(function() {
    $('.mobile').fadeToggle("1500");
})
$('.hover').on('mouseenter', function(){
    $(this).siblings().addClass('hide');
    
 });

// $('.hover').on('mouseleave', function() {
//    $(this).siblings().removeClass('hide');
         
// });
