import { useState } from 'react';
import './styles.scss';
import realData from '../../data/realisations';
import Cards from './Cards';

function Realisation() {
  const [resultData] = useState(realData);

  return (
    <div id="realisation" className="realisations">
      <h1 className="realisations-h1">Mes réalisations</h1>
      <Cards datas={resultData} />
    </div>
  );
}

export default Realisation;
