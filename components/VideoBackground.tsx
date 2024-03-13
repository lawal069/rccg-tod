"use client";

import Image from "next/image";

const VideoBackground = () => {
  const navbarHeight = "90px";

  return (
    <div
      className="w-full  bg-black pt-90px lg:h-screen h-[50vh]"
      // style={{
      //   height: `calc(100vh - ${navbarHeight})`,
      // }}
    >
      <div className="w-full relative h-full">
        <video
          className="absolute object-cover w-full h-full"
          preload="auto"
          loop
          muted
          autoPlay
          // controls
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          disablePictureInPicture
          disableRemotePlayback
          playsInline
        >
          <source src="/videos/tod.mp4" type="video/mp4" />
          <Image
            src=""
            alt=""
            fill
            className="absolute object-cover w-auto"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
