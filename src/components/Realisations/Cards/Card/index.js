import './styles.scss';
import {
  string,
} from 'prop-types';
import { BsGithub } from 'react-icons/bs';

function Card({
  title, url, miniature, technos, githubFront, githubBack, description,
}) {
  return (
    <div className="card">
      <img className="card-img" src={miniature} alt="miniature du projet" />
      <a className="card-title" href={url} target="_blank" rel="noreferrer">{title}</a>
      <div className="card-text">
        <p className="card-description"><span className="card-subtitle">Travail accompli</span><br /> {description}</p>
        <p className="card-technos"><span className="card-subtitle">Outils utilisés</span><br />{technos}</p>
        <div className="card-allgithub">
          <a className="card-github" href={githubFront} target="_blank" rel="noreferrer">.<BsGithub />.</a>
          {
        githubBack ? <a className="card-github" href={githubBack} target="_blank" rel="noreferrer"><BsGithub />.</a> : null
        }
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  miniature: string.isRequired,
  technos: string.isRequired,
  githubFront: string.isRequired,
  description: string.isRequired,
  // eslint-disable-next-line react/require-default-props
  githubBack: string,
};
