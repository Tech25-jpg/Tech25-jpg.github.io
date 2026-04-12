console.log("Web Dev Quest: Active");

function loadDailyTip() {
    const tips = [
        "Tip 1: Use semantic HTML tags for better accessibility.",
        "Tip 2: Always test your website on multiple browsers.",
        "Tip 3: Optimize images for faster load times.",
        "Tip 4: Use CSS Flexbox or Grid for responsive layouts.",
        "Tip 5: Keep your code organized and commented."
    ];

    const tipElement = document.getElementById("tip-content");

    if (tipElement) {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipElement.textContent = randomTip;
    } else {
        console.error("Element with ID 'tip-content' not found.");
    }
}

// Quiz Validation Logic
function validateQuiz() {
    const userInput = document.getElementById("quiz-answer").value;
if (userInput === "") {
        alert("Please enter an answer before submitting.");
        return false;
}
return true;
}

// window.onload = loadDailyTip;
window.onload = function() {
    loadDailyTip();
};

// Initiliaze jQuery 
$(function() {
    if ($("#accordion").length) {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content"
        });
    }
});

// CSS.html Playground Interactivity

// ID Selector Pop-up
$(document).ready(function() {
    $("#trigger-id").on("click", function() {

         $(".sample-box").addClass("disabled-box"); // Disables boxes when dialog is open
        
         $("#dialog-id").dialog({
            modal: true,
            draggable: false,
            resizable: false,
            buttons: {
                 "Close": function() {
                    $(this).dialog("close");
                    // Re-enables boxes after closing the dialog
                    $(".sample-box").removeClass("disabled-box");
                }
            }
        });
    });

    // Class Selector Pop-up
    $("#trigger-class").on("click", function() {

            $(".sample-box").addClass("disabled-box"); // Disables boxes when dialog is open

            $("#dialog-class").dialog({
            modal: true,
            draggable: false,
            resizable: false,
            buttons: {
                "Close": function() {
                    $(this).dialog("close");
                    // Re-enables boxes after closing the dialog
                    $(".sample-box").removeClass("disabled-box");
                }
            }
        });
    });

    // Type Selector Pop-up
    $("#trigger-type").on("click", function() {
        $("#dialog-type").dialog({
            modal: true,
            buttons: {
                "Close": function() {
                    $(this).dialog("close");
                     $(".sample-box").removeClass("disabled-box");
                }
            }
        });
    });
});

/* JS.html Playground Interactivity */
$(document).ready(function() {
    $("#greet-btn").on("click", function() {
        let name = prompt("What is your name?");
        if (name) {
            $("#logic-output").text("Welcome to the Logic Quest, " + name + "!");
            $("#logic-output").css("color", "#00703c"); // UNCC green color
        }
    });

    $("#math-btn").on("click", function() {
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));
        if (!isNaN(num1) && !isNaN(num2)) {
            let result = num1 + num2;
            $("#logic-output").text("The sum of " + num1 + " and " + num2 + " is " + result);
        } else {
            $("#logic-output").text("Please enter valid numbers.");
        }
    });

    $("#toggle-switch-btn").on("click", function() {
        $("#logic-output").toggleClass("highlight");
        let isHighlighted = $("#logic-output").hasClass("highlight");
        $("#logic-output").text(isHighlighted ? "Highlight ON" : "Highlight OFF");
    });
});