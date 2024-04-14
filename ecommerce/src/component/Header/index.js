import { IoIosSearch } from "react-icons/io"
import { CiBookmark } from "react-icons/ci"
import { CiUser } from "react-icons/ci"
import { AiOutlineShopping } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import './index.css'

const Header = () => {
    const navigate = useNavigate()

    const BagClicked = () => {
        navigate("/")
    }

    const TravelClicked = () => {
        navigate("/travel")
    }

    const AccesoriesClicked = () => {
        navigate("/accesories")
    }

    const GiftingClicked = () => {
        navigate('/gifting')
    }

    const JeweleryClicked = () => {
        navigate('/jewelery')
    }

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
            <li onClick={BagClicked}>Bags</li>
            <li onClick={TravelClicked}>Travel</li>
            <li onClick={AccesoriesClicked}>Accesories</li>
            <li onClick={GiftingClicked}>Gifting</li>
            <li onClick={JeweleryClicked}>Jewelery</li>
        </ul>
    </div>
    )
}
export default Header
