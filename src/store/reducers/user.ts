import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../api/authApi';

export const LoginUserAsync = createAsyncThunk(
    'user/login',
    async ({ userData, navigate }: any, thunkAPI) => {
        try {
            const result = await loginUser(userData);
            if(result[0].success){
                localStorage.setItem('user', JSON.stringify(result[0].success));
                thunkAPI.dispatch(loginUserAction(result[0].success));
                navigate('/');
                window.location.reload();
            }else{
                navigate('/login');
                thunkAPI.dispatch(loginUserAction(result));
            }
            return result;
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
        // registerUserAction: (state, action) => {
        //   state.user = action.payload;
        // },
        loginUserAction: (state, action) => {
            console.log(state, action, '_________________');

            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUserAsync.pending, (state, playload) => {
                console.log(playload, 'loading');

                state.status = 'loading';
            })
            .addCase(LoginUserAsync.fulfilled, (state, action) => {
                console.log(action.payload, 'succeeded');

                state.user = action.payload;
                // You can also update other parts of the state here if needed
            })
            .addCase(LoginUserAsync.rejected, (state, action) => {
                console.log(state, 'failed');

                state.status = 'failed';
                // You can handle error state if needed
            });
    },
});

export const { loginUserAction } = userSlice.actions;

export const userReducer = userSlice.reducer;
