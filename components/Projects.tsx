"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { HiCheckCircle } from "react-icons/hi"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      id: 1,
      category: "ai",
      title: "AI-Powered Automation Workflow",
      description: "Developed automated workflows combining AI, APIs, and business logic for intelligent process automation.",
      tools: ["n8n", "Python", "OpenAI"],
      achievements: [
        "Automated 50+ business processes",
        "Reduced manual work by 80%",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      category: "ai",
      title: "Intelligent Support Chatbot (RAG)",
      description: "Built a smart assistant using company documents for retrieval-based answers with advanced AI capabilities.",
      tools: ["OpenAI API", "LangChain", "Pinecone"],
      achievements: [
        "Reduced response time by 75%",
        "Handled 1000+ daily queries",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      category: "qa",
      title: "QA Automation Framework",
      description: "Automated repetitive test cases to reduce manual effort and improve testing efficiency.",
      tools: ["Selenium", "Playwright", "Python", "Pytest"],
      achievements: [
        "95% test coverage achieved",
        "Reduced testing time by 60%",
      ],
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      category: "workflow",
      title: "No-code Operational Automations",
      description: "Automated internal processes like notifications, reporting, and approvals using no-code platforms.",
      tools: ["Zapier", "Make.com", "Airtable"],
      achievements: [
        "Streamlined 30+ workflows",
        "Saved 20 hours/week",
      ],
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 5,
      category: "ai",
      title: "AI Agent Orchestration Experiments",
      description: "Built small agent networks for testing autonomous workflow concepts and multi-agent systems.",
      tools: ["MCP", "LangGraph", "CrewAI"],
      achievements: [
        "Created 5+ agent workflows",
        "Tested autonomous decision-making",
      ],
      gradient: "from-indigo-500 to-blue-600",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI Automation" },
    { id: "workflow", label: "Workflow Optimization" },
    { id: "qa", label: "QA Automation" },
  ]

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my key projects showcasing AI automation, workflow optimization, and technical innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                inView
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Gradient header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <HiCheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <HiCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
