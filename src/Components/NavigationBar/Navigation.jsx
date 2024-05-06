import './Navigation.css'
import { IoIosArrowDown } from "react-icons/io"
import { CgClose } from "react-icons/cg"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io"
import { TbSearch } from "react-icons/tb"
import { VscMenu } from "react-icons/vsc"
import { SectionMain, bottomKid, bottomSale, bottomWomen, kidSection1, kidSection2, menSection, womenSection, saleSection, lifeSection, bottomMen, SectionMainKids, kidSection3, kidSection4 } from '../../DB/NavigationDropdown'
import Filler from './Filler'
import FillerMain from './FillerMain'
import FillerBottom from './FillerBottom'
import FillerKids from './FillerKids'
import Lenis from 'lenis'
import { useRef, useEffect} from 'react'

import Headroom from 'react-headroom'


function Nav() {
    
    useEffect(() => {
        const lenis = new Lenis()
    
        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    }, [])

    const openMenu = () => {
        document.querySelector('.mobile-menu').className = 'mobile-menu active';
    };

    const closeMenu = () => {
        document.querySelector('.mobile-menu').className = 'mobile-menu deactivate';
    }

    const openMenu2 = () => {
        document.querySelector('.backdrop').className = 'backdrop active';
        document.querySelector('.dropDownSection').className = 'dropDownSection active';
    };

    const closeMenu2 = () => {
        document.querySelector('.backdrop').className = 'backdrop deactivate';
        document.querySelector('.dropDownSection').className = 'dropDownSection deactivate';
    }

    const DisplayMen = () => {
        document.querySelector('.men').className = 'men activate drop-down';
    }

    const CloseMen = () => {
        document.querySelector('.men').className = 'men deactivate';
    }

    const DisplayWomen = () => {
        document.querySelector('.women').className = 'women activate drop-down';
    }

    const CloseWomen = () => {
        document.querySelector('.women').className = 'women deactivate';
    }

    const DisplayKids = () => {
        document.querySelector('.kids').className = 'kids activate drop-down';
    }

    const CloseKids = () => {
        document.querySelector('.kids').className = 'kids deactivate';
    }

    const DisplaySale = () => {
        document.querySelector('.sale').className = 'sale activate drop-down';
    }

    const CloseSale = () => {
        document.querySelector('.sale').className = 'sale deactivate';
    }

    const DisplayStripe = () => {
        document.querySelector('.stripe-life').className = 'stripe-life activate drop-down';
    }

    const CloseStripe = () => {
        document.querySelector('.stripe-life').className = 'stripe-life deactivate';
    }

    function rederFilter(data){
        return data.map(({id, title, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12, cont13, cont14}) =>(
            <Filler key={id}
                title = {title}
                cont1 = {cont1}
                cont2 = {cont2}
                cont3 = {cont3}
                cont4 = {cont4}
                cont5 = {cont5}
                cont6 = {cont6}
                cont7 = {cont7}
                cont8 = {cont8}
                cont9 = {cont9}
                cont10 = {cont10}
                cont11 = {cont11}
                cont12 = {cont12}
                cont13 = {cont13}
                cont14 = {cont14}
            />
        ));
    }

    function rederFilterBottom(data){
        return data.map(({id, title}) =>(
            <FillerBottom key={id}
                cont = {title}
            />
        ));
    }

    function rederFilterMain(data){
        return data.map(({id, title, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10}) =>(
            <FillerMain key={id}
                title = {title}
                cont1 = {cont1}
                cont2 = {cont2}
                cont3 = {cont3}
                cont4 = {cont4}
                cont5 = {cont5}
                cont6 = {cont6}
                cont7 = {cont7}
                cont8 = {cont8}
                cont9 = {cont9}
                cont10 = {cont10}
            />
        ));
    }

    function rederFilterKids(data){
        return data.map(({id, title, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9}) =>(
            <FillerKids key={id}
                title = {title}
                cont1 = {cont1}
                cont2 = {cont2}
                cont3 = {cont3}
                cont4 = {cont4}
                cont5 = {cont5}
                cont6 = {cont6}
                cont7 = {cont7}
                cont8 = {cont8}
                cont9 = {cont9}
            />
        ));
    }

    const result = rederFilter(menSection)
    const resultMain = rederFilterMain(SectionMain)
    const resultMainKids = rederFilterMain(SectionMainKids)
    const result2 = rederFilter(womenSection)
    const result3 = rederFilter(saleSection)
    const result4 = rederFilter(lifeSection)
    const result5 = rederFilterBottom(bottomMen)
    const result6 = rederFilterBottom(bottomWomen)
    const result7 = rederFilterBottom(bottomKid)
    const result8 = rederFilterBottom(bottomSale)
    const result9 = rederFilterKids(kidSection1)
    const result10 = rederFilterKids(kidSection2)
    const result11 = rederFilterKids(kidSection3)
    const result12 = rederFilter(kidSection4)

    return(
        <Headroom>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="ads">
                        <div className="adsSection">
                            <div className="adswrapper" onClick={openMenu2}>
                                <div className="holder">
                                    <div>
                                        <p>FREE STANDARD SHIPPING WITH ADICLUB</p>
                                        <span>< IoIosArrowDown /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropDownSection">
                            <div className="ddwrapper">
                                <div className='exitbtn'>
                                    <div className='wrapper' onClick={closeMenu2}>
                                        <span>
                                            < CgClose />
                                        </span>
                                    </div>
                                </div>
                                <div className="content">
                                    <section>
                                        <h4>FREE STANDARD SHIPPING WITH ADICLUB</h4>
                                        <p>Sign up for adiClub to enjoy free standard shipping and earn points on every order.</p>
                                        <div>
                                        <a href="#"><span>JOIN ADICLUB FOR FREE</span></a>
                                        </div>
                                        <div className='second'>
                                        <a href="#"><span>RETURNS & EXCHANGES</span></a>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                        <ul className='min_nav'>
                            <li><a href="#">help</a></li>
                            <li><a href="#">orders and returns</a></li>
                            <li><a href="#">join adiclub</a></li>
                            <li className='target'>
                                <div>
                                    <button>
                                        <img src="https://adl-foundation.adidas.com/flags/1-2-1/us.svg" />
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <div className='main_nav'>
                            <div className='mobile mobile-first'>
                                <button onClick={openMenu}>
                                    < VscMenu />
                                </button>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M387 1482 l-97 -97 0 -145 0 -145 355 -355 355 -355 355 355 355 355 0 145 0 145 -98 98 -97 97 -145 0 -145 0 -112 -112 -113 -113 -113 113 -112 112 -145 0 -145 0 -98 -98z m465 -209 l148 -148 148 148 147 147 75 0 74 0 53 -52 53 -52 0 -75 0 -74 -275 -276 -275 -276 -275 275 -275 276 0 74 0 74 52 53 52 53 76 0 75 0 147 -147z"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <a href="#" className='menu'>
                            <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
                            </a>
                            <ul className='menu-mid'>
                                <li onMouseOver={DisplayMen} onMouseOut={CloseMen} className='menu-mid-wrapper'>
                                    <a className='target1 outer' href="#">MEN</a>
                                    <div className='drop-down men'>
                                        <ul className='first-child child'>
                                            { resultMain }
                                            { result }
                                        </ul>
                                        <hr />
                                        <ul className='last-child child'>
                                            { result5 }
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseOver={DisplayWomen} onMouseOut={CloseWomen} className='menu-mid-wrapper'>
                                    <a className='target1 outer' href="#">WOMEN</a>
                                    <div className='drop-down women'>
                                        <ul className='first-child child'>
                                            { resultMain }
                                            { result2 }
                                        </ul>
                                        <hr />
                                        <ul className='last-child child'>
                                            { result6 }
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseOver={DisplayKids} onMouseOut={CloseKids} className='menu-mid-wrapper'>
                                    <a className='target1 outer' href="#">KIDS</a>
                                    <div className='drop-down kids'>
                                        <ul className='first-child child'>
                                            { resultMainKids }
                                            <li className='first-child-wrapper'>
                                                { result9 }
                                            </li>
                                            <li className='first-child-wrapper'>
                                                { result10 }
                                            </li>
                                            <li className='first-child-wrapper'>
                                                { result11 }
                                            </li>
                                            { result12 }
                                        </ul>
                                        <hr />
                                        <ul className='last-child child'>
                                            { result7 }
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseOver={DisplaySale} onMouseOut={CloseSale} className='menu-mid-wrapper'>
                                    <a href="#" className='outer'>SALE</a>
                                    <div className='drop-down sale'>
                                        <ul className='first-child child'>
                                            { result3 }
                                        </ul>
                                        <hr />
                                        <ul className='last-child child'>
                                            { result8 }
                                        </ul>
                                    </div>
                                </li>
                                <li onMouseOver={DisplayStripe} onMouseOut={CloseStripe} className='menu-mid-wrapper'>
                                    <a href="#" className='outer'>3 STRIPE LIFE</a>
                                    <div className='drop-down stripe-life'>
                                        <ul className='first-child child'>
                                            { result4 }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className='min-menu'>
                                <div>
                                    <input type="text" placeholder="Search"/>
                                    <div>
                                        <span>
                                            < TbSearch />
                                        </span>
                                    </div>
                                </div>
                                <a href="#" className='target'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="221.000000pt" height="228.000000pt" viewBox="0 0 221.000000 228.000000" preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M1030 2180 c-140 -18 -265 -83 -363 -189 -217 -235 -209 -600 17 -826 188 -187 466 -230 700 -107 191 99 316 308 316 527 -1 205 -100 390 -272 505 -105 70 -268 107 -398 90z m221 -266 c78 -35 159 -121 189 -201 30 -78 25 -204 -10 -278 -31 -64 -110 -144 -175 -175 -43 -21 -64 -25 -150 -25 -120 0 -171 20 -250 100 -79 79 -100 130 -100 250 0 119 17 166 92 246 108 116 261 147 404 83z"/>
                                            <path d="M235 515 c-107 -151 -195 -278 -195 -282 1 -9 177 -133 188 -133 4 0 79 101 166 225 l159 225 552 0 552 0 159 -225 c87 -124 162 -225 166 -225 12 0 187 124 188 133 0 4 -88 131 -195 282 l-196 275 -674 0 -674 0 -196 -275z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className='notification'>1</span>
                                </a>
                                <a href="#" className='target'>
                                    <span>
                                        <svg className='target1' xmlns="http://www.w3.org/2000/svg" version="1.0" width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M387 1482 l-97 -97 0 -145 0 -145 355 -355 355 -355 355 355 355 355 0 145 0 145 -98 98 -97 97 -145 0 -145 0 -112 -112 -113 -113 -113 113 -112 112 -145 0 -145 0 -98 -98z m465 -209 l148 -148 148 148 147 147 75 0 74 0 53 -52 53 -52 0 -75 0 -74 -275 -276 -275 -276 -275 275 -275 276 0 74 0 74 52 53 52 53 76 0 75 0 147 -147z"></path></g>
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className='target shop-bag'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M837 2186 c-59 -22 -91 -53 -114 -111 -7 -17 -12 -89 -12 -172 l-1 -141 -148 -4 c-139 -3 -151 -5 -185 -28 -20 -13 -46 -43 -59 -65 l-23 -40 -3 -685 c-2 -476 0 -699 8 -729 15 -59 43 -97 90 -121 38 -19 62 -20 731 -20 683 0 693 0 736 21 29 14 52 35 68 63 l25 43 0 711 c0 479 -3 720 -11 739 -15 40 -48 73 -94 94 -33 15 -65 19 -177 19 l-137 0 -3 164 c-3 148 -5 167 -24 192 -29 40 -65 64 -110 74 -64 15 -512 12 -557 -4z m523 -296 l0 -130 -235 0 -235 0 0 130 0 130 235 0 235 0 0 -130z m-650 -375 c0 -39 6 -78 15 -94 30 -59 120 -59 150 0 9 16 15 55 15 94 l0 65 235 0 235 0 0 -74 c0 -63 3 -79 23 -101 31 -36 86 -38 122 -5 23 21 25 31 25 102 l0 78 125 0 125 0 -2 -667 -3 -668 -652 -3 -653 -2 0 670 0 670 120 0 120 0 0 -65z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    <div className='empty-promt'>
                                        <span>your cart is empty</span>
                                    </div>
                                </a>
                            </div>
                            <div className='mobile mobile-last'>
                                <a href="#" className='target'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="221.000000pt" height="228.000000pt" viewBox="0 0 221.000000 228.000000" preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M1030 2180 c-140 -18 -265 -83 -363 -189 -217 -235 -209 -600 17 -826 188 -187 466 -230 700 -107 191 99 316 308 316 527 -1 205 -100 390 -272 505 -105 70 -268 107 -398 90z m221 -266 c78 -35 159 -121 189 -201 30 -78 25 -204 -10 -278 -31 -64 -110 -144 -175 -175 -43 -21 -64 -25 -150 -25 -120 0 -171 20 -250 100 -79 79 -100 130 -100 250 0 119 17 166 92 246 108 116 261 147 404 83z"/>
                                            <path d="M235 515 c-107 -151 -195 -278 -195 -282 1 -9 177 -133 188 -133 4 0 79 101 166 225 l159 225 552 0 552 0 159 -225 c87 -124 162 -225 166 -225 12 0 187 124 188 133 0 4 -88 131 -195 282 l-196 275 -674 0 -674 0 -196 -275z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className='notification'>1</span>
                                </a>
                                <button className='target'>
                                    <span>
                                        < TbSearch />
                                    </span>
                                </button>
                                <a href="#" className='target'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

                                            <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M837 2186 c-59 -22 -91 -53 -114 -111 -7 -17 -12 -89 -12 -172 l-1 -141 -148 -4 c-139 -3 -151 -5 -185 -28 -20 -13 -46 -43 -59 -65 l-23 -40 -3 -685 c-2 -476 0 -699 8 -729 15 -59 43 -97 90 -121 38 -19 62 -20 731 -20 683 0 693 0 736 21 29 14 52 35 68 63 l25 43 0 711 c0 479 -3 720 -11 739 -15 40 -48 73 -94 94 -33 15 -65 19 -177 19 l-137 0 -3 164 c-3 148 -5 167 -24 192 -29 40 -65 64 -110 74 -64 15 -512 12 -557 -4z m523 -296 l0 -130 -235 0 -235 0 0 130 0 130 235 0 235 0 0 -130z m-650 -375 c0 -39 6 -78 15 -94 30 -59 120 -59 150 0 9 16 15 55 15 94 l0 65 235 0 235 0 0 -74 c0 -63 3 -79 23 -101 31 -36 86 -38 122 -5 23 21 25 31 25 102 l0 78 125 0 125 0 -2 -667 -3 -668 -652 -3 -653 -2 0 670 0 670 120 0 120 0 0 -65z"/>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile-menu'>
                    <div className='header'>
                        <a href="#">
                            <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path>
                            </svg>
                        </a>
                        <button onClick={closeMenu}>
                            < AiOutlineClose />
                        </button>
                    </div>
                    <div className='content'>
                        <ul>
                            <li>
                                <button>
                                    <span className='target'>MEN</span>
                                    < IoIosArrowForward />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <span className='target'>WOMEN</span>
                                    < IoIosArrowForward />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <span className='target'>KIDS</span>
                                    < IoIosArrowForward />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <span>3 STRIPE LIFE</span>
                                    < IoIosArrowForward />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <span>SALE</span>
                                    < IoIosArrowForward />
                                </button>
                            </li>
                        </ul>
                        <hr />
                        <ul>
                            <li>
                                <a href="#"><span>My Account</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Exchanges & Returns</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Order Tracker</span></a>
                            </li>
                            <li>
                                <a href="#"><span>adiClub</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Gift Cards</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Store Locator</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Mobile Apps</span></a>
                            </li>
                            <li>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                    <ul className='footer'>
                        <a href="#">
                            <img src="https://adl-foundation.adidas.com/flags/1-2-1/us.svg" />
                            <span>United States</span>
                        </a>
                    </ul>
                </div>
                <div className="backdrop"></div>
            </div>
        </Headroom>
    );
}

export default Nav;