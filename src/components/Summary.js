import React from 'react';
import { useNavigate } from 'react-router-dom';

const images = {
  "Bantayan": "/images/bantayan.jpg",
  "Camotes": "/images/camotes.jpg",
  "Bohol": "/images/bohol.jpg",
  "Moalboal": "/images/moalboal.jpg",
  "Olanggo": "/images/olanggo.jpg",
  "Sumilon": "/images/sumilon.jpg",
  "Malapascua": "/images/malapascua.jpg",
  "Alegria": "/images/alegria.jpg",
  "MV Cebu": "/images/mv_cebu.jpg",
  "MV Banilad": "/images/mv_banilad.jpg",
  "MV Xerxes": "/images/mv_xerxes.jpg",
  "MV Odette": "/images/mv_odette.jpg",
  "MV James": "/images/mv_james.jpg",
  "MV Melgo": "/images/mv_melgo.jpg",
  "MV Arvince": "/images/mv_arvince.jpg",
  "MV Joem": "/images/mv_joem.jpg"
};

const Summary = ({ destination, bangka, totalPrice }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/');
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-dark custom-heading-margin">Enjoy Your Trip!</h1>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={images[destination]} alt={destination} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title text-dark">Destination</h5>
              <p className="card-text text-dark">{destination}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={images[bangka]} alt={bangka} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title text-dark">Bangka</h5>
              <p className="card-text text-dark">{bangka}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-dark">Total Price: {totalPrice}</h3>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default Summary;
