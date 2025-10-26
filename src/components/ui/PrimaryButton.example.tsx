'use client';

import React from 'react';
import SecondaryButton from './SecondaryButton';

// Example usage of PrimaryButton component
const PrimaryButtonExamples = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <h2>PrimaryButton Examples</h2>

      {/* Basic Usage */}
      <div>
        <SecondaryButton onClick={handleClick}>
        Go Back
        </SecondaryButton>
      </div>
    </div>
  );
};

export default PrimaryButtonExamples;
