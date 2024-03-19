import AboutUsPage from '@/components/AboutUsPage'
import VideoBackground from '@/components/VideoBackground'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-screen-xxl mx-auto w-full">
      <VideoBackground />

      <AboutUsPage />
    </div>
  )
}

export default page