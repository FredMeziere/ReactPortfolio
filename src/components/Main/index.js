/* Import des fichiers scss */

import './styles.scss';

/* Import des composants */

import Introduction from './Introduction';
import Skills from './Skills';
// import Presentation from './Presentation';
// import Skills from './Skills';

function Main() {
  return (
    <div className="main">
      <Introduction />
      <Skills />
    </div>
  );
}

export default Main;
