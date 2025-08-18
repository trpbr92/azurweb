import { useParams, useNavigate } from "react-router-dom";
import { albumSlides } from "../assets/PhotoAlbumData.jsx";

function Photos() {
  const { id } = useParams();
  const photoIndex = parseInt(id, 10);
  const photo = albumSlides[photoIndex];

  if (!photo) return <p>Image not found</p>;

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.src} alt={photo.title} />
    </div>
  );
}

export default Photos;
