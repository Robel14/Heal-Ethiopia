"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Camera, Video, Music } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MediaSection() {
  const [activeTab, setActiveTab] = useState("gallery")

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Media Center</h2>

        <Tabs defaultValue="gallery" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="gallery" onClick={() => setActiveTab("gallery")}>
              <Camera className="mr-2 h-4 w-4" />
              Photo Gallery
            </TabsTrigger>
            <TabsTrigger value="videos" onClick={() => setActiveTab("videos")}>
              <Video className="mr-2 h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio" onClick={() => setActiveTab("audio")}>
              <Music className="mr-2 h-4 w-4" />
              Audio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="text-center">
            <p className="text-gray-700 mb-6">
              Explore our collection of photos showcasing our work and impact across Ethiopia.
            </p>
            <Link href="/gallery">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Camera className="mr-2 h-4 w-4" />
                  View Gallery
                </Button>
              </motion.div>
            </Link>
          </TabsContent>

          <TabsContent value="videos" className="text-center">
            <p className="text-gray-700 mb-6">
              Watch videos about our programs, success stories, and community impact.
            </p>
            <Link href="/videos">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Video className="mr-2 h-4 w-4" />
                  Watch Videos
                </Button>
              </motion.div>
            </Link>
          </TabsContent>

          <TabsContent value="audio" className="text-center">
            <p className="text-gray-700 mb-6">Listen to interviews, testimonials, and stories from our community.</p>
            <Link href="/audio">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Music className="mr-2 h-4 w-4" />
                  Listen Now
                </Button>
              </motion.div>
            </Link>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

