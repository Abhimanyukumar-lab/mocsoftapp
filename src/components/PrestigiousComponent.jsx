// PrestigiousComponent.js
import React from 'react';
import './PrestigiousComponent.css';
import biharPoliceNewLogo from '../assets/workimg/buxar-police.jpg'; // Import the image

const PrestigiousComponent = () => {
  const cardData = [
    biharPoliceNewLogo, // Use the imported image
    'https://i.ibb.co/0GNpCYS/Cid-bihar.png',
    'https://i.ibb.co/0nSSZHY/stf-bihar.png',
    'https://i.ibb.co/5WZjSjY/iit-patna.png',
    'https://s13.gifyu.com/images/SjG6H.jpg',
    'https://s13.gifyu.com/images/SjGWC.jpg',
    'https://i.ibb.co/SXj81Hp/buxar-police.jpg',
    'https://i.ibb.co/c1qwmP7/darbhanga-police.png',
    'https://s13.gifyu.com/images/SjGWj.jpg',
    'https://s13.gifyu.com/images/SjG4x.jpg',
    'https://cdn.pixabay.com/photo/2023/06/02/14/10/woman-8035746_640.jpg',
    'https://cdn.pixabay.com/photo/2023/12/11/09/36/whisky-8443155_640.jpg',
  ];

  const cardLinks = [
    'https://biharpolicedg.bihar.gov.in/',
    'https://biharpolicedg.bihar.gov.in/',
    'https://stf.bihar.gov.in/',
    'https://www.iitp.ac.in/',
    'https://www.bsptcl.in/',
    'https://saranpolice.bihar.gov.in/',
    'https://buxarpolice.bihar.gov.in/',
    'https://darbhangapolice.bihar.gov.in/',
    'https://jamuipolice.bihar.gov.in/',
    'https://sheoharpolice.bihar.gov.in/',
  ];

  const getImageStyle = (imageUrl) => {
    if (
      imageUrl === biharPoliceNewLogo ||
      imageUrl.includes('Cid-bihar.png') ||
      imageUrl.includes('stf-bihar.png') ||
      imageUrl.includes('iit-patna.png')
    ) {
      return { height: '70%', marginTop: '12%' };
    } else if (imageUrl.includes('SjG6H.jpg')) {
      return { height: '85%', marginTop: '12%', width: '70%' };
    } else {
      return { height: '39%', marginTop: '23%' };
    }
  };

  return (
    <div className="prestigious-container mt-5">
      <h2 className="text-center mb-4">Prestigious Institutions We Have Worked With</h2>
      <div className="row">
        {cardData.slice(0, 5).map((imageUrl, index) => (
          <div key={index} className="image-card">
            <a href={cardLinks[index]} target="_blank" rel="noopener noreferrer">
              <img
                className='imagetaht'
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={getImageStyle(imageUrl)}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="row">
        {cardData.slice(5, 10).map((imageUrl, index) => (
          <div key={index} className="image-card">
            <a href={cardLinks[index + 5]} target="_blank" rel="noopener noreferrer">
              <img
                className='imagetaht'
                src={imageUrl}
                alt={`Image ${index + 7}`}
                style={getImageStyle(imageUrl)}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrestigiousComponent;
