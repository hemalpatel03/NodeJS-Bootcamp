// Problem 4: Arrays

// You're organizing a party and want to keep track of the guest list. Create an array called "guestList" and add the names of at least five guests. Then, write a program that checks if a given name is on the guest list. If the name is found, display "Welcome to the party, [name]!"; otherwise, display "Sorry, you're not on the guest list."

const guestList = ["Alice", "Bod", "Charlie", "David", "Eve"];

const nameToCheck = prompt("Enter the name:");
if(guestList.includes(nameToCheck)){
    console.log(`Welcome to the party, ${nameToCheck}!`);
}else{
    console.log("Sorry, you're not on the guest list.");
}