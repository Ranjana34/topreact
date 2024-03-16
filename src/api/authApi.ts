import axios from 'axios';
import { config } from '../../config';


export const loginUser = async (data: any) => {
    console.log('Login Request', data);

    try {
        const response = await axios.post(`${(await config()).apiUrl}/topupproject22/public/api/login`,
            data
        );
        console.log('response of login api', response);
        return { response };
    } catch (error) {
        console.error('Error:', error);
        if (error?.response?.data) {
            const errorMessage = error.response.data.message;
            console.log('Registration error:', errorMessage);
        }
    }
};

export const registerUser = async (data: any) => {
    console.log('register Request', data);
    try {
        const response = await axios.post(`${(await config()).apiUrl}/topupproject22/public/api/register`,
            data
        );
        console.log('response of login api', response);
        return { response };
    } catch (error) {
        console.error('Error:', error);
        if (error?.response?.data) {
            const errorMessage = error.response.data.message;
            console.log('Registration error:', errorMessage);
        }
    }
};
export const getBanner = async () => {
    const setKey = new FormData();
    setKey.append('secretkey', (await config()).secretKey)

    try {
        const response = await axios.post(`${(await config()).apiUrl}/topupproject22/public/api/getbanner`, setKey);
        console.log('response of banner api', response.data);
        return response.data;
    } catch (error) {
        console.error('getBanner Error:', error);
        if (error?.response?.data) {
            const errorMessage = error.response.data.message;

        }
    }
};
