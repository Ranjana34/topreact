// types
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBanner } from '../../api/authApi';

// initial state
const initialState: any = {
    banner: null,
};
export const BannerAsync = createAsyncThunk(
    'user/banner',
    async (data, thunkAPI) => {
        try {
            const bannerValue = await getBanner();
            thunkAPI.dispatch(BannerAction(bannerValue)); // dispatching a synchronous action after the async operation
            return bannerValue;
        } catch (error) {
            return thunkAPI.rejectWithValue(error); // Use rejectWithValue to pass the error to the rejected action
        }
    }
);
// ==============================|| SLICE - MENU ||============================== //

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        BannerAction: (state, action) => { state.banner = action.payload }
    },
    extraReducers: (builder) => {
        builder
            .addCase(BannerAsync.pending, (state, playload) => {
                console.log(playload, 'loading');

                state.status = 'loading';
            })
            .addCase(BannerAsync.fulfilled, (state, action) => {
                console.log(action.payload, 'succeeded');

                state.banner = action.payload;
                // You can also update other parts of the state here if needed
            })
            .addCase(BannerAsync.rejected, (state, action) => {
                console.log(state, 'failed');

                state.status = 'failed';
                // You can handle error state if needed
            });
    },
});

export const { BannerAction } = bannerSlice.actions;

export const bannerReducer = bannerSlice.reducer;
