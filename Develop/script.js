// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(doucment).ready(function () {
  // Adds click event listener to the save button
  $(".saveBtn").on("click", function () {
    // Gets the parent time block's id
    let timeBlockId = $(this).closest(".time-block").attr("id");
    let userInput = $(this).siblings(".description").val();
  });

  let currentHour = dayjs().format("H");

  $(".time-block").each(function () {
    let timeBlockId = $(this).attr("id");
    let hour = parseInt(timeBlockId.split("-")[1]);

    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === "currentHour") {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

});


