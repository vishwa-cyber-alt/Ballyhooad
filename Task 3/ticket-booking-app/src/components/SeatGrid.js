import React from 'react';
import './SeatGrid.css';

const SeatGrid = ({ selectedSeat, onSeatClick }) => {
  return (
    <div className="seats-container">
      {Array.from({ length: 25 }, (_, i) => {
        const seatNum = i + 1;
        const isSelected = selectedSeat === seatNum;
        return (
          <button
            key={seatNum}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => onSeatClick(seatNum)}
          >
            {seatNum}
          </button>
        );
      })}
    </div>
  );
};

export default SeatGrid;