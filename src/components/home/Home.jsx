import React from 'react'
import './Home.css'

import Slider from '../slider/Slider'
import OurPagesCard from './OurPagesCard'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const img = require('../../assets/cardImage/cardImage1.jpg')

function Home() {
    return (
        <section className="c-homeContent">
            <section className="c-sliderContainer">
                <Slider />
            </section>

            <div className="c-aboutUs">
                <div className="row">
                    <div className="col-6">
                        alow

                    </div>
                    <div className="col-6">
                        alow

                    </div>
                </div>
            </div>

            <section className="c-ourPagesContainer">
                <div className="c-ourPagesContainer__content">
                    <span className='c-ourPagesContainer__span'>Lorem Impsum</span>
                    <h2 className='c-ourPagesContainer__h2'>Nossas Páginas</h2>

                    <div className="c-ourPagesContainer__cardsContainer">
                        <OurPagesCard />
                    </div>
                </div>
            </section>

            <section className="c-companySkills">
                <div className="c-companySkills__container">
                    <h2 className='c-companySkills__h2'>Serviços</h2>
                    <div className="c-companySkills__descriptionContainer">
                        <img src={img} alt="" className="c-companySkills__image" />
                        <div className="c-companySkills__description">
                            <h3 className="c-companySkills__h3">Lorem ipsum dolor sit amet</h3>
                            <p className="c-companySkills__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h3 className="c-companySkills__h3">Lorem ipsum dolor sit amet</h3>
                            <p className="c-companySkills__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h3 className="c-companySkills__h3">Lorem ipsum dolor sit amet</h3>
                            <p className="c-companySkills__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="c-customers">
                <div className="c-customers__container">
                    <div className="c-customers__customerContainer">
                        <FontAwesomeIcon className="c-customers__icon" icon="fa-archway" />
                        <h2>Característica</h2>
                        <p className="c-customers__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="c-customers__customerContainer">
                        <FontAwesomeIcon className="c-customers__icon" icon="fa-address-book" />
                        <h2>Característica</h2>
                        <p className="c-customers__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="c-customers__customerContainer">
                        <FontAwesomeIcon className="c-customers__icon" icon="fa-arrow-up-from-water-pump" />
                        <h2>Característica</h2>
                        <p className="c-customers__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="c-customers__customerContainer">
                        <FontAwesomeIcon className="c-customers__icon" icon="fa-address-book" />
                        <h2>Característica</h2>
                        <p className="c-customers__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="c-customers__customerContainer">
                        <FontAwesomeIcon className="c-customers__icon" icon="fa-address-book" />
                        <h2>Característica</h2>
                        <p className="c-customers__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="c-customers__customerContainer">
                        <FontAwesomeIcon className="c-customers__icon" icon="fa-address-book" />
                        <h2>Característica</h2>
                        <p className="c-customers__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </section>

            <section className="c-productsContainer">
                <div className="c-productsContainer__container">
                    <div className="c-productsContainer__mainTxt">
                        <h2 className='c-productsContainer__h2'>Nossos produtos</h2>
                    </div>

                    <div className="c-productsContainer__products">
                        <ProductCard />
                    </div>

                    <Link className='c-productsContainer__link' to="/produtos">Conheça todos os nossos produtos...</Link>
                </div>
            </section>
        </section>
    )
}

export default Home