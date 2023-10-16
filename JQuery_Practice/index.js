// $("h1").css("color", "red");

$("div .BigTitle").click(function (event) {
    $("h1").addClass("big-title");
})

$("div .HideText").click(function (event) {
    $("h1").hide();
})

$("div .ShowText").click(function (event) {
    $("h1").show();
})

$("div .ToggleText").click(function (event) {
    $("h1").toggle();
})

$("div .FadeOut").click(function (event) {
    $("h1").fadeOut();
})

$("div .FadeIn").click(function (event) {
    $("h1").fadeIn();
})

$("div .FadeToggle").click(function (event) {
    $("h1").fadeToggle();
})

$("div .SlideUp").click(function (event) {
    $("h1").slideUp();
})

$("div .SlideDown").click(function (event) {
    $("h1").slideDown();
})

$("div .SlideToggle").click(function (event) {
    $("h1").slideToggle();
})

$("div .Opacity").click(function (event) {
    $("h1").animate({opacity : 0.5}); //custom animation -- {element : <numeric value>}
})

$("div .Animate").click(function (event) {
    $("h1").fadeOut().fadeIn().slideUp().slideDown().animate({opacity : 0.5}).animate({opacity : 1}); //custom animation -- {element : <numeric value>}
})

$(document).keypress(function(event){
    $("h1").text(event.key);
})


$("h1").on("click",function(){
    $("h1").css("color", "Green")
})

// Display Me
$(document).ready(function () { 
  
    // On button click, get value 
    // of input control Show alert 
    // message box 
    $(".displayMe").click(function () { 
        var inputString = $("input").val(); 
        $("h1").text(inputString) 
    }); 
}); 

// Adding html Properties 

$("p").before("<button>Before</button>")
$("p").after("<button>After</button>")
$("p").prepend("<button>Prepend</button>")
$("p").append("<button>Append</button>")

// Remove html properties
// $("p").remove()

// Animation.

$(document).ready(function(){
    $(".Animation").click(function(){
      var div = $(".aroundMe");
    //   div.css("backgroundColor", "pink");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '200px', opacity: '0.4'}, "slow");
      div.animate({width: '200px', opacity: '0.8'}, "slow");

      div.animate({left: '250px'}, "slow");
      div.animate({fontSize: '3em'}, "slow");
    });
  });