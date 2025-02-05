import React from "react";
import "./videointro.css";

const VideoIntro = ({ onVideoEnd }) => {
  return (
    <div className="video-container">
      <video autoPlay muted playsInline onEnded={onVideoEnd} className="intro-video">
      <source src={`${import.meta.env.BASE_URL}20le.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
</video>

      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoIntro;
