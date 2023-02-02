
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces/IAuth';
import { AuthStatus } from '../../../constants/enums/AuthStatus';


interface IUISlice {
    loading:boolean
    
}

const initialState:IUISlice  = {
    loading:false
}
// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const uiSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        startLoading(state){
            state.loading = true;
        },
        finishLoading(state){
            state.loading = false;
        }
            
    }

})



export const {startLoading,finishLoading} = uiSlice.actions;

export default uiSlice.reducer;