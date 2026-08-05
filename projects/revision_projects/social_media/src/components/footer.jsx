function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Section</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Section</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Section</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Subscribe to our newsletter
            </h3>

            <p className="text-gray-400 mb-4">
              Monthly digest of what's new and exciting from us.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Company, Inc. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>

            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
