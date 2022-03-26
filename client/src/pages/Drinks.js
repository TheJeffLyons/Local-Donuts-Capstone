import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/drinks.css";

function Drinks() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const getDonuts = () => {
      axios
        .get("/api/drinks")
        .then((res) => {
          setMyData(res.data[0]);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
    getDonuts();
  }, []);
  console.log(myData);

  const cards = myData.map((items) => {
    function DonutCard(props) {
      return (
        <div className="drinks-card-container" key={props.id}>
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
