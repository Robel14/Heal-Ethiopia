import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Process the contact form data (without MongoDB)
    console.log("Contact form submission:", data)

    return NextResponse.json({ message: "Contact form submitted successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ message: "Error submitting contact form." }, { status: 500 })
  }
}

