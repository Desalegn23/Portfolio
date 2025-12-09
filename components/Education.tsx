"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi"

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const certifications = [
    {
      title: "AI & Machine Learning",
      subtitle: "Foundations",
      color: "bg-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Ethical Hacking",
      subtitle: "Beginner Level",
      color: "bg-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "IT Support",
      subtitle: "Systems Admin",
      color: "bg-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "QA Testing",
      subtitle: "Automation Tools",
      color: "bg-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HiAcademicCap className="w-6 h-6 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50 p-3 rounded-r transition-colors">
                  <h4 className="font-bold text-gray-900">Bachelor of Science in Mechanical Engineering</h4>
                  <p className="text-blue-600 font-medium">Addis Ababa Science and Technology University</p>
                  <p className="text-gray-600 text-sm">2022 • Addis Ababa, Ethiopia</p>
                </div>

                <div className="border-l-4 border-gray-400 pl-4 hover:bg-gray-50 p-3 rounded-r transition-colors">
                  <h4 className="font-bold text-gray-900">Diploma in Information Technology</h4>
                  <p className="text-blue-600 font-medium">Alison Online Courses</p>
                  <p className="text-gray-600 text-sm">2023 • Online Certification</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HiBadgeCheck className="w-6 h-6 text-blue-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`${cert.bgColor} rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                    >
                      <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <HiBadgeCheck className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">{cert.title}</h4>
                      <p className="text-xs text-gray-600">{cert.subtitle}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
