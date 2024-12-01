# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys

project = 'Rate Plan Schema Documentation'
copyright = 'NYSERDA'
author = 'Flux Tailor'
release = '0.1'

html_title = "Rate Plan Schema Documentation"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'myst_parser',
    'sphinx_new_tab_link',
    'sphinxcontrib.googleanalytics',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx.ext.napoleon',
    'sphinx_design',
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# Using Pydata theme now
html_theme = "pydata_sphinx_theme"

html_theme_options = {
     # Navigation
    "show_nav_level": 2,
    "navigation_depth": 4,
    "show_toc_level": 2,

    
    # Navbar configuration
    "navbar_start": ["navbar-logo"],
    "navbar_end": ["navbar-icon-links", "theme-switcher"],
    "navbar_center": ["navbar-nav"],
    
    "search_bar_text": "Search docs...",
    "search_bar_position": "sidebar",  # Keep search in the sidebar

    # Sidebar behavior
    "collapse_navigation": False,
    "toggle_primary_sidebar": True,
    
    # Header options
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/Flux-Tailor/rate-plan-documentation", 
            "icon": "fab fa-github-square",
            "type": "fontawesome",
        }
    ],

    # Accessibility improvements
    "primary_sidebar_header": {
         "title": " ", 
    },
    
    # Footer
    "footer_items": ["copyright", "sphinx-version", "theme-version"],

    # Use bootstrap icons
    "use_fontawesome": True,
}

# Theme-specific settings
html_context = {
    "default_mode": "auto",
    "github_user": "Flux-Tailor",
    "github_repo": "rate-plan-documentation",
    "github_version": "main",
    "doc_path": "doc",
}


# HTML settings
html_show_sourcelink = True
html_copy_source = True
html_show_sphinx = True

# Paths and files
html_static_path = ['_static','OxygenDocs']
html_css_files = ['css/custom.css']
html_js_files = ['js/custom.js']

# Sidebar customization
html_sidebars = {
    "**": ["search-field.html"]
}

# Google Analytics
googleanalytics_id = "G-8VML9CQJGL"

if os.getenv("GITHUB_ACTIONS"):
  extensions.append("sphinxcontrib.googleanalytics")
  googleanalytics_id = "G-8VML9CQJGL"
sys.path.insert(0, os.path.abspath('_ext'))

