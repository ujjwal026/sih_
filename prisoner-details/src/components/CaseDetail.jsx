import React from 'react';
import './CaseDetail.css';

const CaseDetail = ({ charges, judge, advocate, court, bail, duration, served, hearing }) => {
  return (
    <div className="case-detail">
      <p><strong>No of charges:</strong> {charges}</p>
      <p><strong>Judge assigned:</strong> {judge}</p>
      <p><strong>Advocate details:</strong> {advocate}</p>
      <p><strong>Court details:</strong> {court}</p>
      <p><strong>Bail status:</strong> {bail}</p>
      <p><strong>Duration of imprisonment:</strong> {duration}</p>
      <p><strong>Period served:</strong> {served}</p>
      <p><strong>Next hearing:</strong> {hearing}</p>
    </div>
  );
};

export default CaseDetail;

