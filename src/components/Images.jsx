import { Link } from "react-router-dom";
import "../css/Images.css";

function Images({ data }) {
  return (
    <div>
      {data.map((img, index) => (
        <Link key={index} to={`/photos/${index}`}>
          <img src={img.src} alt={img.title || `Image ${index}`} />
        </Link>
      ))}
    </div>
  );
}

export default Images;
