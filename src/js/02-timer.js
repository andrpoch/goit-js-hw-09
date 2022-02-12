import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateSelected(selectedDates[0]);
  },
};
flatpickr("#datetime-picker", options);


const inputDate = document.getElementById('datetime-picker');
const start = document.querySelector("[data-start]");
const deltaTime = document.querySelector('.timer');
const deltaDays = document.querySelector('[data-days]');
const deltaHours = document.querySelector('[data-hours]');
const deltaMinutes = document.querySelector('[data-minutes]');
const deltaSeconds = document.querySelector('[data-seconds]');


start.disabled = true;
  let selectedDate = null;
  let intervalId = null;
  const dateNow = new Date();
  const dateSelected = date => {
    selectedDate = date;
    const dateNow = new Date();
  if (date.getTime() < dateNow.getTime()) {
    start.disabled = true;
    Notiflix.Notify.failure('Please choose a date in the future');
  return;
  }
  start.disabled = false;
  intervalId = setInterval(intervalDeltaTime, 1000);
  };
  const intervalDeltaTime = () => {
    const dateNow = new Date();
  if (dateNow.getTime() < selectedDate.getTime) {
  clearInterval(intervalId);
  }
  const deltaMs = selectedDate.getTime() - dateNow.getTime();
  const { days, hours, minutes, seconds } = convertMs(deltaMs);
  addLeadingZero(days, deltaDays);
  addLeadingZero(hours, deltaHours);
  addLeadingZero(minutes,deltaMinutes);
  addLeadingZero(seconds, deltaSeconds);
   };
   start.addEventListener('click', () => {
    start.disabled = true;
   });
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
    
  }
  function addLeadingZero(value, element) {
  element.textContent = String(value).padStart(2, '0')
  }

document.body.style.boxShadow = '0 0 10px #212121';
document.body.style.backgroundColor = '#eee';
document.body.style.width = '800px';
document.body.style.padding = '30px';
start.style.fontSize ='40px';
start.style.alignItems ='centr';
start .style.marginLeft ='30px';
deltaTime.style.display ='flex';
deltaTime.style.justifyContent = 'space-around'
deltaTime.style.flexFlow = 'row nowrap';
deltaTime.style.textAlign ='centr';
deltaTime.style.fontSize ='30px';
inputDate.style.fontSize ='30px';
