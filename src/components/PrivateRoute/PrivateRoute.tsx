import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../redux/store';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
