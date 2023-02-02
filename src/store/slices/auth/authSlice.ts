
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../interfaces/IAuth';
import { AuthStatus } from '../../../constants/enums/AuthStatus';



interface IAuthState {
    accessToken: string;
    user:IUser | null,
    status:AuthStatus
}

const initialState:IAuthState  = {
    accessToken:'',
    user:null,
    status:AuthStatus.CHECKING
}
// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action:PayloadAction<{accessToken:string,user:IUser | null}>){
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.status = AuthStatus.AUTHENTICATED
            // The way without immer
            // return {
            //     ...state,
            //     accessToken:action.payload.accessToken,
            //     user:action.payload.user
            // }
        },
        logout(state){
            state.accessToken = '';
            state.user = null;
            state.status = AuthStatus.NOT_AUTHENTICATED;
        }
    }

})



export const {login,logout} = authSlice.actions;

export default authSlice.reducer;