import React from "react";
import bgvideo from "../Media/bg.mp4";

export default function Video() {
  return (
    // <video autoplay loop muted>
    <video autoPlay loop muted>
      <source src={bgvideo} type="video/mp4" />
    </video>
  );
}
