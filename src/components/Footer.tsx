import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
        <div className="absolute top-4 left-8 font-math text-6xl text-white rotate-12">&#x222B;</div>
        <div className="absolute top-12 right-16 font-math text-5xl text-white -rotate-6">&pi;</div>
        <div className="absolute bottom-8 left-1/3 font-math text-4xl text-white rotate-3">&infin;</div>
        <div className="absolute bottom-4 right-8 font-math text-5xl text-white rotate-12">&Sigma;</div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="font-math text-xl font-bold text-primary-800">&pi;</span>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Perelman Theatre
              </span>
            </div>
            <p className="text-sm text-primary-300 leading-relaxed">
              Amateur Theatre in English Perelman — where the elegance of
              mathematics meets the art of performance. Like a beautiful proof,
              every show tells a story.
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
                    className="text-sm hover:text-white transition-colors"
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
                <Mail className="w-4 h-4 text-primary-300" />
                <span>contact@perelman-theatre.org</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary-300" />
                <span>Strasbourg, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-10 pt-6 text-center text-sm text-primary-400">
          <span className="font-math mr-1">&copy;</span> {new Date().getFullYear()} Amateur Theatre in English Perelman.
          <span className="block mt-1 text-primary-500 font-math text-xs italic">
            &quot;Every elegant proof deserves an audience.&quot;
          </span>
        </div>
      </div>
    </footer>
  );
}
