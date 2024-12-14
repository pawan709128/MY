import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/items');
      setItems(res.data);
    } catch (err) {
      console.error('Failed to fetch items:', err);
    }
  };

  const addItem = async () => {
    try {
      const res = await axios.post('http://localhost:5000/items', { name });
      setItems([...items, res.data]);
      setName('');
    } catch (err) {
      console.error('Failed to add item:', err);
    }
  };

  const updateItem = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/items/${currentId}`, { name });
      setItems(items.map(item => (item._id === currentId ? res.data : item)));
      setName('');
      setEditing(false);
      setCurrentId(null);
    } catch (err) {
      console.error('Failed to update item:', err);
    }
  };

  const editItem = (id, name) => {
    setEditing(true);
    setName(name);
    setCurrentId(id);
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateItem();
    } else {
      addItem();
    }
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{editing ? 'Update Item' : 'Add Item'}</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => editItem(item._id, item.name)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
