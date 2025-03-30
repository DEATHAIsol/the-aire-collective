'use client';

import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="https://player.vimeo.com/external/451837014.sd.mp4?s=7d5e92ed82447a1d2d40291214cfb59bea505b99&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo; 