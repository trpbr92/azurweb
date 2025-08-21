import { Link } from "react-router-dom";
import { albums } from "../assets/PhotoAlbumData.jsx";
import "../css/Albums.css";

function Albums() {
  return (
    <div>
      <h2>albums</h2>
      <div className="images-container">
        {Object.keys(albums).map((albumId) => {
          const album = albums[albumId]; // array of photos
          const cover = album[0]; // first photo as cover
          return (
            <Link key={albumId} to={`/photos/${albumId}`}>
              <img src={cover.src} alt={cover.title} />
              <p>{cover.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
