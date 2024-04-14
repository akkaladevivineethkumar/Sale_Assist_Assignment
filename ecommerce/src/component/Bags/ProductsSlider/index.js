import { useState, useEffect } from "react";
import axios from 'axios'
import { BsDot } from "react-icons/bs"
import { LuShare } from "react-icons/lu"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const ProductsSlider = () => {
    const [getData, SetGetData] = useState([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/akkaladevivineethkumar/tann_trim_api1/productslist")
            if(response.status === 200){
                SetGetData(response?.data)
                console.log(response?.data)
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const settings = {
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 7.9,
        centerPadding: '5px',
        centerMode: true,
        prevArrow: <></>,
        nextArrow: <></>, 
      }

     return(
         <>
            <div className="product-container">
                <Slider {...settings}>
                    {getData.map(item=> 
                    <div className="productslist-container">
                    <img src={item.url} key={item.id} className="image-bag" alt={item.name}/>
                    <p className="bag-name">{item.name}</p>
                    </div>
                    )}
                </Slider>
            </div>

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
export default ProductsSlider
