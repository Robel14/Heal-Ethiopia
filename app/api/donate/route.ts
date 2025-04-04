import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Process the donation (without MongoDB)
    console.log("Donation received:", data)

    return NextResponse.json({ message: "Donation received successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing donation:", error)
    return NextResponse.json({ message: "Error processing donation" }, { status: 500 })
  }
}

