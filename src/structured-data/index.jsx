import React from "react";
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  aboutPageSchema,
  contactPageSchema,
  privacyPageSchema,
  productCategorySchema,
  getBreadcrumbSchema,
} from "./schemas";

/**
 * JSON-LD Script Component
 * Renders a JSON-LD script tag for Schema.org structured data
 */
export const JsonLdScript = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
};

/**
 * Home Page Structured Data
 */
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={productCategorySchema} />
    <JsonLdScript data={getBreadcrumbSchema("Home", "/")} />
  </>
);

/**
 * About Page Structured Data
 */
export const AboutPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={aboutPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("About", "/about")} />
  </>
);

/**
 * Contact Page Structured Data
 */
export const ContactPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Contact", "/contact")} />
  </>
);

/**
 * Privacy Policy Page Structured Data
 */
export const PrivacyPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={privacyPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Privacy Policy", "/privacy")} />
  </>
);

export {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  aboutPageSchema,
  contactPageSchema,
  privacyPageSchema,
  productCategorySchema,
  getBreadcrumbSchema,
};
