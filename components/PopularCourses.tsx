import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";
import Link from "next/link";

const courses = [
  {
    title: "Full Stack Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
    badge: "Popular",
  },
  {
    title: "Python with Data Science",
    description: "Python, Pandas, Numpy, ML Basics,Deep Learning",
    badge: "New",
  },
  {
    title: "C++ with DSA",
    description: "Master DSA using C++ for placement preparation",
    badge: "Trending",
  },
];

export default function PopularCourses() {
  return (
    <>
  
    <section className="w-full py-20 bg-white dark:bg-background">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
      Popular Courses at CBA Infotech
    </h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <Link key={index} href="/courses"><Card className="text-left hover:shadow-xl transition">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-900 dark:text-white">
                {course.title}
              </CardTitle>
              <Badge variant="outline">{course.badge}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {course.description}
            </p>
            <Button variant="link" className="px-0">
              View Details →
            </Button>
          </CardContent>
        </Card>
        </Link>
      ))}
    </div>
  </div>
</section>

         <Separator/>
      </>
  );
}
