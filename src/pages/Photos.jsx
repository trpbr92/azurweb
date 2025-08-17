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
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Lightbox</button>
      <Images data={slides} onClick={() => {}} />

      <Lightbox
        plugins={[Captions, Fullscreen]}
        open={open}
        slides={slides}
        close={() => setOpen(false)}
      />
    </>
  );
}

export default Photos;
