// Portfolio.js

import React from 'react';
import './Portfolio.css'; // Assuming this file contains custom styles
 // Import Bootstrap CSS
import sp1 from '../assets/images/mocsoft_vishal_sharma.jpg';
import sp2 from '../assets/images/mocsoft_santosh.jpg';
import sp3 from '../assets/images/mocsoft_awakash.jpg';

const Portfolio = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: sp1,
      name: 'Vishal Sharma',
      data: 'SP Purnea, 2019',
      description: 'SP Office Purnea appreciates MOCSOFT TECHNOLOGIES PVT LTD for its special effort which has made this possible to achieve the digitization of various processes of police functioning at Purnea Police district office.',
    },
    {
      id: 2,
      imageSrc: sp2,
      name: 'Santosh Kumar',
      data: 'SP Sheohar - 2019, SP STF (Bihar) - 2023',
      description: 'SP Office  digital is widely appreciated, (PSAM) Police Service Automation Management System implemented at Sheohar which is helping citizens of Sheohar as well as police personnel in many ways.',
    },
    {
      id: 3,
      imageSrc: sp3,
      name: 'Awakash Kumar',
      data: 'SP Begusarai - 2019, SSP Darbhanga - 2022',
      description: 'SP Office Begusarai appreciates the work of MOCSOFT TECHNOLOGIES PVT LTD for its continuous effort in providing digital solutions to district police office and wishing them for their successful future endeavors.',
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center mb-4">What People Say About Us</h2>
      <div className="row mt-2">
        {cardsData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div className="card text-center">
              <div className="card-img-top mt-3 rounded-circle gradient-background">
                <img
                  src={card.imageSrc}
                  alt={card.name}
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <h6 className="card-subtitle">{card.data}</h6>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
