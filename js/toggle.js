// toggle.js
const toggleBtn = document.getElementById("langToggle");
let isEnglish = true; // default language

toggleBtn.addEventListener("click", () => {
    const elements = document.querySelectorAll("[data-en][data-hi]");
    const placeholders = document.querySelectorAll("[data-en-placeholder][data-hi-placeholder]");

    // 1️⃣ Update text content
    elements.forEach(el => {
        el.textContent = isEnglish ? el.getAttribute("data-hi") : el.getAttribute("data-en");
    });

    // 2️⃣ Update placeholders
    placeholders.forEach(el => {
        el.placeholder = isEnglish ? el.getAttribute("data-hi-placeholder") : el.getAttribute("data-en-placeholder");
    });

    // 3️⃣ Update toggle button text itself
    toggleBtn.textContent = isEnglish ? toggleBtn.getAttribute("data-hi") : toggleBtn.getAttribute("data-en");

    // 4️⃣ Flip language state
    isEnglish = !isEnglish;
});
