# Input Page for Utilities

This page provides an overview of the input schema for utilities, focusing on the available data for Service Class 1: Residential.

## Overview of Utility Input

For Service Class 1: Residential, the following data is currently available:
1. Tariff Book Leaf Ranges
2. Tariff Statements
3. Eligibility Criteria


### Our Rate Plan Input Schema

```xml 
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
    <xs:include schemaLocation="common_definitions.xsd"/>
    <xs:include schemaLocation="tariff_book_leaf_ranges.xsd"/>
    <xs:include schemaLocation="tariff_statements.xsd"/>
    <xs:include schemaLocation="tariff_book_charges.xsd"/>
    <xs:include schemaLocation="statement_charges.xsd"/>
    <xs:include schemaLocation="charges.xsd"/>
    <xs:include schemaLocation="eligibility_criteria.xsd"/>
    <xs:include schemaLocation="eligibility_limits.xsd"/>
    <xs:include schemaLocation="holidays.xsd"/>
    <xs:include schemaLocation="minimum_charges.xsd"/>
    <xs:include schemaLocation="nonmetered_service_charges.xsd"/>
    <xs:include schemaLocation="other_fixed_charges.xsd"/>
    <xs:include schemaLocation="rate_plans.xsd"/>
    <xs:include schemaLocation="rate_plan_modifiers.xsd"/>
    <xs:include schemaLocation="seasons.xsd"/>
    <xs:include schemaLocation="service_tier_thresholds.xsd"/>
    <xs:include schemaLocation="time_of_use_periods.xsd"/>
    <xs:include schemaLocation="rate_plan_data_output.xsd"/>
</xs:schema>

```
This is our comprehensive rate plan schema. For Service Class 1: Residential, we currently have instances derived from utility inputs for only a subset of these schema components, as detailed below.

## Available Input Structures for Service Class 1: Residential

### 1. Tariff Book Leaf Ranges

```xml
 <tariffBookLeafRange>
        <sourceDocKind>TariffBookLeafRange</sourceDocKind>
        <sourceURL>https://ets.dps.ny.gov/ets_web/search/showPDF.cfm?M%3AIS%20%3B%2A%29LOUNWD%5CJ%5E8%2B%22%2B5%2F0MD%2F0%28%231V%26RLO%5EU2R%2AK%3AR%5CA%5B%2A2H%22N%5EAISF%20XNY%0A%27N7JEJK%5F%2CB%40%20%20%0A</sourceURL>
        <datePublished>2024-05-31</datePublished>
        <effectivePeriod>
            <startDate>2024-07-01</startDate>
        </effectivePeriod>
        <iedrOrgAbbreviation>NIM</iedrOrgAbbreviation>
        <dpsUtilityPscNumber>220</dpsUtilityPscNumber>
        <serviceType>Electric</serviceType>
        <tariffBookCharges>
            <scopeOfApplicability>
                <include>
                    <serviceClasses>1</serviceClasses>
                    <territoryId> </territoryId> 
                    <season>
                    </season>
                    <phases>
                        <phase>AAA</phase>
                    </phases>
                </include>
                <exclude>
                    <serviceClasses>serviceClasses1</serviceClasses>
                    <serviceSubClasses>serviceSubClasses1</serviceSubClasses>
                    <customRatePlanAttribute>
                        <attributeName>
                        </attributeName>
                        <value>
                        </value>
                    </customRatePlanAttribute>
                    <territoryId>territoryId1</territoryId>
                    <season>
                    </season>
                    <phases>
                        <phase>AAA</phase>
                    </phases>
                </exclude>
            </scopeOfApplicability>
            <tariffBookCharge>
                <servicePeriod>
                    <startDate>2024-07-01</startDate>
                </servicePeriod>
                <serviceTierNr>0</serviceTierNr>
                <ratePeriodNr>0</ratePeriodNr>
                <peakType>base</peakType>
                <month>6</month>
                <chargeName>Basic Service Charge</chargeName>
                <description>description0</description>
                <calculationMethod>per_billing_cycle</calculationMethod>
                <inputMeasurement>energy</inputMeasurement>
                <value>17.33</value>
                <uom>Per Month</uom>
                <unitMultiplier>1</unitMultiplier>
                <chargesComponent>delivery</chargesComponent>
            </tariffBookCharge>
            <tariffBookCharge>
                <servicePeriod>
                    <startDate>2024-07-01</startDate>
                </servicePeriod>
                <serviceTierNr>0</serviceTierNr>
                <ratePeriodNr>0</ratePeriodNr>
                <peakType>base</peakType>
                <month>6</month>
                <chargeName>Delivery Charge per kW</chargeName>
                <description>Charges for transporting electricity across our distribution system to your home, whether it is purchased from us or another supplier.</description>
                <calculationMethod>by_metered_quantity</calculationMethod>
                <inputMeasurement>energy</inputMeasurement>
                <value>0.07104</value>
                <uom>Wh</uom>
                <unitMultiplier>3</unitMultiplier>
                <chargesComponent>delivery</chargesComponent>
            </tariffBookCharge>
        </tariffBookCharges>
        <startLeafNbr>349</startLeafNbr>
        <endLeafNbr>368.1</endLeafNbr>
        <DPSCaseNumber>20-E-0380</DPSCaseNumber>
    </tariffBookLeafRange>
</tariffBookLeafRanges>
```
Key points:
- Derived from the IEDR rate plan browser and Tariff book document
- Includes basic service charge and delivery charge per kW
- Specifies effective dates, utility information, and DPS case number


