import Head from 'next/head';

export default function MetaData() {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Your Name" />
      <meta
        name="description"
        content="Freelance Full Stack Web & App Developer specializing in React, Java, Spring Boot, AWS, and AI integration. Offering custom web and mobile solutions for businesses."
      />
      <meta
        name="keywords"
        content="Freelance Developer, Full Stack Developer, Web Development, App Development, React, Spring Boot, Java, AWS, AI Integration, Custom Development, Portfolio"
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Sannith Kumar - Freelance Full Stack Developer" />
      <meta
        property="og:description"
        content="Explore my portfolio showcasing custom web and app development projects. Specializing in Full Stack Development, AI integration, and cloud-based solutions."
      />
      <meta property="og:image" content="https://yourwebsite.com/thumbnail.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="sannith - Freelance Full Stack Developer" />
      <meta
        name="twitter:description"
        content="Custom web and app development tailored to your needs. Check out my portfolio and let's create something amazing together."
      />
      <meta name="twitter:image" content="https://yourwebsite.com/thumbnail.jpg" />
      <meta name="twitter:url" content="https://yourwebsite.com" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Additional Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#333333" />
      <meta name="language" content="English" />

      <title>Your Name - Freelance Full Stack Developer</title>
    </Head>
  );
}
