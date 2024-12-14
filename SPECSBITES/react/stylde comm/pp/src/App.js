import './App.css';
import React from 'react'
import styled from 'styled-components'

const App = () => {
  const Button = styled.button`
   
    background-color: #4CAF50; /* Green background */
    border: none;             /* Remove borders */
    color: white;             /* White text */
    padding: 15px 32px;       /* Some padding */
    text-align: center;       /* Centered text */
    text-decoration: none;    /* Remove underline */
    display: inline-block;    /* Make the button inline-block */
    font-size: 16px;          /* Increase font size */
    margin: 4px 2px;          /* Some margin */
    cursor: pointer;          /* Pointer/hand icon on hover */
    border-radius: 8px;       /* Rounded corners */
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  
  
  &:hover {
    background-color: #45a049; /* Darker green on hover */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* Box shadow */
  }`;
  return (
    <div>
      <Button className='btn'>
        hello putlu
      </Button>
    </div>
  )
}

export default App
