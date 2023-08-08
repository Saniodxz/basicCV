import React, { useState } from 'react';

const GeneralInfo = () => {
  const [name, setName] = useState('Sanio');
  const [email, setEmail] = useState('afafdasd@gmail.com');
  const [phone, setPhone] = useState('234234234234234');
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <div>
      <h2>General Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
