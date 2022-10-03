import React from 'react'
import {Link, useNavigate} from  'react-router-dom';
import { useState,useEffect} from 'react'
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../firebase';
import { async } from '@firebase/util';
import { UserAuth } from '../context/AuthContext';





const Signin = () => {

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user,  setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate =useNavigate();
    


    const handleSubmit =  (e) => {
        e.preventDefault();
        try {
           createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/');
                // ...
            })
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        }
      }  

   
  return (
    <div>
        <div class="grid place-items-center h-screen">
  <form onSubmit={handleSubmit}  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
    <h3 class="font-bold text-2xl align-middle">Sign In</h3>

      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Username
      </label>
      <input onChange={(e)=>setEmail(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" required="required" type="email" placeholder="Email" />
      {error ? <p class="text-red-500 text-xs italic">Please enter a username.</p> : ""}
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input onChange={(e)=>setPassword(e.target.value)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required="required" id="password" type="password"/>
      {error ? <p class="text-red-500 text-xs italic">Please enter a password.</p> : ""}
    </div>
    <div class="flex items-center justify-between">
      <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Sign In
      </button>
    </div>
  </form>
 
</div>
    </div>
  )
}

export default Signin;