import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nina & Matheus</h3>
            <p className="text-gray-400">
              International dance instructors specializing in Brazilian Zouk and Lambada.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/performances" className="text-gray-400 hover:text-white">Performances</Link></li>
              <li><Link to="https://school.learnzouk.com/" className="text-gray-400 hover:text-white">School</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Campinas, SP</li>
              <li>Brazil</li>
              <li>info@ninaandmatheus.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ninaandmatheus" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a href="https://www.youtube.com/channel/UCXe6U9JXZSR_pXQboFrRehA" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nina & Matheus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
