import wave from "../assets/wave.mp4";

function Home() {
  return (
    <>
      <div>
        <video src={wave} autoPlay loop muted />
      </div>
    </>
  );
}

export default Home;
