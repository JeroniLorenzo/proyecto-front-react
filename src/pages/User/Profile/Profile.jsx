import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { userRentals } from '../../../services/apiCalls';


export const Profile = () => {

    const navigate = useNavigate();
    const [rentals, setRentals] = useState([]);
    const userRDX = useSelector(userData);
    const rentedSeriesByUser = (userId, rentalsList) => {
        return rentalsList.filter(rental => rental.userId._id === userId);
    }
    const seriesRentedByUser = rentedSeriesByUser(userRDX.userPass._id, rentals);


    useEffect(() => {
        if (userRDX.userPass.token === '') {
            navigate('/');
        };
    }, []);

    useEffect(() => {

        if (rentals.length === 0) {

            setTimeout(() => {

                userRentals(userRDX.userPass.token)

                    .then(
                        resultado => {

                            setRentals(resultado.data);

                        }
                    )
                    .catch(error => console.log(error));

            }, 1000);

        };

    }, [rentals]);

    return (
        <div className='profileDesign'>
            <div className='profileCard'>
                <header id="cabecera">Datos del usuario</header>
                    <div>
                        <p>Nombre:</p>
                        {userRDX.userPass.name}
                    </div>
                    <div>
                      <p>Apellido:</p>
                        {userRDX.userPass.surname}                      
                    </div>
                    <div>
                        <p>Email:</p>
                        {userRDX.userPass.email}
                    </div>
                    <div>
                        <p>Teléfono de contacto:</p>
                            {userRDX.userPass.phone}
                    </div>
                    <div>
                        <p>Nombre de usuario:</p>
                        {userRDX.userPass.nickname}
                    </div>
            </div>
            <div>
                <p>Historial de Alquileres</p>
            </div>
                                     
            {seriesRentedByUser.length > 0 &&
                seriesRentedByUser.map(
                    
                    rental => {
                        return (
                            <div key={rental._id}>      
                                <table>     
                                    <tbody>
                                        <tr>
                                            <td>{rental.serieId.tittle}</td>
                                            <td>{rental.fechaInicio}</td>
                                            <td>{rental.fechaFin}</td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>                             
                        )
                    }
                )
            }

        </div>

    )
};