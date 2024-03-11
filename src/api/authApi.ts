import axios from 'axios';

export const loginUser = async (data: any) => {
    console.log('Login Request', data);
    try {
        return [{
            "success": {
                "id": 1,
                "name": "Admin",
                "email": "admin@gmail.com",
                "email_verified_at": "2023-10-04T00:08:33.000000Z",
                "created_at": "2023-10-04T00:08:33.000000Z",
                "updated_at": "2023-10-04T00:08:33.000000Z"
            }}
        ]
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

export const getBanner = async () => {
    try {
        return {
            success: [
                {
                    id: 4,
                    banner: '1709387829.jpg',
                    created_at: '2024-03-02 05:57:09',
                    path: 'http://127.0.0.1:8000/images/1709387829.jpg',
                },
                {
                    id: 4,
                    banner: '1709387829.jpg',
                    created_at: '2024-03-02 05:57:09',
                    path: 'http://127.0.0.1:8000/images/1709387829.jpg',
                },
            ],
        };
        const response = await axios.post(
            'http://41.79.32.42:8000/topupproject22/public/api/banner'
        );
        console.log('response of login api', response);
        return { response };
    } catch (error) {
        console.error('getBanner Error:', error);
        if (error?.response?.data) {
            const errorMessage = error.response.data.message;
        }
    }
};
