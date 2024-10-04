import axios from 'axios';
import { BANK_PRIVAT } from '@/constants/constants.js'

const apiUrl = import.meta.env.VITE_API_URL;

export const getCursData = async (bank = BANK_PRIVAT, currency = 'USD') => {
    return await axios.get(apiUrl, {
        params: { bank, currency },
    });
};
