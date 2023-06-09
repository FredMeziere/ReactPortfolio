import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-div">
        <a className="header-h1color" href="/main">
          <h1 className="header-h1">
            <span className="header-h1span">F</span>red<span className="header-h1point">.</span><span className="header-h1spanm">M</span>eziere
          </h1>
        </a>
      </div>
      <div className="navbar">
        <p className="navbar-plink1"><a className="navbar-a1" href="#">Accueil</a></p>
        <p className="navbar-plink2-3"><a className="navbar-a2" href="#skills">Mes Compétences</a></p>
        <p className="navbar-plink2-3"><a className="navbar-a3" href="#realisation">Mes réalisations</a></p>
        <p className="navbar-plink2-3"><a className="navbar-a3" href="#presentation">Mon profil</a></p>
        <p className="navbar-plink4"><a className="navbar-a4" href="#recrutezmoi">Contactez-Moi</a></p>
      </div>
    </div>
  );
}
export default Header;
