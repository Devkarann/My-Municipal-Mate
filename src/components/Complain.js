import React, { useState, useRef } from 'react';
import './Complain.css'; // Ensure this CSS file is updated with the new styles

const Complain = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    // Reference to the scroll container
    const scrollRef = useRef(null);

    // Handle image click
    const handleImageClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close the dropdown
    };

    // Scroll functions
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
    };

    // Handle back button click
    const handleBackClick = () => {
        setIsDropdownOpen(true);
        setSelectedOption(null); // Optionally clear the selected option
    };

    // Form component
    const Form = () => (
        <form id='form-div'>
        <h2>{selectedOption}</h2>
            {/* <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div> */}
            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
            </div>
            <div className='complain-box'>
                <label htmlFor="complain">Complaint:</label>
                <textarea id="complain" name="complain" required></textarea>
            </div>
            <div>
                <label htmlFor="image">Upload Image:</label>
                <input type="file" id="image" name="image" />
            </div>
            <div id="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" className="back-button" onClick={handleBackClick}>Back</button>
            </div>
        </form>
    );

    return (
        <div id="dropdown-main">
            {isDropdownOpen ? (
                <div className="image-dropdown">
                    <button className="arrow left-arrow" onClick={scrollLeft}>←</button>
                    <div className="scroll-container" ref={scrollRef}>
                        <div 
                            className="dropdown-option"
                            onClick={() => handleImageClick('Road')}
                        >
                            <img src="https://via.placeholder.com/250x150.png?text=Road" alt="Road" />
                            <div className="dropdown-text">Road</div>
                        </div>
                        <div 
                            className="dropdown-option"
                            onClick={() => handleImageClick('Leakage')}
                        >
                            <img src="https://via.placeholder.com/250x150.png?text=Leakage" alt="Leakage" />
                            <div className="dropdown-text">Leakage</div>
                        </div>
                        <div 
                            className="dropdown-option"
                            onClick={() => handleImageClick('Pot-Holes')}
                        >
                            <img src="https://via.placeholder.com/250x150.png?text=Pot-Holes" alt="Pot-Holes" />
                            <div className="dropdown-text">Pot-Holes</div>
                        </div>
                        <div 
                            className="dropdown-option"
                            onClick={() => handleImageClick('Road')}
                        >
                            <img src="https://via.placeholder.com/250x150.png?text=Road" alt="Road" />
                            <div className="dropdown-text">Road</div>
                        </div>
                        <div 
                            className="dropdown-option"
                            onClick={() => handleImageClick('Road')}
                        >
                            <img src="https://via.placeholder.com/250x150.png?text=Road" alt="Road" />
                            <div className="dropdown-text">Road</div>
                        </div>
                    </div>
                    <button className="arrow right-arrow" onClick={scrollRight}>→</button>
                </div>
            ) : (
                <div className="form-container">
                    <Form />
                </div>
            )}
        </div>
    );
};

export default Complain;
