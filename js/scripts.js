$(document).ready(function() {
  $("button#green").click(function() {
    $("ul#user").prepend("<li>Green light means go!</li>");
    $("ul#webpage").prepend("<li>I will speed up</li>");
  });

  $("button#red").click(function() {
    $("ul#user").prepend("<li>STOP</li>");
    $("ul#webpage").prepend("<li>I will brake</li>");
  });

  $("button#yellow").click(function() {
    $("ul#user").prepend("<li>Slow down</li>");
    $("ul#webpage").prepend("<li>Ok, fine, I'm going too fast</li>");
  });

  $("button#bgcolor").mouseover(function() {
    $("h2").css('background-color', 'blue');
  });

  $("button#bgcolor").mouseleave(function() {
    $("h2").css('background-color', 'white');
  });

  $("h2").mouseover(function() {
    $(this).remove();
  });
 });
