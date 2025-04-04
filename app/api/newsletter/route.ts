import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 })
    }

    // Process the newsletter subscription (without MongoDB)
    console.log("Newsletter subscription:", { email, createdAt: new Date() })

    return NextResponse.json({ message: "Subscription successful!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

