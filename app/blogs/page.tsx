"use client"

import Link from "next/link"
import { blogs } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-indigo-600 text-transparent bg-clip-text">
          Explore Our Blogs
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Stay updated with the latest trends in tech, development, and more.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
            <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              <CardHeader className="p-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-t-md w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2">
                  {blog.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
