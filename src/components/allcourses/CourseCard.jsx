import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { Link } from 'react-router-dom';

const CourseCard = () => {
  const videos = [
    {
      category: 'Frontend Development',
      title: 'HTML, CSS, and JavaScript for Web Developers',
      url: 'https://www.youtube.com/embed/TlB_eWDSMt4',
    },
    {
      category: 'Frontend Development',
      title: 'HTML, CSS, and JavaScript for Web Developers',
      url: 'https://www.youtube.com/embed/TlB_eWDSMt4',
    },
    {
      category: 'Frontend Development',
      title: 'HTML, CSS, and JavaScript for Web Developers',
      url: 'https://www.youtube.com/embed/TlB_eWDSMt4',
    },
    {
      category: 'Frontend Development',
      title: 'HTML, CSS, and JavaScript for Web Developers',
      url: 'https://www.youtube.com/embed/TlB_eWDSMt4',
    },
    {
      category: 'Frontend Development',
      title: 'Learn Frontend Programming Language',
      url: 'https://www.youtube.com/embed/rfscVS0vtbw',
    },
    {
      category: 'Frontend Development',
      title: 'Introduction to HTML / CSS',
      url: 'https://www.youtube.com/embed/mU6anWqZJcc',
    },
    {
      category: 'Backend Development', 
      title: 'Node.js Crash Course',
      url: 'https://www.youtube.com/embed/fBNz5xF-Kx4',
    },
    {
      category: 'Backend Development', 
      title: 'Node.js Crash Course',
      url: 'https://www.youtube.com/embed/fBNz5xF-Kx4',
    },
    {
      category: 'Backend Development', 
      title: 'Node.js Crash Course',
      url: 'https://www.youtube.com/embed/fBNz5xF-Kx4',
    },
    {
      category: 'Backend Development', 
      title: 'Node.js Crash Course',
      url: 'https://www.youtube.com/embed/fBNz5xF-Kx4',
    },
    {
      category: 'Backend Development',
      title: 'Introduction to REST APIs',
      url: 'https://www.youtube.com/embed/qz0aGYrrlhU',
    },
    {
        category: 'Backend Development',
        title: 'Introduction to REST APIs',
        url: 'https://www.youtube.com/embed/qz0aGYrrlhU',
      },
    {
      category: 'Core Coding Languages',
      title: 'Java Programming for Beginners',
      url: 'https://www.youtube.com/embed/grEKMHGYyns',
    },
    {
      category: 'Core Coding Languages',
      title: 'Java Programming for Beginners',
      url: 'https://www.youtube.com/embed/grEKMHGYyns',
    },
    {
      category: 'Core Coding Languages',
      title: 'Java Programming for Beginners',
      url: 'https://www.youtube.com/embed/grEKMHGYyns',
    },
    {
      category: 'Core Coding Languages',
      title: 'Java Programming for Beginners',
      url: 'https://www.youtube.com/embed/grEKMHGYyns',
    },
    {
        category: 'Core Coding Languages',
        title: 'Java Programming for Beginners',
        url: 'https://www.youtube.com/embed/grEKMHGYyns',
      },
    {
      category: 'Core Coding Languages',
      title: 'Python Crash Course',
      url: 'https://www.youtube.com/embed/JJmcL1N2KQs',
    },
    {
      category: 'Design Tools',
      title: 'Enhancing Adobe Photoshop CC 2020 Skills',
      url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
    {
        category: 'Design Tools',
        title: 'Enhancing Adobe Photoshop CC 2020 Skills',
        url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
      },
      {
        category: 'Design Tools',
        title: 'Enhancing Adobe Photoshop CC 2020 Skills',
        url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
      },
      {
        category: 'Design Tools',
        title: 'Enhancing Adobe Photoshop CC 2020 Skills',
        url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
      },
      {
        category: 'Design Tools',
        title: 'Enhancing Adobe Photoshop CC 2020 Skills',
        url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
      },
    
     
    {
      category: 'Design Tools',
      title: 'Introduction to Figma for UI/UX Designers',
      url: 'https://www.youtube.com/embed/jwCmIBJwE_g',
    },
    {
      category: 'Full Stack Development',
      title: 'Full Stack Web Development Course (React, Node.js, MongoDB)',
      url: 'https://www.youtube.com/embed/RrKRN9zRBWs',
    },
    {
      category: 'Full Stack Development',
      title: 'MERN Stack Tutorial (MongoDB, Express, React, Node.js)',
      url: 'https://www.youtube.com/embed/ktjafK4SgWM',
    },
   
    {
      category: 'Full Stack Development',
      title: 'Full Stack Web Development Course (React, Node.js, MongoDB)',
      url: 'https://www.youtube.com/embed/RrKRN9zRBWs',
    },
    {
      category: 'Full Stack Development',
      title: 'Full Stack Web Development Course (React, Node.js, MongoDB)',
      url: 'https://www.youtube.com/embed/RrKRN9zRBWs',
    },
    {
      category: 'Full Stack Development',
      title: 'Full Stack Web Development Course (React, Node.js, MongoDB)',
      url: 'https://www.youtube.com/embed/RrKRN9zRBWs',
    },
    {
      category: 'Full Stack Development',
      title: 'Full Stack Web Development Course (React, Node.js, MongoDB)',
      url: 'https://www.youtube.com/embed/RrKRN9zRBWs',
    },
  ];

 
  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div className="videos-container">
      {Object.keys(groupedVideos).map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category}</h2>
          <div className="category-videos">
            {groupedVideos[category].map((video, videoIndex) => (
              <div key={videoIndex} className="video-card">
                <h3>{video.title}</h3>
                <iframe
                  width="560"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
