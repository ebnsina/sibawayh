"use client";

import YouTubePlayer from "react-youtube";

interface Props {
  videoId: string;
}

function VideoPlayer({ videoId }: Props) {
  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTubePlayer
      className="rounded-xl w-full"
      videoId={videoId}
      opts={options}
    />
  );
}

export default VideoPlayer;
