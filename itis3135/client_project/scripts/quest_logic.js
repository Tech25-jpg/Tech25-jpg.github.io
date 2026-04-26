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

// window.onload = loadDailyTip;
window.onload = function() {
    loadDailyTip();
};

// Quiz Validation Logic
function validateQuiz() {
    const userInput = document.getElementById("quiz-answer").value;
if (userInput === "") {
        alert("Please enter an answer before submitting.");
        return false;
}
return true;
}

// Initiliaze jQuery
$(document).ready(function() {

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

/* Module Unlocking Logic / 2026-04-25 */
function unlockNextModule(nextModule) {
    localStorage.setItem('quest_' + nextModule, 'unlocked');
    window.location.href = nextModule + ".html"; // Redirect to the next module page
}

function checkProgress() {
    const levels = ['css', 'js', 'quiz'];
    const unlockLogic = () => {
        levels.forEach(module => {
        if (localStorage.getItem('quest_' + module) === 'unlocked') {
            const navLink = document.getElementById('nav-' + module);
            if (navLink) {
                navLink.classList.remove('locked');
                navLink.innerHTML = navLink.innerHTML.replace(' (🔒)', '');
                navLink.style.pointerEvents = "auto";
                navLink.style.opacity = "1";

            }
        }
    });
}

    // The mutation observer will watch for changes in the DOM and run the unlock logic whenever new nodes are added (like when the nav is loaded)
    const observer = new MutationObserver(() => {
        if (document.getElementById('nav-css')) {
            unlockLogic();
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    unlockLogic();
}

/* HTML Quiz */
function validateHTMLQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    const resultDiv = document.getElementById("quiz-result");

    if (!q1 || !q2 || !q3) {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "<p style='color: red;'>Please answer all questions before submitting.</p>";
        return;
    }

    if (q1.value === "b" && q2.value === "b" && q3.value === "a") {
        resultDiv.innerHTML = `
        <div class="quiz-success-message" style="border: 2px solid green; padding: 20px; border-radius: 10px; background-color: #d4edda; margin-top: 15px;">
            <p style="color: green; font-weight: bold;">Congratulations! You got all answers correct.</p>
            <p>Mastered HTML. CSS is now available!</p>
            <p>Click the button below to proceed:</p>
            <button type="button" onclick="unlockNextModule('css')">Proceed to CSS</button>
        </div>`;
    } else {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML = "<p style='color: orange;'>Some answers are incorrect. Please review the material and try again.</p>";
    }
}

/* CSS Quiz */
function validateCSSQuiz() {
    const q1 = document.querySelector('input[name="css-q1"]:checked');
    const q2 = document.querySelector('input[name="css-q2"]:checked');
    const q3 = document.querySelector('input[name="css-q3"]:checked');

    const resultDiv = document.getElementById("quiz-result");

    if (!q1 || !q2 || !q3) {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "<p style='color: red;'>Please answer all questions before submitting.</p>";
        return;
    }

    if (q1.value === "b" && q2.value === "c" && q3.value === "a") {
        resultDiv.innerHTML = `
        <div class="quiz-success-message" style="border: 2px solid green; padding: 20px; border-radius: 10px; background-color: #d4edda; margin-top: 15px;">
            <p style="color: green; font-weight: bold;">Congratulations! You got all answers correct.</p>
            <p>You have unlocked the next module.</p>
            <p>Click the button below to proceed:</p>
            <button type="button" onclick="unlockNextModule('js')">Proceed to Javascript</button>
        </div>
        `;
    } else {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML = "<p style='color: orange;'>Some answers are incorrect. Please review the material and try again.</p>";
    }
}

/* JavaScript Quiz */
function validateJSQuiz() {
    const q1 = document.querySelector('input[name="js-q1"]:checked');
    const q2 = document.querySelector('input[name="js-q2"]:checked');
    const q3 = document.querySelector('input[name="js-q3"]:checked');

    const resultDiv = document.getElementById("quiz-result");
    if (!q1 || !q2 || !q3) {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "<p style='color: red;'>Please answer all questions before submitting.</p>";
        return;
    }
    if (q1.value === "a" && q2.value === "c" && q3.value === "b") {
        resultDiv.innerHTML = `
        <div class="quiz-success-message" style="border: 2px solid green; padding: 20px; border-radius: 10px; background-color: #d4edda; margin-top: 15px;">
            <p style="color: green; font-weight: bold;">Congratulations! You got all answers correct.</p>
            <p>You have completed the Web Dev Quest!</p>
            <p>Now try and test your mettle with the knowledge quiz!</p>
                <button type="button" onclick="unlockNextModule('quiz')">Proceed to Knowledge Check</button>
        </div>
        `;
    } else {
        resultDiv.style.color = "orange";
        resultDiv.innerHTML = "<p style='color: orange;'>Some answers are incorrect. Please review the material and try again.</p>";
    }
}

/* Reset Quiz Logic */

function resetQuiz() {
    const quizForm = document.getElementById("quiz-form");
    if (quizForm) {
        quizForm.reset();
    }
    const resultDiv = document.getElementById("quiz-result");
    if (resultDiv) {
        resultDiv.innerHTML = "";
    }
}

window.addEventListener('load', checkProgress);