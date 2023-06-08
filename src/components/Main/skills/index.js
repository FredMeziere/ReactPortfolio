import './styles.scss';

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
          Mes competences techniques
        </h2>
        <div className="skills-competences-frontback">
          <div className="skills-competences-front">
            <h3 className="skills-competences-h3">Compétences Front-end</h3>
          </div>
          <div className="skills-competences-back">
            <h3 className="skills-competences-h3">Compétences Back-end</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
