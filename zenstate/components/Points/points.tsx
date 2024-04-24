import React from 'react';
import './points.css';

interface PointTrackerProps {
  time: number;
}

const PointTracker: React.FC<PointTrackerProps> = ({ time }) => {
  return (
    <div className="circle-frame">
      <div className="point">
        {time} {/* Display the value of the 'time' prop */}
      </div>
    </div>
  );
};

export default PointTracker;
