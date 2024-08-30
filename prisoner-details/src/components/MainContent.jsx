import React from 'react';
import CaseDetail from './CaseDetail';
import './MainContent.css';

const MainContent = ({ selectedCase }) => {
  const cases = {
    1: {
      charges: 3,
      judge: 'Judge John Doe',
      advocate: 'Jane Smith',
      court: 'Courtroom 5A',
      bail: 'Granted',
      duration: '5 years',
      served: '2 years',
      hearing: '15th September 2024',
    },
    2: {
      charges: 2,
      judge: 'Judge Mary Johnson',
      advocate: 'Michael Brown',
      court: 'Courtroom 3B',
      bail: 'Denied',
      duration: '3 years',
      served: '1 year',
      hearing: '20th October 2024',
    },
    3: {
      charges: 4,
      judge: 'Judge William Lee',
      advocate: 'Emily Davis',
      court: 'Courtroom 2C',
      bail: 'Granted',
      duration: '7 years',
      served: '3 years',
      hearing: '10th November 2024',
    },
  };

  const selectedCaseDetails = cases[selectedCase];

  return (
    <div className="main-content">
      <h1>Case {selectedCase} Details</h1>
      <CaseDetail {...selectedCaseDetails} />
    </div>
  );
};

export default MainContent;


