import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // state variable - super powerful variable
  // let [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  const arr = useState(resList);
  // why we use second function ( setlistOfRestaurants) - because there should be a trigger to start the diff algorithm and update the UI
  // whenever you call the second function it will automatically re render the component

  // Normal variable
  // let listOfRestaurants;
  // whenever a state variables changes react will re-render the component

  // const [listOfRestaurants, setlistOfRestaurants] = arr;
  // array destructuring

  // drilling down again for understanding
  const listOfRestaurants = arr[0];
  const setlistOfRestaurants = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
