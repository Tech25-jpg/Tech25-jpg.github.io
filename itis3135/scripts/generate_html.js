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
</section>`;

// Code display using <pre> and <code>
const resultArea = document.getElementById('result-container');
resultArea.innerHTML = `<pre><code>${escapeHTML(hmtlString)}</code></pre>`;
hljs.highlightAll();
};