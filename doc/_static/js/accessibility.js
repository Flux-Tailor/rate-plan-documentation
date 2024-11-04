// _static/js/accessibility.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.wy-menu-vertical p.caption[role="heading"]').forEach(caption => {
        if (!caption.hasAttribute('aria-level')) {
            caption.setAttribute('aria-level', '2');
        }
    });
    // Process all links
    document.querySelectorAll('a').forEach(link => {
        // Skip headerlinks
        if (link.classList.contains('headerlink')) {
            return;
        }

        const text = link.textContent.trim();
        const href = link.getAttribute('href');

        if (href) {
            // Add aria-labels for PDF links (assist screen readers)
            if (href.endsWith('.pdf')) {
                link.setAttribute('aria-label', `PDF document: ${text}`);
                link.classList.add('pdf-link');
            }
            // ...for external links
            else if (href.startsWith('http://') || href.startsWith('https://')) {
                link.setAttribute('aria-label', `External link: ${text}`);
            }
            // ...for internal links
            else {
                link.setAttribute('aria-label', text);
            }
        }
    });
});
