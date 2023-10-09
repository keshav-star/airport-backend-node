import { loginSuccess,logout } from "./auth";

export const loginUser = (credentials ) => async (dispatch) =>{
    try {
        const response = await api.login(credentials);
        const user = response.data;

        dispatch(loginSuccess(user))
    } catch (error) {
        console.log("login failed", error)
    }
};

export const logoutUser = ()=>(dispatch) =>{
    dispatch(logout());
};