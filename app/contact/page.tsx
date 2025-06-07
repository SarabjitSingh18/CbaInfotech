"use client"

import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Contact CBA InfoTech
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          We're here to help. Reach out to us anytime.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid gap-8 md:grid-cols-3 text-center">
        <div className="flex flex-col items-center space-y-2">
          <PhoneIcon className="w-6 h-6 text-blue-500" />
          <h3 className="font-semibold">Phone</h3>
          <p className="text-muted-foreground">+91 98765 43210</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <MailIcon className="w-6 h-6 text-purple-500" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-muted-foreground">support@cbainfotech.com</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <MapPinIcon className="w-6 h-6 text-pink-500" />
          <h3 className="font-semibold">Address</h3>
          <p className="text-muted-foreground">
             Gurdaspur, Punjab 143530
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-lg">
       <iframe
  title="CBA InfoTech Gurdaspur Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.972257507795!2d75.40099931503857!3d32.037279427064846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c1a83b7d130ad%3A0x232aad050d36e6f!2sCBA%20Infotech%2C%20Kalanpur%20Road%2C%20Gurdaspur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1717761412222!5m2!1sen!2sin"
  width="100%"
  height="400"
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-[400px] border-none rounded-xl shadow-lg"
/>

      </div>
    </div>
  )
}
