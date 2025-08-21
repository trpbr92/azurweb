import { useParams } from "react-router-dom";
import { albums } from "../assets/PhotoAlbumData.jsx";

function Photos() {
  const { albumId } = useParams();
  const photos = albums[albumId] || [];

  if (!photos.length) return <p>Album not found</p>;

  return (
    <div>
      <h2>{albumId} album</h2>
      <div className="images-container">
        {photos.map((photo, index) => (
          <img key={index} src={photo.src} alt={photo.title} />
        ))}
      </div>
    </div>
  );
}

export default Photos;
