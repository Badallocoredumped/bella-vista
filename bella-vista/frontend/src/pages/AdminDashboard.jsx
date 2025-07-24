import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

const AdminDashboard = () => {
  const { signOut } = useAuth();
  const { user, isLoaded } = useUser(); // Add isLoaded to check if user data is ready

  // Show a loading state while user data is being fetched
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  // Check if the user has the 'admin' role
  if (user.publicMetadata.role !== 'admin') {
    return <p>You are not authorized to access this page.</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin panel!</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default AdminDashboard;