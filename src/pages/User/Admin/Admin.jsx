// import React, { useState, useEffect } from 'react';
// import './Admin.css';
// import {useNavigate} from 'react-router-dom';
// import { useSelector } from "react-redux";
// import { userData } from '../userSlice';
// import { allRentalsAdmin } from '../../../services/apiCalls';

// export const Admin = () => {

//     const navigate = useNavigate();

//     const userRDX = useSelector(userData);


//     const [allRentals, setAllRentals] = useState([]);

//     useEffect(()=>{

//          if(userRDX.userPass.rol !== 'admin'){
//              navigate("/");
//          }

//     },[])

//     useEffect(()=>{

//         if(allRentals.length === 0){

//             allRentalsAdmin(userRDX.userPass.token)
//                 .then(resultado => {

//                     setAllRentals(resultado);
//                     console.log('que es resultado',resultado)
//                     console.log('que es resultadooooooo ',resultado.data)
//                     console.log('rasgando resultado',resultado.data[0])
//                 })
//                 .catch(error => console.log(error));
//         };

//     },[allRentals]);

//     return (
//         <div className='adminDesign'>
//             {allRentals.length > 0 &&

//                 allRentals.map(

//                     rentals => {
//                         return (
//                             <div className='adminDesign'>
//                                 {allRentals[data]}
//                             </div>
//                         )
//                     }
//                 )
//             }
// {console.log('es esteee??',allRentals)}
//         </div>
//     )
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import './Admin.css';
import { allRentalsAdmin } from '../../../services/apiCalls';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

/* A React component that is fetching data from an API and displaying it in a card. */
export const Admin = () => {
    const navigate = useNavigate();
    const userRDX = useSelector(userData);
    const [rentals, setRentals] = useState([]);

    useEffect(() => {

        if (userRDX.userPass.rol !== 'admin') {
            navigate("/");
        }

    }, [])

    useEffect(() => {

        if (rentals.length === 0) {

            setTimeout(() => {

                allRentalsAdmin(userRDX.userPass.token)
                    .then(
                        resultado => {

                            setRentals(resultado.data);

                        }
                    )
                    .catch(error => console.log(error));

            }, 1000);

        };

    }, [rentals]);

    useEffect(() => {

        if (rentals.length === 0) {

            allRentalsAdmin(userRDX.userPass.token)
                .then(resultado => {

                    setRentals(resultado.data);
                    console.log('que es resultado', resultado)
                    console.log('que es resultadooooooo ', resultado.data)
                    console.log('rasgando resultado', resultado.data[0])
                })
                .catch(error => console.log(error));
        };

    }, [rentals]);

    /* A ternary operator. */
    return (
        <div className='homeDesign'>

            {rentals.length > 0 &&

                rentals.map(
                    rental => {

                        return (
                            <div key={rental._id}>
                                <div>
                                    {rental.userId.name},
                                    {rental.userId._id},
                                    {rental.serieId.tittle},
                                    {rental.serieId._id},
                                    {rental.fechaInicio},
                                    {rental.fechaFin},
                                    {rental.importe}
                                </div>

                            </div>
                        )
                    }
                )

            }

        </div>
    );
};