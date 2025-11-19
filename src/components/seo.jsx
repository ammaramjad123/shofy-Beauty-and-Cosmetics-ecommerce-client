import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Men's Clothing Store | Eclipse`}
      </title>

      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Explore Eclipse — a premium men’s clothing store. From classic essentials to modern streetwear, find everything you need to elevate your style."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />

      {/* ===== 🔹 Open Graph / Facebook / LinkedIn / WhatsApp ===== */}
      <meta property="og:title" content="Eclipse – Men's Clothing Store" />
      <meta
        property="og:description"
        content="Discover Eclipse — premium men's fashion for the modern era. Shop shirts, jackets, and accessories designed to stand out."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eclipse-ecom.vercel.app/" />
      <meta 
  property="og:image" 
  content="https://eclipse-ecom.vercel.app/assets/img/icon/cover-metadata.png" 
/>
      <meta property="og:site_name" content="Eclipse" />
      <meta property="og:locale" content="en_US" />

      {/* ===== 🔹 Twitter / X Preview ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Eclipse – Men's Clothing Store" />
      <meta
        name="twitter:description"
        content="Explore premium men's clothing and accessories at Eclipse. Redefine your wardrobe with modern fashion essentials."
      />
      <meta 
  name="twitter:image" 
  content="https://eclipse-ecom.vercel.app/assets/img/icon/cover-metadata.png" 
/>

      {/* ===== 🔹 Additional metadata ===== */}
      <meta name="author" content="Eclipse" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  </>
);

export default SEO;
