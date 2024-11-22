// _static/js/custom.js
function updateFAIcons() {
    document.querySelectorAll('.svg-inline--fa').forEach(icon => {
        icon.setAttribute('role', 'presentation');
    });
}

//FontAwesome is using a library that dynamically replaces <i> tags with <svg> elements after our code runs
document.addEventListener('DOMContentLoaded', function() {
    // Wait a short moment for FontAwesome to initialize
    setTimeout(updateFAIcons, 100);
    
    // Set up observer for future DOM changes (aka watchdog)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                updateFAIcons();
            }
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true, //checking for new elements
        subtree: true //checking for new nested elements
    });
});

// Also update on window load to catch any late additions
window.addEventListener('load', updateFAIcons);
