import { Mail, MapPin, Clock } from "lucide-react";

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
            <Mail className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-primary-200">Reach Out</span>
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
          <div>
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
                    <p className="text-gray-600">geniustwice@gmail.com</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
