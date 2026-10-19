# JSON-LD Structured Data Template for SEO

A complete, production-ready template for implementing Schema.org JSON-LD structured data to improve search engine visibility and enable rich snippets.

---

## Table of Contents

1. [What is JSON-LD?](#what-is-json-ld)
2. [Benefits](#benefits)
3. [Project Structure](#project-structure)
4. [Framework Implementations](#framework-implementations)
   - [React](#react)
   - [Next.js](#nextjs)
   - [Vue.js](#vuejs)
   - [Vanilla HTML](#vanilla-html)
5. [Schema Types Reference](#schema-types-reference)
6. [Usage Guide](#usage-guide)
7. [Best Practices](#best-practices)
8. [Testing & Validation](#testing--validation)

---

## What is JSON-LD?

JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight Linked Data format that structures your website's data in a way search engines can easily understand. It's the recommended format by Google for implementing Schema.org structured data.

---

## Benefits

- **Rich Snippets**: Enhanced search results with ratings, images, FAQs, etc.
- **Knowledge Panels**: Brand information displayed prominently in search
- **Voice Search Optimization**: Helps voice assistants understand your content
- **Better Click-Through Rates**: Rich results attract more attention
- **SEO Ranking Signals**: Structured data is a confirmed ranking factor

---

## Project Structure

```
src/
├── structured-data/
│   ├── index.jsx          # Main exports & page components
│   ├── schemas.js         # All schema definitions
│   └── README.md          # This file
```

---

## Framework Implementations

### React

#### 1. Create `src/structured-data/index.jsx`

```jsx
import React from 'react';

/**
 * JSON-LD Script Component
 * Renders a JSON-LD script tag for structured data
 */
export const JsonLdScript = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data)
    }}
  />
);

/**
 * Home Page Structured Data
 */
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Home', '/')} />
  </>
);

// Import schemas from schemas.js
import {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqPageSchema,
  productCategorySchema,
  webSiteSchema,
  contactPageSchema,
  aboutPageSchema,
  getBreadcrumbSchema
} from './schemas';

export {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqPageSchema,
  productCategorySchema,
  webSiteSchema,
  contactPageSchema,
  aboutPageSchema,
  getBreadcrumbSchema
};
```

#### 2. Create `src/structured-data/schemas.js`

```javascript
// ============================================
// JSON-LD SCHEMA TEMPLATES
// Replace placeholder values with your actual data
// ============================================

const BASE_URL = 'https://www.yourwebsite.com';
const COMPANY_NAME = 'Your Company Name';
const LOGO_URL = `${BASE_URL}/logo.png`;

// ============================================
// 1. ORGANIZATION SCHEMA
// For your main company/brand information
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": COMPANY_NAME,
  "alternateName": "Alternative Name", // Optional
  "url": BASE_URL,
  "logo": LOGO_URL,
  "description": "Your company description here. Keep it under 160 characters.",
  "foundingDate": "YYYY",
  "founders": [
    {
      "@type": "Person",
      "name": "Founder Name"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street", // Optional
    "addressLocality": "City",
    "addressRegion": "State/Region",
    "postalCode": "12345", // Optional
    "addressCountry": "Country Code (e.g., US, UK, IN)"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-123-456-7890",
    "contactType": "Customer Service",
    "email": "contact@yourcompany.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.facebook.com/yourcompany",
    "https://www.instagram.com/yourcompany",
    "https://twitter.com/yourcompany",
    "https://www.linkedin.com/company/yourcompany"
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Global"
    }
  ]
};

// ============================================
// 2. LOCAL BUSINESS SCHEMA
// For businesses with physical locations
// ============================================
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // Or specific type like "Restaurant", "Store"
  "name": COMPANY_NAME,
  "description": "Brief description of your business and services.",
  "url": BASE_URL,
  "telephone": "+1-123-456-7890",
  "email": "contact@yourcompany.com",
  "image": `${BASE_URL}/business-image.jpg`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$", // $ = inexpensive, $$$$ = very expensive
  "paymentAccepted": "Cash, Credit Card, PayPal",
  "currenciesAccepted": "USD"
};

// ============================================
// 3. SERVICE SCHEMA
// For service-based businesses
// ============================================
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Your Service Name",
  "provider": {
    "@type": "Organization",
    "name": COMPANY_NAME
  },
  "description": "Detailed description of the service you provide.",
  "url": `${BASE_URL}/services`,
  "areaServed": {
    "@type": "Place",
    "name": "Service Area"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Service 1",
          "description": "Description of service 1"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Service 2",
          "description": "Description of service 2"
        }
      }
    ]
  },
  "termsOfService": `${BASE_URL}/terms`,
  "serviceType": "Type of Service"
};

// ============================================
// 4. FAQ PAGE SCHEMA
// For pages with Frequently Asked Questions
// ============================================
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your answer here. Can include <strong>HTML</strong> formatting."
      }
    },
    {
      "@type": "Question",
      "name": "Another question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Another answer here."
      }
    }
  ]
};

// ============================================
// 5. PRODUCT SCHEMA
// For product listings or individual products
// ============================================
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": [
    `${BASE_URL}/product-image-1.jpg`,
    `${BASE_URL}/product-image-2.jpg`
  ],
  "description": "Detailed product description.",
  "sku": "SKU-12345",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": COMPANY_NAME
  },
  "offers": {
    "@type": "Offer",
    "url": `${BASE_URL}/product-url`,
    "priceCurrency": "USD",
    "price": "29.99",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "100"
  }
};

// Product List Schema (for category pages)
export const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Product 1",
      "description": "Product 1 description",
      "brand": {
        "@type": "Brand",
        "name": "Brand Name"
      },
      "category": "Category Name"
    },
    {
      "@type": "Product",
      "name": "Product 2",
      "description": "Product 2 description",
      "brand": {
        "@type": "Brand",
        "name": "Brand Name"
      },
      "category": "Category Name"
    }
  ]
};

// ============================================
// 6. WEBSITE SCHEMA
// Enables site search in Google results
// ============================================
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": COMPANY_NAME,
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL
    }
  }
};

// ============================================
// 7. CONTACT PAGE SCHEMA
// For contact/information pages
// ============================================
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": `Contact ${COMPANY_NAME}`,
  "description": "Get in touch with us for inquiries and support.",
  "url": `${BASE_URL}/contact`,
  "mainEntity": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "telephone": "+1-123-456-7890",
    "email": "contact@yourcompany.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "City",
      "addressRegion": "State",
      "addressCountry": "US"
    }
  }
};

// ============================================
// 8. ABOUT PAGE SCHEMA
// For about/company information pages
// ============================================
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": `About ${COMPANY_NAME}`,
  "description": "Learn about our company history, mission, and values.",
  "url": `${BASE_URL}/about`,
  "mainEntity": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "foundingDate": "YYYY",
    "description": "Company description here.",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50" // Or exact number
    },
    "knowsAbout": [
      "Industry Expertise 1",
      "Industry Expertise 2",
      "Industry Expertise 3"
    ]
  }
};

// ============================================
// 9. BREADCRUMB SCHEMA
// Helper function for breadcrumb navigation
// ============================================
export const getBreadcrumbSchema = (pageName, pageUrl) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": BASE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `${BASE_URL}${pageUrl}`
    }
  ]
});

// Multi-level breadcrumb for deeper pages
export const getDeepBreadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${BASE_URL}${crumb.url}`
  }))
});

// ============================================
// 10. ARTICLE/BLOG POST SCHEMA
// For blog posts and articles
// ============================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "description": "Article description or excerpt.",
  "image": `${BASE_URL}/article-image.jpg`,
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_NAME,
    "logo": {
      "@type": "ImageObject",
      "url": LOGO_URL
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${BASE_URL}/blog/article-slug`
  }
};

// ============================================
// Default Export - All Schemas
// ============================================
export default {
  organization: organizationSchema,
  localBusiness: localBusinessSchema,
  service: serviceSchema,
  faqPage: faqPageSchema,
  product: productSchema,
  productList: productListSchema,
  webSite: webSiteSchema,
  contactPage: contactPageSchema,
  aboutPage: aboutPageSchema,
  getBreadcrumb: getBreadcrumbSchema,
  getDeepBreadcrumb: getDeepBreadcrumbSchema,
  article: articleSchema
};
```

#### 3. Usage in Page Components

```jsx
// src/pages/Home.jsx
import React from 'react';
import { HomePageStructuredData } from '../structured-data/index.jsx';

const Home = () => {
  return (
    <>
      {/* Structured Data - placed anywhere in the component */}
      <HomePageStructuredData />
      
      {/* Page content */}
      <main>
        <h1>Welcome to Our Company</h1>
        {/* ... */}
      </main>
    </>
  );
};

export default Home;
```

---

### Next.js

For Next.js, use the `next/head` component for better SEO and automatic `<head>` injection:

```jsx
// src/structured-data/SchemaInjector.jsx
import Head from 'next/head';

export const SchemaInjector = ({ schemas }) => {
  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </Head>
  );
};

// Usage in pages
import { SchemaInjector } from '../structured-data/SchemaInjector';
import { organizationSchema, webSiteSchema } from '../structured-data/schemas';

export default function HomePage() {
  return (
    <>
      <SchemaInjector schemas={[organizationSchema, webSiteSchema]} />
      {/* Page content */}
    </>
  );
}
```

---

### Vue.js

```vue
<!-- src/components/JsonLdScript.vue -->
<template>
  <component :is="'script'" type="application/ld+json">
    {{ jsonString }}
  </component>
</template>

<script>
export default {
  name: 'JsonLdScript',
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  computed: {
    jsonString() {
      return JSON.stringify(this.schema);
    }
  },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          innerHTML: this.jsonString
        }
      ]
    };
  }
};
</script>
```

---

### Vanilla HTML

For static HTML sites or server-rendered pages:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
  
  <!-- Organization Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Company",
    "url": "https://www.yourcompany.com",
    "logo": "https://www.yourcompany.com/logo.png",
    "description": "Your company description"
  }
  </script>
  
  <!-- Local Business Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Business",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "City",
      "addressRegion": "State",
      "addressCountry": "US"
    }
  }
  </script>
</head>
<body>
  <!-- Page content -->
</body>
</html>
```

---

## Schema Types Reference

| Schema Type | Purpose | Best For |
|-------------|---------|----------|
| `Organization` | Company/brand info | All pages |
| `LocalBusiness` | Physical location businesses | Contact, Home pages |
| `Service` | Service descriptions | Services, Capabilities pages |
| `Product` | Individual products | Product detail pages |
| `ItemList` | Product categories | Category listing pages |
| `FAQPage` | Q&A content | FAQ pages |
| `WebSite` | Site search | Home page |
| `ContactPage` | Contact information | Contact pages |
| `AboutPage` | Company information | About pages |
| `BreadcrumbList` | Navigation breadcrumbs | All pages |
| `Article` | Blog posts | Blog/Article pages |

---

## Usage Guide

### Step 1: Configure Constants

Edit the constants at the top of `schemas.js`:

```javascript
const BASE_URL = 'https://www.yourwebsite.com';
const COMPANY_NAME = 'Your Company Name';
const LOGO_URL = `${BASE_URL}/logo.png`;
```

### Step 2: Customize Schemas

Update each schema with your actual business information:
- Company details
- Contact information
- Social media URLs
- Services/Products
- FAQs

### Step 3: Create Page Components

Create page-specific structured data components:

```jsx
// Example: Services Page
export const ServicesPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={serviceSchema} />
    <JsonLdScript data={faqPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Services', '/services')} />
  </>
);
```

### Step 4: Add to Pages

Import and use in your page components:

```jsx
import { ServicesPageStructuredData } from '../structured-data/index.jsx';

const ServicesPage = () => (
  <>
    <ServicesPageStructuredData />
    {/* Page content */}
  </>
);
```

---

## Best Practices

### 1. **Always Validate**
Always test your JSON-LD using Google's Rich Results Test before deploying.

### 2. **Keep Data Accurate**
Ensure all information (prices, dates, availability) is current and accurate.

### 3. **Avoid Duplication**
Don't add the same schema type multiple times on the same page.

### 4. **Use Required Properties**
Each schema type has required properties. Check Schema.org documentation.

### 5. **Images**
Use high-quality images with proper URLs. Avoid relative paths.

### 6. **Dynamic Data**
For dynamic content (products, articles), generate schemas from your data:

```javascript
export const generateProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "price": product.price,
  // ... other properties
});
```

### 7. **Multiple Schemas**
You can include multiple schemas on a single page. Common combinations:
- Home: Organization + WebSite + LocalBusiness
- Product: Product + Organization + BreadcrumbList
- Contact: ContactPage + LocalBusiness + Organization

### 8. **Minimize Bundle Size**
Import only the schemas you need:

```javascript
// Good: Tree-shakeable imports
import { organizationSchema } from './schemas';

// Avoid: Imports entire file
import schemas from './schemas';
```

---

## Testing & Validation

### Google Tools

1. **Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test live URLs or paste code
   - Shows which rich results are eligible

2. **Schema Markup Validator**
   - URL: https://validator.schema.org/
   - Validates all Schema.org markup
   - Shows warnings and errors

3. **Google Search Console**
   - Monitor structured data reports
   - See errors and impressions
   - Track rich results performance

### Browser Extensions

- **Schema Markup Validator** (Chrome Extension)
- **SEO Meta in 1 Click** (Shows structured data)

### Common Errors

| Error | Solution |
|-------|----------|
| "Missing field" | Add the required property |
| "Invalid value" | Check data type (string vs number) |
| "Image URL not accessible" | Ensure image is publicly accessible |
| "Date format invalid" | Use ISO 8601 format (YYYY-MM-DD) |

---

## Quick Reference Checklist

When setting up JSON-LD for a new project:

- [ ] Set `BASE_URL` constant
- [ ] Set `COMPANY_NAME` constant
- [ ] Set `LOGO_URL` constant
- [ ] Update Organization schema
- [ ] Update LocalBusiness schema (if applicable)
- [ ] Update Service schema with actual services
- [ ] Update FAQ schema with real FAQs
- [ ] Update Product schemas
- [ ] Configure breadcrumb paths for each page
- [ ] Test with Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Search Console for errors

---

## Additional Resources

- **Schema.org**: https://schema.org/
- **Google Search Central**: https://developers.google.com/search/docs/advanced/structured-data
- **JSON-LD Spec**: https://json-ld.org/

---

## License

This template is free to use for personal and commercial projects.

---

**Generated from Standard Pencils JSON-LD Implementation**
*Template extracted and generalized for universal use*
