const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// components
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempyear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempday = tempDate.getDate();
// let futureDate = new Date(2020,11,24,11,30,0);
const futureDate = new Date(tempyear, tempMonth, tempday + 10, 11, 30 ,0 );
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} , ${day} ${month} ${year} ${hours}:${mins}am`;


// console.log(futureDate);

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);

  // formulae
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const  oneHour = 60*60*1000;
  const oneMinute = 60 * 1000;

  // calculate days
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t%oneDay) / oneHour);
  let mins = Math.floor((t%oneHour) / oneMinute);
  let secs = Math.floor((t%oneMinute) / 1000);

  // console.log(hours);

  // set values array
  const values = [days, hours, mins, secs];

  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  })

  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired </h4>`;
  }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
