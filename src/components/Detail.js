import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const params = useParams();
    const {testName} = params

    const [displayData,setDisplayData] = useState({});

    console.log(testName)

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
        },
        {
            name:"Diabetes Test",
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
        },
        {
            name:"Complete Blood Count",
            detail:"Lorem ipsum dolor sit consectet dummy text...",
            price:240,
            originalPrice:300,
            discount:20
        },
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

    useEffect(()=>{
        setDisplayData(data.filter((item)=>{
            return item.name === testName
        }))
    },[])

    console.log(displayData)
  return (
    <div>
        <div></div>
        <div>
            <div>
                <p style={{color:'red'}}>Detais Will come here</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Detail