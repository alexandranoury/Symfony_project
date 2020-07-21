// $(document).ready(function() {
//   var $wrapper = $('.js-rep-log-table');
//   var repLogApp = new RepLogApp($wrapper);

//   window.RepLogApp = function ($wrapper) {
//     this.$wrapper.find('.js-new-rep-log-form').on(
//         'submit',
//         this.handleNewFormSubmit.bind(this)
//     );

//     $.extend(window.RepLogApp.prototype, {
//       handleNewFormSubmit: function(e) {
//           e.preventDefault();
//           var $form = $(e.currentTarget);

//           $.ajax({
//             url: $form.attr('action'),
//             method: 'POST',
//             data: $form.serialize(),
            
//         })
//        });
//        this.reset(); // formElement.reset()
//    }
      





window.onload = function(){
  
    /** Animation titre accueil */
    $('.title').animate({"left": "0"},1150);
     
}



var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom([".box1", ".tapis"], 1, {
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
// $('.hover').on('mouseenter', function(){
//     $(this).siblings().addClass('hide');
    
//  });


