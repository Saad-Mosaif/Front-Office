import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/forms', {
      auth: {
        username: 'admin',
        password: 'password'
      }
    })
    .then(response => {
      setForms(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the forms!', error);
    });
  }, []);

  return (
    <div className="form-list">
      <h3>Form List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map(form => (
            <tr key={form.id}>
              <td>{form.id}</td>
              <td>{form.content}</td>
              <td>{form.status}</td>
              <td>
                <button>Approve</button>
                <button>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormList;
