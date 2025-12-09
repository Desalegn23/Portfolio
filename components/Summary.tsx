"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { HiCode, HiCog, HiLightningBolt } from "react-icons/hi"

export default function Summary() {
  const highlights = [
    {
      icon: HiCode,
      title: "Code Automation",
      description: "Python, Node.js, TypeScript",
    },
    {
      icon: HiCog,
      title: "No-Code Solutions",
      description: "n8n, Zapier, Make.com",
    },
    {
      icon: HiLightningBolt,
      title: "AI Integration",
      description: "OpenAI, LLMs, RAG Systems",
    },
  ]

  return (
    <section id="summary" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Energetic and passionate <strong>AI & Automation Engineer</strong> based in <strong>Addis Ababa, Ethiopia</strong>, 
                  skilled in developing intelligent automation solutions using code, no-code, and low-code tools. 
                  Specializes in workflow automation with <strong>n8n</strong>, <strong>Make.com</strong>, and <strong>Zapier</strong>, 
                  QA automation, AI integration with <strong>OpenAI</strong> and <strong>LangChain</strong>, and building practical 
                  solutions that streamline operations and reduce manual work. Strong background in testing, system support, 
                  and building smart automations using <strong>Python</strong>, AI models, and leading automation platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
