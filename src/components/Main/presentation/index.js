import './styles.scss';

function Presentation() {
  return (
    <div className="presentation">
      <h1 className="presentation-h1">Mon profil</h1>
      <p className="presentation-p">Je m'appelle <span className="presentation-span">Fred </span>Meziere, j'ai <span className="presentation-span">25 </span>ans, je vis a <span className="presentation-span"> Aubagne </span> dans le sud.
        <br />
        J'ai toujours été baigné dans l'<span className="presentation-span">univers informatique </span>.
        J'ai eu la chance d'avoir un ordinateur très tot, bon c'était pour jouer, pas pour travailler...
        <br />
        C'est surement ce qui a développer des années plus tard ma passion pour le développement web.
        <br />
        J'ai eu la chance de pouvoir voyager a l'étranger pendant pres de 6 années <span className="presentation-span">(2ans en Afrique et +5 années en Allemagne)</span>. Ce qui m'a permis de découvrir d'autres pays et cultures.
        <br />
        <img className="presentation-img" src="./photo/photo.JPG" alt="Fred Meziere" />
        <br />
        J'adore le <span className="presentation-span">sport</span>, je pratique la course à pied et randonnée et j'aimerais faire un peu de natation. J'adore les <span className="presentation-span">jeux vidéos</span> et j'adore aussi coder par simple plaisir de découvrir de nouvelles choses. Je suis aussi intéressé par les IA et le machine learning.
        <br />
        Je fais de la <span className="presentation-span">photo </span>dans les fetes foraines et parc (avec <span className="presentation-span">gestion</span> depage facebook).
        <br />
        Je deteste me mettre en avant, mais mes qualités selon moi seraient d'etre patient, à l'écoute et extrement curieux<span className="presentation-span">(je voudrais tout faire et tout voir !)</span>
      </p>
    </div>
  );
}

export default Presentation;
