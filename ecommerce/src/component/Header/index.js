import { IoIosSearch } from "react-icons/io"
import { CiBookmark } from "react-icons/ci"
import { CiUser } from "react-icons/ci"
import { AiOutlineShopping } from "react-icons/ai"
import './index.css'

const Header = () => {
    return(
    <div className="Header-container">
        <div className="header-1">
            <h1 className="Website-name">TANN TRIM</h1>
            <div className="react-icons">
                <IoIosSearch size="28" color="#E5DFD9" />
                <CiUser size="28" color="#E5DFD9" />
                <CiBookmark size="28" color="#E5DFD9" />
                <AiOutlineShopping size="28" color="#E5DFD9" />
            </div>
        </div>
        <ul className="header-2">
            <li>Bags</li>
            <li>Travel</li>
            <li>Accesories</li>
            <li>Gifting</li>
            <li>Jewelery</li>
        </ul>
    </div>
    )
}
export default Header
