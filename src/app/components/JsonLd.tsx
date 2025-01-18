// components/JsonLd.tsx
export default function JsonLd() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UpscaleNext",
            url: "https://www.upscalenext.cloud/",
            logo: "https://www.upscalenext.cloud/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-7025732665",
              contactType: "IT Services",
              email: "upscalenext@gmail.com"
            },
            sameAs: [
              "https://www.facebook.com/upscalenext",
              "https://twitter.com/upscalenext",
              "https://www.linkedin.com/company/upscalenext"
            ]
          })
        }}
      />
    )
  }