import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { arrayOf, shape } from 'prop-types';
import Card from './Card';
import './styles.scss';

function Cards({ datas }) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  // gestion pour l'affichage de 1 cards pour la version mobile
  const handleNextCard = () => {
    setVisibleCardIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };
  // gestion pour l'affichage de 3 cards + retour a 0 une fois arrivé a la fin des cards
  const handleNextCard3 = () => {
    setVisibleCardIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const maxIndex = datas.length - 3;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  return (
    <div className={`cards ${isMobile ? 'cards-mobile' : 'cards-desktop'}`}>
      {isMobile ? (
        <div>
          {datas.slice(visibleCardIndex, visibleCardIndex + 1).map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <div className="cards-robutton">
          <div className="cards-row">
            {datas.slice(visibleCardIndex, visibleCardIndex + 3).map((data) => (
              <Card key={data.id} {...data} />
            ))}
          </div>
          {datas.length > 3 && (
          <button className="cards-button-desktop" type="button" onClick={handleNextCard3}>
            Suivant
          </button>
          )}
        </div>
      )}
      {isMobile && (
        <button className="cards-button" type="button" onClick={handleNextCard}>
          Suivant
        </button>
      )}
    </div>
  );
}

Cards.propTypes = {
  datas: arrayOf(shape()).isRequired,
};

export default Cards;
