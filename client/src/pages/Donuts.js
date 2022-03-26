import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/donuts.css";

function Donuts() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const getDonuts = () => {
      axios
        .get("/api/donuts")
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
        <div className="donuts-card-container" key={props.id}>
          <h1 className="donut-name">{props.name}</h1>
          <img className="donut-photo" src={"https://" + props.photo} />
          <h2 className="donut-price">${props.price}</h2>
        </div>
      );
    }

    return <DonutCard {...items} />;
  });

  return (
    <div className="donuts">
      <div className="donuts-container">{cards}</div>
    </div>
  );
}
export default Donuts;
