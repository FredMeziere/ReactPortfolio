import Footer from '../Footer';
import Header from '../Header';
import SocialMedia from '../SocialMedia';
// import Footer from '../Footer';
import './scrollbar.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <SocialMedia />
      <Footer />
    </div>
  );
}

// == Export
export default App;
