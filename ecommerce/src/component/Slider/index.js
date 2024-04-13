import { useState, useEffect } from "react";
import axios from 'axios'
import { BsDot } from "react-icons/bs"
import { LuShare } from "react-icons/lu"
import './index.css'

const Slider = () => {
    const [getData, SetGetData] = useState([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        try {
            const response = await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
            if(response.status === 200){
                SetGetData(response?.data?.data[1]?.link)
                console.log(response?.data?.data[1]?.link)
            }
        }
        catch(e){
            console.log(e)
        }
    }

     return(
        <>
        {/* <div className="Silder-container"> 
        </div> */}
        <div className="details-container">
            <h1 className="backpacks-heading">Bags 
                <span className="center-icon">
                    <BsDot className="span" />
                </span> Backpacks
            </h1>
            <div className="backpacks-products">
                <h1 className="products-heading">13 products</h1>
                <LuShare size="20" color="#E5DFD9" />
            </div>
        </div>
        </>
    )
}
export default Slider
