import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; // object destructuring
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />
      <div>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>
          {"\u20B9"}
          {costForTwo / 100}
        </h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
