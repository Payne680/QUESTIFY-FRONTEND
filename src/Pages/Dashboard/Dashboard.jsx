import React from 'react';
import UserList from '../Templates/userList/UserList';
import ProfilePage from '../Templates/profile/ProfilePage';

export default function Dashboard() {
  return (
    <div>
      <UserList />
      <ProfilePage />
    </div>
  );
}
