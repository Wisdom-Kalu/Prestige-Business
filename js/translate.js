let translations = {};

// Fetch the French translations JSON once and store it in memory
fetch('js/fr.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        console.log(translations);
    });

// Function to update the page content
function updateContent(language) {
    if (language === "fr") {
        const page = document.body.getAttribute('data-page'); // Identify the current page
        const pageTranslations = translations[page];

        if (pageTranslations) {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (pageTranslations[key]) {
                    element.innerText = pageTranslations[key];
                }
            });
        }
    } else {
        // Reset to default English content by restoring the original text
        document.querySelectorAll('[data-translate]').forEach(element => {
            element.innerText = element.getAttribute('data-original-text');
        });
    }
}

// Store the original English text in a custom attribute
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-translate]').forEach(element => {
        element.setAttribute('data-original-text', element.innerText);
    });

    // Set the initial content based on the default language
    const defaultLanguage = document.querySelector('input[name="language"]:checked').id || 'en';
    updateContent(defaultLanguage);
});

// Listen for language change events
document.querySelectorAll('input[name="language"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedLanguage = document.querySelector('input[name="language"]:checked').id;
        updateContent(selectedLanguage);
    });
});


// let translations = {}; // Store the French translations

// // Load French translations from JSON file
// async function loadFrenchTranslations() {
//     try {
//         if (Object.keys(translations).length === 0) {
//             const response = await fetch("js/fr.json");
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             translations = await response.json();
//         }
//     } catch (error) {
//         console.error("Failed to load translations:", error);
//     }
// }

// // Save the original English text in `data-original` attributes
// function saveOriginalText() {
//     document.querySelectorAll("[data-translate]").forEach((element) => {
//         if (!element.hasAttribute("data-original")) {
//             element.setAttribute("data-original", element.textContent);
//         }
//     });
// }

// // Apply translations based on the selected language
// async function applyTranslations(lang) {
//     if (lang === "fr") {
//         await loadFrenchTranslations();
//         document.querySelectorAll("[data-translate]").forEach((element) => {
//             const key = element.getAttribute("data-translate");
//             if (translations[key]) {
//                 element.textContent = translations[key];
//             }
//         });
//     } else if (lang === "en") {
//         document.querySelectorAll("[data-translate]").forEach((element) => {
//             const originalText = element.getAttribute("data-original");
//             if (originalText) {
//                 element.textContent = originalText;
//             }
//         });
//     }
// }

// // Language selector event listeners
// document.getElementById("english").addEventListener("change", () => {
//     if (document.getElementById("english").checked) {
//         applyTranslations("en");
//     }
// });

// document.getElementById("french").addEventListener("change", () => {
//     if (document.getElementById("french").checked) {
//         applyTranslations("fr");
//     }
// });

// // Initialize on page load
// document.addEventListener("DOMContentLoaded", () => {
//     saveOriginalText(); // Save English content as original
// });
