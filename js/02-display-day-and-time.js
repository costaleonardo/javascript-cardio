/*

  2. Display day and time
  - Write a JavaScript program to display the current
  day and time in the following format.
  ex. Today is Friday. Current time is 4 PM:50:22

*/

const displayTimeAndDate = () => {
  // Initialize Date
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
  // Get day of the week
  const day = days[date.getDay()];
  // Get current hour
  const hour = date.getHours();
  // Get current minutes
  const minutes = date.getMinutes();
  // Get current seconds
  const seconds = date.getSeconds();
  // Check for AM or PM
  const prepand = (hour >= 12) ? 'PM' : 'AM';

  console.log(`Today is ${day}. Current time is ${hour}:${minutes}:${seconds} ${prepand}.`);
}

displayTimeAndDate();
