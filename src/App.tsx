import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import DJSection from './components/DJSection';
import MixtapeGrid from './components/MixtapeGrid';
import VideoSection from './components/VideoSection';
import ArtistMixtapes from './components/ArtistMixtapes';
import MerchSection from './components/MerchSection';
import AuthModal from './components/AuthModal';
import MembersPage from './components/MembersPage';
import PersonalizedDashboard from './components/PersonalizedDashboard';

const homepageMixtapes = [
  {
    name: "reg coffe rec",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/aminy-generation%2Fminy-2670b158-b5bc-49d4-a574-7b7cf333448a?alt=media&token=c57faad5-15ac-488d-adf9-357e90d3fc0e",
    shortenedLink: "https://go.minyvinyl.com/drivemix"
  },
  {
    name: "reg's coffee house nov",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/aminy-generation%2Fminy-8136b20f-c2f2-422f-8f36-1c14ae58580d?alt=media&token=1b708cb2-a4b2-4281-bbaa-223cdd8a880e",
    shortenedLink: "https://go.minyvinyl.com/novseventeen"
  },
  {
    name: "structure pulse",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/aminy-generation%2Fminy-4b1aa2b6-311e-44ea-bd8f-47da1814715d?alt=media&token=4e06c53e-4491-4c6c-81e3-4ecc5ebe24b4",
    shortenedLink: "https://go.minyvinyl.com/rkmix"
  }
];

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userName, setUserName] = useState('');

  const handleConnectClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuthSubmit = (data: { name: string; email: string; password: string }) => {
    setUserName(data.name);
    setIsAuthModalOpen(false);
  };

  // Protected route component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!userName) {
      return <Navigate to="/" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header onConnectClick={handleConnectClick} userName={userName} />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <DJSection />
              <MixtapeGrid mixtapes={homepageMixtapes} />
              <VideoSection />
              <ArtistMixtapes />
              <MerchSection />
            </main>
          } />
          <Route path="/members" element={
            <ProtectedRoute>
              <MembersPage userName={userName} />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <PersonalizedDashboard userName={userName} />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)}
          onSubmit={handleAuthSubmit}
        />
      </div>
    </Router>
  );
}

export default App;