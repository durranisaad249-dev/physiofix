import { motion } from 'framer-motion'
import { Clapperboard } from 'lucide-react'
import VideoPlayer from './VideoPlayer'

// Place your two exported Facebook videos in public/videos/
// named exactly "video-1.mp4" and "video-2.mp4" — see the
// PUT_VIDEOS_HERE.txt file in that folder for instructions.
// Files in public/ are served as-is at the root URL, so a missing file
// simply 404s gracefully and the player shows a "video not found" state
// instead of breaking the build.
const videos = [
  {
    id: 'video-1',
    src: '/videos/video-1.mp4',
    title: 'Patient Recovery Session',
  },
  {
    id: 'video-2',
    src: '/videos/video-2.mp4',
    title: 'Physiotherapy Treatment in Action',
  },
]

const VideoShowcase = () => {
  return (
    <section className="section-padding bg-primary-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">See Us In Action</span>
          <h2 className="section-title flex items-center justify-center gap-3">
            <Clapperboard className="text-teal-600" size={32} />
            Watch Our Therapy Sessions
          </h2>
          <p className="mt-4 text-primary-800/70 text-lg">
            A closer look at how our physiotherapy treatments help patients
            move, heal, and recover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <VideoPlayer src={video.src} title={video.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
