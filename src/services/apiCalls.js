import axios from 'axios';

const root = 'http://localhost:5500/';

export const postLogin = async (credenciales) => {

     return await axios.post(`${root}users/login`, credenciales);
};

export const postRegistered = async (body) => {

     return await axios.post(`${root}users/newUser`, body)
};

export const getSeries = async () => {

    return await axios.get(`${root}series/getAll`);

};

export const getSearch = async () => {
    return await axios.get(`${root}series/tittle/:tittle`);
};

export const postRent = async (body, token) => {
    let config = {
        method : 'post',
        url: `${root}`, //endpoint al backend
        body,
        headers:{
            'Authotization': 'Bearer' + token
        }
    }
    return await axios.post(config);
};