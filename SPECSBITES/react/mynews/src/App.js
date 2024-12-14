import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Perform validation
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm_password');
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // If validation passes, continue with form submission
    setError('');
    // Submit form data to the server or perform other actions
  };

  return (
 <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
