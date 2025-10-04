import { Terminal } from '@/components/Terminal';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Archit Rohatgi - Python Developer & Engineer</title>
        <meta name="description" content="B.Tech Electronics and Communication student at NSUT. Python developer specializing in desktop applications, automation, and video processing. Director of Ashwamedh Dramatics Society." />
        <meta name="keywords" content="Archit Rohatgi, Python Developer, NSUT, Electronics, Communication Engineering, Desktop Applications, Tkinter, MySQL, Portfolio" />
        <meta property="og:title" content="Archit Rohatgi - Python Developer & Engineer" />
        <meta property="og:description" content="Interactive terminal portfolio showcasing Python projects, internship experience, and creative achievements" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Terminal />
    </>
  );
};

export default Index;
