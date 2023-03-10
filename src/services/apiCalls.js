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

export const getSearch = async (busqueda, token) => {
    let config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return await axios.get(`${root}series/tittle/${busqueda}`, config);
};

export const postRent = async (body, token) => {

    let config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.post(`${root}rentals/newRental`, body, config);
};

export const allRentalsAdmin = async (token) => {

    let config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.get(`${root}rentals/getAll`, config);

};

export const userRentals = async (token, id) => {

    let config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.get(`${root}rentals/userRentals/${id}`, config);

};