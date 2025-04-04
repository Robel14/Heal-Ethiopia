"use client"

import type React from "react"
import { useState } from "react"

interface FormData {
  name: string
  email: string
  message: string
}

const initialFormState: FormData = {
  name: "",
  email: "",
  message: "",
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Process form data without MongoDB
    console.log("Contact form submission:", formData)

    // You could add code here to send an email instead of storing in a database
    setSubmitted(true)
    setFormData(initialFormState)
  }

  return (
    <div>
      {submitted ? (
        <p>Thank you for your message! We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default ContactForm

