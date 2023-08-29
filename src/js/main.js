$(".navbar-toggler").on("hidden.bs.collapse", function () {
  console.log("calin");
});

//TODO:finish the resize for nav bar
$(window).resize(function () {
  var navbar_visible = $(".navbar-toggler").is(":visible");
  console.log(navbar_visible);
});
