import React from 'react';
import './points.css';

interface PointTrackerProps {
  time: number;
}

const PointTracker: React.FC<PointTrackerProps> = ({ time }) => {
  return (
    <div className="circle-frame">
      <div className="point">
        {time}
      </div>
    </div>
  );
};

export default PointTracker;
