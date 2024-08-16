import { useState } from 'react';
import './Material.css';

function Material(){

    

    const [currValue , setValue] = useState(0);

    function decBtnHandler(){
        setValue(currValue-1);
    }

    function incBtnHandler(){
        setValue(currValue+1);
    }

    return(
        <div className='material_outside'>
            <button className='minus_btn' onClick={decBtnHandler} >-</button> 
            <p>{currValue}</p>
            <button className="plus_btn" onClick={incBtnHandler}>+</button>
        </div>
    )
}


export default Material;