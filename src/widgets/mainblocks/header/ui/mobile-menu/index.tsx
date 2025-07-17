import React from 'react'

export const MobileMenu = () => {
  return (
    <div>
      <button className="header_burger" onClick={() => toggleSideBar(!isOpenSideBar)}>
        <ul
          className={cls('humb', {
            active: isOpenSideBar,
          })}
        >
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </button>
    </div>
  )
}
