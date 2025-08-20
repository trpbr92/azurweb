import { useState } from "react";
import { useParams } from "react-router-dom";
import { albums } from "../assets/PhotoAlbumData.jsx";

// Lightbox imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

function Photos() {
  const { albumId } = useParams();
  const photos = albums[albumId] || [];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!photos.length) return <p>Album not found</p>;

  return (
    <div>
      <h2>{albumId.toUpperCase()} Album</h2>

      <div>
        {photos.map((photo, idx) => (
          <img
            key={idx}
            src={photo.src}
            alt={photo.title}
            className="rounded-lg shadow cursor-pointer thumbnail"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos.map((p) => ({ src: p.src, title: p.title }))}
        index={index}
        plugins={[Captions, Fullscreen]}
      />
    </div>
  );
}

export default Photos;
