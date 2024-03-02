import axios from "axios"
import { EDIT_PASSWORD, FAIL_USER, LOAD_USER, LOGIN, REGISTER } from "./userActionTypes"



//REGISTER FUNCTION
 export const register=(newUser)=> async(dispatch)=>{
        try {
            dispatch({type:LOAD_USER})
            const result=await axios.post("localhost:8000/api/User/register",newUser)
            dispatch({type:REGISTER,payload:result.data})
        } catch (error) {
            dispatch(FAIL_USER)
            console.log(error)
        }

 }
 //LOGIN FUNCTION
 export const login=(User)=> async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER})
        const result=await axios.post("localhost:8000/api/User/login",User)
        dispatch({type:LOGIN,payload:result.data})
    } catch (error) {
        dispatch(FAIL_USER)
        console.log(error)
    }

}
//EDIT_PASSWORd FUNCTION
export const edit_password=(_id,password)=> async(dispatch)=>{
    try {
        dispatch({type:LOAD_USER})
        const result=await axios.put(`localhost:8000/api/User/changepassword/${_id}`,password)
        dispatch({type:EDIT_PASSWORD,payload:result.data})
    } catch (error) {
        dispatch(FAIL_USER)
        console.log(error)
    }

}