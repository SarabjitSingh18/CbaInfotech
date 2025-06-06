"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-purple-900 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">
            CBA InfoTech
          </h2>
          <p className="text-sm text-gray-300">
            Empowering learners with cutting-edge tech education and building modern web solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-400"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-pink-400"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-sky-400"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-blue-500"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-6 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} CBA InfoTech. All rights reserved.
      </div>
    </footer>
  )
}
