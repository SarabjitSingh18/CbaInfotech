import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-background dark:text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 items-center">
        {/* LEFT: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <Badge variant="outline" className="text-sm px-3 py-1">
            #1 IT Training Institute in Gurdaspur
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Future at CBA Infotech
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn Web Development, Python, Java, Data Structures & more with industry-grade project-based training.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
           <Link href="/courses">
  <Button
    size="lg"
    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out rounded-md px-6 py-4"
  >
    🚀 Explore Courses
  </Button>
</Link>
            <Link href={"/contact"}><Button variant="outline" size="lg">Contact Us</Button></Link>
          </div>
        </div>

        {/* RIGHT: Image or Card */}
        <Card className="shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-card">
          <CardContent className="p-0">
            <Image
            
              src="/main.jpg"
              alt="Students Learning at CBA"
              width={600}
              height={400}
              className="w-full h-auto object-cover blur-none rounded-b-3xl" 
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
