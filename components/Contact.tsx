"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from "react-icons/hi"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "Job Opportunity", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

          {/* Contact Form */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <HiCheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      required
                    >
                      <option>Job Opportunity</option>
                      <option>Project Collaboration</option>
                      <option>Consulting Request</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
