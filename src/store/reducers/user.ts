import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api/authApi';
import toast, { Toaster } from 'react-hot-toast';

function isNotEmpty(value: any) {
    // Check if value is null or undefined
    if (value === null || value === undefined) {
        return false;
    }

    // Check if value is an empty string
    if (typeof value === 'string' && value.trim() === '') {
        return false;
    }

    // Check if value is an empty array
    if (Array.isArray(value) && value.length === 0) {
        return false;
    }

    // Check if value is an empty object
    if (typeof value === 'object' && Object.keys(value).length === 0) {
        return false;
    }

    return true;
}

export const LoginUserAsync = createAsyncThunk(
    'user/login',
    async ({ userData, navigate }: any, thunkAPI) => {
        try {
            const result = await loginUser(userData);

            if (result.status == 200) {
                localStorage.setItem('user', JSON.stringify(result.data.success));
                thunkAPI.dispatch(loginUserAction(result.data.success));
                navigate('/');
                window.location.reload();
            } else {
                navigate('/login');
                thunkAPI.dispatch(loginUserAction(result));
            }
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error); // Use rejectWithValue to pass the error to the rejected action
        }
    }
);

export const LoginGuestAsync = createAsyncThunk(
    'user/guestlogin',
    async ({ userData, navigate }: any, thunkAPI) => {
        try {
            // const result = await loginUser(userData);
            userData.role = 'guest';
            console.log(userData, "Store request");
            if (isNotEmpty(userData.email) && isNotEmpty(userData.password)) {
                localStorage.setItem('user', JSON.stringify(userData));
                thunkAPI.dispatch(loginUserAction(userData));
                navigate('/');
                window.location.reload();

            } else {
                navigate('/login');
                thunkAPI.dispatch(loginUserAction(userData));
            }
            return userData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error); // Use rejectWithValue to pass the error to the rejected action
        }
    }
);

export const RegisterAsync = createAsyncThunk(
    'user/register',
    async ({ userData, navigate }: any, thunkAPI) => {
        try {
            const result = await registerUser(userData);
            if (result.status == 200) {
                thunkAPI.dispatch(registerUserAction(result.data.success));
            } else {
                thunkAPI.dispatch(registerUserAction(result));
            }
            return result[0];
        } catch (error) {
            return thunkAPI.rejectWithValue(error); // Use rejectWithValue to pass the error to the rejected action
        }
    }
);


const initialState: any = {
    user: null,
    status: 'idle',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUserAction: (state, action) => {
            state.user = action.payload;
        },
        loginUserAction: (state, action) => {
            state.user = action.payload;
        }, loginGuestAction: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUserAsync.pending, (state, playload) => {
                state.status = 'loading';
            })
            .addCase(LoginUserAsync.fulfilled, (state, action) => {
                toast.success('Login Successfully!');
                state.user = action.payload;
                // You can also update other parts of the state here if needed
            })
            .addCase(LoginUserAsync.rejected, (state, action) => {
                state.status = 'failed';
                toast.error('Failed to login, please try again!');
            })
            .addCase(RegisterAsync.fulfilled, (state, { payload }) => {
                toast.success('Register successfully');
            })
            .addCase(RegisterAsync.rejected, (state, action) => {
                state.status = 'failed';
                toast.error(
                    'Failed to register new account, please try again!'
                );
            }).addCase(LoginGuestAsync.pending, (state, playload) => {
                state.status = 'loading';
            })
            .addCase(LoginGuestAsync.fulfilled, (state, action) => {
                toast.success('Login Successfully!');
                state.user = action.payload;
                // You can also update other parts of the state here if needed
            })
            .addCase(LoginGuestAsync.rejected, (state, action) => {
                state.status = 'failed';
                toast.error('Failed to login, please try again!');
            })
    },
});

export const { loginUserAction, loginGuestAction, registerUserAction } = userSlice.actions;

export const userReducer = userSlice.reducer;
