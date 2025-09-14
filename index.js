

let names = ('charlie', 'samip','ali')

// Define the writeCards function that takes in an array of names and an event name
function writeCards(names ,birthday) {
  
  // Create a new empty array to hold the thank-you messages
  let messages = [];

  // Use a for loop to iterate over the names array
  for (let i = 0; i < names.length; i++) {
    // Create a personalized thank-you message using string interpolation
    let message = `Thank you, ${names[i]}, for the wonderful ${birthday} gift!`;
    
    // Add the message to the messages array
    messages.push(message);
  }

  // After the loop finishes, return the array of messages
  return messages;
}

console.log(writeCards(['charlie'],'birthday'))


// Define a function that counts down from a given number to 0
function countDown(startingNumber) {
  // While the number is greater than or equal to 0
  while (startingNumber >= 0) {
    // Log the current number
    console.log(startingNumber);

    // Decrement the number by 1
    startingNumber--;
  }
}

countDown(9);

