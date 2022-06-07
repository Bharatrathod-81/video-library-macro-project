import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const RequiredAuth = ({ children }) => {

    const { user } = useSelector(state => state.auth);
    const location = useLocation();
  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};
