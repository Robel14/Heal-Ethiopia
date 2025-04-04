"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function VolunteerForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // In a real implementation, this would send data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        skills: "",
        availability: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="volunteer-form" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#006400]">Apply to Volunteer</h2>

      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Thank You for Your Interest!</h3>
          <p className="mb-4">
            Your volunteer application has been received. Our team will review your information and contact you soon.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-2 bg-[#006400] text-white rounded-md hover:bg-[#004d00] transition duration-300"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-4">{submitError}</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006400] focus:border-[#006400]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006400] focus:border-[#006400]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006400] focus:border-[#006400]"
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                Skills & Expertise *
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                required
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006400] focus:border-[#006400]"
                placeholder="e.g., Teaching, Medical, IT, etc."
              />
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                Availability *
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006400] focus:border-[#006400]"
              >
                <option value="">Select your availability</option>
                <option value="Full-time">Full-time (3+ months)</option>
                <option value="Part-time">Part-time (ongoing)</option>
                <option value="Short-term">Short-term (1-3 months)</option>
                <option value="Remote">Remote only</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Why do you want to volunteer with us? *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#006400] focus:border-[#006400]"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-[#006400] text-white font-semibold rounded-md transition duration-300 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#004d00]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

