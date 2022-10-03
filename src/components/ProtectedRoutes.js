import React from 'react';
import { Navigate } from 'react-router-dom';
import { AdminAuth } from '../context/AuthContext';


const ProtectedRoutes = () => {
    const {admin} = AdminAuth();
  return (
    <div></div>
  )
}

export default ProtectedRoutes