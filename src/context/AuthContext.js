// import {createContext,useContext} from 'react';
// import {auth} from '../firebase';

// import { createUserWithEmailAndPassword, signInWithEmaiAndPassword, signOut, onAuthStateChanged  } from 'firebase/auth';



// const UserContext = createContext();


// export const AuthContextProvider = ({children})=>{

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
        
//     }

//     return(
//         <UserContext.Provider value={createUser}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// export const UserAuth =() =>{
//     return useContext(UserContext);
// }