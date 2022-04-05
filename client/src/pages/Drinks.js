import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/drinks.css";

function Drinks() {
  const [drinkData, setDrinkData] = useState([]);

  useEffect(() => {
    const getDrinks = () => {
      axios
        .get("/api/drinks")
        .then((res) => {
          setDrinkData(res.data[0]);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
    getDrinks();
  }, []);

  const cards = drinkData.map((items) => {
    function DonutCard(props) {
      return (
        <div className="drinks-card-container" key={props.drinks_id}>
          <h1 className="drinks-name">{props.name}</h1>
          <img className="drinks-photo" src={"https://" + props.photo} />
          <h2 className="drinks-price">${props.price}</h2>
        </div>
      );
    }

    return <DonutCard {...items} />;
  });

  return (
    <div className="drinks">
      <div className="drinks-container">{cards}</div>
    </div>
  );
}

export default Drinks;
