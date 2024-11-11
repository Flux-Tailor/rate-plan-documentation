// _static/js/custom.js

document.addEventListener('DOMContentLoaded', function() {
    /**
        1. Making decorative icons hidden from screen readers and adding labels to functional ones
        2. Ensuring navigation landmarks have unique names
        3. Adding proper landmark regions to all page content
        4. Adding missing submit buttons to search forms
        5. Cleaning up redundant ARIA attributes
    */
    function fixSvgs() {
        // Target Font Awesome SVGs that are currently marked as images
        const svgs = document.querySelectorAll('svg.svg-inline--fa[role="img"]');
        
        svgs.forEach(svg => {
            const iconName = svg.getAttribute('data-icon');
            if (!iconName) return; // Skip SVGs without an icon name
            
            // Handle decorative arrow icons
            if (iconName.includes('arrow')) {
                // Make arrows presentational since they're decorative
                // This tells screen readers to ignore these icons
                svg.removeAttribute('role');
                svg.setAttribute('role', 'presentation');
                svg.setAttribute('aria-hidden', 'true');
                
                // Clean up any existing labels to avoid conflicts
                svg.removeAttribute('aria-label');
                svg.removeAttribute('aria-labelledby');
            } else {
                // Handle meaningful icons (like theme switchers, navigation icons)
                
                // Remove aria-labelledby to prevent conflicts
                // Only one labelling method should be used per element
                svg.removeAttribute('aria-labelledby');
                
                // Add specific, meaningful labels for theme switcher icons
                // This helps screen reader users understand the icon's purpose
                if (iconName === 'sun') {
                    svg.setAttribute('aria-label', 'Switch to light theme');
                } else if (iconName === 'moon') {
                    svg.setAttribute('aria-label', 'Switch to dark theme');
                } else if (iconName === 'circle-half-stroke') {
                    svg.setAttribute('aria-label', 'Switch to system theme');
                } else {
                    // For other icons, create a label from the icon name
                    svg.setAttribute('aria-label', iconName.replace(/-/g, ' '));
                }
                
                // Make sure the icon is not hidden from screen readers
                svg.removeAttribute('aria-hidden');
            }
        });
    }

     // Specifically target and fix the main element's role
     const mainElement = document.querySelector('main[role="main"]');
     if (mainElement) {
         mainElement.removeAttribute('role');
     }

     // Label navigation landmarks with unique names
    const navElements = document.querySelectorAll('nav');
    let primaryNavCount = 0;
    
    navElements.forEach(nav => {
        // If the nav has aria-labelledby, keep it and remove aria-label
        if (nav.hasAttribute('aria-labelledby')) {
            nav.removeAttribute('aria-label');
        } else {
            // Determine nav type and set unique label (getting rid of duplicate error)
            if (nav.querySelector('.bd-navbar-elements')) {
                primaryNavCount++;
                nav.setAttribute('aria-label', primaryNavCount > 1 ? 
                    `Secondary navigation ${primaryNavCount}` : 'Main navigation');
            } else if (nav.classList.contains('bd-toc-nav')) {
                nav.setAttribute('aria-label', 'Table of contents');
            } else if (nav.querySelector('.bd-links')) {
                nav.setAttribute('aria-label', 'Documentation sections');
            } else {
                nav.setAttribute('aria-label', 'Additional navigation');
            }
        }
    });

    // Utility function to check if element is already in a landmark
    function isInLandmark(element) {
        const landmarks = ['main', 'nav', 'aside', 'article', 'section', 'header', 'footer'];
        let parent = element.parentElement;
        while (parent) {
            if (landmarks.includes(parent.tagName.toLowerCase()) || 
                parent.hasAttribute('role') && ['navigation', 'complementary', 'search'].includes(parent.getAttribute('role'))) {
                return true;
            }
            parent = parent.parentElement;
        }
        return false;
    }

    // Fix elements not in landmarks
    function fixLandmarks() {
        let navCount = 0;
        let asideCount = 0;

        // Fix skip link
        const skipLink = document.querySelector('#pst-skip-link');
        if (skipLink && !isInLandmark(skipLink)) {
            const skipNav = document.createElement('nav');
            skipNav.setAttribute('aria-label', 'Skip navigation');
            skipLink.parentNode.insertBefore(skipNav, skipLink);
            skipNav.appendChild(skipLink);
        }

        // Fix back to top button
        const backToTop = document.querySelector('#pst-back-to-top');
        if (backToTop && !isInLandmark(backToTop)) {
            const complementary = document.createElement('aside');
            complementary.setAttribute('aria-label', 'Back to top navigation');
            backToTop.parentNode.insertBefore(complementary, backToTop);
            complementary.appendChild(backToTop);
        }

        // Fix search dialog
        const searchDialog = document.querySelector('#pst-search-dialog');
        if (searchDialog && !searchDialog.hasAttribute('role')) {
            searchDialog.setAttribute('role', 'search');
            searchDialog.setAttribute('aria-label', 'Site search');
        }

        // Fix empty divs
        document.querySelectorAll('div:empty').forEach(div => {
            if (!isInLandmark(div)) {
                div.setAttribute('role', 'presentation');
            }
        });

        // Fix theme switcher and GitHub links container
        const themeContainer = document.querySelector('.sidebar-header-items__end');
        if (themeContainer && !isInLandmark(themeContainer)) {
            const toolsRegion = document.createElement('aside');
            toolsRegion.setAttribute('aria-label', 'Theme and external links');
            themeContainer.parentNode.insertBefore(toolsRegion, themeContainer);
            toolsRegion.appendChild(themeContainer);
        }

        // Fix sidebar search container
        const sidebarSearch = document.querySelector('.sidebar-primary-items__start');
        if (sidebarSearch && !isInLandmark(sidebarSearch)) {
            const searchRegion = document.createElement('div');
            searchRegion.setAttribute('role', 'search');
            searchRegion.setAttribute('aria-label', 'Sidebar search');
            sidebarSearch.parentNode.insertBefore(searchRegion, sidebarSearch);
            searchRegion.appendChild(sidebarSearch);
        }
    }


    // Fix forms without submit buttons
    function fixForms() {
        const searchForms = document.querySelectorAll('form.bd-search');
        searchForms.forEach(form => {
            // Check if form already has a submit button
            if (!form.querySelector('button[type="submit"], input[type="submit"]')) {
                // Create a visually hidden submit button for accessibility
                const submitButton = document.createElement('button');
                submitButton.setAttribute('type', 'submit');
                submitButton.setAttribute('aria-label', 'Submit search');
                form.appendChild(submitButton);
            }
        });
    }

    // Run all fixes
    fixSvgs();
    fixLandmarks();
    fixForms();

    // Run again after delay for dynamic content
    setTimeout(() => {
        fixSvgs();
        fixLandmarks();
        fixForms();
    }, 1000);
});
