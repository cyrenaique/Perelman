import { Theater, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Theater className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Perelman Theatre
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Amateur Theatre in English Perelman — bringing the joy of
              English-language theatre to our community through passion,
              creativity, and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/videos", label: "Videos" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>contact@perelman-theatre.org</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Your City, Your Country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Amateur Theatre in English Perelman.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
