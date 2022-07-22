import { createContext, useReducer } from "react";
import {AuthReducer} from './AuthReducer'
  const INITIAL_STATE = {
      user:{
        _id : "62d7c8f741aefa5233e4259f",
        username : "jand",
        email : "jand@email.com",
        profilePicture : "",
        coverPicture : "",
        followers : [],
        followings : [],
        desc : "i ama a man",
      },
      isFetching:false,
      error:false
  };

  export const AuthContext = createContext(INITIAL_STATE);

  export const AuthContextProvider = ({children})=>{
      const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE)

      return (
          <AuthContext.Provider  
          value={{
              user: state.user,
              isFetching:state.isFetching,
              error:state.error,
              dispatch
          }}>
              {children}
          </AuthContext.Provider>
      )
  }