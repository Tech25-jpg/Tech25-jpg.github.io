function validateQuiz() {
    // values
    const q1 = document.getElementById("q1").value.trim().toLowerCase();
    const q2 = document.getElementById("q2").value.trim().toLowerCase();
    const q3 = document.getElementById("q3").value.trim().toLowerCase();
    const q4 = document.getElementById("q4").value.trim().toLowerCase();
    const q5 = document.getElementById("q5").value.trim().toLowerCase();
    const q6 = document.getElementById("q6").value.trim().toLowerCase();
    const resultDiv = document.getElementById("quiz-result");

    let score = 0;
    let feedback = "";

    // Validation
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6) {
        resultDiv.style.color = "red";
        resultDiv.innerHTML = "<p style='color: red;'>Please answer all questions before submitting.</p>";
        feedback = "Please answer all questions before submitting.";
        return;
    }

    // Score
    if (q1 === "a") {
        score++;
    } else {
        feedback += "<p>Q1: Incorrect. The correct answer is A) HyperText Markup Language.</p>";}
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

    // Display result
    resultDiv.style.color = "green";
    if (score === 6) {
        feedback = "<p>Excellent! You got all questions correct.</p>";
    } else if (score >= 4) {
        feedback = "<p>Good job! You scored above average.</p>" + feedback;
    } else {
        resultDiv.style.color = "orange";
        feedback = "<p>Keep practicing! Review the material and try again.</p>" + feedback;
    }
    resultDiv.innerHTML = `<p>You scored ${score} out of 6.</p>${feedback}`;
    