import { Motion, spring } from 'react-motion'
import { Phone, Mail, Instagram } from 'lucide-react'
import { useState, FormEvent, useRef } from 'react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const previousDataRef = useRef(formData);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Store current form data before clearing
    previousDataRef.current = formData;
    // Optimistically clear the form
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
    
    try {
      const response = await fetch('https://celerity-forms.web.app/api/formEntries/contact-91d937', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(previousDataRef.current)
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Restore the previous form data
      setFormData(previousDataRef.current);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    if (status === 'error') {
      setStatus('idle');
    }
  };

  return (
    
    <div className="min-h-screen bg-black text-white pt-20">
      <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
      <div className="container mx-auto px-4 py-12">
        <Motion defaultStyle={{ opacity: 0, y: 20 }} style={{ opacity: spring(1), y: spring(0) }}>
          {interpolatedStyle => (
            <h1
              style={{
                opacity: interpolatedStyle.opacity,
                transform: `translateY(${interpolatedStyle.y}px)`
              }}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
            >
              Contact Us
            </h1>
          )}
        </Motion>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Motion defaultStyle={{ opacity: 0, x: -20 }} style={{ opacity: spring(1), x: spring(0) }}>
            {interpolatedStyle => (
              <div
                style={{
                  opacity: interpolatedStyle.opacity,
                  transform: `translateX(${interpolatedStyle.x}px)`
                }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-400 mb-6">
                  We'd love to hear from you. Fill out the form below and we'll get back to you as
                  soon as possible.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 bg-gray-800 rounded-md border ${
                        status === 'error' ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:border-white transition-colors`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 bg-gray-800 rounded-md border ${
                        status === 'error' ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:border-white transition-colors`}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 bg-gray-800 rounded-md border ${
                        status === 'error' ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:border-white transition-colors`}
                    />
                  </div>
                  {status === 'error' && (
                    <div className="text-red-500 text-sm">
                      Failed to send message. Please try again.
                    </div>
                  )}
                  {status === 'success' && (
                    <div className="text-green-500 text-sm">
                      Message sent successfully!
                    </div>
                  )}
                  <button
                    type="submit"
                    className={`w-full py-2 rounded-md transition-colors ${
                      status === 'error' 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-white hover:bg-gray-200 text-black'
                    }`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </Motion>

          <Motion defaultStyle={{ opacity: 0, x: 20 }} style={{ opacity: spring(1), x: spring(0) }}>
            {interpolatedStyle => (
              <div
                style={{
                  opacity: interpolatedStyle.opacity,
                  transform: `translateX(${interpolatedStyle.x}px)`
                }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-gray-400 mb-6">
                  You can also reach us through these channels:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+55 19 99295-5198</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>ninaandmatheus@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5" />
                    <span>@ninaandmatheus</span>
                  </div>
                </div>
              </div>
            )}
          </Motion>     
          
{/* 
          <Motion defaultStyle={{ opacity: 0, x: -20 }} style={{ opacity: spring(1), x: spring(0) }}>
            {interpolatedStyle => (
              <div
                style={{
                  opacity: interpolatedStyle.opacity,
                  transform: `translateX(${interpolatedStyle.x}px)`
                }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <div className="tidycal-embed" data-path="learnzouk/workshop-private"></div>
              </div>
            )}
          </Motion>

          <Motion defaultStyle={{ opacity: 0, x: 20 }} style={{ opacity: spring(1), x: spring(0) }}>
            {interpolatedStyle => (
              <div
                style={{
                  opacity: interpolatedStyle.opacity,
                  transform: `translateX(${interpolatedStyle.x}px)`
                }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <div className="tidycal-embed" data-path="learnzouk/online-private"></div>
              </div>
            )}
          </Motion>      */}
        </div>
      </div>
    </div>
  )
}
