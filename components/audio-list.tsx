"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

// Mock data for audio content
const MOCK_AUDIO = [
  {
    id: 1,
    title: "Interview with HEAL Ethiopia Director",
    description: "Learn about our mission and vision from our director.",
    duration: "15:30",
    date: "2023-10-15",
    audioUrl: "https://example.com/audio1.mp3", // This would be replaced with actual audio files
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    title: "Community Health Radio Program",
    description: "A radio program discussing community health initiatives in rural Ethiopia.",
    duration: "28:45",
    date: "2023-09-22",
    audioUrl: "https://example.com/audio2.mp3",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    title: "Podcast: Sustainable Development in Ethiopia",
    description: "Discussion on sustainable development approaches in Ethiopia.",
    duration: "42:10",
    date: "2023-08-05",
    audioUrl: "https://example.com/audio3.mp3",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function AudioList() {
  const [audioList, setAudioList] = useState(MOCK_AUDIO)
  const [currentAudio, setCurrentAudio] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // In a real implementation, this would fetch from your API
  useEffect(() => {
    // This would be replaced with an actual API call
    setAudioList(MOCK_AUDIO)
  }, [])

  const togglePlay = (id: number) => {
    if (currentAudio === id) {
      if (isPlaying) {
        audioRef.current?.pause()
      } else {
        audioRef.current?.play()
      }
      setIsPlaying(!isPlaying)
    } else {
      setCurrentAudio(id)
      setIsPlaying(true)
      // In a real implementation, this would load the new audio source
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Audio player (hidden, would be implemented with actual audio files) */}
          <audio ref={audioRef} className="hidden" />

          <div className="space-y-6">
            {audioList.map((audio) => (
              <div key={audio.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <img
                      src={audio.image || "/placeholder.svg"}
                      alt={audio.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{audio.title}</h3>
                    <p className="text-gray-600 mb-4">{audio.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>Duration: {audio.duration}</span>
                      <span>Published: {new Date(audio.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => togglePlay(audio.id)}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                      >
                        {currentAudio === audio.id && isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </button>
                      {currentAudio === audio.id && (
                        <button
                          onClick={toggleMute}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

