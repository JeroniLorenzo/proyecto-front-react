import React, { useState } from 'react';
import './SerieDetail.css';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { serieData } from '../serieSlice';
import { userData } from '../User/userSlice';
import { poster_default } from '../../services/utiles';
import { postRent } from '../../services/apiCalls';

export const SerieDetail = () => {

    const detailRdx = useSelector(serieData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const RentMe = () => {
        const euro = "€"
        let body = {
            idSerie : detailRdx.choosen._id,
            tittleSerie : detailRdx.choosen.tittle,
            idUser : detailUsr.userPass._id,
            nameUser : detailUsr.userPass.name,
            rentalDate : dayjs().format('DD/MM/YYYY'),
            returnDate : dayjs().add(7, 'days').format('DD/MM/YYYY'),
            price: 5 + euro
        }
console.log(body)
        postRent(body, detailUsr.userPass.token)
            .then(resultado=>{
                setMsg(resultado.data)

                setTimeout(()=>{
                    navigate('/profile');
                },1500);
            })
            .catch(error =>{
                setMsg(error.message)
            })
    }

    return(
        <div className='serieDesign'>
            {detailRdx.choosen._id !== '' &&
            
                <div className='serieDetailCard'>
                    <div id='titulo'>{detailRdx.choosen.tittle}</div>
                    <div><img className='detailPoster' src={`${poster_default}${detailRdx.choosen.poster_path}`}/></div>
                    <div>{detailRdx.choosen.cast}</div>
                    <div>{detailRdx.choosen.genre}</div>
                    <div>{detailRdx.choosen.description}</div>
                    <div>{detailRdx.choosen.year}</div>

            
                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>RentMe()} className='rentDesign'>ALQUILAME</div>
                        
                    }
                    
                     {/* <div>{[msg]}</div> */}
                </div>
            
            }
        </div>
    )

};