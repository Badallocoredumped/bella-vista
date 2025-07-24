import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const AdminLogin = () => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Admin Login</h2>
      <SignIn
        path="/admin/login"
        routing="path"
        fallbackRedirectUrl ="/admin/dashboard"
      />
    </div>
  );
};

export default AdminLogin;