import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function PlaceOrder() {
    const { user } = useAuth0()

  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default PlaceOrder