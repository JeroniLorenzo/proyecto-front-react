import React, { useState, useEffect } from 'react';
import './Admin.css';
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { serieData } from '../../serieSlice';
import { allRentalsAdmin } from '../../../services/apiCalls';

export const Admin = () => {

    const navigate = useNavigate();

    const userRDX = useSelector(userData);
    const dataRDX = useSelector(serieData);


    const [allRentals, setAllRentals] = useState([]);

    useEffect(()=>{
        
         if(userRDX.userPass.rol !== 'admin'){
             navigate("/");
         }

    },[])

    useEffect(()=>{

        if(allRentals.length === 0){

            allRentalsAdmin()
                .then(resultado => {

                    setAllRentals(resultado);
                })
                .catch(error => console.log(error));
        };

    },[allRentals]);

    return (
        <div className='adminDesign'>
            {allRentals.length > 0 &&
            
                allRentals.map(
                    
                    rentals => {
                        return (
                            <div className='adminDesign'>
                                {rentals.userRDX.userPass.name}
                                {rentals.dataRDX.userPass.tittle}
                            </div>
                        )
                    }
                )
            }

        </div>
    )
};