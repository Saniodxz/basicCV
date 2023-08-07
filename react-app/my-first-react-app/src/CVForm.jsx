import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

const CVForm = () => {
  return (
    <div>
      <h1>My CV</h1>
      <GeneralInfo/>
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
};

export default CVForm;
