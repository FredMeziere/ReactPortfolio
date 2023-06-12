import './styles.scss';
import { useEffect, useState } from 'react';
import MobileNavbar from '../MobileNavbar';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1280px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-div">
        <a className="header-h1color" href="/main">
          <h1 className="header-h1">
            <span className="header-h1span">F</span>red<span className="header-h1point">.</span>
            <span className="header-h1spanm">M</span>eziere
          </h1>
        </a>
      </div>

      {!isMobile && (
      <div className="navbar">
        <p className="navbar-plink1"><a className="navbar-a1" href="#">Accueil</a></p>
        <p className="navbar-plink2-3"><a className="navbar-a2" href="#skills">Mes Compétences</a></p>
        <p className="navbar-plink2-3"><a className="navbar-a3" href="#realisation">Mes réalisations</a></p>
        <p className="navbar-plink2-3"><a className="navbar-a3" href="#presentation">Mon profil</a></p>
        <p className="navbar-plink4"><a className="navbar-a4" href="#recrutezmoi">Contactez-moi</a></p>
      </div>
      )}

      {isMobile && <MobileNavbar />}
    </div>
  );
}

export default Header;
