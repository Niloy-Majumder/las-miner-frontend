const Items = ({ data, fetchAccount }) => {
  // const data = {
  //     discountedPrice:340,
  //     price: 450,
  //     title: "Title of the Item",
  //     thumbnail: "dummyImage.jpeg"
  // }
  return (
    <div className={"item-card"} onClick={fetchAccount}>
      <img className={"img-fluid"} src={`${data.thumbnail}`} alt={data.title} />
      <div className={"item-card__information"}>
        <div className={"title"}>
          <h4>{data.title}</h4>
        </div>
      </div>
      <p>{data.details}</p>
    </div>
  );
};

export default Items;
