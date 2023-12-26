import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

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
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
