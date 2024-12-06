import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { PerformancesPage } from './pages/PerformancesPage'
import { ContactPage } from './pages/ContactPage'
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics'

function AppContent() {
  useGoogleAnalytics();
  
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/performances" element={<PerformancesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="https://school.learnzouk.com/" />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
