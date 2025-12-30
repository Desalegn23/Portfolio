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
      id: "fullstack",
      title: "Fullstack Development",
      color: "indigo",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "TypeScript",
      ],
    },
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
        "Intelligent Agents",
      ],
    },
    {
      id: "nocode",
      title: "No-Code / Low-Code",
      color: "green",
      skills: ["n8n", "Zapier", "Make.com", "Airtable", "Power Automate"],
    },
    {
      id: "aitools",
      title: "AI Tools & Technologies",
      color: "purple",
      skills: [
        "OpenAI API",
        "Gemini API",
        "LangChain",
        "LlamaIndex",
        "Vector DBs",
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
        "Postman",
      ],
    },
    {
      id: "other",
      title: "Other Skills",
      color: "red",
      skills: ["REST APIs", "Webhooks", "Git & GitHub", "Cloud Deployments"],
    },
  ]

  // UPDATED PROFESSIONAL CHART DATA
  const chartData = [
    { subject: "Fullstack", value: 92, fullMark: 100 },
    { subject: "AI & ML", value: 95, fullMark: 100 },
    { subject: "Automation", value: 92, fullMark: 100 },
    { subject: "Programming", value: 85, fullMark: 100 },
    { subject: "Databases", value: 88, fullMark: 100 },
    { subject: "QA & Testing", value: 88, fullMark: 100 },
  ]

  const filters = [
    { id: "all", label: "All Skills" },
    { id: "fullstack", label: "Fullstack" },
    { id: "ai", label: "AI & ML" },
    { id: "nocode", label: "Automation" },
    { id: "aitools", label: "AI Tools" },
    { id: "qa", label: "QA & Testing" },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string; border: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-700", hover: "hover:bg-blue-100", border: "border-blue-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-700", hover: "hover:bg-indigo-100", border: "border-indigo-200" },
      green: { bg: "bg-emerald-50", text: "text-emerald-700", hover: "hover:bg-emerald-100", border: "border-emerald-200" },
      purple: { bg: "bg-violet-50", text: "text-violet-700", hover: "hover:bg-violet-100", border: "border-violet-200" },
      orange: { bg: "bg-amber-50", text: "text-amber-700", hover: "hover:bg-amber-100", border: "border-amber-200" },
      red: { bg: "bg-rose-50", text: "text-rose-700", hover: "hover:bg-rose-100", border: "border-rose-200" },
    }
    return colors[color] || colors.blue
  }

  const filteredCategories =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter)

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gray-50 -z-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4 border border-blue-100">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Proficiency</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A diverse skillset spanning <strong>Fullstack Development</strong>, <strong>AI automation</strong>, 
            and <strong>intelligent agents</strong>, backed by robust database management.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          {/* Skill Tags */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color)

              return (
                <div
                  key={category.id}
                  className={`transition-all duration-500 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full border border-gray-100 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group overflow-hidden">
                    <div className={`h-1.5 w-full bg-${category.color}-500 opacity-80`} />
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2 text-gray-800">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} border px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default`}
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
          <div className={`xl:col-span-1 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <Card className="overflow-hidden border border-gray-200 bg-white shadow-xl shadow-gray-200/50 rounded-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-center font-bold text-gray-900">
                  Proficiency Overview
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 sm:p-4">
                <div className="w-full h-[400px] sm:h-[450px] flex items-center justify-center -ml-2 sm:ml-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                      <defs>
                        <linearGradient id="proficiencyGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.7} />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.7} />
                        </linearGradient>
                      </defs>

                      <PolarGrid stroke="#e5e7eb" strokeWidth={1} gridType="polygon" />
                      
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#4b5563", fontSize: 11, fontWeight: 600 }}
                        tickSize={15} // Push labels out slightly
                      />

                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 100]}
                        tick={{ fill: "#9ca3af", fontSize: 10 }}
                        axisLine={false}
                      />

                      <Radar
                        name="Skill Level"
                        dataKey="value"
                        stroke="#4f46e5"
                        strokeWidth={3}
                        fill="url(#proficiencyGradient)"
                        fillOpacity={0.6}
                        isAnimationActive={true}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="px-6 pb-6 text-center">
                  <p className="text-xs text-gray-500 font-medium bg-gray-50 py-2 px-4 rounded-lg inline-block">
                    * Values represent relative proficiency & practical experience
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
