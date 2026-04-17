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
    const header = document.getElementById('page-header');
    header.innerText = "Introduction HTML";

    const hmtlString = `
<section>
    <h3>${firstName}'s Introduction</h3>
    <p>Personal Statement: ${document.getElementById('personal-statement').value}</p>
    <p>Professional Statement: ${document.getElementById('professional-background').value}</p>
    <p>Academic Background: ${document.getElementById('academic-background').value}</p>
    <p>Personal Background: ${document.getElementById('personal-background').value}</p>
</section>`;

const resultArea = document.getElementById('result-container');
const formElement = document.getElementById('intro-form');
formElement.style.display = 'none';

// Code display using <pre> and <code>
resultArea.innerHTML = `<pre><code>${escapeHTML(hmtlString)}</code></pre>
<br>
<a href="intro_form.html">Reset and Try Again</a>`;
hljs.highlightAll();
};

document.getElementById('gen-html').addEventListener('click', generateHTML);