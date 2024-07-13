import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  { name: "Bantayan", price: 1000, image: "/images/bantayan.jpg" },
  { name: "Camotes", price: 2000, image: "/images/camotes.jpg" },
  { name: "Bohol", price: 3000, image: "/images/bohol.jpg" },
  { name: "Moalboal", price: 4000, image: "/images/moalboal.jpg" },
  { name: "Olanggo", price: 5000, image: "/images/olanggo.jpg" },
  { name: "Sumilon", price: 6000, image: "/images/sumilon.jpg" },
  { name: "Malapascua", price: 7000, image: "/images/malapascua.jpg" },
  { name: "Alegria", price: 8000, image: "/images/alegria.jpg" }
];

const AddDestination = ({ setDestination, setDestinationPrice }) => {
  const navigate = useNavigate();

  const handleSelect = (destination) => {
    setDestination(destination.name);
    setDestinationPrice(destination.price);
    navigate('/add-bangka');
  };

  return (
    <div className="main-wrapper">
      <div className="container mt-5 text-center main-container">
        <h1 className="text-dark heading-margin">Select a Destination</h1>
        <div className="row justify-content-center">
          {destinations.map((destination) => (
            <div key={destination.name} className="col-md-3 mb-4">
              <div className="card" onClick={() => handleSelect(destination)} style={{ cursor: 'pointer' }}>
                <img src={destination.image} className="card-img-top img-fluid" alt={destination.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{destination.name}</h5>
                  <p className="card-text">Price: {destination.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddDestination;
