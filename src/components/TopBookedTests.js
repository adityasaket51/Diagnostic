import React from 'react'
import { Link } from 'react-router-dom';
import microscope from '../icons/microscope-svgrepo-com.svg'

const TopBookedTests = () => {
    const data = [
        {
            name:"HbA1c",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:350,
            originalPrice:700,
            discount:50
        },
        {
            name:"Diabetes Screening",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:350,
            originalPrice:700,
            discount:50
        },
        {
            name:"Glucose, Fasting",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:350,
            originalPrice:700,
            discount:50
        },
        {
            name:"Lipid Profile",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:350,
            originalPrice:700,
            discount:50
        }
    ];

  return (
    <div className='popularTestsContainer'>
        <div>
            <p className='h3'>Top Booked Tests</p>
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

export default TopBookedTests