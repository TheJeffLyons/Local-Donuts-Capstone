import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "../styles/placeorder.css"


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

function PlaceOrder() {

  const { user } = useAuth0();
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

  const getname = (props) => {
    console.log(props.name)
  } 

  const cards = myData.map((items) => {
    function DonutCard(props) {
      return (
        <div className="item-card-container" key={props.id}>
          <img className="item-photo" src={"https://" + props.photo} />
          <h1 className="item-name">{props.name}</h1>
          <h2 className="item-price">${props.price}</h2>
          <button onClick={() => getname(props)}>click</button>
          <h2>qty</h2>
          <button>-</button>
          <button>+</button>
        </div>
      );
    }

    return <DonutCard {...items} />;
  });



  // item data below

  let cart = [];

  const [donut1, setDonut1] = useState(2);

  const item = [
    {
      price: "price_1KiigIKGMH4vYEkupE3CwvnQ",
      quantity: donut1,
    },
    {
      name: "Chocolate Donut",
      price: "$1.25",
    },
  ];

  const [donut2, setDonut2] = useState(3);

  const item2 = {
    price: "price_1Kikm4KGMH4vYEkuyPnF6hAy",
    quantity: donut2,
  };





  //all item add and delete functions below 

  const additem = () => {
    cart.push(item[0]);
    console.log(checkoutOptions.lineItems);
  };

  const deleteItem = () => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] === item[0]) {
        cart.splice(i, 1);
      }
    }
    console.log(cart);
  };

  const additem2 = () => {
    checkoutOptions.lineItems.push(item2);
    console.log(checkoutOptions.lineItems);
  };

      // stripe required below

      const checkoutOptions = {
        lineItems: cart,
        mode: "payment",
        successUrl: `${window.location.origin}/thanks`,
        cancelUrl: `${window.location.origin}/thanks`,
      };
    
      const redirectToCheckout = async () => {
        console.log("redirectToCheckout");
    
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);
      };

  
  return (
    <div>
      <div>
      {JSON.stringify(user)}
      <button className="checkout-btn" onClick={redirectToCheckout}>CHECKOUT</button>
      <button onClick={additem}>add</button>
      <button onClick={deleteItem}>delete</button>
      <button onClick={additem2}>item2</button>
      </div>
      <div className="product-container">{cards}</div>
    </div>
  );
}

export default PlaceOrder;
