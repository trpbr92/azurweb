import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { slides } from "../assets/photodata.jsx";
import Images from "../components/Images.jsx";
import {
  Captions,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";

function Photos() {
  // const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}
      <Images
        data={slides}
        onClick={(currentIndex) => {
          setIndex(currentIndex);
        }}
      />

      <Lightbox
        plugins={[Captions, Fullscreen]}
        // open={open}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        // close={() => setOpen(false)}
      />
    </>
  );
}

export default Photos;
