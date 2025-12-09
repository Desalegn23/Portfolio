"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Hero() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16 overflow-hidden">
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#2563eb",
            },
            links: {
              color: "#2563eb",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />
      )}

      {/* Background decoration blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
                <Image
                  src="/profile-photo.jpg"
                  alt="Desalegn Mamo - AI & Automation Engineer specializing in n8n, Make.com, Zapier automation in Ethiopia"
                  width={192}
                  height={192}
                  className="object-cover"
                  priority
                />
              </div>
              {/* Availability indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="block">Desalegn Mamo</span>
              <span className="block text-3xl text-blue-600 mt-2">
                AI & Automation Engineer in Ethiopia
              </span>
            </h1>
            <div className="text-2xl text-gray-700 mb-6 font-medium h-16">
              <TypeAnimation
                sequence={[
                  "n8n Automation Specialist",
                  2000,
                  "Make.com Expert",
                  2000,
                  "Zapier Automation Developer",
                  2000,
                  "QA Automation Engineer",
                  2000,
                  "Python AI Developer",
                  2000,
                  "No-code Solutions Expert",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
              Expert in building intelligent automation workflows using <strong>n8n</strong>, <strong>Make.com</strong>, and <strong>Zapier</strong>. 
              Specializing in AI-powered automation, Python development, and QA engineering based in <strong>Addis Ababa, Ethiopia</strong>.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-gray-600">
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <HiMail className="w-5 h-5" />
                <span className="text-sm">destamamo123@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <HiPhone className="w-5 h-5" />
                <span className="text-sm">+251921755965</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <HiLocationMarker className="w-5 h-5" />
                <span className="text-sm">Ethiopia</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                ✓ Available for hire
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                ✓ Open to remote
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                ✓ Full-time | Part-time
              </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/desalegn-mamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Desalegn23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-900 hover:bg-gray-900 hover:text-white"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
