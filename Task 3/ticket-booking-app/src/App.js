import React, { useState } from 'react';
import './App.css';
import SeatGrid from './components/SeatGrid';

const App = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    return Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 900 + 100) // 3-digit numbers (100–999)
    );
  };

  const handleSeatClick = (seatNum) => {
    setSelectedSeat(seatNum);
    setRandomNumbers(generateRandomNumbers());
  };

  return (
    <div className="app">
      <h1 className="title">🎟️ Ticket Booking System</h1>

      <SeatGrid selectedSeat={selectedSeat} onSeatClick={handleSeatClick} />

      {selectedSeat && (
        <div className="result-container">
          <h2>✅ Selected Seat: <span className="seat-badge">{selectedSeat}</span></h2>
          <p className="number-label">🎲 Your Ticket Numbers:</p>
          <div className="number-grid">
            {randomNumbers.map((num, idx) => (
              <div className="number-box" key={idx}>
                {num}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;