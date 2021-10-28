import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/classification">Famous Tigers</Link>
        <Link to="/diet">Diet</Link>
        <Link to="/images">Images</Link>
        <Link to="/habitat">Habitats</Link>
        {/* <Link to="/anatomy">Anatomy</Link> */}
        {/* <Link to="/behavior">Behavior</Link> */}
        {/* <Link to="/mating">Mating</Link> */}
      </div>
  )
}

export default TopNav
