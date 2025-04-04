import { Container } from "@/components/container"

export default function VideosHero() {
  return (
    <div className="relative bg-green-900 text-white py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Gallery</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Watch our videos to see HEAL Ethiopia's impact in action across communities
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}

