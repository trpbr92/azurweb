import Images from "../components/Images.jsx";
import { albumSlides } from "../assets/PhotoAlbumData.jsx";

function Albums() {
  return (
    <div>
      <h1>Albums</h1>
      <Images data={albumSlides} />
    </div>
  );
}

export default Albums;
