

import { notFound } from "next/navigation"
import Image from "next/image"
import { courses } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"

export  default async function CourseDetail({
  params,
}: {
  params: Promise<{ slug: string }>
} ) {
    const {slug} = await params
  const course = courses.find((c) => c.slug ===  slug)

  if (!course) return notFound()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* Title & Description */}
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="text-muted-foreground text-lg">{course.description}</p>
      </div>

      {/* Course Image */}
      {course.image && (
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </AspectRatio>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Course Info */}
        <Card>
          <CardHeader>
            <CardTitle>Course Info</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2 text-muted-foreground">
            <p><strong>Fees:</strong> {course.fees}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Timing:</strong> {course.timing}</p>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card>
          <CardHeader>
            <CardTitle>Technologies Covered</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {course.technologies?.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Full Description */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>{course.content}</p>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="flex justify-center">
        <Button size="lg">Enroll Now</Button>
      </div>
    </div>
  )
}
