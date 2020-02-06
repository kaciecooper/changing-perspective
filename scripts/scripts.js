// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!



////////////////////////////////////////////////////////////////Perspective Script

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('.rightside').hide();
  } else {
    $('.rightside').show();
  }
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('.upsidedown').show();
  } else {
    $('.upsidedown').hide();
  }
});




///////////////////////////////SECTION 1



  // init controller
  var controller = new ScrollMagic.Controller();
  // build scene
    new ScrollMagic.Scene({
              triggerElement: "#trigger-good",
              triggerHook: 1, // show, when scrolled 10% into view
              duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
              offset: 50 // move trigger to center of element
            })
            .setClassToggle("#reveal-good", "visible") // add class to reveal
            .addIndicators(

          

            ) // add indicators (requires plugin)
            .addTo(controller);


/////////////////////////////////////////////SECTION 3////////////////////////////////
  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = TweenMax.to("#animate", 0.5, {scale: 1.3, repeat: 5, yoyo: true});

  // build scene and set duration to window height
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "100%"})
          .setTween(tween)
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);


// build scene
    new ScrollMagic.Scene({
              triggerElement: "#trigger-quote",
              triggerHook: 0.9, // show, when scrolled 10% into view
              duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
              offset: 50 // move trigger to center of element
            })
            .setClassToggle("#reveal-quote", "visible") // add class to reveal
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


// init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = TweenMax.to("#animate-bad", 0.5, {scale: 3, repeat: 5, yoyo: true});

  // build scene and set duration to window height
  var scene = new ScrollMagic.Scene({triggerElement: "#bad-place-trigger", duration: "100%"})
          .setTween(tween)
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);



});


