import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Fetching users...');
    axios.get('/api/users', {
      auth: {
        username: 'admin',
        password: 'password'
      }
    })
      .then(response => {
        console.log('Users fetched:', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
