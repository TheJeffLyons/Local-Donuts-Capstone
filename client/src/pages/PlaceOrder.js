import React, { useEffect, useState } from "react";
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
  const { user } = useAuth0();
  const userData = JSON.stringify(user);

  const [myUser, setMyUser] = useState(userData);
  const [cartData, setCartData] = useState([]);
  const [receiptData, setReceiptData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);
  const [amount4, setAmount4] = useState(1);
  const [amount5, setAmount5] = useState(1);
  const [amount6, setAmount6] = useState(1);
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);
  const [button4, setButton4] = useState(true);
  const [button5, setButton5] = useState(true);
  const [button6, setButton6] = useState(true);

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

  const showButton1 = () => {
    if (button1 === true) {
      return (
        <div className="button-container">
          <div className="plus-minus">
          <button className="minus-plus-button"  onClick={subAmount1}>-</button>
          <h1 className="count">{amount1}</h1>
          <button className="minus-plus-button"  onClick={addAmount1}>+</button>
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
            Add
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
        <div>
          <button onClick={subAmount2}>-</button>
          {amount2}
          <button onClick={addAmount2}>+</button>
          <br></br>
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
            Add
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
        <div>
          
          <button onClick={subAmount3}>-</button>
          {amount3}
          <button onClick={addAmount3}>+</button>
          <br></br>
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
            Add
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
        <div>
          <button onClick={subAmount4}>-</button>
          {amount4}
          <button onClick={addAmount4}>+</button>
          <br></br>
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
            Add
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
        <div>
          <button onClick={subAmount5}>-</button>
          {amount5}
          <button onClick={addAmount5}>+</button>
          <br></br>
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
            Add
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
        <div>
          <button onClick={subAmount6}>-</button>
          {amount6}
          <button onClick={addAmount6}>+</button>
          <br></br>
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
            Add
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

  //function to add product to cart

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

    setCartData([...cartData, newItem]);
    setReceiptData([...receiptData, newReceipt]);
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

  // stripe required below

  // console.log(cartData);
  // console.log(receiptData);
  // console.log(myUser)

  const checkoutOptions = {
    lineItems: cartData,
    mode: "payment",
    successUrl: `${window.location.origin}/thanks`,
    cancelUrl: `${window.location.origin}/order`,
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };

  return (
    <div className="order-page">
      <h1>Welcome, select your items below.</h1>
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
        </div>

        <div className="receipt-container">
          <div className="another-receipt-container">
            <h1><u>Cart</u></h1>
            {receiptItems}
            <div>
              {/* <h3>Welcome {user.name}!</h3>
              <h4>{userEmail}</h4> */}
              <button className="checkout-btn" onClick={redirectToCheckout}>
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
