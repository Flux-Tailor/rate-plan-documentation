---
title: Rate Plan Schema documentation
---

# Rate Plan Schema Documentation

```{toctree}
:maxdepth: 3
:caption: Contents:
:hidden:

self
```

# Introduction

The [Integrated Energy Data Resource (IEDR)](https://iedr.nyserda.ny.gov) is working to improve access to rate plan data. This website and its associated schema and test case repositories support the development of a new data schema and data transfer standard for energy rate plan data. The schema will expand on the rate plan data made available in the current [IEDR Rate Plan Browser](https://iedr.nyserda.ny.gov/rate-plan/) data set to include all Rate Plan parameters needed for cost modeling. The rate plan schema is designed to standardize the representation of energy rate plans. 
 
## Rate Plan XML Schema

### Schema Documentation
  - [GitHub repository hosting XSD schemas](https://github.com/Flux-Tailor/rate-plan-schema)
    
  - [Rate Plan Schema Docs - all rate plan schemas (v0.99.1)](https://flux-tailor.github.io/rate-plan-documentation/_static/rate-plan-schema-docs/v0.99.1/all_rate_plan_schemas/all_rate_plan_schemas.html)
  - [Rate Plan Schema Docs - rate plan data input (v0.99.1)](https://flux-tailor.github.io/rate-plan-documentation/_static/rate-plan-schema-docs/v0.99.1/rate_plan_data_input/rate_plan_data_input.html)
  - [Rate Plan Schema Docs - rate plan data output (v0.99.1)](https://flux-tailor.github.io/rate-plan-documentation/_static/rate-plan-schema-docs/v0.99.1/rate_plan_data_output/rate_plan_data_output.html)

### Test Cases
  - [GitHub repository hosting XSD schemas](https://github.com/Flux-Tailor/rate-plan-test-cases)

### Core Concepts

#### What's a Rate Plan?

An energy rate plan is a structured set of parameters that determine how energy consumption is charged for a customer on this rate plan. Sometimes rate plans are referred to as "tariffs" or "rates".

The rate plan schema includes:

- Core components: rate plans and their associated eligibility limits and other criteria used to identify available rate plan options
- Supporting elements: time-of-use periods, service thresholds, and other elements that determine which rate plan charges are applicable
- Charges:
  - Charges from Tariff Book Leaves
  - Charges from Tariff Statements
  - Market Supply Charges
  - References to formally published tariff documentation and utility data sets. 



- Links to key resources and sections:
  - [Existing IEDR Rate Plan Browser with rate plan options](https://iedr.nyserda.ny.gov/rate-plan/)
  - [Rate Plan Browser Data Dictionary](https://iedr-public-static-files.s3.amazonaws.com/documentation/IEDR_DataDictionary-RatePlanData_V001_20240112.pdf)
 
### What's the relationship between Utilities, Operating Companies, Service Classes and a “Rate Plan” ?

The relationship between these entities forms the structure of how energy services are organized and priced:

1. **Utilities**: These are the overarching companies that provide energy services to consumers. They may operate in one or multiple regions.

2. **Operating Companies**: These are subsidiaries or divisions of utilities that manage operations in specific geographic areas or for particular types of services.

3. **Service Classes**: Within each operating company, customers are categorized into different service classes based on their energy usage patterns, type of service; customer class (e.g. residential, commercial, industrial, etc.) and other factors.

4. **Rate Plans**: For each service class, several "sub" service classes each with several rate plans options may exist A rate plan is a specific pricing structure that determines how a customer is charged for their energy usage.

The hierarchy typically looks something like this:

Utility → Operating Company → Service Type → Service Class → Sub Service Class  → Rate Plan

For instance:
- We have a utility named "National Energy Corp."
- One of its operating companies is called "Midwest Power Distribution"
- Within it, there are multiple service classes for "Residential" users
- This service class could have multiple sub service classes and rate plans like "SC-1A Standard Residential" or "SC1B Time-of-Use Residential" each of which are designed to meet different customer needs, usage patterns, or policy objectives.

# GitHub and Pages

Our documentation will be version-controlled and openly available on GitHub. GitHub Pages is used for easy access to the latest documentation.

- [GitHub Repository](https://github.com/Flux-Tailor/rate-plan-documentation)
