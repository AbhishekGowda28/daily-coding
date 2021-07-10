import React from 'react';
import Slider from 'react-slick';

// react-slider settings
const settings = {
    dots : true,
    arrows: true,
    infinite : true,
    autoplay : true,
    speed : 5,
    slidesToShow : 1,
    slidesToScroll : 1
};

const generateSlides = ({slides})=>{
    if(slides){
        return(
            <Slider {...settings}>
                {slides.map((element)=>{
                    return(
                        <div key={element.id} className="item-slider">
                            <div className="caption" style={{ background: `url(/images/covers/${element.cover}) no-repeat` }}>
                                <h4>{element.topic}</h4>
                                <p>{element.title}</p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        );
    }
}

const Featured = (props)=>{
    console.log(props);
    return(<div>
        {generateSlides(props)} 
    </div>);
}

export default Featured;