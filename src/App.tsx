import { useState } from 'react';
import { Navigation, Hero, SocialLinks, About, Projects, Resume, SplashScreen } from './components';
import portfolioData from './data/portfolio';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowContent(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className={`relative min-h-screen noise-bg ${showContent ? 'content-visible' : 'content-hidden'}`}>
      {/* Navigation */}
      <Navigation items={portfolioData.navigation} />
      
      {/* Social Links Panel */}
      <SocialLinks links={portfolioData.socials} />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero content={portfolioData.hero} />
        
        {/* About Section */}
        <About content={portfolioData.about} />
        
        {/* Projects Section */}
        <Projects projects={portfolioData.projects} />
        
        {/* Resume Section */}
        <Resume experience={portfolioData.experience} />
        
        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} {portfolioData.hero.name}. Built with React & TypeScript.
            </p>
            <p className="footer-note">
              Designed & developed with precision.
            </p>
          </div>
        </footer>
      </main>
    </div>
    </>
  );
}

export default App;
