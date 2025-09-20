'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Me</h1>
          <p className="text-lg text-foreground">
            I'd love to hear from you! Send me a message about books, reading recommendations, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-border-color">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-burgundy focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-burgundy focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-burgundy focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-burgundy focus:border-transparent resize-vertical"
                  placeholder="Tell me about your favorite books, ask for recommendations, or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent-burgundy text-white py-3 px-6 rounded-lg hover:bg-accent-green transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-border-color">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-burgundy bg-opacity-10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-accent-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-foreground">your-email@example.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-green bg-opacity-10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Response Time</h3>
                    <p className="text-foreground">Usually within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-highlight-gold bg-opacity-10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-highlight-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Book Recommendations</h3>
                    <p className="text-foreground">Always happy to share and receive book suggestions!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-border-color">
              <h3 className="text-xl font-bold text-foreground mb-4">What I Love to Discuss</h3>
              <ul className="space-y-2 text-foreground">
                <li>• Book recommendations and reviews</li>
                <li>• Reading challenges and goals</li>
                <li>• Favorite authors and genres</li>
                <li>• Book club discussions</li>
                <li>• Literary events and news</li>
                <li>• Writing and publishing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
