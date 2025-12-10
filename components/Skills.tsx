"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

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
      skills: ["n8n", "Zapier", "Make.com", "Airtable Automations", "Power Automate"],
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
      skills: ["REST APIs", "Webhooks", "Git & GitHub", "Cloud Deployments (Railway, Render)"],
    },
  ]

  // UPDATED PROFESSIONAL CHART DATA
  const chartData = [
    { subject: "AI & ML", value: 85 },
    { subject: "Automation", value: 92 },
    { subject: "Programming", value: 80 },
    { subject: "Cloud / DevOps", value: 70 },
    { subject: "Databases", value: 72 },
    { subject: "QA & Testing", value: 88 },
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

  const filteredCategories =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter)

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Comprehensive expertise in <strong>AI automation</strong>,{" "}
            <strong>no-code platforms</strong>, <strong>Python development</strong>, and{" "}
            <strong>QA engineering</strong>.
          </p>
        </div>

        {/* Filters */}
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
          {/* Skill Tags */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color)

              return (
                <div
                  key={category.id}
                  className={`transition-all duration-500 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${colorClasses.hover} hover:text-white hover:scale-105 cursor-pointer`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* UPDATED PROFESSIONAL RADAR CHART */}
          <div className="lg:col-span-1">
            <Card className="min-h-[520px] bg-white shadow-lg rounded-xl border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-center font-semibold text-gray-900">
                  Skill Proficiency
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="w-full h-[380px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={chartData}>
                      <defs>
                        <linearGradient id="proficiencyGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity={0.4} />
                        </linearGradient>
                      </defs>

                      <PolarGrid stroke="#e5e7eb" strokeWidth={1} />

                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#374151", fontSize: 12, fontWeight: 500 }}
                      />

                      <PolarRadiusAxis
                        domain={[0, 100]}
                        tick={{ fill: "#6b7280", fontSize: 10 }}
                        stroke="#d1d5db"
                      />

                      <Radar
                        dataKey="value"
                        stroke="#2563eb"
                        fill="url(#proficiencyGradient)"
                        fillOpacity={0.65}
                        strokeWidth={2.2}
                        animationDuration={1300}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Visual representation of proficiency across technical domains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
