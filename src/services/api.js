import axios from 'axios';
import url from '../utils/url'

const getAllCards = async () => {
    const response = await axios.get(`${url}/api/cards`);
    return response.data;
}

const addCard = async(body)=>{
    const response = await axios.post(`${url}/api/cards`,body);
    return response.data;
}
export{
    getAllCards,
    addCard

}