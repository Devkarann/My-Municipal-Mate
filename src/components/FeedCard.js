import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../service/AuthService";

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
              Authorization: `Bearer ${token}`, // Add the token to the headers
            },
          }
        );
        console.log(response);
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

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
    <div className="feed-container">
      {complaints.map((complaint) => (
        <div key={complaint.id} className="feed-card">
          <p>
            <strong>User:</strong> {complaint.pname}
          </p>
          {/* Displaying the image if available */}
          {complaint.imageData && (
            <img
              src={convertBlobToImage(complaint.imageData)}
              alt="Complaint"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
          <p>{complaint.location}</p>
          <h3>{complaint.status}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeedCard;
