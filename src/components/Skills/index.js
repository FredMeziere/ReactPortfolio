import './styles.scss';

import html from '../../assets/iconskills/html.png';
import css from '../../assets/iconskills/css.png';
import js from '../../assets/iconskills/js.png';
import sass from '../../assets/iconskills/sass.png';
import express from '../../assets/iconskills/express.png';
import node from '../../assets/iconskills/node.png';
import mongo from '../../assets/iconskills/mongo.png';
import react from '../../assets/iconskills/react.png';
import sql from '../../assets/iconskills/sql.png';
import boot from '../../assets/iconskills/boot.png';
import sqitch from '../../assets/iconskills/sqitch.png';

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skills-competences">
        <h1 className="skills-competences-h1">
          Mes competences techniques de développement
        </h1>
        <div className="skills-competences-frontback">
          <div className="skills-competences-front">
            <h2 className="skills-competences-h3">Front-end</h2>
            <div className="skills-competences-icons">
              <img className="skills-competences-image" src={html} alt="html logo" />
              <img className="skills-competences-image" src={css} alt="css logo" />
              <img className="skills-competences-image" src={sass} alt="sass logo" />
              <img className="skills-competences-image" src={boot} alt="boot logo" />
              <img className="skills-competences-image" src={react} alt="React logo" />
            </div>
          </div>
          <div className="skills-competences-back">
            <h2 className="skills-competences-h3">Back-end</h2>
            <div className="skills-competences-icons">
              <img className="skills-competences-image" src={express} alt="express logo" />
              <img className="skills-competences-image" src={sql} alt="sql logo" />
              <img className="skills-competences-image" src={mongo} alt="boot logo" />
              <img className="skills-competences-image" src={js} alt="Javascript logo" />
              <img className="skills-competences-image" src={sqitch} alt="Sqitch logo original creator https://github.com/theory/" />
              <img className="skills-competences-image" src={node} alt="node logo" />
            </div>
          </div>
        </div>
        <div className="skills-competences-devops">
          <h3 className="skills-competences-h3">Autres connaissances / outils </h3>
          <p className="skills-competences-p">
            <span className="skills-competences-span">Gestion de projet: </span>Utilisation de divers outils de gestion de projets que ce soit pour le versionning Git/Github ou encore la gestion de projet et de l'avancée des équipes Notion.
            <br />
            <span className="skills-competences-span">Outils de discussions: </span>Utilisation d'outils pour la comunication que ce soit pour les discussions Discord / Teams / Slack / GMeet.
            <br />
            <span className="skills-competences-span">Machines virtuelles: </span>Pendant notre formation nous avons essentiellement utilisé Linux (Ubuntu) sous machine virtuelle via Virtual box. Sur mon temps libre j'essaie d'apprendre le fonctionnement et l'uilisation de docker sous windows et j'utilise aussi le multiboot windows/linux a titre personnel.
            <br />
            <span className="skills-competences-span">Wireframes/Maquettes: </span>Utilisation de Figma et Whismical pour la réalisation de maquettes ou de wireframe pour une présentation aux clients.
            <br />
            <span className="skills-competences-span">MCD/MLD/Dictionnaire de données: </span>Je suis à l'aise avec la créations des différents documents relatifs à la base de données et en plus de mes connaissances en SQL et mongoDB, je sais aussi utiliser l'outil de "versionning" <span className="skills-competences-span">Sqitch</span>.
          </p>
          <h3 className="skills-competences-h3">Langues</h3>
          <p className="skills-competences-p">
            <span className="skills-competences-span">Anglais: </span> Je lis l'anglais et le comprends à l'oral, j'éprouve plus de difficultés à le parler. Mais je prends des cours via applis pour renforcer mes lacunes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
