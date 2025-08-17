import "../css/Images.css";

function Images(props) {
  const { data, onClick } = props;
  const handleOnClick = (index) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {data.map((item, index) => (
        <div onClick={() => handleOnClick(index)} key={index} className="image">
          <img src={item.src} alt={item.description} />
        </div>
      ))}
    </div>
  );
}
export default Images;