### 2. Tariff Statements

```xml
<tariffStatements xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="file:../../../../../../../rate-plan-schema/tariff_statements.xsd">
    <tariffStatement>
        <sourceDocKind>Statement</sourceDocKind>
        <sourceURL>https://ets.dps.ny.gov/ets_web/search/showPDF.cfm?G%3E%29S2%3DJ9JSBW%27%5EZ%5B%2F%20%2C%5BK4%3FXVAHQQ%3AW%2FLJ%5B%5E%3AICSBNKB%5FC%2A69NBFZ%0A</sourceURL>
        <datePublished>2024-07-25</datePublished>
        <effectivePeriod>
            <startDate>2024-08-01</startDate>
        </effectivePeriod>
        <iedrOrgAbbreviation>NIM</iedrOrgAbbreviation>
        <dpsUtilityPscNumber>220</dpsUtilityPscNumber>
        <serviceType>Electric</serviceType>
        <typeCode>AMP</typeCode>
        <DPSCaseNumber>DPSCaseNumber 14-M-0565 </DPSCaseNumber>
        <generalRuleRefs>generalRuleRefs59</generalRuleRefs>
        <statementCharges>
            <scopeOfApplicability>
                <include>
                    <serviceClasses>
                        1
                    </serviceClasses>
                    <serviceSubClasses>
                        1C
                    </serviceSubClasses>
                    <customRatePlanAttribute>
                        <attributeName>
                            AMP Phase 
                        </attributeName>
                        <value>
                            1
                        </value>
                    </customRatePlanAttribute>
                </include>
            </scopeOfApplicability>
            <statementCharge>
                <servicePeriod>
                    <startDate>2024-08-01</startDate>
                </servicePeriod>
                <chargeName>Arrears Management Program Recovery Surcharge</chargeName>
                <calculationMethod>by_metered_quantity</calculationMethod>
                <inputMeasurement>energy</inputMeasurement>
                <value>0.00120</value>
                <uom>Wh</uom>
                <unitMultiplier>3</unitMultiplier>
                <chargesComponent>delivery</chargesComponent>
            </statementCharge>
            <statementCharge>
                <servicePeriod>
                    <startDate>2024-08-01</startDate>
                </servicePeriod>
                <chargeName>Arrears Management Program Recovery Surcharge</chargeName>
                <calculationMethod>by_metered_quantity</calculationMethod>
                <inputMeasurement>energy</inputMeasurement>
                <value>0.00009</value>
                <uom>Wh</uom>
                <unitMultiplier>3</unitMultiplier>
                <chargesComponent>delivery</chargesComponent>
            </statementCharge>
        </statementCharges>
        <statementCharges>
            <scopeOfApplicability>
                <include>
                    <serviceClasses>
                        1
                    </serviceClasses>
                    <serviceSubClasses>
                        1C
                    </serviceSubClasses>
                    <customRatePlanAttribute>
                        <attributeName>
                            AMP Phase 
                        </attributeName>
                        <value>
                            2
                        </value>
                    </customRatePlanAttribute>
                </include>
            </scopeOfApplicability>
            <statementCharge>
                <servicePeriod>
                    <startDate>2024-08-01</startDate>
                </servicePeriod>
                <chargeName>Arrears Management Program Recovery Surcharge</chargeName>
                <calculationMethod>by_metered_quantity</calculationMethod>
                <inputMeasurement>energy</inputMeasurement>
                <value>0.00090</value>
                <uom>Wh</uom>
                <unitMultiplier>3</unitMultiplier>
                <chargesComponent>delivery</chargesComponent>
            </statementCharge>
            <statementCharge>
                <servicePeriod>
                    <startDate>2024-08-01</startDate>
                </servicePeriod>
                <chargeName>Arrears Management Program Recovery Surcharge</chargeName>
                <calculationMethod>by_metered_quantity</calculationMethod>
                <inputMeasurement>energy</inputMeasurement>
                <value>0.00007</value>
                <uom>Wh</uom>
                <unitMultiplier>3</unitMultiplier>
                <chargesComponent>delivery</chargesComponent>
            </statementCharge>
        </statementCharges>
    </tariffStatement>
</tariffStatements>
```
Key points:
- Derived from utility statements
- Includes Arrears Management Program Recovery Surcharge
- Differentiates between AMP Phase 1 and Phase 2

### 3. Eligibility Criteria
```xml
<eligibilityCriteria xmlns:vc="http://www.w3.org/2007/XMLSchema-versioning"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:noNamespaceSchemaLocation="file:../../../rate-plan-schema/eligibility_criteria.xsd">
    <eligibilityCriterion ratePlanCodeUnique="NIME105">
        <eligibilityCriteriaType>CustomerClass</eligibilityCriteriaType>
        <name>Residential</name>
        <description><![CDATA[Single phase residential purposes, in an individual residence; and in an individual flat or individual apartment...]]></description>
    </eligibilityCriterion>
</eligibilityCriteria>
```
Key points:
- Derived from the IEDR rate plan browser
- Specifies customer class eligibility for Residential customers
- Includes a description of eligible customers


## Data Sources

These XML instances are created by transforming data from the following sources:
1. IEDR rate plan browser tool
2. Utility statements
3. Tariff book leaf ranges
