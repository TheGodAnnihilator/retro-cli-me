import { Terminal } from '@/components/Terminal';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mark Gatere - Software Engineer || AI/ML</title>
        <meta name="description" content="Full Stack Software and AI Engineer specializing in JavaScript/TypeScript, Azure, AWS, and Artificial Intelligence development. Portfolio terminal interface." />
        <meta name="keywords" content="Mark Gatere, Software Engineer, AI/ML, JavaScript, TypeScript, React, Azure, AWS, Portfolio" />
        <meta property="og:title" content="Mark Gatere - Software Engineer || AI/ML" />
        <meta property="og:description" content="Interactive terminal portfolio showcasing projects and experience in software and AI engineering" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Terminal />
    </>
  );
};

export default Index;
