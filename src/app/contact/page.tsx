import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 select-none pointer-events-none">
          <div className="absolute top-8 left-[8%] font-math text-6xl text-white/[0.04] rotate-12">&#x222B;</div>
          <div className="absolute bottom-4 right-[12%] font-math text-7xl text-white/[0.04] -rotate-6">&theta;</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/10">
            <Mail className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium text-gold-200">Reach Out</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-primary-200 max-w-xl mx-auto text-lg">
            Interested in joining or attending a performance? We would love
            to hear from you!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@perelman-theatre.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      Salle Saint-Madeleine, Place Saint-Madeleine
                      <br />
                      Strasbourg, 67000, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Rehearsals</h3>
                    <p className="text-gray-600">
                      Weekly — see our schedule for details
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (static / no backend) */}
            <div className="bg-white rounded-2xl p-8 border border-primary-100 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              <form
                action="https://formsubmit.co/your-email@example.com"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-primary-100 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-chalk-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-primary-100 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-chalk-50"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-primary-100 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none bg-chalk-50"
                    placeholder="Tell us what you're interested in..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
