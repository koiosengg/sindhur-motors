// ============================================
// JSON-LD SCHEMA TEMPLATES - Sindhur Motos
// Tailored for Sindhur Motos Electric Mobility
// ============================================

export const BASE_URL =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "https://sindhurmotors.com";

export const COMPANY_NAME = "Sindhur Motos";
export const ALTERNATE_NAME = "Sindhur Motos";
export const LOGO_URL = `${BASE_URL}/src/assets/Navbar/logo1.webp`;

// ============================================
// 1. ORGANIZATION SCHEMA
// Main brand and company information
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  alternateName: ALTERNATE_NAME,
  url: BASE_URL,
  logo: LOGO_URL,
  description:
    "Sindhur Motos pioneers next-generation electric mobility. Made for living, built for becoming.",
  foundingDate: "2024",
  knowsAbout: [
    "Electric Vehicles",
    "Electric Motorcycles",
    "Clean Mobility",
    "Sustainable Transportation",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support & Inquiries",
    url: `${BASE_URL}/#/contact`,
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.instagram.com/sindhurmotors",
    "https://www.linkedin.com/company/sindhur-motors",
  ],
};

// ============================================
// 2. LOCAL / AUTOMOTIVE BUSINESS SCHEMA
// ============================================
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: COMPANY_NAME,
  alternateName: ALTERNATE_NAME,
  description:
    "Sindhur Motos - Futuristic electric vehicle engineering and mobility solutions.",
  url: BASE_URL,
  image: LOGO_URL,
  priceRange: "$$",
};

// ============================================
// 3. WEBSITE SCHEMA
// Enables rich branding and search recognition
// ============================================
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  alternateName: ALTERNATE_NAME,
  url: BASE_URL,
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  },
};

// ============================================
// 4. ABOUT PAGE SCHEMA
// ============================================
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${COMPANY_NAME}`,
  description:
    "Discover the vision, journey, and engineering philosophy behind Sindhur Motos electric mobility.",
  url: `${BASE_URL}/#/about`,
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    description:
      "Sindhur Motos is dedicated to engineering innovative electric two-wheelers built for urban and performance riding.",
    knowsAbout: [
      "Electric Vehicle Design",
      "Sustainable Engineering",
      "Automotive Innovation",
    ],
  },
};

// ============================================
// 5. CONTACT PAGE SCHEMA
// ============================================
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${COMPANY_NAME}`,
  description:
    "Get in touch with Sindhur Motos for launch notifications, partnership inquiries, and test rides.",
  url: `${BASE_URL}/#/contact`,
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: BASE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: `${BASE_URL}/#/contact`,
      availableLanguage: ["English"],
    },
  },
};

// ============================================
// 6. PRIVACY POLICY PAGE SCHEMA
// ============================================
export const privacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Privacy Policy - ${COMPANY_NAME}`,
  description:
    "Learn how Sindhur Motos protects and handles your personal information.",
  url: `${BASE_URL}/#/privacy`,
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
  },
};

// ============================================
// 7. PRODUCT CATEGORY / VEHICLE SERIES SCHEMA
// ============================================
export const productCategorySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sindhur Motos Electric Vehicle Lineup",
  description:
    "Upcoming electric motorcycle and scooter series engineered for modern transit.",
  itemListElement: [
    {
      "@type": "Product",
      name: "Sindhur Electric Motorcycle Series",
      description:
        "High-performance electric mobility crafted with precision engineering.",
      brand: {
        "@type": "Brand",
        name: COMPANY_NAME,
      },
      category: "Electric Vehicles",
    },
  ],
};

// ============================================
// 8. BREADCRUMB SCHEMA BUILDERS
// ============================================
export const getBreadcrumbSchema = (pageName, pagePath) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${BASE_URL}/#/`,
    },
    ...(pagePath && pagePath !== "/"
      ? [
          {
            "@type": "ListItem",
            position: 2,
            name: pageName,
            item: `${BASE_URL}/#${pagePath.startsWith("/") ? pagePath : `/${pagePath}`}`,
          },
        ]
      : []),
  ],
});

export default {
  organization: organizationSchema,
  localBusiness: localBusinessSchema,
  webSite: webSiteSchema,
  aboutPage: aboutPageSchema,
  contactPage: contactPageSchema,
  privacyPage: privacyPageSchema,
  productCategory: productCategorySchema,
  getBreadcrumb: getBreadcrumbSchema,
};
