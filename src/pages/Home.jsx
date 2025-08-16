import ernie from "../assets/ernie.mp4";

function Home() {
  return (
    <>
      <div className="main">
        <video src={ernie} autoPlay loop muted />
      </div>
    </>
  );
}

export default Home;
