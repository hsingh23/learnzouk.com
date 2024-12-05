import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { PerformancesPage } from './pages/PerformancesPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/performances" element={<PerformancesPage />} />
            <Route path="https://school.learnzouk.com/" />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

