"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import { courses } from "@/lib/data"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

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

      {/* Search Bar using Command */}
      <div className="mb-8 max-w-xl mx-auto">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search courses..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>No course found.</CommandEmpty>
            <CommandGroup heading="Courses">
              {filteredCourses.map((course) => (
                <CommandItem
                  key={course.slug}
                  onSelect={() => window.location.href = `/courses/${course.slug}`}
                  className="cursor-pointer"
                >
                  {course.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Link key={course.slug} href={`/courses/${course.slug}`}>
            <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
