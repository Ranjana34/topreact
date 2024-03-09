import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../api/authApi';

export const LoginUserAsync = createAsyncThunk(
    'user/registerUser',
    async ({ userData, navigate }: any, thunkAPI) => {
        try {
            const user = await loginUser(userData);
            thunkAPI.dispatch(loginUserAction(user)); // dispatching a synchronous action after the async operation
            navigate('/');
            window.location.reload();
            return user;
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
