import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../service/AuthService";
import { FaUserCircle } from "react-icons/fa";
import "./FeedCard.css";

const FeedCard = () => {
  const [complaints, setComplaints] = useState([]);
  const token = getToken();

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/complaints/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Sort complaints by date in descending order
        const sortedComplaints = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setComplaints(sortedComplaints);
      } catch (error) {
        console.error("Error fetching complaints:", error);
        // Optionally, handle errors or show a user-friendly message
      }
    };

    fetchComplaints();
  }, [token]);

  const convertBlobToImage = (blobData) => {
    const byteCharacters = atob(blobData);
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  };

  return (
    <div id="feeds-box">
      {complaints.map((complaint) => (
        <div key={complaint.id} className="feed-item">
          <div className="feed-header">
            <FaUserCircle className="profile-icon" />
            <strong>{complaint.username}</strong>
          </div>
          {complaint.imageData && (
            <img
              src={convertBlobToImage(complaint.imageData)}
              alt="Complaint"
              className="feed-image"
            />
          )}

          <p className="feed-status">
            <strong>Status: </strong>
            {complaint.status}
          </p>
          <p className="feed-location">
            <strong>Location: </strong>
            {complaint.location}
          </p>
          {/* apply css here  */}
          {/* <p>{complaint.complaintDescription}</p> */}

          <p>{complaint.complaintType}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedCard;
