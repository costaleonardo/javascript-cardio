/*

  2. Display day and time
  - Write a JavaScript program to display the current
  day and time in the following format.
  ex. Today is Friday. Current time is 4 PM:50:22

*/

const displayTimeAndDate = () => {
  const date = new Date();   // Initialize Date
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
  const day = days[date.getDay()];   // Get day of the week
  const hour = date.getHours();   // Get current hour
  const minutes = date.getMinutes();   // Get current minutes
  const seconds = date.getSeconds();   // Get current seconds
  const prepand = (hour >= 12) ? 'PM' : 'AM';   // Check for AM or PM

  // Print current day to he console
  console.log(`Today is ${day}. Current time is ${hour}:${minutes}:${seconds} ${prepand}.`);
}

displayTimeAndDate();
