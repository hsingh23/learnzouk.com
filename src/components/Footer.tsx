import { Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nina & Matheus</h3>
            <p className="text-sm text-gray-400">
              International dance instructors, performers, and choreographers
              specializing in Brazilian Zouk and Lambada.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link>
              <Link to="/courses" className="text-sm text-gray-400 hover:text-white">Courses</Link>
              <Link to="/performances" className="text-sm text-gray-400 hover:text-white">Performances</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ninaandmatheus" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors"
                title="@ninaandmatheus"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://www.instagram.com/ninadarbello" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors"
                title="@ninadarbello"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Nina's Instagram</span>
              </a>
              <a 
                href="https://www.instagram.com/thsfranco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors"
                title="@thsfranco"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Matheus's Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/channel/UCXe6U9JXZSR_pXQboFrRehA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors"
                title="Nina and Matheus on YouTube"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          2024 Nina & Matheus Dance. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
