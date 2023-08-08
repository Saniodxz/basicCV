import React, { useState } from 'react';

const EducationalExperience = () => {
  const [school, setSchool] = useState('dadad');
  const [studyTitle, setStudyTitle] = useState('dadsa');
  const [studyDate, setStudyDate] = useState('dasdas');
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
      <h2>Educational Experience</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="School Name"
          />
          <input
            type="text"
            value={studyTitle}
            onChange={(e) => setStudyTitle(e.target.value)}
            placeholder="Title of Study"
          />
          <input
            type="text"
            value={studyDate}
            onChange={(e) => setStudyDate(e.target.value)}
            placeholder="Date of Study"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School Name: {school}</p>
          <p>Title of Study: {studyTitle}</p>
          <p>Date of Study: {studyDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
