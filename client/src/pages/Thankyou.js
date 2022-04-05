import React from 'react'
import'../styles/thanks.css'

function Thankyou() {
  return (
    <div className='thanks-container'>
      <div className='thanks-card'>
        <div>
          <h1>Thank You!</h1>
          <h2>We will have your order ready in no time!</h2>
          <img className='thanks-photo' src='https://res.cloudinary.com/redhero/image/upload/v1649184401/Donuts/thankyoudonut_qwuthw.png' />
          <h2>Our crew is hard at work and your order should be ready for pickup/delivery in 15 minutes.</h2>
          <h4>*Pickup orders: Please provide name or email upon pickup.</h4>
        </div>
      </div>
    </div>
  )
}

export default Thankyou