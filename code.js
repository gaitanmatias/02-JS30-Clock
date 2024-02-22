// Selecting HTML elements
let hoursHand = document.querySelector(".clock--hours-hand");
let minutesHand = document.querySelector(".clock--minutes-hand");
let secondsHand = document.querySelector(".clock--seconds-hand");

function clock (){
  // Getting date info
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let currentSeconds = currentDate.getSeconds();

  let degrees;
  
  // HOURS
    if (currentHour > 12) {
      let clockHour = currentHour - 12;
      degrees = ((currentMinutes * 6) / 60) + 90 + clockHour * 30;
      hoursHand.style.transform = `rotate(${degrees}deg)`;
    } else {
      degrees = ((currentMinutes * 6) / 60) + 90 + currentHour * 30;
      hoursHand.style.transform = `rotate(${degrees}deg)`;
    }
  
    // MINUTES
    degrees = ((currentSeconds * 6) / 60) + 90 + currentMinutes * 6;
    minutesHand.style.transform = `rotate(${degrees}deg)`;
  
    // SECONDS
    degrees = 90 + currentSeconds * 6;
    secondsHand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(clock, 1000);