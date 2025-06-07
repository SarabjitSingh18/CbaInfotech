"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./toggle"
import { Separator } from "./ui/separator"

const courses: { title: string; href: string; description: string }[] = [
    {
        title: "Full Stack Web Development",
        href: "/courses/web-development",
        description: "Master HTML, CSS, JavaScript",
    },
    {
        title: "Python with Data Science",
        href: "/courses/python-data-science",
        description: "Learn Python, Pandas, NumPy.",
    },
    {
        title: "C++ with DSA",
        href: "/courses/cpp-dsa",
        description: "Sharpen your Data Structures & Algorithms.",
    },


];


export function Navigation() {
    return (
        <>

            <div className="flex justify-between m-2">
                <Link href="/">
                <h2 className="text-3xl md:text-4xl hidden lg:block font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    CBA InfoTech
                </h2>
                </Link>

                <NavigationMenu className="" >
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:max-w-[350px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium">
                                                    CBA Infotech
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    Learn Web Development, Python, Java, Data Structures & more with industry-grade project-based training.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/blogs" title="Introduction">
                                        Get started with CBA Infotech
                                    </ListItem>
                                    <ListItem href="/" title="Location">
                                        Gurdaspur , kalanpur road
                                    </ListItem>
                                    <ListItem href="/contact" title="Contact">
                                         Reach Us through Email
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                            <NavigationMenuContent className="overflow-x-hidden">
                                <ul className="grid max-w-[350px]  gap-2 md:w-[500px]  md:grid-cols-1 lg:w-[600px]">
                                    {courses.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link href="/blogs">
                                                <div className="font-medium">Blogs</div>
                                                <div className="text-muted-foreground">
                                                    Browse all components in the library.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link href="/contact">
                                                <div className="font-medium">Contact</div>
                                                <div className="text-muted-foreground">
                                                    for any queries contact us
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        
                                        
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        

                    </NavigationMenuList>
                    
                </NavigationMenu>
<ModeToggle />
            </div>
            <Separator/>
        </>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
