// Very Important
// What's the scroll from the bottom?
let elem = document.body;
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

let scrollRight = elem.scrollWidth - elem.scrollLeft - elem.clientWidth;

// Place the ball in the field center
ball.style.left = Math.round(field.clientWidth / 2) + "px";
ball.style.top = Math.round(field.clientHeight / 2) + "px";
