import React, { useState } from 'react'
import data from './data';

function Accordian() {

    const[selected,setSelected]=useState(null);
    const[enablemultiselect,setenablemultiselect]=useState(false);
    const[multiselect,setmultiselect]=useState([]);

    const handleSingleSelection=(getCurrId)=>{
        // if selected then null else make it getcurrId
        setSelected(getCurrId===selected ? null : getCurrId)
    }

    const enablemultiselectbtn=()=>{
        console.log(enablemultiselect);
        setenablemultiselect(!enablemultiselect);
    }

    const multishow=(getCurrId)=>{
        // copy the original array
        const copy=[...multiselect] 
        if(multiselect.indexOf(getCurrId)===-1){
            copy.push(getCurrId)
        }else{
        copy.splice(multiselect.indexOf(getCurrId),1)
        }
        setmultiselect(copy)   
    }

    return (
       <div className="accordian">
        <button onClick={()=>enablemultiselectbtn()}>Enable Multi Select</button>
        {
            
            data && data.length > 0 ? 
            data.map((dataitem,index)=> <div key={index} className='item'>
                {/* like this give the function otherwise it will invoke the function automatically */}
                <div className="title"><h3>{dataitem.question}</h3></div>
                <span onClick={enablemultiselect ? ()=>multishow(dataitem.id) : ()=> handleSingleSelection(dataitem.id)}>+</span>
                <div>
                {enablemultiselect ? multiselect.indexOf(dataitem.id)!=-1 ? <div className="answer">{dataitem.answer}</div> : "" :selected===dataitem.id ? (
                <div className="answer">{dataitem.answer}</div>
            ): null}
            </div>
            </div>
            
            ) : <div>No data Found</div>
        }
       </div>
    )
}

export default Accordian
