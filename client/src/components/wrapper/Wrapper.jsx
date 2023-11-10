import React, { useEffect, useState } from 'react';
import background1 from '../../assets/background/1-background.jpg';
import background2 from '../../assets/background/2-background.jpg';
import background3 from '../../assets/background/3-background.jpg';
import background4 from '../../assets/background/4-background.jpg';
import background5 from '../../assets/background/5-background.jpg';
import background6 from '../../assets/background/6-background.jpg';
import background7 from '../../assets/background/7-background.jpg';
import background8 from '../../assets/background/8-background.jpg';
import catalina from '../../assets/background/catalina.jpg';
import sierra from '../../assets/background/sierra.jpg';

function Wrapper({ children }) {
  // Initialize state for background image
  const [background, setBackground] = useState('');

  // Get the current hour using the Date object

  // Define the range for each time of day
  useEffect(() => {
    const currentHour = new Date().getHours();
    switch (true) {
      case currentHour >= 0 && currentHour < 3:
        setBackground(background8); // Late night
        break;
      case currentHour >= 3 && currentHour < 6:
        setBackground(background1); // Early morning
        break;
      case currentHour >= 6 && currentHour < 9:
        setBackground(background2); // Morning
        break;
      case currentHour >= 9 && currentHour < 12:
        setBackground(background3); // Late morning
        break;
      case currentHour >= 12 && currentHour < 15:
        setBackground(background4); // Afternoon
        break;
      case currentHour >= 15 && currentHour < 18:
        setBackground(background5); // Evening
        break;
      case currentHour >= 18 && currentHour < 21:
        setBackground(background6); // Night
        break;
      case currentHour >= 21 && currentHour < 24:
        setBackground(background7); // Late night
        break;
      default:
        setBackground(background8); // Late night
        break;
    }
  }, []); // Run the effect whenever currentHour changes

  return (
    <div
      className="d-flex justify-content-center align-items-center position-relative"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="w-100 h-100">
        <div className="px-0 container-md pt-md-4 pb-md-4 h-100 w-100">
          <div
            className={`main w-100 h-100 overflow-hidden visible-bg d-flex flex-column`}
            style={{
              backdropFilter: 'blur(12px)',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
