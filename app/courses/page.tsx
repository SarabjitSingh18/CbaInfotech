"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { courses } from "@/lib/data"


export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Explore Our Courses
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start learning with industry-ready content taught by professionals.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
             <Link key={course.slug} href={`/courses/${course.slug}`}>
          <Card
            key={index}
            className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button>Learn More</Button>
              </Link>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
