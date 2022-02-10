function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body')

function disabled(a, b) {
   start.disabled = a;
   stop.disabled = b;
}

function onStart() {
   timerId = setInterval(() => {
      let result = getRandomHexColor();
      bodyColor.style.backgroundColor = result;
   }, 1000)
   disabled(true, false);
}

function onStop() {
   clearInterval(timerId);
   disabled(false, true);
}

start.addEventListener('click', onStart);
stop.addEventListener("click", onStop);

