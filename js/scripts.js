$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
