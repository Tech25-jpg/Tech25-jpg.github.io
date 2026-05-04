/* Quiz Validation and Reset Logic for Web Dev Quest - ITIS 3135 Client Project
Author: Kevin Teklo Teah
Course: ITIS 3135
Purpose: This script handles the quiz validation logic, score calculation, feedback generation, and quiz reset functionality for the Web Dev Quest project. */
function validateQuiz() {
    const resultDiv = document.getElementById("quiz-result");
    // values
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value;
    const q6 = document.querySelector('input[name="q6"]:checked')?.value;
    const q7 = document.querySelector('input[name="q7"]:checked')?.value;
    const q8 = document.querySelector('input[name="q8"]:checked')?.value;
    const q9 = document.querySelector('input[name="q9"]:checked')?.value;
    const q10 = document.querySelector('input[name="q10"]:checked')?.value;
    const q11 = document.querySelector('input[name="q11"]:checked')?.value;
    const q12 = document.querySelector('input[name="q12"]:checked')?.value;

  
    let score = 0;
    let feedback = "";

    // Validation
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6) {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "<p style='color: red;'>Please answer all questions before submitting.</p>";
        return;
    }

    // Score
    if (q1 === "a") {
        score++;
    } else { 
        feedback += "<p>Q1: Incorrect. The correct answer is A) HyperText Markup Language.</p>";
    }

    if (q2 === "b") {
        score++;
    } else {
        feedback += "<p>Q2: Incorrect. The correct answer is B) &lt;a&gt;.</p>";
    }

    if (q3 === "b") {
        score++;
    } else {
        feedback += "<p>Q3: Incorrect. The correct answer is B) &lt;br&gt;.</p>";
    }

    if (q4 === "a") {
        score++;
    } else {
        feedback += "<p>Q4: Incorrect. The correct answer is A). &lt;An absolute path starts from the root directory, while a relative path starts from the current directory&gt;</p>";
    }

    if (q5 === "a") {
        score++;
    } else {
        feedback += "<p>Q5: Incorrect. The correct answer is A) &lt;alt&gt;.</p>";
    }

    if (q6 === "c") {
        score++;
    } else {
        feedback += "<p>Q6: Incorrect. The correct answer is C) &lt;img&gt;.</p>";
    }

    if (q7 === "a") {
        score++;
    } else {
        feedback += "<p>Q7: Incorrect. The correct answer is A) &lt;table&gt;.</p>";
    }

    if (q8 === "b") {
        score++;
    } else {
        feedback += "<p>Q8: Incorrect. The correct answer is B) document.getElementById().</p>";
    }

    if (q9 === "a") {
        score++;
    } else {
        feedback += "<p>Q9: Incorrect. The correct answer is A) &lt;!-- This is a comment --&gt;.</p>";
    }

    if (q10 === "a") {
        score++;
    } else {
        feedback += "<p>Q10: Incorrect. The correct answer is A) &lt;li&gt;.</p>";
    }

    if (q11 === "c") {
        score++;
    } else {
        feedback += "<p>Q11: Incorrect. The correct answer is C) &lt;Padding&gt;.</p>";
    }

    if (q12 === "b") {
        score++;
    } else {
        feedback += "<p>Q12: Incorrect. The correct answer is B) background-color.</p>";
    }

    // Display results
    resultDiv.style.color = "green";
    if (score === 12) {
        feedback = "<p>Excellent! You got all questions correct.</p>";
    } else if (score >= 8) {
        feedback = "<p>Good job! You scored above average.</p>" + feedback;
    } else {
        resultDiv.style.color = "orange";
        feedback = "<p>Keep practicing! Review the material and try again.</p>" + feedback;
    }
    
        // Final output
        resultDiv.innerHTML = '<h3>Your Score: ' + score + '/12</h3>' + feedback;
    }
    
    /* Reset Quiz */
function resetQuiz() {
    const form = document.getElementById("quizForm");
    form.reset();
    const resultDiv = document.getElementById("quiz-result");
    resultDiv.innerHTML = "";

    window.scrollTo({ top: 0, behavior: "smooth" });
}