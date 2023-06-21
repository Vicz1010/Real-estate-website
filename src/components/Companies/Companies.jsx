import React from 'react';
import './Companies.css';

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./prologis.png" alt="prologis company" />
        <img src="./tower.png" alt="tower company" />
        <img src="./equinix.png" alt="equinix company" />
        <img src="./realty.png" alt="digital realty company" />
      </div>
    </section>
  );
};

export default Companies;
