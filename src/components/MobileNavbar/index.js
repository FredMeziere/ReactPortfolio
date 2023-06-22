import { useState } from 'react';
import './styles.scss';

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobilenavbar">
      <button className="mobilenavbar-toggle" onClick={toggleMenu} type="button">
        <span className="mobilenavbar-toggle-line" />
        <span className="mobilenavbar-toggle-line" />
        <span className="mobilenavbar-toggle-line" />
      </button>

      {isMenuOpen && (
        <ul className="mobilenavbar-ul">
          <li><a className="mobilenavbar-li" href="#">Accueil</a></li>
          <li><a className="mobilenavbar-li" href="#skills">Mes Compétences</a></li>
          <li><a className="mobilenavbar-li" href="#realisation">Mes réalisations</a></li>
          <li><a className="mobilenavbar-li" href="#presentation">Mon profil</a></li>
          <li><a className="mobilenavbar-li" href="#recrutezmoi">Contactez-Moi</a></li>
          <li><a className="mobilenavbar-li" href="../cv/cv_fred_meziere.pdf">Mon CV</a></li>
        </ul>
      )}
    </div>
  );
}

export default MobileNavbar;
