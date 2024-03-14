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
            const getBannerList:any = await getBanner();
            thunkAPI.dispatch(BannerAction(getBannerList.success)); // dispatching a synchronous action after the async operation
            return getBannerList.success;
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
        BannerAction: (state, action) => {
            state.banner = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(BannerAsync.pending, (state, playload) => {
                state.status = 'loading';
            })
            .addCase(BannerAsync.fulfilled, (state, action) => {
                state.banner = action.payload;
            })
            .addCase(BannerAsync.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const { BannerAction } = bannerSlice.actions;

export const bannerReducer = bannerSlice.reducer;
