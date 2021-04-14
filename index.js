/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeS){
  const splitT = timeS.replace(/:/g,'')
  const hour = parseInt(splitT, 10);
  if ( hour <= 1200 && hour >= 100) return "Good Morning"
  if ( hour >= 1700 && hour <= 2400) return "Good Evening"
  if ( hour >= 2500 || hour < 100 ) return "Please enter a valid time"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}
