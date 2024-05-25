//        => DOM
// window => BOM (navigator, screen, location, frames, history, XMLHttpRequest)
//        => Javascript

function sayhi() {
  alert("Hello");
}
window.sayhi();

setTimeout(() => {
  document.body.style.background = "";
}, 4000);

setTimeout(() => {
  document.body.style.background = "orange";
}, 1000);
