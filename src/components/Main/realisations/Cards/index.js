import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { arrayOf, shape } from 'prop-types';
import Card from './Card';
import './styles.scss';

function Cards({ datas }) {
  const isMobile = useMediaQuery({ maxWidth: 420 });
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  const handleNextCard = () => {
    setVisibleCardIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  return (
    <div className="cards">
      {isMobile ? (
        <div>
          {datas.slice(visibleCardIndex, visibleCardIndex + 1).map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      ) : (
        datas.map((data) => <Card key={data.id} {...data} />)
      )}
      <button className="cards-button" type="button" onClick={handleNextCard}>
        Suivant
      </button>
    </div>
  );
}

Cards.propTypes = {
  datas: arrayOf(shape()).isRequired,
};

export default Cards;
