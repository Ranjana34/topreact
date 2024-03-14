import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api/authApi';
import toast, { Toaster } from 'react-hot-toast';

export const LoginUserAsync = createAsyncThunk(
    'user/login',
    async ({ userData, navigate }: any, thunkAPI) => {
        try {
            const result = await loginUser(userData);
            if (result[0].success) {
                localStorage.setItem('user', JSON.stringify(result[0].success));
                thunkAPI.dispatch(loginUserAction(result[0].success));
                navigate('/');
                window.location.reload();
            } else {
                navigate('/login');
                thunkAPI.dispatch(loginUserAction(result));
            }
            return result[0];
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
            if (result[0].success) {
                thunkAPI.dispatch(registerUserAction(result[0].success));
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
                toast.error('Failed to register new account, please try again!');
            });
    },
});

export const { loginUserAction, registerUserAction } = userSlice.actions;

export const userReducer = userSlice.reducer;
