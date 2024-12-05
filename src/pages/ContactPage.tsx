import { Motion, spring } from 'react-motion'
import { Phone, Mail, Instagram } from 'lucide-react'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
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
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200 transition-colors"
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
        </div>
      </div>
    </div>
  )
}

