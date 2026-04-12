function validateQuiz() {
    const resultDiv = document.getElementById("quiz-result");
    // values
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value;
    const q6 = document.querySelector('input[name="q6"]:checked')?.value;

  
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

    if (q2 === "c") {
        score++;
    } else {
        feedback += "<p>Q2: Incorrect. The correct answer is C) &lt;href&gt;.</p>";
    }

    if (q3 === "b") {
        score++;
    } else {
        feedback += "<p>Q3: Incorrect. The correct answer is B) &lt;br&gt;.</p>";
    }

    if (q4 === "a") {
        score++;
    } else {
        feedback += "<p>Q4: Incorrect. The correct answer is A).</p>";
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

 
    // Display results
    resultDiv.style.color = "green";
    if (score === 6) {
        feedback = "<p>Excellent! You got all questions correct.</p>";
    } else if (score >= 4) {
        feedback = "<p>Good job! You scored above average.</p>" + feedback;
    } else {
        resultDiv.style.color = "orange";
        feedback = "<p>Keep practicing! Review the material and try again.</p>" + feedback;
    }
    
        // Final output
        resultDiv.innerHTML = '<h3>Your Score: ' + score + '/6</h3>' + feedback;
    }
    
    /* Reset Quiz */
function resetQuiz() {
    const form = document.getElementById("quizForm");
    form.reset();
    const resultDiv = document.getElementById("quiz-result");
    resultDiv.innerHTML = "";

    window.scrollTo({ top: 0, behavior: "smooth" });
}