import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize, Loader2, VideoOff } from 'lucide-react'

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const VideoPlayer = ({ src, poster, title }) => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / video.duration) * 100 || 0)
    }
    const onLoadedMetadata = () => {
      setDuration(video.duration)
      setIsLoading(false)
    }
    const onEnded = () => setIsPlaying(false)
    const onError = () => {
      setHasError(true)
      setIsLoading(false)
    }
    const onWaiting = () => setIsLoading(true)
    const onPlaying = () => setIsLoading(false)

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('ended', onEnded)
    video.addEventListener('error', onError)
    video.addEventListener('waiting', onWaiting)
    video.addEventListener('playing', onPlaying)

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('ended', onEnded)
      video.removeEventListener('error', onError)
      video.removeEventListener('waiting', onWaiting)
      video.removeEventListener('playing', onPlaying)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video || hasError) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const handleSeek = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    video.currentTime = ratio * duration
  }

  const handleFullscreen = (e) => {
    e.stopPropagation()
    const container = containerRef.current
    if (!container) return
    if (container.requestFullscreen) {
      container.requestFullscreen()
    }
  }

  if (hasError) {
    return (
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-primary-950 flex flex-col items-center justify-center text-center p-8 border border-primary-100">
        <VideoOff className="text-primary-300 mb-3" size={36} />
        <p className="text-primary-200 text-sm font-medium">
          Video not found
        </p>
        <p className="text-primary-400 text-xs mt-1 max-w-xs">
          Add your video file to <code className="text-teal-300">src/assets/videos/</code> to display it here.
        </p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-card group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
      />

      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
          <Loader2 className="text-white animate-spin" size={32} />
        </div>
      )}

      {!isPlaying && !isLoading && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-card text-primary-700">
            <Play size={32} fill="currentColor" className="ml-1" />
          </span>
        </motion.button>
      )}

      {title && (
        <div className="absolute top-0 left-0 right-0 px-4 py-3 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
          <p className="text-white text-sm font-semibold drop-shadow">{title}</p>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <div
          onClick={handleSeek}
          className="relative h-1.5 w-full bg-white/30 rounded-full cursor-pointer mb-3"
        >
          <div
            className="absolute top-0 left-0 h-full bg-teal-400 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="hover:text-teal-300 transition-colors"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              className="hover:text-teal-300 transition-colors"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <span className="text-xs font-medium tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <button
            onClick={handleFullscreen}
            aria-label="Fullscreen"
            className="hover:text-teal-300 transition-colors"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
