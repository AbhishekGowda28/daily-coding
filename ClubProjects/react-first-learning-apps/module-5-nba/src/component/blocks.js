import React from 'react';
import Reveal from 'react-reveal';
import  'animate.css/animate.css';
import {Link} from 'react-router-dom';



const generateBlocks = ({blocks})=>{
    if(blocks){
        return blocks.map((element)=>{
            return(<Reveal key={element.id} effect="animated fadeInUp">
                <div className={`item ${element.type}`}>
                    <div className="veil"></div>
                    <div className="image" style={{background:`url(/images/blocks/${element.image}) no-repeat`}}></div>
                    <div className="title">
                        <Link to={element.link} >
                            {element.title}
                        </Link>
                    </div>
                </div>
            </Reveal>);
        });
    }
}

const Blocks =(props)=>{
    return(<div className="home_blocks">{generateBlocks(props)}</div>);
}

export default Blocks;