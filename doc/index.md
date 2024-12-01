---
title: Rate Plan Schema Documentation
---

# Rate Plan Schema Documentation

```{toctree}
:maxdepth: 4
:caption: Documentation

overview/index
schema/index
guides/index
```

## Introduction

The [Integrated Energy Data Resource (IEDR)](https://iedr.nyserda.ny.gov) is working to improve access to rate plan data. This website and its associated schema and test case repositories support the development of a new data schema and data transfer standard for energy rate plan data. The schema will expand on the rate plan data made available in the current [IEDR Rate Plan Browser](https://iedr.nyserda.ny.gov/rate-plan/) data set to include all Rate Plan parameters needed for cost modeling. The rate plan schema is designed to standardize the representation of energy rate plans. 
 
### Rate Plan XML Schema

#### Schema Documentation
  - [GitHub repository hosting XSD schemas](https://github.com/Flux-Tailor/rate-plan-schema)
    
  - [Rate Plan Schema Docs - all rate plan schemas (v0.99.6-dev)](https://flux-tailor.github.io/rate-plan-documentation/_static/rate-plan-schema-docs/v0.99.6-dev/all_rate_plan_schemas/all_rate_plan_schemas.html)
  - [Rate Plan Schema Docs - rate plan data input (v0.99.6-dev)](https://flux-tailor.github.io/rate-plan-documentation/_static/rate-plan-schema-docs/v0.99.6-dev/rate_plan_data_input/rate_plan_data_input.html)
  - [Rate Plan Schema Docs - rate plan data output (v0.99.6-dev)](https://flux-tailor.github.io/rate-plan-documentation/_static/rate-plan-schema-docs/v0.99.6-dev/rate_plan_data_output/rate_plan_data_output.html)

#### Test Cases
  - [GitHub repository hosting XML test instances](https://github.com/Flux-Tailor/rate-plan-test-cases)

#### Core Concepts

##### What's a Rate Plan?

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
 
#### What's the relationship between Utilities, Operating Companies, Service Classes and a “Rate Plan” ?

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

### Versioning and Upgrade Process

Distinct branches of the specification will be maintained in the Rate Plan Schema Repository for each version of the standard.

Branches can be in one of two distinct states:

 - Development – indicated by a -dev suffix e.g. 3.1-dev. This branch is not yet released and both schema and documentation in it should be considered unstable and experimental.
 -  Live – indicated by the lack of a suffix e.g 3.1. This branch has been released and tagged, and should be considered stable. Some documentation may be updated on a live branch, but no changes to the schema can be made.

The Rate Plan Schema uses [Semantic Versioning](https://semver.org/) to distinguish between different versions of the standard in the format of MAJOR.MINOR.PATCH.

 - MAJOR versions introduce backwards incompatible changes
 - MINOR versions introduce new features or functionality in a backwards compatible manner
 - PATCH versions make backwards-compatible bugfixes

If a change is backwards compatible it means that data published using an earlier version still meets the requirements of the standard. For example data published using version 3.0 would be compatible with version 3.1. 

If a change is not backwards compatible it may mean that data published using an earlier version will no longer meet the requirements. Not all Rate Plan data uses all parts of the standard, so it is possible that some data may still be conformant to a newer MAJOR version but it is not guaranteed.

You can see a list of all the version upgrades in the Rate Plan Schema by reviewing our 
[changelog.](https://github.com/Flux-Tailor/rate-plan-schema/releases)

The documentation corresponding to the specific versions of the Rate Plan Schema can be found on this site.

## Documentation and Underlying Source

Our documentation is versioned and openly available on GitHub. The documentation is built using [Sphinx](https://www.sphinx-doc.org/) and [OxygenXML](https://www.oxygenxml.com/) and published to the web via GitHub Pages for access.
Our documentation is versioned and openly available on GitHub. The documentation is built using [Sphinx](https://www.sphinx-doc.org/) and [OxygenXML](https://www.oxygenxml.com/) and published to the web via GitHub Pages for conveninet access.

- [GitHub Repository](https://github.com/Flux-Tailor/rate-plan-documentation)
