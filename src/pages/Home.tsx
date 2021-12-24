import { Button } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Home:React.FC = () => {

    const[country,setCountry]=useState<string>('')

const navigate=useNavigate()

    const goCountry=()=>{
        navigate(`/ViewCountry/${country}`)
    }
    return (
        <div>
            <p>Home Page</p>
            <input type='text' 
            placeholder='Pleace type country name'
            onChange={((event)=> setCountry(event.target.value))}
            ></input>
            <div >
                <Button variant="outlined" onClick={goCountry}>Search</Button>
            </div>
        </div>
    )
}
