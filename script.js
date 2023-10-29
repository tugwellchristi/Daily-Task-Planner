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

    // Display saved to local storage message
    $("#localStorage").show();
  });

  // Uses dayjs library for date and time
  let currentHour = dayjs().hour();

  // Works through the time block element, identifying each hour as it passes
  $(".time-block").each(function () {
    let timeBlockId = $(this).attr("id");
    let hour = parseInt(timeBlockId.split("-")[1]);

    // Gets saved input from local storage and sets it to each the respective time block
    let savedInput = localStorage.getItem(timeBlockId);
    if (savedInput !== null) {
      $(this).find(".description").val(savedInput);
    }

    // If loop that adds and removes past, present and future classes based on the current hour, implementing the correct color
    if (hour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (hour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past").addClass("future");
    }
  });

  // When clicked, clears local storage and restores a fresh scheduler
  $(".clearBtn").on("click", function () {
    localStorage.clear();
    $(".description").val("");
    // Hides saved to local storage message upon clearing all time-block boxes and local storage
    $("#localStorage").hide();
  });

  // Displays current date and time in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  $("#currentTime").text(dayjs().format("H:mm"));
});


