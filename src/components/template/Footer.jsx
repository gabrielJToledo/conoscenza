import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import { logo } from '../../global'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { address, menu, phone, eMail } from '../../global'

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <section className="c-footer__linksContainer">

          <div className="c-footer__siteResume">
            <img className='c-footer__logo' src={logo} alt="" />
            <p className='c-footer__footerDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="c-footer__address">
            <span className='c-footer__addressSpan'><FontAwesomeIcon icon="fa-location-dot" /> {address[0].street}, {address[0].num} - {address[0].district}</span>
          </div>
          <div className="c-footer__links">
            {menu.map((menu, index) => {
              return <Link key={index} className='c-footer__link' to="/">
                {menu.menuName}
              </Link>
            })}
          </div>
          <div className="c-footer__phoneEmail">
            {eMail.map((mail, index) => {
              return <span key={index} className='c-footer__phoneEmail__span'> <FontAwesomeIcon icon="fa-location-dot" /> {mail.email} </span>
            })}
            {phone.map((phone, index) => {
              return <span className='c-footer__phoneEmail__span' key={index}>
               <FontAwesomeIcon icon="fa-phone" /> {phone.ddd} {phone.num}
              </span>
            })}
          </div>
        </section>

        <hr />

        <section className="c-footer__footerContent">
          <div className="c-footer__socialLinks">
            <FontAwesomeIcon className='c-footer__socialLink' icon="fa-location-dot" />
            <FontAwesomeIcon className='c-footer__socialLink' icon="fa-location-crosshairs" />
            <FontAwesomeIcon className='c-footer__socialLink' icon="fa-globe" />
            <FontAwesomeIcon className='c-footer__socialLink' icon="fa-map-pin" />
            <FontAwesomeIcon className='c-footer__socialLink' icon="fa-unlock" />
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer