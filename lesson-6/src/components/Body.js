import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

const url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0369926&lng=77.0204624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  let [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  // whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    console.log("Fetched data is", json);
    setlistOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional renders - rendering happened on a condition
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
