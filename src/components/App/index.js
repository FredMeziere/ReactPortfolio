import Footer from '../Footer';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
import Main from '../Main';
import ButtonUp from '../ButtonUp';
import './scrollbar.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <SocialMedia />
      <Main />
      <Footer />
      <ButtonUp />
    </div>
  );
}

// == Export
export default App;
