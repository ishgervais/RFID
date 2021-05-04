import axios from 'axios';
import url from '../utils/url'

const getAllCards = async () => {
    const response = await axios.get(`${url}/api/cards`);
    return response.data;
}
export{
    getAllCards
}