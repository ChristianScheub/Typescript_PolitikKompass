import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  return (
    <div className="progress-bar">
      <p>
        Frage {current} von {total}
      </p>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;