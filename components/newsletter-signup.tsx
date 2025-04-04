"use client"

import type React from "react"
import { useState } from "react"

const NewsletterSignup = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Process form data without MongoDB
    console.log("Newsletter signup:", { email })

    // You could add code here to send an email instead of storing in a database
    setSubmitted(true)
    setEmail("")
  }

  return (
    <div>
      <h2>Sign up for our Newsletter</h2>
      {submitted ? (
        <p>Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  )
}

export default NewsletterSignup

