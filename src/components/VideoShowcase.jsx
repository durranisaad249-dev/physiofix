import { motion } from 'framer-motion'
import { Clapperboard } from 'lucide-react'

// Official Facebook Video Plugin embed — the video stays hosted and played
// directly on Facebook's own servers/player; this page only embeds it via
// Facebook's public embed iframe (the same mechanism Facebook provides via
// developers.facebook.com/docs/plugins/video-plugin).
const reels = [
  {
    id: 'reel-1',
    url: 'https://www.facebook.com/reel/876987888301853',
  },
  {
    id: 'reel-2',
    url: 'https://www.facebook.com/reel/1362234512275803',
  },
]

const buildEmbedSrc = (videoUrl) => {
  const encoded = encodeURIComponent(videoUrl)
  return `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&width=350&autoplay=false`
}

const VideoShowcase = () => {
  return (
    <section className="section-padding bg-primary-50/50">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-card border border-primary-100 bg-black w-full max-w-[350px]">
                <iframe
                  src={buildEmbedSrc(reel.url)}
                  title={`PhysioFix therapy session video ${i + 1}`}
                  width="350"
                  height="620"
                  style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '350px' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
