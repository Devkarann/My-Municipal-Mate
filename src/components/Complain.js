// import React, { useState, useRef } from 'react';
// import './Complain.css'; // Ensure this CSS file is updated with the new styles

// const Complain = () => {
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(true);

//     // Reference to the scroll container
//     const scrollRef = useRef(null);

//     // Handle image click
//     const handleImageClick = (option) => {
//         setSelectedOption(option);
//         setIsDropdownOpen(false);
//     };

//     // Scroll functions
//     const scrollLeft = () => {
//         if (scrollRef.current) {
//             scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
//         }
//     };

//     const scrollRight = () => {
//         if (scrollRef.current) {
//             scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
//         }
//     };

//     // Handle back button click
//     const handleBackClick = () => {
//         setIsDropdownOpen(true);
//         setSelectedOption(null); // Optionally clear the selected option
//     };

//     // Form component
//     const Form = () => (
//         <form id='form-div'>
//         <h2>{selectedOption}</h2>
//             {/* <div>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" required />
//             </div>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" required />
//             </div> */}
//             <div>
//                 <label htmlFor="address">Address:</label>
//                 <input type="text" id="address" name="address" required />
//             </div>
//             <div className='complain-box'>
//                 <label htmlFor="complain">Complaint:</label>
//                 <textarea id="complain" name="complain" required></textarea>
//             </div>
//             <div>
//                 <label htmlFor="image">Upload Image:</label>
//                 <input type="file" id="image" name="image" />
//             </div>
//             <div id="form-buttons">
//             <button type="submit">Submit</button>
//             <button type="button" className="back-button" onClick={handleBackClick}>Back</button>
//             </div>
//         </form>
//     );

//     return (
//         <div id="dropdown-main">
//             {isDropdownOpen ? (
//                 <div className="image-dropdown">
//                     <button className="arrow left-arrow" onClick={scrollLeft}>←</button>
//                     <div className="scroll-container" ref={scrollRef}>
//                         <div
//                             className="dropdown-option"
//                             onClick={() => handleImageClick('Road')}
//                         >
//                             <img src="https://via.placeholder.com/250x150.png?text=Road" alt="Road" />
//                             <div className="dropdown-text">Road</div>
//                         </div>
//                         <div
//                             className="dropdown-option"
//                             onClick={() => handleImageClick('Leakage')}
//                         >
//                             <img src="https://via.placeholder.com/250x150.png?text=Leakage" alt="Leakage" />
//                             <div className="dropdown-text">Leakage</div>
//                         </div>
//                         <div
//                             className="dropdown-option"
//                             onClick={() => handleImageClick('Pot-Holes')}
//                         >
//                             <img src="https://via.placeholder.com/250x150.png?text=Pot-Holes" alt="Pot-Holes" />
//                             <div className="dropdown-text">Pot-Holes</div>
//                         </div>
//                         <div
//                             className="dropdown-option"
//                             onClick={() => handleImageClick('Road')}
//                         >
//                             <img src="https://via.placeholder.com/250x150.png?text=Road" alt="Road" />
//                             <div className="dropdown-text">Road</div>
//                         </div>
//                         <div
//                             className="dropdown-option"
//                             onClick={() => handleImageClick('Road')}
//                         >
//                             <img src="https://via.placeholder.com/250x150.png?text=Road" alt="Road" />
//                             <div className="dropdown-text">Road</div>
//                         </div>
//                     </div>
//                     <button className="arrow right-arrow" onClick={scrollRight}>→</button>
//                 </div>
//             ) : (
//                 <div className="form-container">
//                     <Form />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Complain;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../service/AuthService";
// import "./AddComplaintComponent.css";

const AddComplaintComponent = () => {
  const [complaintDescription, setComplaintDescription] = useState("");
  const [location, setLocation] = useState("");
  const [complaintType, setComplaintType] = useState("garbage-management");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract token and email from local storage
    const token = getToken();
    const email = getEmailFromToken(token);

    // Create FormData for file and complaint JSON
    const formData = new FormData();
    formData.append("file", file);

    // Add complaint data as JSON string to formData
    const complaintData = JSON.stringify({
      complaintDescription,
      location,
    });
    formData.append(
      "complaint",
      new Blob([complaintData], { type: "application/json" })
    );

    try {
      // Submit complaint data with file in one request
      await axios.post(
        `http://localhost:8081/api/complaints/${complaintType}/${email}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/success"); // Navigate to a success page or handle success
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const getEmailFromToken = (token) => {
    if (!token) return null;
    try {
      const base64Payload = token.split(".")[1];
      const payload = JSON.parse(atob(base64Payload));
      return payload.sub; // Assuming 'sub' contains the email
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="add-complaint-container">
      <h2>Add a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="complaintType">Complaint Type:</label>
          <select
            id="complaintType"
            value={complaintType}
            onChange={(e) => setComplaintType(e.target.value)}
            required
          >
            <option value="garbage-management">Garbage Management</option>
            <option value="water-supply">Water Supply</option>
            <option value="road-repair">Road Repair</option>
            <option value="sanitation-issues">Sanitation Issues</option>
            <option value="traffic-management">Traffic Management</option>
            <option value="environmental-hazards">Environmental Hazards</option>
            <option value="fire-safety">Fire Safety</option>
            <option value="electricity-management">
              Electricity Management
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="complaintDescription">Complaint Description:</label>
          <textarea
            id="complaintDescription"
            value={complaintDescription}
            onChange={(e) => setComplaintDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Choose Image (optional):</label>
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default AddComplaintComponent;
