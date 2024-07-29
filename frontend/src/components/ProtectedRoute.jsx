import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // Or a spinner
  }

  if (!user || user.publicMetadata?.role !== role) {
    return <Navigate to="/" />; // Redirect to home or sign-in page
  }

  return children;
};

export default ProtectedRoute;
