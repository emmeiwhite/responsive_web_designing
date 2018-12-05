$(document).ready(function() {
  $(".btn-nav").on("click", function() {
    $(".navigation").slideToggle("normal", function() {
      if ($(".navigation").is(":visible")) {
        $(".btn-nav").text("Hide Navigation");
      } else {
        $(".btn-nav").text("Show Navigation");
      }
    });
  });
});
