// app/contact/page.tsx or pages/contact.tsx
"use client";

export default function Contact() {
  return (
    <main id="contact" className="bg-white text-gray-900">
      {/* Hero */}
      <section className="text-black py-40 mt-30 text-center">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions or want to schedule a visit? Reach out to us and we’ll be happy to help.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              Our team is available to assist you from Monday to Friday, 9am to 6pm.
            </p>
          </div>

          <div className="space-y-4 text-lg">
            <div>
              <span className="font-bold">📍 Address:</span><br />
              123 Real Estate Ave, Casablanca, Morocco
            </div>
            <div>
              <span className="font-bold">📞 Phone:</span><br />
              +212 6 00 00 00 00
            </div>
            <div>
              <span className="font-bold">📧 Email:</span><br />
              info@dreamhome.com
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
