/* Import des fichiers scss */

import './styles.scss';

/* Import des composants */

import Introduction from './Introduction';
// import Presentation from './Presentation';
// import Skills from './Skills';

function Main() {
  return (
    <div className="main">
      <Introduction />
    </div>
  );
}

export default Main;
