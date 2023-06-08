import './styles.scss';

import html from '../../../assets/iconskills/html.png';
import css from '../../../assets/iconskills/css.png';
import js from '../../../assets/iconskills/js.png';
import sass from '../../../assets/iconskills/sass.png';
import express from '../../../assets/iconskills/express.png';
import node from '../../../assets/iconskills/node.png';
import mongo from '../../../assets/iconskills/mongo.png';
import react from '../../../assets/iconskills/react.png';
import sql from '../../../assets/iconskills/sql.png';
import boot from '../../../assets/iconskills/boot.png';
import sqitch from '../../../assets/iconskills/sqitch.png';

function Skills() {
  return (
    <div className="skills">
      <div className="skills-parcours">
        <h1 className="skills-parcours-h1">Mon parcours</h1>
        <br />
        <p className="skills-parcours-p">
          J'ai effectuer ma reconversion apres avoir chercher ma voie professionnelle.
          En passant pars diverses experiences et metiers. Mon choix et mes envies ce sont toujours portés vers l'informatique
          (ayant depuis des années un bac informatique en poche) en juin 2022 j'ai franchis le pas et ai decidé
          d'effectuer ma reconversion au sein de l'école O'clock pour six mois. Ce fut tres enrichissant, intense.
          Mais cette formation ma permis d'acquerir le minimum de bases pour prétendre a travailler dans les développement web.
        </p>
        <p className="skills-parcours-p">
          J'ai choisis la formation Fullstack Javascript avec une spécialisation Back-end.
          J'ai aussi appris grace a cette v2 de mon portfolio à utiliser React que je n'avais pas eu l'ocassion de voir en formation.
          Je me tiens également au courant d'autres langages notament PHP.
        </p>
        <p className="skills-parcours-p">
          J'ai également obtenu une partie de mon titre professionnel DWWM (partie back-end) en mai 2023.
        </p>
        <p className="skills-parcours-p">
          Je suis intéressé autant par le Front-end, que par le Back-end, mais je suis vraiment tomber sous le charme des bases de données, des scripts et requetes.
          Je ne suis pas fémer a l'intégration ou a tout autres languages que Javascript.
        </p>

        <p className="skills-parcours-p">
          J'ai eu la chance également de faire pendant quelque temps de l'ébénisterie et obtenu mon cap ébéniste.
        </p>
      </div>
      <div className="skills-competences">
        <h2 className="skills-competences-h1">
          Mes competences techniques de développement
        </h2>
        <div className="skills-competences-frontback">
          <div className="skills-competences-front">
            <h3 className="skills-competences-h3">Compétences Front-end</h3>
            <div className="skills-competences-icons">
              <img className="skills-competences-image" src={html} alt="html logo" />
              <img className="skills-competences-image" src={css} alt="css logo" />
              <img className="skills-competences-image" src={sass} alt="sass logo" />
              <img className="skills-competences-image" src={boot} alt="boot logo" />
              <img className="skills-competences-image" src={react} alt="React logo" />
            </div>
          </div>
          <div className="skills-competences-back">
            <h3 className="skills-competences-h3">Compétences Back-end</h3>
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
            <span className="skills-competences-span">Gestion de projet: </span>Utilisation de divers outils de gestion de projets que ce soit pour le versionning <span className="skills-competences-span">Git/Github</span> ou encore la gestion de projet et de l'avancé des équipes <span className="skills-competences-span">Notion</span>.
            <br />
            <span className="skills-competences-span">Outils de discutions: </span>Utilisation d'outils pour la comunication que ce soit pour les discussions <span className="skills-competences-span">Discord / Teams / Slack / GMeet</span>.
            <br />
            <span className="skills-competences-span">Machines virtuelles: </span>Pendant notre formation nous avons essentiellementutilisé <span className="skills-competences-span">Linux (Ubuntu)</span> sous machine virtuelle via <span className="skills-competences-span">Virtual box</span>. Sur mon temps libre j'essaie d'apprendre le fonctionnement et l'uilisation de docker sous windows et j'utilise aussi le multiboot windows/linux a titre personnel.
            <br />
            <span className="skills-competences-span">Wireframes/Maquettes: </span>Utilisation de  <span className="skills-competences-span">Figma et Whismical</span> pour la réalisation de maquettes ou de wireframe pour une présentation aux clients.
            <br />
            <span className="skills-competences-span">MCD/MLD/Dictionnaire de données: </span>Je suis a l'aise avec la créations des différents documents relatifs a la base de données et en plus de mes connaissances en SQL et mongoDB, je sais aussi utiliser l'outil de "versionning" <span className="skills-competences-span">Sqitch</span>.
          </p>
          <h3 className="skills-competences-h3">Langues</h3>
          <p className="skills-competences-p">
            <span className="skills-competences-span">Anglais: </span> Je lis l'anglais et le comprends à l'oral, j'éprouve plus de difficultés a le parler. Mais je prends des cours via applis pour renforcer mes lacunes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
