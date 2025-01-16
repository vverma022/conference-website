import React from 'react'
import { useState } from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', query: '' });
      };
    
  return (
<>
<form onSubmit={handleSubmit} className="space-y-3 max-w-md ml-auto">
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-1.5 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-1.5 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Query"
                  value={formData.query}
                  onChange={(e) => setFormData({...formData, query: e.target.value})}
                  className="w-full px-3 py-1.5 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary h-24 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-1.5 rounded hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Send Message
              </button>
            </form>
            </>
            )
        }