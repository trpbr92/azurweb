import "../css/Images.css";

function Images(props) {
  const { data, onClick } = props;

  return (
    <>
      <div className="images-container">
        {data.map((slide, index) => (
          <div key={index} className="image">
            <img src={slide.src} alt={slide.description} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Images;
