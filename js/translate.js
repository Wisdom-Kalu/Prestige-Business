let translations = {}; // Store the French translations

// Load French translations from JSON file
async function loadFrenchTranslations() {
    try {
        if (Object.keys(translations).length === 0) {
            const response = await fetch("js/fr.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            translations = await response.json();
        }
    } catch (error) {
        console.error("Failed to load translations:", error);
    }
}

// Save the original English text in `data-original` attributes
function saveOriginalText() {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        if (!element.hasAttribute("data-original")) {
            element.setAttribute("data-original", element.textContent);
        }
    });
}

// Apply translations based on the selected language
async function applyTranslations(lang) {
    if (lang === "fr") {
        await loadFrenchTranslations();
        document.querySelectorAll("[data-translate]").forEach((element) => {
            const key = element.getAttribute("data-translate");
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    } else if (lang === "en") {
        document.querySelectorAll("[data-translate]").forEach((element) => {
            const originalText = element.getAttribute("data-original");
            if (originalText) {
                element.textContent = originalText;
            }
        });
    }
}

// Language selector event listeners
document.getElementById("english").addEventListener("change", () => {
    if (document.getElementById("english").checked) {
        applyTranslations("en");
    }
});

document.getElementById("french").addEventListener("change", () => {
    if (document.getElementById("french").checked) {
        applyTranslations("fr");
    }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    saveOriginalText(); // Save English content as original
});
