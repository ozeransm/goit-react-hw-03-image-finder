import axios from "axios";

const API_KEY = '36684686-da46a32da1515f18ebef67ac3';
const BASE_URL = 'https://pixabay.com/api/';
const getImage = (query, page=1)=>{
    return axios.get(`${BASE_URL}?key=${API_KEY}&per_page=12&q=${query}&page=${page}`)

}

export {getImage}