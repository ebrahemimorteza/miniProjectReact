import React, { useContext, useState } from 'react';
import TestContext from './context';

const TopForm = ()=>{
    const[title1,setTitle1]=useState("")
    const{title,setTitle}=useContext(TestContext)
   const handleInput=(event)=>{
    setTitle1(event.target.value)
   }
   const handleSave=(e)=>{
    e.preventDefault();
    setTitle([...title, {id:Math.random(),title:'کاری ندارم',done:false}])

   }
    return(
        <>
            <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
            <form onSubmit={handleSave}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={title1} onChange={handleInput}/>
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;