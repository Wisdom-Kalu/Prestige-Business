let translations = {}; // Store French translations

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

// Save original English text in `data-original` attributes
function saveOriginalText() {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        if (!element.hasAttribute("data-original")) {
            element.setAttribute("data-original", element.textContent.trim());
        }
    });
}

// Apply translations based on the selected language
function applyTranslations(language) {
    if (language === "fr") {
        const page = document.body.getAttribute("data-page"); // Get the current page
        const pageTranslations = translations[page];

        if (pageTranslations) {
            document.querySelectorAll("[data-translate]").forEach((element) => {
                const key = element.getAttribute("data-translate");
                if (pageTranslations[key]) {
                    element.textContent = pageTranslations[key];
                }
            });
        }
    } else if (language === "en") {
        document.querySelectorAll("[data-translate]").forEach((element) => {
            const originalText = element.getAttribute("data-original");
            if (originalText) {
                element.textContent = originalText;
            }
        });
    }
}

// Handle language change
async function handleLanguageChange(language) {
    if (language === "fr" && Object.keys(translations).length === 0) {
        await loadFrenchTranslations(); // Load French translations if not already loaded
    }
    applyTranslations(language);
    localStorage.setItem("preferredLanguage", language); // Save the selected language
}

// Language selector event listeners
document.getElementById("english").addEventListener("change", () => {
    if (document.getElementById("english").checked) {
        handleLanguageChange("en");
    }
});

document.getElementById("french").addEventListener("change", () => {
    if (document.getElementById("french").checked) {
        handleLanguageChange("fr");
    }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", async () => {
    saveOriginalText(); // Save English content as original

    // Get the preferred language from localStorage or default to English
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";

    // Set the correct radio button based on the stored language
    if (preferredLanguage === "fr") {
        document.getElementById("french").checked = true;
    } else {
        document.getElementById("english").checked = true;
    }

    await handleLanguageChange(preferredLanguage); // Apply the preferred language
});