"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "./ui/card"
import { HiBriefcase, HiCalendar } from "react-icons/hi"

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      title: "QA Engineer",
      company: "Ablaze Labs",
      period: "2024 – Present",
      current: true,
      description: "Test digital products and automation systems, support integration of AI and automation features.",
      responsibilities: [
        "Test digital products and automation systems",
        "Support integration of AI and automation features",
        "Design and execute manual + automated test cases",
        "Work with engineering team on improving workflow reliability",
        "Contribute to automation improvements using Python + no-code tools",
      ],
      technologies: ["Python", "Selenium", "n8n", "AI Testing"],
    },
    {
      title: "Quality Assurance Engineer",
      company: "StartupAgile.ai",
      period: "2024 – Present (Part-time)",
      current: true,
      description: "Lead QA processes for AI automation products in a fast-paced startup environment.",
      responsibilities: [
        "Lead QA processes for AI automation products",
        "Build workflow automations using n8n and Python",
        "Create UATs and ensure stability of automation pipelines",
        "Test AI-powered features and integrations",
      ],
      technologies: ["n8n", "Python", "OpenAI", "Playwright"],
    },
    {
      title: "QA & System Support",
      company: "Perago Information Systems",
      period: "2023 – 2024",
      current: false,
      description: "Performed QA testing for enterprise platforms and provided comprehensive system support.",
      responsibilities: [
        "Performed QA testing for enterprise platforms",
        "Executed manual testing for core systems",
        "Developed automations to reduce manual operational work",
        "Provided system troubleshooting and support",
      ],
      technologies: ["Manual Testing", "Automation", "System Support"],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 border-l-2 border-blue-200 transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>

                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <HiBriefcase className="w-5 h-5 text-blue-600" />
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                            exp.current
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          <HiCalendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
