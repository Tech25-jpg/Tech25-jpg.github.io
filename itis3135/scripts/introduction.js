document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("intro-form");
    const resultContainer = document.getElementById("result-container");

// Course logic added
document.getElementById('add-course').addEventListener('click', () => {
    const container = document.getElementById('course-container');
    const newCourse = document.createElement('div');
    newCourse.className = 'course-entry';
    newCourse.innerHTML = `
        <input type="text" placeholder="Department" class="dept">
        <input type="text" placeholder="Number" class="course-num">
        <input type="text" placeholder="Name" class="course-name">
        <input type="text" placeholder="Reason" class="course-reason">
        <button type="button" class="remove-course">Remove</button>
        `;
        container.appendChild(newCourse);

        // Add-deletion functionality
        newCourse.querySelector('.remove-course').addEventListener('click', () => {
            newCourse.remove();
        });
    });

// Handles form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Basic data gathering
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const divider = document.getElementById("divider").value;
        const mascotAdjective = document.getElementById("mascot-adj").value;
        const mascotAnimal = document.getElementById("mascot-animal").value;
        const personalStatement = document.getElementById("personal-statement").value;
        
        // Gather courses
        let coursesHTML ="";
        const courses = document.querySelectorAll(".course-entry");
        courses.forEach((course) => {
            const dept = course.querySelector(".dept").value;
            const num = course.querySelector(".course-num").value;
            const name = course.querySelector(".course-name").value;
            const reason = course.querySelector(".course-reason").value;
            coursesHTML += `<li><strong>${dept} ${num} - ${name}:</strong> ${reason}</li>`;
        });

        // UI changes
        form.style.display = "none";
        document.querySelector("h3").style.display = "none";
        document.getElementById("page-header").innerText = "Introduction Page";

        // Generate HTML output
        const CaptionText = "Kevin Teah | Keen Turkey";

        // Gather link values
        const linkedin = document.getElementById("link-linkedin").value;
        const githubIo = document.getElementById("link-github-io").value;
        const personal = document.getElementById("link-personal-webpage").value;
        const fcc = document.getElementById("link-fcc").value;
        const github = document.getElementById("link-github").value;

        // intro-image generator
        resultContainer.innerHTML = `
        <h3>${firstName} ${lastName} ${divider} ${mascotAdjective} ${mascotAnimal}</h3>
        <figure>
            <img src="images/keen_turkey.jpg" id="intro-image" alt="Mascot" style="max-width: 400px;">
            <figcaption>${CaptionText}</figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background:</strong> ${document.getElementById("personal-background").value}</li>
            <li><strong>Professional Background:</strong> ${document.getElementById("professional-background").value}</li>
            <li><strong>Personal Statement:</strong> ${document.getElementById("personal-statement").value}</li>
            <li><strong>Academic Background:</strong> ${document.getElementById("academic-background").value}</li>
            <li><strong>Courses:</strong>
                <ul>${coursesHTML}</ul>
            </li>
            <li><strong>Professional Links:</strong>
                    <ul>
                        <li><a href="${linkedin}" target="_blank">LinkedIn</a></li>
                        <li><a href="${githubIo}" target="_blank">GitHub.io (Project Page)</a></li>
                        <li><a href="${personal}" target="_blank">Personal Webpage</a></li>
                        <li><a href="${fcc}" target="_blank">freeCodeCamp Profile</a></li>
                        <li><a href="${github}" target="_blank">GitHub Profile</a></li>
        </ul>
        <p><strong>Quote:</strong> "${document.getElementById("user-quote").value} - ${document.getElementById("quote-author").value}</p>
        <br>
        <a href="intro_form.html" id="reset-link">Reset and Try Again</a>
        `;

// Upload image replacement
const fileInput = document.getElementById('user-image');
if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
    const newImage = document.getElementById('intro-image');
    if (newImage) {
    newImage.src = event.target.result;
    }
};
    reader.readAsDataURL(fileInput.files[0]);
    }
});

 // Clear Button logic
document.getElementById("clear-btn").addEventListener("click", () => {
    const inputs = document.querySelectorAll("#intro-form input, #intro-form textarea");
    inputs.forEach((input) => {
        input.value = "";
        });
    });
});