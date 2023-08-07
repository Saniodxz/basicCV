import React, { useState } from 'react';

const PracticalExperience = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return React.createElement('div', null,
    React.createElement('h2', null, 'Practical Experience'),
    editMode
      ? React.createElement('form', { onSubmit: handleSubmit },
          React.createElement('input', {
            type: 'text',
            value: company,
            onChange: (e) => setCompany(e.target.value),
            placeholder: 'Company Name'
          }),
          React.createElement('input', {
            type: 'text',
            value: position,
            onChange: (e) => setPosition(e.target.value),
            placeholder: 'Position Title'
          }),
          React.createElement('textarea', {
            value: responsibilities,
            onChange: (e) => setResponsibilities(e.target.value),
            placeholder: 'Main Responsibilities of the Job'
          }),
          React.createElement('input', {
            type: 'text',
            value: startDate,
            onChange: (e) => setStartDate(e.target.value),
            placeholder: 'Start Date'
          }),
          React.createElement('input', {
            type: 'text',
            value: endDate,
            onChange: (e) => setEndDate(e.target.value),
            placeholder: 'End Date'
          }),
          React.createElement('button', { type: 'submit' }, 'Submit')
        )
      : React.createElement('div', null,
          React.createElement('p', null, `Company Name: ${company}`),
          React.createElement('p', null, `Position Title: ${position}`),
          React.createElement('p', null, `Main Responsibilities: ${responsibilities}`),
          React.createElement('p', null, `Start Date: ${startDate}`),
          React.createElement('p', null, `End Date: ${endDate}`),
          React.createElement('button', { onClick: handleEdit }, 'Edit')
        )
  );
};

export default PracticalExperience;
