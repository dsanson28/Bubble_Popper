let BUBBLES = [];

const app = $('#app');

function makeNewBubble() {
  const _width = app.width();
  const _height = app.height();

  let newBubble = {
    position: {
      top: Math.floor(Math.random() * _height),
      left: Math.floor(Math.random() * _width),
    },
    direction: {
      top: Math.floor(Math.random() * 5) - 2,
      left: Math.floor(Math.random() * 5) - 2
    }
  }

  return newBubble;
}

function makeBubbleElement(bubble) {
  return $(`<div class="bubble">`).css({
    top: bubble.position.top,
    left: bubble.position.left
  }).data('me', bubble);
}

function updateBubbleElement(bubbleElement) {
  let bubble = bubbleElement.data('me');

  bubbleElement.css({
    top: bubble.position.top,
    left: bubble.position.left
  });
}

setInterval(function () {
  let newBubble = makeNewBubble();
  let newBubbleElement = makeBubbleElement( newBubble );

  BUBBLES.push(newBubbleElement);

  app.append(newBubbleElement);

  console.log(BUBBLES.length);
}, 1000)

setInterval(function () {
  BUBBLES.forEach(function (bubbleElement) {
    const bubble = bubbleElement.data('me');
    bubble.position.top += bubble.direction.top;
    bubble.position.left += bubble.direction.left;

    updateBubbleElement(bubbleElement);
  })
}, 30);

$('#app').on('click', '.bubble', function (event) {
  const bubbleTarget = $(event.target);

  bubbleTarget.fadeOut(400, function () {
    BUBBLES = BUBBLES.filter(function(bubbleElement) {
      return bubbleElement !== bubbleTarget;
    });

    console.log(BUBBLES.length);
  });
});
