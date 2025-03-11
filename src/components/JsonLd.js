// components/JsonLd.js
export default function JsonLd() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SCF Strategies",
            "url": "https://www.scfstrategies.com",
            "logo": "https://www.scfstrategies.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.linkedin.com/company/scfstrategies",
              "https://twitter.com/scfstrategies"
            ]
          })
        }}
      />
    );
  }