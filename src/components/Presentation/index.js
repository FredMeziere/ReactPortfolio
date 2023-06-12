import './styles.scss';

function Presentation() {
  return (
    <div id="presentation" className="presentation">
      <h1 className="presentation-h1">Mon profil</h1>
      <p className="presentation-p">Je m'appelle Fred Meziere, j'ai 25 ans, je vis a Aubagne dans le sud.
        <br />
        J'ai toujours été baigné dans l'univers informatique.
        J'ai eu la chance d'avoir un ordinateur très tot, ce qui m'a surrement donné par la suite l'envie de travailler dans l'informatique et plus tard encore m'a fait me reconvertir dans le développement web.
        <br />
        J'ai eu la chance de pouvoir voyager a l'étranger pendant pres de 6 années <span className="presentation-span">(2ans en Afrique et +5 années en Allemagne)</span>. Ce qui m'a permis de découvrir d'autres pays et cultures.
        <br />
      </p>
      <img className="presentation-img" src="./photo/photo.JPG" alt="Fred Meziere" />
      <p className="presentation-p">
        J'adore le <span className="presentation-span">sport, je pratique la course à pied</span> et la randonnée.
        Ainsi que les jeux vidéos mais aussi coder par simple plaisir de découvrir de nouvelles choses fonctionnalités.
        Je suis aussi intéressé par les IA et le machine learning.
      </p>
      <p className="presentation-p">
        Je fais de la photo dans les fetes foraines et parc (avec gestionde page facebook).
      </p>
      <p className="presentation-p">
        Je n'aime pas me mettre en avant, mais mes qualités selon moi seraient d'etre patient, à l'écoute et extrement curieux ( je voudrais tout faire et tout voir !)
      </p>
    </div>
  );
}

export default Presentation;
