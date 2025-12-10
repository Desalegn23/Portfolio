"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {
  // TODO: Replace this URL with your actual Google Form embed URL
  // After creating your Google Form, click Send > Embed (<>) and copy the src URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScY3HojDC-wXc9dmxtelrzkBDhK9_fZZMFVdxAcFuB6F9sznQ/viewform?embedded=true"

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "destamamo123@gmail.com",
      href: "mailto:destamamo123@gmail.com",
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+251921755965",
      href: "tel:+251921755965",
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Ethiopia • Open to Remote",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm currently available for new opportunities and would love to discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <info.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/desalegn-mamo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:scale-110 text-blue-600"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="http://github.com/desalegn23/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all hover:scale-110 text-gray-900"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <p className="text-gray-700 font-medium">Available for new opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Form Embed */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[600px] overflow-hidden rounded-b-lg">
                <iframe
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="border-0"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
