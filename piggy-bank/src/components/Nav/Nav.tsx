// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from "../../App"

const Nav: React.FC = () => {
  // Context
  const { state, dispatch } = React.useContext(AppContext)

  // Event handlers
	const handleLogout = (event) => {
    event.preventDefault()

	  dispatch({
      type: "LOGOUT",
      payload: null,
    })
  }

  return (
    <nav className="page-nav">
      {state.isAuthenticated &&
        <ul>
          <li>
            <Link to="/">Balance</Link>
          </li>
          <li>
            <Link to="/withdraw">Withdraw</Link>
          </li>
          <li>
            <Link to="/deposit">Deposit</Link>
          </li>
          <li>
            <Link to="/logout" onClick={handleLogout}>Log out</Link>
          </li>
        </ul>
      }
    </nav>
  )
}

export default Nav
