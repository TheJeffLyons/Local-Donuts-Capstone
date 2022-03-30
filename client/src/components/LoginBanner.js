import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function LoginBanner() {
    const { user, isAuthenticated } = useAuth0()

  return (
     !isAuthenticated && (
    <div className="small-banner">
    <h2>Sign in to place a pickup or delivery order</h2>
  </div>
      )
  )
}

export default LoginBanner