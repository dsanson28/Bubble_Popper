// 2 Bubbles per second = 1 bubble every 500ms
setInterval(function () {
  // make a bubble
  // give it a random position
  // add it to the screen
  let newBubble = $(`<div class="bubble">`)
  newBubble.css({
    left: 50 + Math.floor(Math.random() * 600),
    top: 50 + Math.floor(Math.random() * 600)
  });
  $('#app').append(newBubble);
}, 500)

setInterval(function () {
  let bubbles = $('.bubble');

  for (let i = 0; i < bubbles.length; i++) {
    let nextBubble = $(bubbles[i]);

    let nextLeft = Number(nextBubble.css('left').substr(0, nextBubble.css('left').length - 2)) + 1;
    let nextTop = Number(nextBubble.css('top').substr(0, nextBubble.css('top').length - 2)) + 2;

    nextBubble.css({
      left: nextLeft,
      top: nextTop
    })
  }
}, 100)

$('#app').on('click', '.bubble', function (event) {
  $(this).fadeOut();
})