import React, { useContext, useState } from 'react';
import TopForm from './TopForm';
import TaskItems from './TaskItems';
import TestContext from './context';

const App = ()=>{
    const[title,setTitle]=useState([
        {id:1,title:'کاری ندارم',done:false},
        {id:2,title:'کاری ندارم',done:true},
        {id:3,title:'کاری ندارم',done:false},
    ])
    return (

        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start">
                <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
                   <TestContext.Provider value={{title,setTitle}}>
                    <TopForm />
                    <TaskItems />
                    </TestContext.Provider>
                </div>
            </div>
        </div>
    ) 
}


export default App;
