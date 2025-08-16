import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { slides } from "../assets/photodata.jsx";
import { Captions } from "yet-another-react-lightbox/plugins";

function Photos() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Lightbox</button>

      <Lightbox
        plugins={[Captions]}
        open={open}
        slides={slides}
        close={() => setOpen(false)}
      />
    </>
  );
}

export default Photos;
