import Footer from '../Footer';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import ButtonUp from '../ButtonUp';
import './scrollbar.scss';
import Introduction from '../Introduction';
import Skills from '../Skills';
import Presentation from '../Presentation';
import Parcours from '../Parcours';
import Realisations from '../Realisations';
import Contact from '../Contact';
import OpenToWork from '../OpenToWork';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <SocialMedia />
      <Introduction />
      <OpenToWork />
      <Skills />
      <Parcours />
      <Presentation />
      <Realisations />
      <Contact />
      <Footer />
      <ButtonUp />
    </div>
  );
}

// == Export
export default App;
