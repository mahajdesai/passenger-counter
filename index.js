//document.getElementById("count-el").innerText = 15;


//Adding a Button
// initialize count as to 0
//listen for the clicks on the increment button


/* function increment() {
    console.log("The Button Was Clicked");
} */

//change the count-el in the HTML to reflect the counter app

//camelCase
//1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el"); // pass in arguments

console.log(saveEl);
let count = 0

function decrement() {
    count -= 1
    countEl.innerText = count;
}

function increment() {
    //change this to you use the plus equal technique you're learned
    count += 1
    countEl.textContent = count;
}


//create a function called save(), which logs out the count when it's called

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr;
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count);
}

function reset() {
    count = 0
    countEl.innerText = count;
}