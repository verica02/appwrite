import React from 'react'
import CustomButton from './Utils/CustomButton'
import './Homepage.styles.scss'



const Homepage = (props)=>{
    return (
        <div className='Homepage'>
           <div className = "home">

               <CustomButton className = "button" onClick={props.logOut}>Logout</CustomButton>
           </div>
           <div className = "hand-1">
           <div className = "hand421"></div>
            <div className = "hand422"></div>
            <div className = "hand423"></div>
            <div className = "hand211"></div>
            <div className = "hand221"></div>
            <div className = "hand231"></div>
            <div className = "hand214"></div>
            <div className = "hand424"></div>
            <div className = "hand425"></div>
            <div className = "hand426"></div>
            </div>
        </div>
    )
}

export default Homepage