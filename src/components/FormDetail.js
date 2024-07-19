import React, { useState } from 'react';
import axios from 'axios';

const FormDetail = () => {
  const [form, setForm] = useState({ content: '', status: 'Pending' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/forms', form, {
      auth: {
        username: 'admin',
        password: 'password'
      }
    })
      .then(response => {
        console.log('Form submitted:', response.data);
        setForm({ content: '', status: 'Pending' }); // Reset form
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <div className="form-detail">
      <h3>Submit a Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Content:
          <input type="text" name="content" value={form.content} onChange={handleChange} />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default FormDetail;
