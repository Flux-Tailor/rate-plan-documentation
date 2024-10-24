# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

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
googleanalytics_id = "G-8VML9CQJGL"

# Enables the Google Analytics extension when the site is being built in the GitHub Actions environment
import os

if os.getenv("GITHUB_ACTIONS"):
  extensions.append("sphinxcontrib.googleanalytics")
  googleanalytics_id = "G-8VML9CQJGL"
