const overlay = document.querySelector(".overlay");

const modal = document.querySelector(".modal");

const openButton = document.querySelectorAll("#open-modal-button");

const closeButton = document.querySelector("#close-modal-button");

// Add animation class to overlay and modal when open button is clicked
openButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Clicked");
    overlay.classList.add("show-overlay-animation");
    modal.classList.add("show-modal-animation");
  });
});

// Remove animation class from overlay and modal when close button is clicked
closeButton.addEventListener("click", () => {
  overlay.classList.remove("show-overlay-animation");
  modal.classList.remove("show-modal-animation");
});

// JavaScript code using jQuery
$(document).ready(function () {
  console.log("jQuery is ready!");

  // Features toggle
  $(document).ready(function () {
    // Hide all .feature__content divs except the first one on page load
    $(".feature__content").hide();
    $(".feature__content").first().show();

    // Handle click events on .feature_cta buttons
    $(".feature_cta").click(function () {
      // Toggle active class for buttons
      $(".feature_cta").removeClass("active");
      $(this).addClass("active");

      // Get the ID of the clicked button and find the corresponding content div
      const contentId = $(this).attr("id").replace("__btn", "");
      $(".feature__content").hide(); // Hide all content
      $("#" + contentId).fadeIn(400); // Show the corresponding content with fade-in effect
    });
  });

  // FAQ
  $(document).ready(function () {
    // Initially hide all .faq__answer elements
    $(".faq__answer").hide();

    // Handle click event on .faq__toggler
    $(".faq__toggler").click(function () {
      // Hide all .faq__answer elements
      $(".faq__answer").slideUp(300);

      // Reset all toggler icons to '+'
      $(".faq__toggler span:last-child").text("+");

      // Find the associated .faq__answer for this toggler
      const answer = $(this).next(".faq__answer");

      if (answer.is(":hidden")) {
        // Show the associated .faq__answer
        answer.slideDown(300);
        // Change the toggler icon to 'x'
        $(this).find("span:last-child").text("x");
      }
    });
  });

  //
  //
  //
  //
  // $(document).ready(function () {
  //   let currentIndex = 0;
  //   const featureContents = $(".feature__content");
  //   const featureButtons = $(".feature_cta");

  //   // Hide all .feature__content divs except the first one on page load
  //   featureContents.hide();
  //   featureContents.first().show();
  //   featureButtons.first().addClass("active"); // Set the first button as active

  //   // Function to show the next .feature__content and update the active button
  //   const showNextContent = () => {
  //     // Hide all content
  //     featureContents.hide();
  //     featureButtons.removeClass("active");

  //     // Show the next content based on the current index
  //     currentIndex = (currentIndex + 1) % featureContents.length;
  //     $(featureContents[currentIndex]).fadeIn(300); // Fade in the content with a nice transition
  //     $(featureButtons[currentIndex]).addClass("active"); // Add active class to the corresponding button
  //   };

  //   // Set an interval to automatically change the content every 10 seconds
  //   setInterval(showNextContent, 10000); // 10000 milliseconds = 10 seconds
  // });
});
