"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      id: "ai",
      title: "AI Automation",
      color: "blue",
      skills: [
        "Python Automation",
        "AI Workflows",
        "LLM Integrations",
        "RAG Systems",
        "API Orchestration",
        "Intelligent Agents (MCP, LangGraph, CrewAI)",
      ],
    },
    {
      id: "nocode",
      title: "No-Code / Low-Code Automation",
      color: "green",
      skills: [
        "n8n",
        "Zapier",
        "Make.com",
        "Airtable Automations",
        "Power Automate",
      ],
    },
    {
      id: "aitools",
      title: "AI Tools & Technologies",
      color: "purple",
      skills: [
        "OpenAI API",
        "Gemini API",
        "LangChain/LlamaIndex",
        "Vector DBs (Pinecone, Weaviate)",
      ],
    },
    {
      id: "qa",
      title: "QA Engineering",
      color: "orange",
      skills: [
        "Manual Testing",
        "Functional Testing",
        "UAT",
        "Selenium",
        "Playwright",
        "API Testing (Postman)",
      ],
    },
    {
      id: "other",
      title: "Other Supporting Skills",
      color: "red",
      skills: [
        "REST APIs",
        "Webhooks",
        "Git & GitHub",
        "Cloud Deployments (Railway, Render)",
      ],
    },
  ]

  const chartData = [
    { subject: "AI/ML", value: 85 },
    { subject: "Automation", value: 90 },
    { subject: "Programming", value: 80 },
    { subject: "Cloud/DevOps", value: 75 },
    { subject: "Databases", value: 70 },
    { subject: "QA/Testing", value: 85 },
  ]

  const filters = [
    { id: "all", label: "All Skills" },
    { id: "ai", label: "AI & ML" },
    { id: "nocode", label: "Automation" },
    { id: "aitools", label: "AI Tools" },
    { id: "qa", label: "QA & Testing" },
    { id: "other", label: "Other" },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", hover: "hover:bg-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-800", hover: "hover:bg-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", hover: "hover:bg-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-800", hover: "hover:bg-orange-600" },
      red: { bg: "bg-red-100", text: "text-red-800", hover: "hover:bg-red-600" },
    }
    return colors[color] || colors.blue
  }

  const filteredCategories = activeFilter === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter)

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise in <strong>AI automation</strong>, <strong>no-code platforms</strong> (n8n, Make.com, Zapier), 
            <strong>Python development</strong>, and <strong>QA engineering</strong> with proven experience delivering intelligent workflow solutions.
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color)
              return (
                <div
                  key={category.id}
                  className={`transition-all duration-500 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${colorClasses.hover} hover:text-white hover:scale-105 cursor-pointer relative overflow-hidden group`}
                          >
                            {skill}
                            <span className="absolute inset-0 bg-white opacity-0 group-active:opacity-30 transition-opacity duration-200 rounded-full"></span>
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Skills Chart */}
          <div className="lg:col-span-1">
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Skill Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={chartData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#6b7280" }} />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#2563eb"
                      fill="#2563eb"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Technical proficiency across key domains
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
