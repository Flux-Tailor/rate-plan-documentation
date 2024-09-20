# Overview

## Purpose of the Rate Plan Schema Documentation

The rate plan schema documentation serves as a comprehensive guide for understanding, implementing, and utilizing the standardized rate plan schema in the energy sector.

 Quick links to key resources and sections:
  - [Rate Plan Schema Docs (v0.9)](https://flux-tailor.github.io/rate-plan-documentation/_static/rate-plan-schema-docs/v0.9/rate_plan_data_input.html)
  - [GitHub repository hosting XSD schemas](https://github.com/Flux-Tailor/rate-plan-schema)
  - [Link to Rate Plans section](#rate-plans)
  - [Data Dictionary](https://iedr-public-static-files.s3.amazonaws.com/documentation/IEDR_DataDictionary-RatePlanData_V001_20240112.pdf)

## Our Schema

The rate plan schema is an XML-based structure designed to standardize the representation of energy rate plans. It includes:

- Core components (e.g., rate plans, charges, eligibility criteria)
- Supporting elements (e.g., time-of-use periods, seasons, chargers, modifiers)
- Auxiliary features (e.g., tariff book references, non-metered service charges)


### XML Structure of Schema

Our schema follows a hierarchical XML structure, defining elements, attributes, and their relationships. Key features include:

- Namespace definitions
- Complex and simple type definitions

[Link to our XML structure]

## Rate Plan Concepts

### What's a Rate Plan?

A rate plan is a structured set of rules and charges that determine how energy consumption is billed. It typically includes:

- Base rates
- Time-of-use pricing
- Demand charges
- Seasonal variations
- Eligibility criteria


### What's the relationship between Utilities, Operating Companies, Service Classes and a “Rate Plan” ?

The relationship between these entities forms the structure of how energy services are organized and priced:

1. **Utilities**: These are the overarching companies that provide energy services to consumers. They may operate in one or multiple regions.

2. **Operating Companies**: These are subsidiaries or divisions of utilities that manage operations in specific geographic areas or for particular types of services.

3. **Service Classes**: Within each operating company, customers are categorized into different service classes based on their energy usage patterns, type of service; either residential, commercial, industrial as well as other factors.

4. **Rate Plans**: For each service class, there exist rate plans. A rate plan is a specific pricing structure that determines how a customer is charged for their energy usage.

The hierarchy typically looks something like this:

Utility → Operating Company → Service Class → Rate Plan

For instance:
- We have a utility named "National Energy Corp."
- One of its operating companies is called "Midwest Power Distribution"
- Within it, there exists a service class for "Residential" users
- This service class could have multiple rate plans like "Standard Residential" or "Time-of-Use Residential" which again is designed to meet different customer needs, usage patterns, or policy objectives, all while under the class of residential users. 


## Available Documentation

Our MVP documentation version covers:

1. Purpose of Documentation
2. Utility Data Input
3. User Data Output
3. XML Outline of Schema

## GitHub and Pages

Our documentation will be version-controlled and openly available on GitHub. We use GitHub Pages for easy access to the latest documentation.

- [GitHub Repository](https://github.com/Flux-Tailor/rate-plan-documentation)
