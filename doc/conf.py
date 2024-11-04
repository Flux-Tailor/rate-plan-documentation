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
# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['myst_parser', 'sphinx_new_tab_link', 'sphinxcontrib.googleanalytics']

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# html_logo = "_static/iedr-logo.png"
html_theme = "sphinx_rtd_theme"

html_theme_options = {
    'logo_only' : False,
    'collapse_navigation': False,
    'navigation_depth': 4,
    'titles_only': False,
}


html_static_path = ['_static','OxygenDocs']
html_css_files = ['css/custom.css']
html_js_files = ['js/accessibility.js'] 
googleanalytics_id = "G-8VML9CQJGL"




if os.getenv("GITHUB_ACTIONS"):
  extensions.append("sphinxcontrib.googleanalytics")
  googleanalytics_id = "G-8VML9CQJGL"
sys.path.insert(0, os.path.abspath('_ext'))
