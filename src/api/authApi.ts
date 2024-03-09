import axios from 'axios';

export const loginUser = async (data: any) => {
    console.log('Login Request', data);
    try {
        const response = await axios.post(
            'http://41.79.32.42:8000/topupproject22/public/api/login',
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
