import { useState, useEffect } from "react";
import { CiBookmark } from "react-icons/ci"
import { MdOutlineCurrencyRupee } from "react-icons/md"
import { TbShoppingBagPlus } from "react-icons/tb"
import axios from 'axios'
import './index.css'

const ProductDetails = () => {

    const [getDetails, SetGetDetails] = useState([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/akkaladevivineethkumar/tann_trim_api1/Productdetails")
            if(response.status === 200){
                SetGetDetails(response?.data)
                console.log(response?.data)
            }
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <div className="Product-details-container">
            {getDetails.map((items, index) => 
                <div key={index} className="Product-card">
                    <div style={{backgroundImage: `url(${items.url})`}} className="product-background">
                        <CiBookmark className="bookmark-icon" />
                    </div>
                    <div className="Card-details">
                        <h1 className="product-name">{items.name}</h1>
                        <div className="price-details-container">
                            <div className="price-details">
                                <MdOutlineCurrencyRupee className="Rupee-icon" />
                                <h1 className="price">{Math.round(items.price * 0.5)}  <span className="actual-price">{items.price}</span> <span className="discount">{`(50% Off)`}</span></h1>
                            </div>
                            <TbShoppingBagPlus className="bag-icon" />
                        </div>
                    </div>
                </div>
            )}
        </div>

    )

}
export default ProductDetails
