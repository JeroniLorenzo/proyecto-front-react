import React from 'react';
import './SerieDetail.css';
import { useSelector } from "react-redux";
import { serieData } from '../serieSlice';
import { userData } from '../User/userSlice';
import { poster_default } from '../../services/utiles';

export const SerieDetail = () => {

    const detailRdx = useSelector(serieData);
    const detailUsr = useSelector(userData);

    const RentMe = () => {

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
                </div>
            
            }
        </div>
    )

}