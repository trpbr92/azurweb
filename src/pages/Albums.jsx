import * as React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { slides } from "../assets/photodata.jsx";
import Images from "../components/Images.jsx";

function Albums() {
  const [index, setIndex] = React.useState(-1);
  const navigate = useNavigate();

  return (
    <>
      <h3>albums</h3>
      <Images
        data={slides}
        onClick={(currentIndex) => {
          setIndex(currentIndex);
          console.log(currentIndex);
          navigate(`/photos/${currentIndex}`);
        }}
      />
    </>
  );
}

export default Albums;
