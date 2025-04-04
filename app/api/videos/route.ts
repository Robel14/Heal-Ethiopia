import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { put } from "@vercel/blob"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("heal-ethiopia")

    const videos = await db.collection("videos").find({ status: "published" }).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(videos)
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 })
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
    const thumbnail = formData.get("thumbnail") as File
    const videoFile = formData.get("videoFile") as File

    if (!title || !videoFile || !thumbnail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Upload thumbnail to Vercel Blob
    const thumbnailBlob = await put(thumbnail.name, thumbnail, {
      access: "public",
    })

    // Upload video file to Vercel Blob
    const videoBlob = await put(videoFile.name, videoFile, {
      access: "public",
    })

    const client = await clientPromise
    const db = client.db("heal-ethiopia")

    const result = await db.collection("videos").insertOne({
      title,
      description,
      category,
      status,
      thumbnailUrl: thumbnailBlob.url,
      videoUrl: videoBlob.url,
      createdAt: new Date(),
      updatedAt: new Date(),
      uploadedBy: session.user?.email,
    })

    return NextResponse.json({
      id: result.insertedId,
      message: "Video added successfully",
    })
  } catch (error) {
    console.error("Error adding video:", error)
    return NextResponse.json({ error: "Failed to add video" }, { status: 500 })
  }
}

