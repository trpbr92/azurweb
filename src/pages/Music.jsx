import React, { useRef, useState } from "react";
import { album } from "../assets/AudioAlbumData.jsx";

function Music() {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(album.tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const index = album.tracks.findIndex((t) => t.id === currentTrack.id);
    const next = album.tracks[(index + 1) % album.tracks.length];
    setCurrentTrack(next);
    setIsPlaying(false);
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div>
      <div className="image-container">
        <img src={album.cover} alt="Album cover" />
      </div>
      <h2>{album.title}</h2>
      <p>{album.artist}</p>

      <div>
        <p>{currentTrack.title}</p>
        <audio ref={audioRef} src={currentTrack.src} />
        <div>
          <button onClick={playPause}>{isPlaying ? "Pause" : "Play"}</button>
          <button onClick={nextTrack}>Next</button>
        </div>
      </div>

      <ul>
        {album.tracks.map((track) => (
          <li key={track.id} onClick={() => setCurrentTrack(track)}>
            {track.title} <span>{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Music;
