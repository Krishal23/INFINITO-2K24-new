import React, { useState, useRef } from 'react';
import styles from './evein.module.css';

// Import event components
import Football from './Football';
import Basketball from './Basketball';
import Cricket from './Cricket';
import Tennis from './Tennis';
import Chess from './Chess';
import Ludo from './Ludo';
import Atheletic from './Atheletic';
import Volleyball from './Volleyball';
import Badminton from './Badminton';
import Kabbadi from './Kabbadi';
import LawnTennis from './LawnTennis';
import Squash from './Squash';
import TableTennis from './TableTennis';
import Weight from './Weight';

// Import images
import footballimg from '../images/football.png'
import baskimg from '../images/basketball.png'
import chessimg from '../images/chess.png'
import crickimg from '../images/cricket.png'
import ludoimg from '../images/ludo.png'
import tennisimg from '../images/tennis.png'
import atheleteimg from '../images/atheletics.png'
import volleyballimg from '../images/volleyball.png'
import badmintonimg from '../images/badminton.png'
import kabbadiimg from '../images/kabbadi.png'
import lawntennisimg from '../images/lawntennis.png'
import squashimg from '../images/squash.png'
import tabletennisimg from '../images/tabletennis.png'
import weightimg from '../images/weight.png'

// Mapping for event components
const eventComponents = {
  football: <Football />,
  basketball: <Basketball />,
  // volleyball: <Volleyball />,
  // atheletic: <Atheletic />,
  cricket: <Cricket />,
  // kabbadi: <Kabbadi />,
  // tennis: <Tennis />,
  // ludo: <Ludo />,
  // tabletennis: <TableTennis />,
  // lawntennis: <LawnTennis />,
  // badminton: <Badminton />,
  // squash: <Squash />,
  // chess: <Chess />,
  // weight: <Weight />,
};

// Mapping for sport images
const sportImages = {
  football: footballimg,
  basketball: baskimg,
  volleyball:volleyballimg,
  cricket: crickimg,
  tennis: tennisimg,
  ludo:ludoimg,
  chess:chessimg,
  atheletic: atheleteimg,
  badminton: badmintonimg,
  kabbadi:kabbadiimg,
  lawntennis:lawntennisimg,
  squash:squashimg,
  tabletennis:tabletennisimg,
  weight:weightimg,  
};

const Evein = () => {
  const [selectedSport, setSelectedSport] = useState("football");
  const descriptionRef = useRef(null);

  const handleIconClick = (sportKey) => {
    setSelectedSport(sportKey);
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.sportsPage}>
      <h1 className={styles.title}>Events</h1>
      {/* Section 1: Sports Icons */}
      <div className={styles.sportsIcons}>
        {Object.keys(eventComponents).map((sportKey) => (
          <div className={styles.icobox} key={sportKey}>
            <div
              className={styles.sportIcon}
              onClick={() => handleIconClick(sportKey)}
              style={{ 
                backgroundImage: `url(${sportImages[sportKey]})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <p className={styles.sportName}>{sportKey.charAt(0).toUpperCase() + sportKey.slice(1)}</p>
          </div>
        ))}
      </div>

      {/* Section 2: Event Description */}
      <div className={styles.eventDescription} ref={descriptionRef}>
        {selectedSport ? (
          <div className={styles.descriptionBox}>
            {eventComponents[selectedSport]}
          </div>
        ) : (
          <div className={styles.placeholder}>
            <h1>Infintio 2024</h1>
            <p>Select a sport to see the description</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Evein;
