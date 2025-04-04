import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { put } from "@vercel/blob"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("heal-ethiopia")

    const audioList = await db.collection("audio").find({ status: "published" }).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(audioList)
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({ error: "Failed to fetch audio" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const category = formData.get("category") as string
    const status = formData.get("status") as string
    const audioFile = formData.get("audioFile") as File

    if (!title || !audioFile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Upload audio file to Vercel Blob
    const audioBlob = await put(audioFile.name, audioFile, {
      access: "public",
    })

    // Calculate duration (in a real implementation, you would extract this from the audio file)
    const duration = "00:00" // Placeholder

    const client = await clientPromise
    const db = client.db("heal-ethiopia")

    const result = await db.collection("audio").insertOne({
      title,
      description,
      category,
      status,
      audioUrl: audioBlob.url,
      duration,
      createdAt: new Date(),
      updatedAt: new Date(),
      uploadedBy: session.user?.email,
    })

    return NextResponse.json({
      id: result.insertedId,
      message: "Audio added successfully",
    })
  } catch (error) {
    console.error("Error adding audio:", error)
    return NextResponse.json({ error: "Failed to add audio" }, { status: 500 })
  }
}

