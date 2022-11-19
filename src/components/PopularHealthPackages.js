import React from 'react'
import { Link } from 'react-router-dom';
import microscope from '../icons/microscope-svgrepo-com.svg'

const PopularHealthPackages = () => {
    const data = [
        {
            name:"Complete Health Package",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:2500,
            originalPrice:5000,
            discount:50,
            noOfTablet:"Includes 65 tests"
        },
        {
            name:"Women Health Package",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:2500,
            originalPrice:5000,
            discount:50,
            noOfTablet:"Includes 65 tests"
        },
        {
            name:"Family Health Package",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:2500,
            originalPrice:5000,
            discount:50,
            noOfTablet:"Includes 65 tests"
        },
        {
            name:"Advanced Health Package",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:2500,
            originalPrice:5000,
            discount:50,
            noOfTablet:"Includes 65 tests"
        }
    ];

  return (
    <div className='popularTestsContainer healthPackages'>
        <div>
            <p className='h3'>Popular Health Packages </p>
            <p className='view-all'>View All</p>
        </div>
        <div>
            {data.map((item)=>{
                return(
                    <div className='popularTestsContainer-item'>
                        <Link to={`/detais/${item.name}`} style={{textDecoration:'none', color:"#303030"}}>
                            <div className='popularTestsContainer-item-top'>
                            <div className='item-icone'><img src={microscope} alt="microscope" srcset="" className='microscope'/></div>
                                <p className='item-name'>{item.name}</p>
                                <div className='item-detail'>{item.detail}</div>
                                <small className='item-tablet'>{item.noOfTablet}</small>
                                <hr width='250'/>
                            </div>
                        </Link>
                        <div className='price-container'>
                            <div>
                                <div className='price-container-price'>₹{item.price}.00</div>
                                <div className='price-container-original'>₹{item.originalPrice}</div>
                                <div className='discount'>{item.discount}% off</div>
                            </div>
                            <div>
                                <button type='button' className='boxButton'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PopularHealthPackages