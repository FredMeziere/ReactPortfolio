import './styles.scss';

function Presentation() {
  return (
    <div id="presentation" className="presentation">
      <h1 className="presentation-h1">Mon profil</h1>
      <img className="presentation-img" src="./photo/photo.jpg" alt="Fred Meziere" />
      <p className="presentation-p">Je m'appelle Fred Meziere, j'ai 25 ans, je vis a Aubagne dans le sud.
        <br />
        L'univers informatique m'attire depuis l'adolescence.
        J'ai eu la chance d'avoir un ordinateur très tôt, ce qui m'a sûrement donné par la suite l'envie de travailler dans l'informatique et plus tard encore m'a fait me reconvertir dans le développement web.
        <br />
        J'ai eu la chance de pouvoir voyager à l'étranger pendant prés de 7 années <span className="presentation-span">(2ans en Afrique et + 5 années en Allemagne)</span>. Ce qui m'a permis de découvrir d'autres pays et cultures.
        <br />
      </p>
      <p className="presentation-p">
        J'adore le <span className="presentation-span">sport, je pratique la course à pied</span> et la randonnée.
        Je suis aussi passionné par les jeux vidéos, le code et la découverte de nouvelles fonctionnalités.
        Je suis aussi intéressé par les IA et le machine learning.
      </p>
      <p className="presentation-p">
        Je fais de la photo dans les fêtes foraines et parcs (avec gestion de pages facebook).
      </p>
      <p className="presentation-p">
        Je n'aime pas me mettre en avant, mais mes qualités selon moi seraient d'être patient, à l'écoute et extrémement curieux ( je voudrais tout faire et tout voir !)
      </p>
    </div>
  );
}

export default Presentation;
