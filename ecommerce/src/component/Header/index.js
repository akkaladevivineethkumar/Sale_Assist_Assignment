import { IoIosSearch } from "react-icons/io"
import { CiBookmark } from "react-icons/ci"
import { CiUser } from "react-icons/ci"
import { AiOutlineShopping } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import './index.css'

const Header = () => {

    return(
    <div className="Header-container">
        <div className="header-1">
            <NavLink className="Link" to = "/">
            <   h1 className="Website-name">TANN TRIM</h1>
            </NavLink>
            <div className="react-icons">
                <IoIosSearch size="28" color="#E5DFD9" />
                <CiUser size="28" color="#E5DFD9" />
                <CiBookmark size="28" color="#E5DFD9" />
                <AiOutlineShopping size="28" color="#E5DFD9" />
            </div>
        </div>
        <ul className="header-2">
            <NavLink activeClassName="active" className="Link" to = "/">
            <li>Bags</li>
            </NavLink>
            <NavLink className="Link" to = "/travel">
            <li>Travel</li>
            </NavLink>
            <NavLink className="Link" to = "/accesories">
            <li>Accesories</li>
            </NavLink>
            <NavLink className="Link" to = "/gifting">
            <li>Gifting</li>
            </NavLink>
            <NavLink className="Link" to = "/jewelery">
            <li>Jewelery</li>
            </NavLink>
        </ul>
    </div>
    )
}
export default Header
