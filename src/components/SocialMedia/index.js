import './styles.scss';

function SocialMedia() {
  return (
    <div className="socialmedia">
      <a className="socialmedia-a" href="https://www.linkedin.com/in/fred-meziere/" target="_blank" rel="noreferrer"><img className="socialmedia-img" src="../logo/linkedin.png   " alt="Logo linkedin" /></a>
      <a className="socialmedia-a" href="https://github.com/FredMeziere" target="_blank" rel="noreferrer"><img className="socialmedia-img" src="../logo/github.png" alt="Logo github" /></a>
      <a className="socialmedia-a" href="https://twitter.com/Fred_meziere" target="_blank" rel="noreferrer"><img className="socialmedia-img" src="../logo/twitter.png" alt="Logo twitter" /></a>
      <a className="socialmedia-a" href="../cv/cv_meziere_fred.pdf" target="_blank"><img className="socialmedia-img" src="../logo/cv.png" alt="Logo cv" /></a>
    </div>
  );
}
export default SocialMedia;
