export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">DreamHome</h2>
          <p className="mt-4 text-gray-400">
            Helping you find the perfect home with trusted real estate services. Comfort, quality, and convenience — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="#listings" className="hover:text-white transition">Listings</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 123 Real Estate Ave, Casablanca</li>
            <li>📞 +212 6 00 00 00 00</li>
            <li>📧 info@dreamhome.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DreamHome. All rights reserved.
      </div>
    </footer>
  );
}
