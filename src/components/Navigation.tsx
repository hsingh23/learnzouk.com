import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Youtube, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed w-full z-50   bg-black/90 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-white text-xl font-semibold">
                    NINA & MATHEUS
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/performances" className="text-white hover:text-gray-300">Performances</Link>
                    <Link to="https://school.learnzouk.com/" className="text-white hover:text-gray-300">School</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://www.instagram.com/ninaandmatheus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCXe6U9JXZSR_pXQboFrRehA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <Youtube className="w-5 h-5" />
                    </a>
                </div>

                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-sm">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <Link to="/" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/performances" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Performances</Link>
                        <Link to="https://school.learnzouk.com/" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>School</Link>
                        <Link to="/contact" className="text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <div className="flex items-center space-x-4">
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
            )}
        </nav>
    )
}

