import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "../styles/placeorder.css";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

function PlaceOrder() {

  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const dragon = setTimeout(() => {
    setMyUser(JSON.stringify(user.name));
  }, 50);

  const [myUser, setMyUser] = useState(dragon);
  const [cartData, setCartData] = useState([]);
  const [receiptData, setReceiptData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);
  const [amount4, setAmount4] = useState(1);
  const [amount5, setAmount5] = useState(1);
  const [amount6, setAmount6] = useState(1);
  const [amount7, setAmount7] = useState(1);
  const [amount8, setAmount8] = useState(1);
  const [amount9, setAmount9] = useState(1);
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);
  const [button4, setButton4] = useState(true);
  const [button5, setButton5] = useState(true);
  const [button6, setButton6] = useState(true);
  const [button7, setButton7] = useState(true);
  const [button8, setButton8] = useState(true);
  const [button9, setButton9] = useState(true);
  const [deliveryBtn, setDeliveryBtn] = useState(false);
  const [pickupBtn, setPickupBtn] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [drinkData, setDrinkData] = useState([]);





  //call for donut products

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

  //set amount states

  function addAmount1() {
    if (amount1 < 100) {
      setAmount1(amount1 + 1);
    }
  }

  function addAmount2() {
    if (amount2 < 100) {
      setAmount2(amount2 + 1);
    }
  }

  function addAmount3() {
    if (amount3 < 100) {
      setAmount3(amount3 + 1);
    }
  }

  function addAmount4() {
    if (amount4 < 100) {
      setAmount4(amount4 + 1);
    }
  }

  function addAmount5() {
    if (amount5 < 100) {
      setAmount5(amount5 + 1);
    }
  }

  function addAmount6() {
    if (amount6 < 100) {
      setAmount6(amount6 + 1);
    }
  }

  function addAmount7() {
    if (amount7 < 100) {
      setAmount7(amount7 + 1);
    }
  }

  function addAmount8() {
    if (amount8 < 100) {
      setAmount8(amount8 + 1);
    }
  }

  function addAmount9() {
    if (amount9 < 100) {
      setAmount9(amount9 + 1);
    }
  }



  function subAmount1() {
    if (amount1 >= 2) {
      setAmount1(amount1 - 1);
    }
  }

  function subAmount2() {
    if (amount2 >= 2) {
      setAmount2(amount2 - 1);
    }
  }

  function subAmount3() {
    if (amount3 >= 2) {
      setAmount3(amount3 - 1);
    }
  }

  function subAmount4() {
    if (amount4 >= 2) {
      setAmount4(amount4 - 1);
    }
  }

  function subAmount5() {
    if (amount5 >= 2) {
      setAmount5(amount5 - 1);
    }
  }

  function subAmount6() {
    if (amount6 >= 2) {
      setAmount6(amount6 - 1);
    }
  }

  function subAmount7() {
    if (amount7 >= 2) {
      setAmount7(amount7 - 1);
    }
  }

  function subAmount8() {
    if (amount8 >= 2) {
      setAmount8(amount8 - 1);
    }
  }

  function subAmount9() {
    if (amount9 >= 2) {
      setAmount9(amount9 - 1);
    }
  }



  //show purchase buttons

  const showButton1 = () => {
    if (button1 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount1}>
              -
            </button>
            <h1 className="count">{amount1}</h1>
            <button className="minus-plus-button" onClick={addAmount1}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                myData[0].stripe_id,
                amount1,
                myData[0].price,
                myData[0].name
              );
              setButton1(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(myData[0].stripe_id, myData[0].name);
            setButton1(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton2 = () => {
    if (button2 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount2}>
              -
            </button>
            <h1 className="count">{amount2}</h1>
            <button className="minus-plus-button" onClick={addAmount2}>
              +
            </button>
          </div>

          <button
            className="add-button"
            onClick={() => {
              addDonut(
                myData[1].stripe_id,
                amount2,
                myData[1].price,
                myData[1].name
              );
              setButton2(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(myData[1].stripe_id, myData[1].name);
            setButton2(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton3 = () => {
    if (button3 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount3}>
              -
            </button>
            <h1 className="count">{amount3}</h1>
            <button className="minus-plus-button" onClick={addAmount3}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                myData[2].stripe_id,
                amount3,
                myData[2].price,
                myData[2].name
              );
              setButton3(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(myData[2].stripe_id, myData[2].name);
            setButton3(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton4 = () => {
    if (button4 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount4}>
              -
            </button>
            <h1 className="count">{amount4}</h1>
            <button className="minus-plus-button" onClick={addAmount4}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                myData[3].stripe_id,
                amount4,
                myData[3].price,
                myData[3].name
              );
              setButton4(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(myData[3].stripe_id, myData[3].name);
            setButton4(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton5 = () => {
    if (button5 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount5}>
              -
            </button>
            <h1 className="count">{amount5}</h1>
            <button className="minus-plus-button" onClick={addAmount5}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                myData[4].stripe_id,
                amount5,
                myData[4].price,
                myData[4].name
              );
              setButton5(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(myData[4].stripe_id, myData[4].name);
            setButton5(true);
          }}
        >
          Remove
        </button>
      );
  };
  const showButton6 = () => {
    if (button6 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount6}>
              -
            </button>
            <h1 className="count">{amount6}</h1>
            <button className="minus-plus-button" onClick={addAmount6}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                myData[5].stripe_id,
                amount6,
                myData[5].price,
                myData[5].name
              );
              setButton6(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(myData[5].stripe_id, myData[5].name);
            setButton6(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton7 = () => {
    if (button7 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount7}>
              -
            </button>
            <h1 className="count">{amount7}</h1>
            <button className="minus-plus-button" onClick={addAmount7}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                drinkData[0].stripe_id,
                amount7,
                drinkData[0].price,
                drinkData[0].name
              );
              setButton7(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(drinkData[0].stripe_id, drinkData[0].name);
            setButton7(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton8 = () => {
    if (button8 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount8}>
              -
            </button>
            <h1 className="count">{amount8}</h1>
            <button className="minus-plus-button" onClick={addAmount8}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                drinkData[1].stripe_id,
                amount8,
                drinkData[1].price,
                drinkData[1].name
              );
              setButton8(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(drinkData[1].stripe_id, drinkData[1].name);
            setButton8(true);
          }}
        >
          Remove
        </button>
      );
  };

  const showButton9 = () => {
    if (button9 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
            <button className="minus-plus-button" onClick={subAmount9}>
              -
            </button>
            <h1 className="count">{amount9}</h1>
            <button className="minus-plus-button" onClick={addAmount9}>
              +
            </button>
          </div>
          <button
            className="add-button"
            onClick={() => {
              addDonut(
                drinkData[2].stripe_id,
                amount9,
                drinkData[2].price,
                drinkData[2].name
              );
              setButton9(false);
            }}
          >
            <span>Add</span>
          </button>
        </div>
      );
    } else
      return (
        <button
          className="delete-button"
          onClick={() => {
            deleteDonut(drinkData[2].stripe_id, drinkData[2].name);
            setButton9(true);
          }}
        >
          Remove
        </button>
      );
  };

  function sendPickupOrder() {
    let body = {
      customer: user.name,
      items: JSON.stringify(receiptData),
    };

    if(receiptData.length === 0){
      alert('No items in cart')
    }else {

    axios
      .post("/api/neworder", body)
      // .then((res) => {
      //   alert(`OrderSent`);
      // })
      .then((res) => {
        navigate("/thanks");
      });}
  }

  const addDonut = (item, qty, price, name) => {
    let newItem = {
      price: item,
      quantity: qty,
    };

    let newReceipt = {
      name: name,
      price: price,
      qty: qty,
    };

    let addTotal = price * qty;

    setCartData([...cartData, newItem]);
    setReceiptData([...receiptData, newReceipt]);
    setCartTotal(cartTotal + addTotal);
  };

  const deleteDonut = (id, item2, item3) => {
    const newItems = cartData.filter((item) => item.price !== id);
    const updateReceipt = receiptData.filter((item) => item.name !== item2);

    setCartData(newItems);
    setReceiptData(updateReceipt);
  };

  const cards = myData.map((items) => {
    function DonutCard(props) {
      return (
        <div className="card-container">
          <img
            className="item-photo"
            key={"props.photo"}
            src={"https://" + props.photo}
          />
          <h1 className="item-name" key={"props.name"}>
            {props.name}
          </h1>
          <h2 className="item-price" key={"props.price"}>
            ${props.price}
          </h2>
        </div>
      );
    }

    return <DonutCard {...items} />;
  });

  const drinkCards = drinkData.map((items) => {
    function DrinkCard(props) {
      return (
        <div className="card-container">
        <img
          className="item-photo"
          key={"props.photo"}
          src={"https://" + props.photo}
        />
        <h1 className="item-name" key={"props.name"}>
          {props.name}
        </h1>
        <h2 className="item-price" key={"props.price"}>
          ${props.price}
        </h2>
      </div>
      );
    }

    return <DrinkCard {...items} />;
  });

  const receiptItems = receiptData.map((items) => {
    function ReceiptCard(props) {
      return (
        <div className="receipt">
          <p className="receipt-name" key={"props.name"}>
            {props.name}
          </p>
          <p className="receipt-price" key={"props.price"}>
            ${props.price}
          </p>
          <p className="receipt-qty" key={"props.qty"}>
            qty: {props.qty}
          </p>
        </div>
      );
    }

    return <ReceiptCard {...items} />;
  });

  const ShowDeliveryCheckout = () => {
    if (deliveryBtn === true) {
      document.getElementById("delivery-button").style.backgroundColor =
        "#fa39ba";
      document.getElementById("delivery-button").style.color = "white";
      document.getElementById("pickup-button").style.backgroundColor =
        "#e8e8e8";
      document.getElementById("pickup-button").style.color = "black";
      return (
        <div>
          {" "}
          <button className="checkout-btn" onClick={redirectToCheckout}>
            Delivery Checkout
          </button>
        </div>
      );
    }
  };


  const ShowPickupCheckout = () => {
    if (pickupBtn === true) {
      document.getElementById("pickup-button").style.backgroundColor =
        "#fa39ba";
      document.getElementById("pickup-button").style.color = "white";
      document.getElementById("delivery-button").style.backgroundColor =
        "#e8e8e8";
      document.getElementById("delivery-button").style.color = "black";
      return (
        <div>
          <div className="form-setup">
            <button
              type="submit"
              className="checkout-btn"
              onClick={() => sendPickupOrder()}
            >
              Pickup Checkout
            </button>
          </div>
        </div>
      );
    }
  };

  // stripe required below

  const checkoutOptions = {
    lineItems: cartData,
    mode: "payment",
    shippingAddressCollection: { allowedCountries: ["US"] },
    successUrl: `${window.location.origin}/thanks`,
    cancelUrl: `${window.location.origin}/order`,
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };

  setTimeout(() =>{ 
    return (
    isAuthenticated &&(
    <div className="order-page">
      <div>
        <h1>Welcome {myUser}, select your items below.</h1>
      </div>
      <div className="order-options">
        {/* <a><img src={donutIcon} /></a> */}
      </div>
      <div className="order-container">
        <div className="product-container">
          <div className="item-card-container" id="card0">
            {cards[0]}
            {showButton1()}
          </div>

          <div className="item-card-container" id="card1">
            {cards[1]}
            {showButton2()}
          </div>

          <div className="item-card-container" id="card2">
            {cards[2]}
            {showButton3()}
          </div>

          <div className="item-card-container" id="card3">
            {cards[3]}
            {showButton4()}
          </div>

          <div className="item-card-container" id="card4">
            {cards[4]}
            {showButton5()}
          </div>

          <div className="item-card-container" id="card5">
            {cards[5]}
            {showButton6()}
          </div>

          <div className="item-card-container" id="card6">
            {drinkCards[0]}
            {showButton7()}
          </div>

          <div className="item-card-container" id="card7">
            {drinkCards[1]}
            {showButton8()}
          </div>

          <div className="item-card-container" id="card8">
            {drinkCards[2]}
            {showButton9()}
          </div>


        </div>

        <div className="receipt-container">
          <div className="another-receipt-container">
            <div className="cart-icon-container">
              <img
                className="cart-icon"
                src="https://res.cloudinary.com/redhero/image/upload/v1648941030/Donuts/shopping-cart_jltry0.png"
              />
            </div>
            {receiptItems}
            <div className="checkout-setup">
              <div>
                <h1>Total: ${cartTotal}</h1>
              </div>
              <div className="payment-choice-container">
                <button
                  className="payment-choice"
                  onClick={() => {
                    setPickupBtn(true);
                    setDeliveryBtn(false);
                  }}
                  id="pickup-button"
                >
                  Pickup
                </button>
                <button
                  className="payment-choice"
                  onClick={() => {
                    setDeliveryBtn(true);
                    setPickupBtn(false);
                  }}
                  id="delivery-button"
                >
                  Delivery
                </button>
              </div>
              <div>
                {ShowDeliveryCheckout()}
                {ShowPickupCheckout()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
  
) 

}, 1000) 


}

export default PlaceOrder;
