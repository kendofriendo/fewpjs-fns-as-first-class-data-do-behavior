/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeOfDay) {
  const hour = parseInt(timeOfDay.split(":")[0])
  const minute = parseInt(timeOfDay.split(":")[1])
while ( hour < 12 ) {
  return "Good Morning"
}
while ( hour >= 17 ) {
  return "Good Evening"
}
while ( hour >= 12  )
  while ( hour < 17 ) {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage( greeting ) {
  document.getElementById("greeting").innerText = greeting;
}