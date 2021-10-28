import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const TopNav = () => {
  const [active, setActive] = useState('')
  const {location} = useHistory()

  useEffect(() => {
    if (active === '') {
      setActive(location.pathname)
    }
  }, [active, location.pathname])

  return (
      <div className="nav">
        <Link className={`link ${active === '/' ? 'active' : ''}`} onClick={() => setActive('/')} to="/">
          Home
        </Link>
        <Link className={`link ${active === '/classification' ? 'active' : ''}`} onClick={() => setActive('/classification')} to="/classification">
          Famous Tigers
        </Link>
        <Link className={`link ${active === '/diet' ? 'active' : ''}`} onClick={() => setActive('/diet')} to="/diet">
          Diet
        </Link>
        <Link className={`link ${active === '/images' ? 'active' : ''}`} onClick={() => setActive('/images')} to="/images">
          Images
        </Link>
        <Link className={`link ${active === '/habitat' ? 'active' : ''}`} onClick={() => setActive('/habitat')} to="/habitat">
          Habitats
        </Link>
        {/* <Link to="/anatomy">Anatomy</Link> */}
        {/* <Link to="/behavior">Behavior</Link> */}
        {/* <Link to="/mating">Mating</Link> */}
      </div>
  )
}

export default TopNav
