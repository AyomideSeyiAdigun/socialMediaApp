import axios from "axios";

export const loginCall =async ({email,password},dispatch)=>{
    dispatch({
        type:"LOGIN_START"});
        try {
           const res = await axios.post("/auths/login",{email,password});
           dispatch({type:"LOGIN_SUCCESS",payload:res.data}) 
        } catch (
            err
        ) {
            dispatch({type:"LOGIN_FAILURE",payload:err})   
        }
}