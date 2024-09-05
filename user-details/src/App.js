import './App.css';
import React, { useState, useEffect } from 'react';
// import './index.css';
function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = () => {
    if (name && age && gender && phone && email) {
      const newUser = { name, age, gender, phone, email };
      if (editingIndex !== null) {
        const updatedUsers = users.map((user, index) =>
          index === editingIndex ? newUser : user
        );
        setUsers(updatedUsers);
        setEditingIndex(null);
      } else {
        setUsers([...users, newUser]);
      }
      setName('');
      setAge('');
      setGender('');
      setPhone('');
      setEmail('');
    }
  };

  const editUser = (index) => {
    const user = users[index];
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
    setPhone(user.phone);
    setEmail(user.email);
    setEditingIndex(index);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Details</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <select
            value={gender}
            onChange={(e) =>setGender(e.target.value)} 
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button  onClick={addUser}>{editingIndex !== null ? 'Update User' : 'Add User'}</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => editUser(index)}>Edit</button>
                  <button onClick={() => deleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;