import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { arrayOf, shape } from 'prop-types';
import Card from './Card';
import './styles.scss';

function Cards({ datas }) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  const handleNextCard = () => {
    setVisibleCardIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  const handlePreviousCard = () => {
    setVisibleCardIndex((prevIndex) => prevIndex - 1);
  };

  // Le reste du code...
  return (
    <div className="cards">
      {isMobile ? (
        <div>
          {datas.slice(visibleCardIndex, visibleCardIndex + 1).map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <div className="cards-desktop-container">
          {datas.slice(visibleCardIndex, visibleCardIndex + 3).map((data) => (
            <Card key={data.id} {...data} />
          ))}
          <div className="cards-button-group">
            <button
              className="cards-button"
              type="button"
              onClick={handlePreviousCard}
            >
              Précédent
            </button>
            <button
              className="cards-button"
              type="button"
              onClick={handleNextCard}
            >
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
Cards.propTypes = {
  datas: arrayOf(shape()).isRequired,
};

export default Cards;
