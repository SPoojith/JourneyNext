import React from 'react';
import FosterComponent from './FosterComponent';
import './Scroll.css';

function Scroll1() {
  return (
    <div className="GrandParent">
      <FosterComponent index={0} />
      <FosterComponent index={1} />
      <FosterComponent index={2} />
      <FosterComponent index={3} />
    </div>
  );
}

export default Scroll1;
