import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    Users: [{
        
    }],
};

export const UserContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "Register":
      return action.payload;
    default:
      return state;
  }
};

export const  UserContextProvider  =  ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
 
  return (
    <UserContext.Provider
      value={{
        Users: state.Users,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};