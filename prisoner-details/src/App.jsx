import React, { useState } from 'react';
import './App.css';

function App() {
    const [selectedCaseId, setSelectedCaseId] = useState(null);

    const caseDetails = {
        case1: {
            noOfCharges: 2,
            charges: 'Section 378 - Theft, Section 323 - Assault',
            judgeAssigned: 'Judge John Doe',
            advocateDetails: 'Jane Smith',
            courtDetails: 'Courtroom 1A',
            bailStatus: 'Denied',
            imprisonmentDuration: '5 years',
            periodServed: '2 years',
            nextHearing: '10th October 2024',
        },
        case2: {
            noOfCharges: 3,
            charges: 'Section 378 - Theft, Section 323 - Assault, Section 420 - Fraud',
            judgeAssigned: 'Judge Mary Ann',
            advocateDetails: 'Richard Roe',
            courtDetails: 'Courtroom 2B',
            bailStatus: 'Granted',
            imprisonmentDuration: '10 years',
            periodServed: '4 years',
            nextHearing: '15th November 2024',
        },
        case3: {
            noOfCharges: 4,
            charges: 'Section 378 - Theft, Section 323 - Assault, Section 420 - Fraud, Section 392 - Robbery',
            judgeAssigned: 'Judge William Lee',
            advocateDetails: 'Emily Davis',
            courtDetails: 'Courtroom 2C',
            bailStatus: 'Granted',
            imprisonmentDuration: '7 years',
            periodServed: '3 years',
            nextHearing: '10th November 2024',
        },
    };

    const handleCaseClick = (caseId) => {
        setSelectedCaseId(caseId);
    };

    const selectedCase = selectedCaseId ? caseDetails[selectedCaseId] : null;

    // Split the charges string into an array of charges
    const chargeList = selectedCase ? selectedCase.charges.split(', ').map(charge => charge.trim()) : [];

    return (
        <div className="container">
            <div className="sidebar">
                <div className="profile">
                    <h2>Profile</h2>
                </div>
                <ul>
                    <li><a href="#!" onClick={() => handleCaseClick('case1')}>Case 1</a></li>
                    <li><a href="#!" onClick={() => handleCaseClick('case2')}>Case 2</a></li>
                    <li><a href="#!" onClick={() => handleCaseClick('case3')}>Case 3</a></li>
                </ul>
                <div className="logout">
                    <button>Logout</button>
                </div>
            </div>
            <div className="main-content">
                <div className="profile-section">
                    <div className="title">Prisoner Name</div>
                    <ul className="details-list">
                        <li>Gender: Male</li>
                        <li>Date of Birth: January 1, 1980</li>
                        <li>Prisoner ID: 12345</li>
                        <li>No. of Cases: 3</li>
                        <li>Date of Arrest: August 30, 2024</li>
                    </ul>
                </div>
                <div className="case-details">
                    {selectedCase ? (
                        <>
                            <h1>{`Case ${selectedCaseId.slice(-1)} Details`}</h1>
                            <div className="case-box">
                                <p><strong>No of charges:</strong> {selectedCase.noOfCharges}</p>
                                <p><strong>Charges:</strong></p>
                                <ul>
                                    {chargeList.map((charge, index) => (
                                        <li key={index}>{charge}</li>
                                    ))}
                                </ul>
                                <p><strong>Judge assigned:</strong> {selectedCase.judgeAssigned}</p>
                                <p><strong>Advocate details:</strong> {selectedCase.advocateDetails}</p>
                                <p><strong>Court details:</strong> {selectedCase.courtDetails}</p>
                                <p><strong>Bail status:</strong> {selectedCase.bailStatus}</p>
                                <p><strong>Duration of imprisonment:</strong> {selectedCase.imprisonmentDuration}</p>
                                <p><strong>Period served:</strong> {selectedCase.periodServed}</p>
                                <p><strong>Next hearing:</strong> {selectedCase.nextHearing}</p>
                            </div>
                        </>
                    ) : (
                        <h1>Select a case to view details</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;




