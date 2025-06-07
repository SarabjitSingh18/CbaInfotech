import { notFound } from "next/navigation"
import { blogs } from "@/lib/data"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug)

  if (!blog) return notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-muted-foreground text-lg mb-4">{blog.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="leading-relaxed text-lg whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  )
}
