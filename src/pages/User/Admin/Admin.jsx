import React, { useState, useEffect } from 'react';
import './Admin.css';
import { allRentalsAdmin } from '../../../services/apiCalls';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


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

    return (
        <div className='homeDesign'>

            {rentals.length > 0 &&

                rentals.map(
                    rental => {

                        return (
                            <div key={rental._id}>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nombre del usuario</th>
                                                <th>ID usuario</th>
                                                <th>Título de la serie</th>
                                                <th>ID serie</th>
                                                <th>Inicio Alquiler</th>
                                                <th>Fin Alquiler</th>
                                                <th>Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{rental.userId.name}</td>
                                                <td>{rental.userId._id}</td>
                                                <td>{rental.serieId.tittle}</td>
                                                <td>{rental.serieId._id}</td>
                                                <td>{rental.fechaInicio}</td>
                                                <td>{rental.fechaFin}</td>
                                                <td>{rental.importe}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        )
                    }
                )

            }

        </div>
    );
};