import React, { useState } from 'react';
import './Contactus.css';

export default function Contactus() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredCard(index);
    };

    const handleMouseOut = () => {
        setHoveredCard(null);
    };

    const cards = [
        { imgSrc: '/images/chetan.jpg', name: 'Chetan Patil', role: 'Frontend Dev', github: 'https://github.com/chetanpatil06', linkedin: 'https://www.linkedin.com/in/chetan-patil-082938272' },
        { imgSrc: '/images/dev.jpg', name: 'Devkaran Singh', role: 'Frontend Dev', github: 'https://github.com/yourusername1', linkedin: 'https://linkedin.com/in/yourusername1' },
        { imgSrc: '/images/dev.jpg', name: 'Devkaran Singh', role: 'Frontend Dev', github: 'https://github.com/yourusername1', linkedin: 'https://linkedin.com/in/yourusername1' },
        { imgSrc: '/images/dev.jpg', name: 'Devkaran Singh', role: 'Frontend Dev', github: 'https://github.com/yourusername1', linkedin: 'https://linkedin.com/in/yourusername1' },
        { imgSrc: '/images/dev.jpg', name: 'Devkaran Singh', role: 'Frontend Dev', github: 'https://github.com/yourusername1', linkedin: 'https://linkedin.com/in/yourusername1' },
    ];

    return (
        <>
            <div className="line-container">
                <hr className="top-line" />
                <div className="content">
                    <div className="contactUs-cards">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`card ${hoveredCard !== null && hoveredCard !== index ? 'blurred' : ''}`}
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={handleMouseOut}
                            >
                                <img src={card.imgSrc} alt="Avatar" className="avatar" />
                                <div className="icons">
                                    <span>{card.name}</span>
                                    <span>{card.role}</span>
                                    <div className="icon">
                                        <a href={card.github} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github icon"></i>
                                        </a>
                                        <a href={card.linkedin} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin icon"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="bottom-line" />
            </div>
        </>
    );
}
