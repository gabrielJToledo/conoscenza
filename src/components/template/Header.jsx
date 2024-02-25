import React from 'react'
import './Header.css'
import { logo, linkLogo, menu } from '../../global'
import { Link } from 'react-router-dom'

// Importing Components
import TopContact from './TopContact'

function Header() {
  return (
    <header className="header">
      <TopContact/>
      
      <div className="c-headerComponent">
        <div className="c-headerComponent__headerContainer">
          <div className="c-headerComponent__logo"><Link to={linkLogo}><img className='c-headerComponent__logo' src={logo} alt="Logo" /></Link></div>

          <nav className="c-headerComponent__nav">
            <ul className="c-headerComponent__firstUl">
              {menu.map((menu, index) => {
                return <li key={index}><Link className="c-headerComponent__link" to={`/${menu.link}`} key={index}>{menu.menuName}</Link></li>
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header