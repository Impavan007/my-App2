import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import './Slider.css';
import { useState } from 'react';
import { sliderItems } from '../../pages/data';



export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex >0 ? slideIndex - 1 : 2);
        } else if (direction === "right") {
          setSlideIndex(slideIndex<2? slideIndex+1:0);
        }
      };
      
    return (
        <div>
            <div className="Container">
                <div className="Arrow1" onClick={()=>handleClick("left")}>
                    <ArrowLeftOutlined />

                </div>
                <div className="wraper" style={{ transform: `translateX(${slideIndex* -100}vw)` }}>
                    {sliderItems.map((item)=>(

                    
                    <div className="slide" style={{ backgroundColor: `#${item.bg}` }} >
                        <div className="imgContainer">
                            <img src={item.img} alt="" className='img1' />
                        </div>
                        <div className="infoContainer">
                            <div className="title">
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="desc">
                                <p>
                                    {item.desc}                                </p>
                            </div>
                            <button className="btn1"> Show Now</button>
                        </div>
                       </div>))}
                       
                   
                    </div>
                    <div className="Arrow2" onClick={()=>handleClick("left")}>
                        <ArrowRightOutlined />
                    </div>
                

            </div></div>
            )
}
