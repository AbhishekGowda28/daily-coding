import React from 'react';

// components
import Selector from './selector'

const Controller = (props)=>{
    return(<div className="renderSelection">
        <Selector name={props}/>
        <Selector name={props}/>
        <Selector name={props}/>
        <Selector name={props}/>
    </div>);
}

export default Controller;