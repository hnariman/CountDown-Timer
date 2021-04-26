var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
const dayEl = document.querySelector("#day");
const hoursEl = document.querySelector("#hours");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const start = document.querySelector(".start");


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
 
  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
      dayEl.innerText = days;
       hoursEl.innerText = hours;
       minuteEl.innerText = minutes;
       secondEl.innerText = seconds;
  

    
   
  
}, 1000);


