/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyRate = 35;
var selectedDays = new Set(); 

var dayButtons = document.querySelectorAll(".day-selector li");
var fullBtn = document.getElementById("full");
var halfBtn = document.getElementById("half");
var clearBtn = document.getElementById("clear-button");
var costOutput = document.getElementById("calculated-cost");

fullBtn.classList.add("clicked");
costOutput.innerHTML = "0";

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        var dayName = button.id;

        if (button.classList.contains("clicked")) {
            button.classList.remove("clicked");
            selectedDays.delete(dayName);
        } else {
            button.classList.add("clicked");
            selectedDays.add(dayName);
        }

        calculateTotal();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener("click", function() {
    dayButtons.forEach(function(button) {
        button.classList.remove("clicked");
    });

    selectedDays.clear();
    calculateTotal();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfBtn.addEventListener("click", function() {
    dailyRate = 20;
    halfBtn.classList.add("clicked");
    fullBtn.classList.remove("clicked");
    calculateTotal();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullBtn.addEventListener("click", function() {
    dailyRate = 35;
    fullBtn.classList.add("clicked");
    halfBtn.classList.remove("clicked");
    calculateTotal();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotal() {
    var total = selectedDays.size * dailyRate;
    costOutput.innerHTML = total;
}