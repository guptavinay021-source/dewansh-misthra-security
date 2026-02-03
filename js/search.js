document.getElementById("searchBtn").addEventListener("click", highlightText);

function highlightText() {
    const keyword = document.getElementById("searchInput").value.trim();

    if (!keyword) {
        alert("Please enter a word to search");
        return;
    }

    clearHighlights();

    const elements = document.querySelectorAll("body *:not(script):not(style)");

    elements.forEach(el => {
        if (el.children.length === 0 && el.textContent.toLowerCase().includes(keyword.toLowerCase())) {
            const regex = new RegExp(`(${keyword})`, "gi");
            el.innerHTML = el.textContent.replace(
                regex,
                `<span class="highlight">$1</span>`
            );
        }
    });
}

// Remove old highlights safely
function clearHighlights() {
    document.querySelectorAll(".highlight").forEach(span => {
        span.replaceWith(span.textContent);
    });
}

