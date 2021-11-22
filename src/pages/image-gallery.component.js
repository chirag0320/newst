import React,{useState}from "react";
import {Link} from 'react-router-dom'
import Im1 from "./im1.jpeg";
import Im2 from "./im2.jpeg";
import Im3 from "./im3.jpeg";
import Im4 from "./im4.jpeg";
import Im5 from "./im5.jpeg";
import Im6 from "./im6.jpeg";
import Im7 from "./im7.jpeg";
import Im8 from "./im8.jpeg";

import "./New.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


const ImageGallaryComponent =()=> {

        let data=[
            {
                id:1,
                imgSrc:Im8
               },
               {
                id:2,
                imgSrc:Im2,
               },
                {
                id:3,
                imgSrc:Im3,
               },
               {
                id:4,
                imgSrc:Im4,
               },
               {
                id:5,
                imgSrc:Im5,
               },
               {
                id:6,
                imgSrc:Im6,
               },
               {
                id:7,
                imgSrc:Im7,
               },  
                {
                id:8,
                imgSrc:Im1,
               },
               
            ]
            const [model, setmodel] = useState(false)
            const [temimg, settemimg] = useState('')
            const getImg=(imgSrc)=>{
                    settemimg(imgSrc);
                    setmodel(true);
            }
        return (
            
      
      <>
        <Link to="/" type="button" className="cta" style={{position:"fixed",bottom:'0px',left:'50px',}}>Back To Home</Link>
<div className={model?"model open":"model"}>
    <img src={temimg} alt="" />
    {/* <CancelIcon /> */}
    <img className="xx" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-close-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" onClick={()=>setmodel(false)}/>
</div>
        <div className="gallery" style={{marginTop:"50px"}}>
                {data.map((item,index)=>{
                    return(
                        <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="" style={{width:"100%",marginTop:'5px',}}/>

                        </div>
                    )
                })}
        </div>
       </>
       
        )
    };


export default ImageGallaryComponent;