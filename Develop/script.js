// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(doucment).ready(function() {
  // Adds click event listener to the save button
  $(".saveBtn").on("click", function() {
    // Gets the parent time block's id
    let timeBlockId = $(this).closest(".time-block").attr("id");
    let userInput = $(this).siblings(".description").val();
  });

    let currentDay = new Date().format(".hour");





});


