import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import  { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    return(
        <nav className="header">
            <img className="header__logo" src="https://fptshop.com.vn/uploads/originals/2019/12/30/637133160350737542_201407171129187887_1378267132_fptshop-ver1-0-logo-color-bg-black.jpg" alt="logo"  />
            <div className="header__search">
                <input type="text" className="searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
                <div className="header__nav">
                    {/*1st link*/}
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Đăng Nhập/Đăng Ký</span>
                            <span className="header__optionLineTwo">Tài Khoản</span>
                        </div>
                    </Link>
                    {/*2nd line*/}
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Đăng Nhập/Đăng Ký</span>
                            <span className="header__optionLineTwo">Tài Khoản</span>
                        </div>
                    </Link>
                    {/*3rd basket*/}
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                       {/*basket number*/}
                       <span className="header_optionLineTwo header__basketCount">0</span>
                        </div>
                    </Link>
                </div>
        </nav>
    )
}
export default Header