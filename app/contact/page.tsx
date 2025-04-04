"use client"

import type React from "react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We'd love to hear from you. Please fill out the form below or use our contact information to get in
                touch with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-green-700 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-xl font-bold text-green-700 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Address</h3>
                      <p className="text-gray-700">P.O. Box: 2473, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">+251 911-24-51-06 / 911-82-44-08</p>
                      <p className="text-gray-700">+251 111 564197 / 555841</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">demedere@gmail.com</p>
                      <p className="text-gray-700">Web: www.HEAL-eth.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Working Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Major Donors</h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>DFID / Ministry of Health</li>
                    <li>Swedish International Development Agency (sida) / Pathfinder International-Ethiopia (PI-E)</li>
                    <li>PEPFAR/USAID/ Project Concern International Ethiopia (PCI-E)</li>
                    <li>Hope for African Children Initiative/Care-Ethiopia</li>
                    <li>Addis Ababa HIV/AIDS Prevention and Control Office (AAHAPCO)</li>
                    <li>African Women Development Fund (AWDF)</li>
                    <li>The Andrew J. Young Foundation</li>
                    <li>And many more generous supporters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Our Location</h2>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5762006797244!2d38.751891!3d9.032181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f4464726d1%3A0xb71e148634083aee!2sEthiopian%20Electric%20Power%20Corporation%2C%20Addis%20Ababa!5e0!3m2!1sen!2sus!4v1710425799811!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

