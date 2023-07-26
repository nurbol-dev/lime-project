import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface IAuthState {
    back: boolean
}

const initialState: IAuthState = {
    back: false
}

export const AuthSlice  = createSlice({
    name: "AUTH",
    initialState,
    reducers: {
        authChange(state, action: PayloadAction<boolean>) {
            state.back = action.payload
        }
    }
})




export default AuthSlice.reducer
export const {authChange} = AuthSlice.actions   

