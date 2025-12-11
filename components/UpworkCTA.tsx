"use client"

import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle, ShieldCheck, Star } from "lucide-react"

export default function UpworkCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="upwork" className="py-20 relative overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">
            
            {/* Left Column: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for New Projects
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let&apos;s Collaborate on <br />
                <span className="text-[#14a800]">Upwork</span>
              </h2>

              <p className="text-gray-300 text-lg max-w-lg">
                Looking for a secure, streamlined way to work together? Hire me directly on Upwork for ease of payment, milestone tracking, and project protection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://upwork.com/freelancers/~01cbccbc9717a61377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#14a800] hover:bg-[#119100] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-green-900/20 hover:shadow-green-500/30 hover:-translate-y-1"
                >
                  Visit My Upwork Profile
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 text-gray-400 text-sm font-medium">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gray-300" />
                    <span>Payment Protection</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gray-300" />
                    <span>Verified Talent</span>
                 </div>
              </div>
            </div>

            {/* Right Column: Visual/Card */}
            <div className="relative lg:h-full flex items-center justify-center">
                {/* Floating "Card" Effect */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <div className="bg-[#14a800] p-3 rounded-xl">
                           <Star className="w-8 h-8 text-white fill-current" />
                        </div>
                        <div className="text-right">
                            <p className="text-gray-300 text-sm">Job Success</p>
                            <p className="text-3xl font-bold text-white">100%</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
                             <div className="h-full bg-[#14a800] w-full" />
                        </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Responsiveness</span>
                                <span className="text-white font-medium">Very Fast</span>
                            </div>
                             <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Delivery</span>
                                <span className="text-white font-medium">On Time</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-gray-300 text-sm italic">
                            &quot;Desalegn delivered exceptional work on our automation project. Highly recommended!&quot;
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
