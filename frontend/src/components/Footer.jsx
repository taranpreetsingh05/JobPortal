import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#6A38C2]">Portal</span>
            </h1>
            <p className="text-gray-600 mt-3">
              Find your dream job, connect with top recruiters, and
              grow your career with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/" className="hover:text-[#6A38C2]">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-[#6A38C2]">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/browse" className="hover:text-[#6A38C2]">
                  Browse
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Connect With Us</h2>

            <p className="text-gray-600">
              support@jobportal.com
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#">
                <span className="w-5 h-5 hover:text-[#6A38C2]" />
              </a>

              <a href="#">
                <span className="w-5 h-5 hover:text-[#6A38C2]" />
              </a>

              <a href="#">
                <span className="w-5 h-5 hover:text-[#6A38C2]" />
              </a>

              <a href="#">
                <span className="w-5 h-5 hover:text-[#6A38C2]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;