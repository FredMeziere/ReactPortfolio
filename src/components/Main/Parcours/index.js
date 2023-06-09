import './styles.scss';

function Parcours() {
  return (
    <div className="parcours">
      <div className="parcours-div">
        <h1 className="parcours-h1">~~ Mon parcours ~~</h1>
        <br />
        <p className="parcours-p">
          J'ai effectuer ma reconversion apres avoir chercher ma voie professionnelle.
          En passant par diverses experiences et metiers. Mon choix et mes envies ce sont toujours portés vers l'informatique
          ( ayant depuis des années un <span className="parcours-p-span">bac informatique</span> en poche) je décide en juin 2022 de franchir le pas et
          d'entamer ma reconversion professionnelle au sein de l'<span className="parcours-p-span">école O'clock</span> pour six mois. Ce fut tres enrichissant, intense.
          Mais cette formation ma permis d'acquerir le minimum de bases pour prétendre a travailler dans le développement web.
        </p>
        <p className="parcours-p">
          J'ai choisis la formation <span className="parcours-p-span">Fullstack Javascript</span> avec une spécialisation <span className="parcours-p-span">Back-end</span>.
          J'ai aussi appris grace a cette v2 de mon portfolio à utiliser React que je n'avais pas eu l'ocassion de voir en formation.
          Je me tiens également au courant d'autres langages notament PHP.
        </p>
        <p className="parcours-p">
          <span className="parcours-p-span">J'ai également obtenu une partie de mon titre professionnel DWWM (partie back-end) en mai 2023.</span>
        </p>
        <p className="parcours-p">
          Je suis intéressé autant par le Front-end, que par le Back-end, mais je suis vraiment tomber sous le charme des bases de données, des scripts SQL et requetes, jointures et j'en passe.
          Je ne suis pas fémer a l'intégration ou a tout autres languages que Javascript.
        </p>

        <p className="parcours-p">
          J'ai eu la chance également de faire pendant quelque temps de l'ébénisterie et obtenu mon CAP ébéniste en 1 année.
        </p>
      </div>
    </div>
  );
}

export default Parcours;
