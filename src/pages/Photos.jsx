import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from "../assets/photodata.jsx";

function Photos() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Lightbox</button>

      <Lightbox open={open} slides={slides} />
    </>
  );
}

export default Photos;
