function escapeHTML(str) {
    return str.replace(/[&<>"']/g, (m) => {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[m];
    });
}
const generateHTML = () => {

const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const mascotAdj = document.getElementById('mascot-adj').value;
const mascotAnimal = document.getElementById('mascot-animal').value;
const quote = document.getElementById('quote').value;
const quoteAuthor = document.getElementById('quote-author').value;

const header = document.getElementById('page-header');
header.innerText = "Introduction HTML";

    // Handle the Course List
    const courseInputs = document.querySelectorAll('.course-input'); 
    let courseListItems = "";
    
    courseInputs.forEach((input) => {
        // Space added after "if" to satisfy the linter
        if (input.value.trim() !== "") {
            courseListItems += `        <li>${input.value}</li>\n`;
        }
    });

    const hmtlString = `
<section>
    <h3>${firstName} ${lastName}'s Introduction</h3>
    <p><strong>Mascot:</strong> ${mascotAdj} ${mascotAnimal}</p>

    <h4>Background Information</h4>
    <ul>
    <li><strong>Personal Statement:</strong> ${document.getElementById('personal-statement').value}</li>
    <li><strong>Professional Statement:</strong> ${document.getElementById('professional-background').value}</li>
    <li><strong>Academic Background:</strong> ${document.getElementById('academic-background').value}</li>
    <li><strong>Personal Background:</strong> ${document.getElementById('personal-background').value}</li>
    </ul>

    <h4>Current Courses</h4>
    <ul>
${courseListItems || "        <li>No courses listed</li>"}    
    </ul>

    <figure>
        <blockquote>${quote}</blockquote>
        <figcaption>— ${quoteAuthor}</figcaption>
    </figure>
</section>`;

const resultArea = document.getElementById('result-container');
const formElement = document.getElementById('intro-form');
formElement.style.display = 'none';

// Code display using <pre> and <code>
resultArea.innerHTML = `<pre><code>${escapeHTML(hmtlString)}</code></pre>
<br>
<a href="intro_form.html">Reset and Try Again</a>`;
if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
}


};

document.getElementById('gen-html').addEventListener('click', generateHTML);