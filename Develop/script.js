// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // Adds click event listener to the save button
  $(".saveBtn").on("click", function () {
    // Gets the parent time block's id
    let timeBlockId = $(this).closest(".time-block").attr("id");
    let userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  let currentHour = dayjs().hour();



  $(".time-block").each(function () {
    let timeBlockId = $(this).attr("id");
    let hour = parseInt(timeBlockId.split("-")[1]);

    let savedInput = localStorage.getItem(timeBlockId);
    if (savedInput !== null) {
      $(this).find(".description").val(savedInput);
    }

    if (hour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (hour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past").addClass("future");
    }
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

});


