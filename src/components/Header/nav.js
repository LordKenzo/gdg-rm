import React, { useState } from 'react'
import { Link } from 'gatsby'
import Hamburger from './hamburger'

const Nav = ({ menu, toggleTheme }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(prev => !prev)
  return (
    <>
      <nav>
        <Hamburger open={open} click={handleOpen} />
        <ul className={open ? 'is-open' : ''}>
          {menu.map(item => (
            <li key={item.id}>
              <Link to={item.link} activeClassName="active">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="theme-switch" onClick={toggleTheme}></button>
      </nav>
    </>
  )
}

export default Nav
