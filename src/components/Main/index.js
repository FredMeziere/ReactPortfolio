/* Import des fichiers scss */

import './styles.scss';

/* Import des composants */

import Introduction from './Introduction';
import Skills from './Skills';
import Presentation from './Presentation';
import Parcours from './Parcours';
import Realisations from './Realisations';
import Contact from './Contact';

function Main() {
  return (
    <div className="main">
      <Introduction />
      <Skills />
      <Parcours />
      <Presentation />
      <Realisations />
      <Contact />
    </div>
  );
}

export default Main;
