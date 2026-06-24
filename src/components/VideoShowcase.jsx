import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clapperboard } from 'lucide-react'

// Official TikTok embed — the video stays hosted and played directly on
// TikTok's own servers/player; this page only embeds it via TikTok's
// public embed mechanism (the same <blockquote class="tiktok-embed"> +
// embed.js pattern documented at developers.tiktok.com/doc/embed-videos).
const videos = [
  {
    id: 'tiktok-1',
    videoId: '7603425823177198868',
    username: 'physiofix.clinic.chd.4',
    url: 'https://www.tiktok.com/@physiofix.clinic.chd.4/video/7603425823177198868',
  },
  {
    id: 'tiktok-2',
    videoId: '7517993445735075080',
    username: 'physiofix.clinic.chd.4',
    url: 'https://www.tiktok.com/@physiofix.clinic.chd.4/video/7517993445735075080',
  },
]

const VideoShowcase = () => {
  useEffect(() => {
    // Load TikTok's official embed script once, then ask it to (re)scan
    // the page for tiktok-embed blockquotes whenever this section mounts.
    const existingScript = document.getElementById('tiktok-embed-script')

    const renderEmbeds = () => {
      if (window.tiktokEmbed && typeof window.tiktokEmbed.lib?.render === 'function') {
        window.tiktokEmbed.lib.render()
      }
    }

    if (existingScript) {
      renderEmbeds()
      return
    }

    const script = document.createElement('script')
    script.id = 'tiktok-embed-script'
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

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
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-card border border-primary-100 bg-black w-full max-w-[350px] min-h-[620px]">
                <blockquote
                  className="tiktok-embed"
                  cite={video.url}
                  data-video-id={video.videoId}
                  style={{ maxWidth: '350px', minWidth: '270px', margin: 0 }}
                >
                  <section>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`@${video.username}`}
                      href={`https://www.tiktok.com/@${video.username}`}
                    >
                      @{video.username}
                    </a>
                  </section>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
