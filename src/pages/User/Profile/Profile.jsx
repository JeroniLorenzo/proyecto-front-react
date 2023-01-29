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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { allRentalsAdmin } from '../../../services/apiCalls';
// import { userData } from '../userSlice';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import './Profile.css';





// export const Profile = () => {
//     const navigate = useNavigate();
//     const userRDX = useSelector(userData);
//     const [rentals, setRentals] = useState([]);
//     const rentedSeriesByUser = (userId, rentalsList) => {
//         return rentalsList.filter(rental => rental.userId._id === userId);
//     }
//     const seriesRentedByUser = rentedSeriesByUser(userRDX.userPass._id, rentals);


//     useEffect(() => {

//         if (userRDX.userPass.token === '') {
//             navigate("/");
//         }

//     }, [])

//     useEffect(() => {

//         if (rentals.length === 0) {

//             setTimeout(() => {

//                 allRentalsAdmin(userRDX.userPass.token)
//                     .then(
//                         resultado => {

//                             setRentals(resultado.data);

//                         }
//                     )
//                     .catch(error => console.log(error));

//             }, 1000);

//         };

//     }, [rentals]);

//     return (
//         <div className='homeDesign'>
//             {seriesRentedByUser.length > 0 &&
//                 seriesRentedByUser.map(
//                     rental => {
//                         return (
//                             <div key={rental._id}>
//                                 {/* <div>
//                                     <header id="cabecera">Datos del usuario</header>
//                                     <div>
//                                         <p>Nombre:</p>
//                                         {userRDX.userPass.name}
//                                     </div>
//                                     <div>
//                                         <p>Apellido:</p>
//                                         {userRDX.userPass.surname}
//                                     </div>
//                                     <div>
//                                         <p>Email:</p>
//                                         {userRDX.userPass.email}
//                                     </div>
//                                     <div>
//                                         <p>Teléfono de contacto:</p>
//                                         {userRDX.userPass.phone}
//                                     </div>
//                                     <div>
//                                         <p>Nombre de usuario:</p>
//                                         {userRDX.userPass.nickname}
//                                     </div>
//                                 </div> */}
//                                     <div>
//                                     <header id="cabecera">Datos del usuario</header>
//                                     <div>
//                                         <p>Nombre:</p>
//                                         {userRDX.userPass.name}
//                                     </div>
//                                     <div>
//                                         <p>Apellido:</p>
//                                         {userRDX.userPass.surname}
//                                     </div>
//                                     <div>
//                                         <p>Email:</p>
//                                         {userRDX.userPass.email}
//                                     </div>
//                                     <div>
//                                         <p>Teléfono de contacto:</p>
//                                         {userRDX.userPass.phone}
//                                     </div>
//                                     <div>
//                                         <p>Nombre de usuario:</p>
//                                         {userRDX.userPass.nickname}
//                                     </div>
//                                          <table>
//                                         <thead>
//                                             <tr>
//                                                 {/* <th>Nombre del usuario</th>
//                                                 <th>ID usuario</th> */}
//                                                 <th>Título de la serie</th>
//                                                 {/* <th>ID serie</th> */}
//                                                 <th>Inicio Alquiler</th>
//                                                 <th>Fin Alquiler</th>
//                                                 <th>Precio</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 {/* <td>{rental.userId.name}</td>
//                                                 <td>{rental.userId._id}</td> */}
//                                                 <td>{rental.serieId.tittle}</td>
//                                                 {/* <td>{rental.serieId._id}</td> */}
//                                                 <td>{rental.fechaInicio}</td>
//                                                 <td>{rental.fechaFin}</td>
//                                                 <td>{rental.importe}</td>
//                                             </tr>
//                                         </tbody>
//                                     </table> 
//                                     </div>
                                    
                                

//                             </div>
//                         )
//                     }
//                 )
//             }


//         </div>
//     );
// };
