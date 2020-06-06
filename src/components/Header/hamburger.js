import React from 'react'

const Hamburger = ({ open, click }) => {
  return (
    <>
      <div
        tabIndex="0"
        role="button"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        onKeyDown={click}
        onClick={click}
      >
        <div></div>
      </div>
    </>
  )
}

export default Hamburger
