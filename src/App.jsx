import { useState } from 'react';
import './App.css';

function App() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <a className="logo" href="#">
          Mein
          <span className="logo-highlight">Profilbild</span>
        </a>
        <nav className="nav">
          <a href="#">Für Unternehmen</a>
          <a href="#">Wie es funktioniert</a>
          <a href="#">Preis</a>
          <a href="#">Blog</a>
          <a href="#">Beispiele</a>
        </nav>
        <div className="header-buttons">
          <button className="secondary-button">
            Anmelden
          </button>
          <button className="primary-button">
            Jetzt starten
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-container">
        <section className="hero-content">
          <h1>
            Mache aus deinen
            <br />
            <span>Selfies professionelle<br />Bewerbungsfotos!</span>
          </h1>
          <p>
            Wir verwandeln deine Bilder in hochwertige Bewerbungsfotos
          </p>
          <ul className="features-list">
            <li>
              <span className="checkmark">✓</span>
              Einfach hochladen &amp; entspannen
            </li>
            <li>
              <span className="checkmark">✓</span>
              Modernste AI-Technologie
            </li>
            <li>
              <span className="checkmark">✓</span>
              Schnelle Lieferung
            </li>
          </ul>
          <button className="primary-button large">
            Jetzt starten
          </button>
          <div className="testimonial">
            <div className="customer-images">
              <img alt="Porträt eines Mannes in Anzug mit blauem Hintergrund" src="https://storage.googleapis.com/a1aa/image/2796a54b-94d4-4505-eb66-d24629323a6b.jpg" />
              <img alt="Porträt einer Frau mit braunen Haaren und neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/ad3870b6-168b-40e2-479a-cae9013deb72.jpg" />
              <img alt="Porträt eines Mannes mit Bart und dunklem Hintergrund" src="https://storage.googleapis.com/a1aa/image/11d6c397-a5c9-4848-97d5-8cfe3fd766b4.jpg" />
              <img alt="Porträt einer lächelnden Frau mit blonden Haaren" src="https://storage.googleapis.com/a1aa/image/ab8836c2-3d71-4b46-2a6f-072742e8ae41.jpg" />
              <img alt="Porträt eines lächelnden Mannes mit kurzem Haar" src="https://storage.googleapis.com/a1aa/image/d6717287-36fa-4354-8737-10c379f8a1ff.jpg" />
            </div>
            <div className="rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span>2.000 + zufriedene Kunden</span>
            </div>
          </div>
        </section>
        <section className="hero-images">
          <div className="image-stack">
            <img alt="Porträt eines Mannes in blauem Anzug, leicht gedreht, unscharfer Hintergrund" className="image-1" src="https://storage.googleapis.com/a1aa/image/374baa65-2f1b-4bbe-fb79-00dd4677840b.jpg" />
            <img alt="Porträt eines Mannes in blauem Anzug, leicht gedreht nach rechts, unscharfer Hintergrund" className="image-2" src="https://storage.googleapis.com/a1aa/image/31c16b82-12f9-4e1b-d212-ccc369d48b31.jpg" />
            <img alt="Porträt eines Mannes in blauem Anzug frontal mit Text '85 Bewerbungsfotos'" className="image-3" src="https://storage.googleapis.com/a1aa/image/6c9e00e4-0428-4f66-9551-0eee00f03439.jpg" />
            <div className="image-badge">
              <i className="fas fa-lock"></i>
              85 Bewerbungsfotos
            </div>
          </div>
          <div className="uploaded-images">
            <a href="#">
              <i className="fas fa-clock"></i>
              Hochgeladene Bilder
            </a>
            <div className="image-grid">
              <img alt="Kleines quadratisches Bild eines Mannes im Freien mit lila Hemd" src="https://storage.googleapis.com/a1aa/image/419d4cd1-554b-4245-c13e-97f226dbdbe6.jpg" />
              <img alt="Kleines quadratisches Bild eines Mannes im Freien mit grünem Hemd" src="https://storage.googleapis.com/a1aa/image/63317c9c-dc5a-49db-8662-a2eddbe6c9e2.jpg" />
              <img alt="Kleines quadratisches Bild eines Mannes im Freien mit blauem Hemd" src="https://storage.googleapis.com/a1aa/image/698bfdc6-9a75-4974-7c4b-66a31b809b4e.jpg" />
              <img alt="Kleines quadratisches Bild eines Mannes im Freien mit kariertem Hemd" src="https://storage.googleapis.com/a1aa/image/953afeff-6856-4d69-5990-ce545c8e7696.jpg" />
            </div>
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-item">
          <i className="fas fa-user feature-icon"></i>
          <span>Ab 10 Bewerbungsfotos</span>
        </div>
        <div className="feature-item">
          <i className="fas fa-warehouse feature-icon"></i>
          Verschiedene Hintergrundpakete zur Auswahl
        </div>
        <div className="feature-item">
          <i className="fas fa-gift feature-icon"></i>
          Professionelle Kleidung für den perfekten Look
        </div>
        <div className="feature-price">
          <span className="price">Ab €24,90</span>
          <span className="price-label">/Pro Person</span>
        </div>
      </section>

      {/* Success Stories */}
      <div className="success-stories">
        <p className="seen-on">Gesehen auf</p>
        <div className="logos">
          <img alt="StepStone logo with blue and white colors, stylized text and icon" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_step.acc6257a.png&w=256&q=75" />
          <img alt="Facebook logo in blue with white text" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_fb.6a420f3a.png&w=256&q=75" />
          <img alt="OMR REVIEWS logo in black and white with bold text" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_linkedin.8e131fea.png&w=256&q=75" />
          <img alt="LinkedIn logo in blue with white text and icon" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimgpsh_fullsize_anim.2fab794f.png&w=256&q=75" />
          <img alt="GRÜNDER STIPENDIUM NRW logo with light gray and teal text and icon" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimgpsh_fullsize_anim2.08cff638.png&w=256&q=75" />
        </div>
        <h1>Vom Selfie zum Bewerbungshit: Unsere Erfolgsgeschichten</h1>
        <p className="stories-subtitle">
          Lass dich von den Verwandlungen unserer Kunden inspirieren und mach den nächsten Schritt in deiner Karriere.
        </p>
        <section className="stories-grid">
          {/* Card 1 */}
          <article className="story-card">
            <header>
              <p className="customer-name">Felix F.</p>
              <p className="customer-title">Freiberufler</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </header>
            <p className="testimonial-text">
              In meiner Branche ist der erste Eindruck entscheidend. MeinProfilbild.de hat aus meinem Selfie ein Bewerbungsfoto gemacht, das nicht nur professionell, sondern auch authentisch ist. Ich habe nur positive Rückmeldungen erhalten!
            </p>
            <div className="image-comparison">
              <div className="before-after">
                <div className="label">Vorher</div>
                <img alt="Felix F. Vorher Bild 1: Mann mit lockigem braunem Haar und weißem T-Shirt vor Steinmauer" src="https://meinprofilbild.de/_next/image?url=%2Fhome-images%2Fbefore%2Fman%2F1.png&w=256&q=75" />
                <img alt="Felix F. Vorher Bild 2: Mann mit lockigem braunem Haar und weißem T-Shirt vor neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/a6f621fb-1a7c-4995-7af0-98c93458d7a5.jpg" />
                <img alt="Felix F. Vorher Bild 3: Mann mit lockigem braunem Haar und kariertem Hemd im Auto" src="https://storage.googleapis.com/a1aa/image/a8dd9898-a45b-46a4-f816-631e32028839.jpg" />
              </div>
              <div className="before-after">
                <div className="label">Nachher</div>
                <img alt="Felix F. Nachher Bild 1: Mann mit lockigem braunem Haar und Anzug mit Krawatte vor neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/b9087b06-1bab-4492-6cc4-232e7d21cd61.jpg" />
                <img alt="Felix F. Nachher Bild 2: Mann mit lockigem braunem Haar und Anzug mit Krawatte vor neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/035731f2-a74e-490e-1574-df040fa88fe8.jpg" />
                <img alt="Felix F. Nachher Bild 3: Mann mit lockigem braunem Haar und Hemd vor Bücherregal" src="https://storage.googleapis.com/a1aa/image/b8a271ac-10f5-4682-1f3b-c8acfb14c8ff.jpg" />
              </div>
            </div>
          </article>
          {/* Card 2 */}
          <article className="story-card">
            <header>
              <p className="customer-name">Isa W.</p>
              <p className="customer-title">Absolventin</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </header>
            <p className="testimonial-text">
              Als frischgebackene Absolventin hatte ich weder die Zeit noch das Geld für ein professionelles Fotoshooting. MeinProfilbild.de hat es mir ermöglicht, ein erstklassiges Bewerbungsfoto zu haben, und das in kürzester Zeit. Ich bin überzeugt, dass dies zu meinem erfolgreichen Jobeinstieg beigetragen hat
            </p>
            <div className="image-comparison">
              <div className="before-after">
                <div className="label">Vorher</div>
                <img alt="Isa W. Vorher Bild 1: Frau mit langen braunen Haaren und grünem Pullover vor unscharfem Hintergrund" src="https://storage.googleapis.com/a1aa/image/86e1cd54-b68b-4648-f829-fe9bfcf12308.jpg" />
                <img alt="Isa W. Vorher Bild 2: Frau mit langen blonden Haaren und hellem Pullover vor Meereshintergrund" src="https://storage.googleapis.com/a1aa/image/6d20f5bb-f087-45a6-bbad-b19777ec6c35.jpg" />
                <img alt="Isa W. Vorher Bild 3: Frau mit langen blonden Haaren und hellem Schal vor Park" src="https://storage.googleapis.com/a1aa/image/bb79fee3-eb5c-4d1e-ff81-2b83a37f4859.jpg" />
              </div>
              <div className="before-after">
                <div className="label">Nachher</div>
                <img alt="Isa W. Nachher Bild 1: Frau mit langen braunen Haaren und dunkelblauem Blazer vor unscharfem Hintergrund" src="https://storage.googleapis.com/a1aa/image/3fa6be70-573c-42f5-add8-2bfd77d8f1c2.jpg" />
                <img alt="Isa W. Nachher Bild 2: Frau mit langen blonden Haaren und dunkelblauem Blazer vor unscharfem Hintergrund" src="https://storage.googleapis.com/a1aa/image/dd7deb30-09c6-4fa1-915e-e7962712c65a.jpg" />
                <img alt="Isa W. Nachher Bild 3: Frau mit langen blonden Haaren und dunkelblauem Blazer vor unscharfem Hintergrund" src="https://storage.googleapis.com/a1aa/image/572304a9-d05c-4873-f940-4e7722165d81.jpg" />
              </div>
            </div>
          </article>
          {/* Card 3 */}
          <article className="story-card">
            <header>
              <p className="customer-name">Sarah B.</p>
              <p className="customer-title">Projekt Manager</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </header>
            <p className="testimonial-text">
              Ich habe schon immer Probleme gehabt, auf Fotos gut auszusehen, besonders auf Bewerbungsfotos. Mit MeinProfilbild.de konnte ich endlich ein Foto bekommen, das mich von meiner besten Seite zeigt. Das hat die Qualität meiner Bewerbungen definitiv erhöht.
            </p>
            <div className="image-comparison">
              <div className="before-after">
                <div className="label">Vorher</div>
                <img alt="Sarah B. Vorher Bild 1: Frau mit langen blonden Haaren und schwarzem Pullover im Freien" src="https://storage.googleapis.com/a1aa/image/1345691e-d6d8-47b0-5158-bb1f27d70a99.jpg" />
                <img alt="Sarah B. Vorher Bild 2: Frau mit langen blonden Haaren und rosa Jacke vor neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/c12221ab-3d89-422d-8ea2-b89ba0318f14.jpg" />
                <img alt="Sarah B. Vorher Bild 3: Frau mit langen blonden Haaren und schwarzem Mantel auf Straße" src="https://storage.googleapis.com/a1aa/image/4f026814-6aaa-4fe9-b327-962b1757c0c4.jpg" />
              </div>
              <div className="before-after">
                <div className="label">Nachher</div>
                <img alt="Sarah B. Nachher Bild 1: Frau mit langen blonden Haaren und blauem Blazer vor neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/1cf3fc5e-91ad-4646-8e5a-5af320b53f6b.jpg" />
                <img alt="Sarah B. Nachher Bild 2: Frau mit langen blonden Haaren und blauem Blazer vor neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/3bc60d3d-96bd-4c4b-0cf8-650624bdbeff.jpg" />
                <img alt="Sarah B. Nachher Bild 3: Frau mit langen blonden Haaren und blauem Blazer vor neutralem Hintergrund" src="https://storage.googleapis.com/a1aa/image/9ade1f13-64f3-48eb-c095-78b190cb9231.jpg" />
              </div>
            </div>
          </article>
        </section>
      </div>

      {/* Steps Section */}
      <div className="steps-section">
        <button className="examples-button" type="button">
          Mehr Beispiele ansehen
        </button>
        <h2>
          So einfach ist es: In 3 Schritten zu deinem professionellen Bewerbungsfoto
        </h2>
        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <img alt="Illustration of an envelope with a red arrow pointing down, representing uploading pictures" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhowto1.93063e01.png&w=48&q=75" />
            <h3>Bilder hochladen</h3>
            <p>
              Wähle deine Selfies aus und lade sie auf unsere sichere Plattform. Ein
              einfacher Hintergrund und gutes Licht sind der Schlüssel – und
              natürlich dein Lächeln!
            </p>
             <div className="result-area">
              <img alt="Illustration of a row of professional headshots with a dark overlay showing '120+' indicating many photos ready for download" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdrop1.b9cbde4a.png&w=384&q=75" />
            </div>
          </div>
          {/* Step 2 */}
          <div className="step-card">
            <img alt="Illustration of colorful sparkles representing AI working" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhowto2.21c39422.png&w=48&q=75" />
            <h3>Unsere KI macht sich an die Arbeit</h3>
            <p>
              Sobald deine Bilder bei uns sind, setzt unsere revolutionäre
              KI-Technologie an. Wir kreieren professionelle Fotos, jedes einzelne
              optimiert für Perfektion.
            </p>
             <div className="result-area">
              <img alt="Illustration of a row of professional headshots with a dark overlay showing '120+' indicating many photos ready for download" src="https://meinprofilbild.de/_next/static/media/drop2.79dc1ce9.svg" />
            </div>
          
            
          </div>
          {/* Step 3 */}
          <div className="step-card">
            <div className="step-icon">✅</div>
            <h3>Fotos herunterladen</h3>
            <p>
              In nur 90 Minuten sind deine Fotos bereit zum download – perfekt für
              LinkedIn, Xing, Stepstone, Bewerbungen und mehr.
            </p>
            <div className="result-area">
              <img alt="Illustration of a row of professional headshots with a dark overlay showing '120+' indicating many photos ready for download" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdrop3.d2d1b71f.png&w=750&q=75" />
            </div>
          </div>
        </div>
        <button className="start-button" type="button">
          Jetzt starten
        </button>
      </div>

      {/* Pricing Section */}
      <main className="pricing-section">
        <h2>Preise</h2>
        <section aria-label="Preistabellen" className="pricing-grid">
          {/* Standard */}
          <article aria-label="Standard Paket" className="pricing-card">
            <div>
              <div className="flex items-center mb-3 space-x-2">
                <img alt="Icon Standard Paket" src="https://storage.googleapis.com/a1aa/image/4d1a6eb4-3c32-4bdd-1e55-65a8291deaab.jpg" />
                <p>Standard</p>
              </div>
              <p className="price">€24,90</p>
              <p className="price-label">
                /Pro Person
              </p>
              <ul className="features">
                <li>
                  <span>✅</span>
                  10 Bewerbungsfotos
                </li>
                <li>
                  <span>✅</span>
                  2 verschiedene Hintergründe + Styles
                </li>
                <li>
                  <span>✅</span>
                  Fertig in 90 Minuten
                </li>
              </ul>
            </div>
            <button className="pricing-button" type="button">
              Jetzt starten
              <i className="fas fa-arrow-right"></i>
            </button>
          </article>
          {/* Professional */}
          <article aria-label="Professional Paket" className="pricing-card popular">
            <div>
              <div className="popular-badge">
                Am beliebtesten
              </div>
              <div className="flex items-center mb-3 space-x-2">
                <img alt="Icon Professional Paket" src="https://storage.googleapis.com/a1aa/image/bd65d5ff-1b58-438a-b0bd-43e9a7ea634f.jpg" />
                <p>Professional</p>
              </div>
              <p className="price">€39,90</p>
              <p className="price-label">
                /Pro Person
              </p>
              <ul className="features">
                <li>
                  <span>✅</span>
                  20 Bewerbungsfotos
                </li>
                <li>
                  <span>✅</span>
                  3 verschiedene Hintergründe + Styles
                </li>
                <li>
                  <span>✅</span>
                  Fertig in 90 Minuten
                </li>
              </ul>
            </div>
            <button className="pricing-button primary" type="button">
              Jetzt starten
              <i className="fas fa-arrow-right"></i>
            </button>
          </article>
          {/* Premium */}
          <article aria-label="Premium Paket" className="pricing-card premium">
            <div>
              <div className="premium-badge">
                Alle Styles &amp; Hintergründe
              </div>
              <div className="flex items-center mb-3 space-x-2">
                <img alt="Icon Premium Paket" src="https://storage.googleapis.com/a1aa/image/09bef409-6996-44b4-e085-285581632f9a.jpg" />
                <p>Premium</p>
              </div>
              <p className="price">€59,90</p>
              <p className="price-label">
                /Pro Person
              </p>
              <ul className="features">
                <li>
                  <span>✅</span>
                  30 Bewerbungsfotos
                </li>
                <li>
                  <span>✅</span>
                  4 verschiedene Hintergründe + Styles
                </li>
                <li>
                  <span>✅</span>
                  Fertig in 60 Minuten
                </li>
              </ul>
            </div>
            <button className="pricing-button premium-btn" type="button">
              Jetzt starten
              <i className="fas fa-arrow-right"></i>
            </button>
          </article>
        </section>
        <section className="testimonials">
          <p className="stars">🌟🌟🌟🌟🌟</p>
          <div className="customer-photos">
            <img alt="Portrait eines zufriedenen Kunden 1" src="https://storage.googleapis.com/a1aa/image/90ffc47b-a7d6-4fef-b60d-82e3828aae9e.jpg" />
            <img alt="Portrait eines zufriedenen Kunden 2" src="https://storage.googleapis.com/a1aa/image/c6dd334d-2613-4d12-2212-09147f5c25c6.jpg" />
            <img alt="Portrait eines zufriedenen Kunden 3" src="https://storage.googleapis.com/a1aa/image/463b81b3-1b38-4831-4a8e-8474e02b8f6e.jpg" />
            <img alt="Portrait eines zufriedenen Kunden 4" src="https://storage.googleapis.com/a1aa/image/4c622b25-1b36-4b2d-6dc0-2931dfae573d.jpg" />
            <img alt="Portrait eines zufriedenen Kunden 5" src="https://storage.googleapis.com/a1aa/image/a28c89c6-abf0-445f-17d8-87fa6d723743.jpg" />
          </div>
          <p className="testimonial-text">
            Schließe dich Zehntausenden zufriedenen Kunden an und bringe deine Karriere
            heute noch auf das nächste Level.
          </p>
          <div aria-label="Partner Logos" className="partner-logos">
            <img alt="StepStone Logo in dunkelblau" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_step.acc6257a.png&w=256&q=75" />
            <img alt="Facebook Logo in blau" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_fb.6a420f3a.png&w=256&q=75" />
            <img alt="X Logo schwarz" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_x.ac467e7c.png&w=48&q=75" />
            <img alt="LinkedIn Logo in blau" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_linkedin.8e131fea.png&w=256&q=75" />
            <img alt="XING Logo in grün" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial_indeed.3a918ba2.png&w=128&q=75" />
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <main className="faq-section">
        <div className="faq-container">
          <div className="faq-intro">
            <h2>FAQ</h2>
            <p>
              Falls du weitere Fragen hast, zögere nicht, uns jederzeit unter 
              <a href="mailto:info@meinprofilbild.de">info@meinprofilbild.de</a> 
              zu kontaktieren.
            </p>
          </div>
          
          <div className="faq-questions">
            {[
              {
                question: "Wie verwenden wir deine Bilder?",
                answer: "Deine Fotos werden ausschließlich zur Generierung der professionellen Profilbilder verwendet und nicht für andere Zwecke."
              },
              {
                question: "Was geschieht mit meinen Fotos nach der Verarbeitung?",
                answer: "Nach der Generierung deiner Bewerbungsfotos werden deine Originalfotos von unseren Servern gelöscht, um deine Privatsphäre zu gewährleisten."
              },
              {
                question: "Welche Art von Fotos sollte ich hochladen?",
                answer: "Für optimale Ergebnisse lade bitte klare Selfies mit guter Beleuchtung und sichtbarem Gesicht hoch. Vermeide verschwommene oder zu dunkle Bilder."
              },
              {
                question: "Welche Fotoformate werden unterstützt?",
                answer: "Wir unterstützen die gängigsten Formate wie JPG, PNG und GIF."
              },
              {
                question: "Kann ich meine generierten Profilbilder überall verwenden?",
                answer: "Ja, die von uns erstellten Bewerbungsbilder kannst du für persönliche und geschäftliche Zwecke verwenden, solange du unsere Nutzungsbedingungen beachtest."
              },
              {
                question: "Wie lange dauert der Prozess?",
                answer: "Unser Ziel ist es, dir innerhalb von 90 Minuten nach dem Hochladen ein professionelles Profilbild zur Verfügung zu stellen."
              },
              {
                question: "Wie sieht eure Rückerstattungsrichtlinie aus?",
                answer: "Wenn du mit deinem generierten Profilbild nicht zufrieden bist, kontaktiere bitte unseren Kundenservice, um die Möglichkeiten einer Rückerstattung zu besprechen."
              },
              {
                question: "Ich bin an einer Partnerschaft für mein Unternehmen interessiert. Was bietet ihr für Firmenkunden an?",
                answer: "Unser Ziel ist die Entwicklung eines umfassenden Dashboards speziell für Unternehmenskunden. In diesem Dashboard haben Firmen die Möglichkeit, Mitarbeiter hinzuzufügen und professionelle Business-Fotos in großer Stückzahl generieren zu lassen. Solltest du bereits jetzt an einer Zusammenarbeit interessiert sein, bitten wir um direkte Kontaktaufnahme per E-Mail an info@meinprofilbild.de."
              }
            ].map((item, index) => (
              <details key={index} className="faq-item" open={activeFaq === index} onClick={() => toggleFaq(index)}>
                <summary>
                  <span>{item.question}</span>
                  <svg className="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <main className="cta-container">
        <section className="cta-section">
          <div className="cta-content">
            <h1>
              Starte jetzt mit deinen neuen Bewerbungsfotos durch – schnell &amp;
              unkompliziert!
            </h1>
            <p>
              Erlebe selbst, wie unsere KI-Technologie deine alltäglichen Fotos in
              professionelle Bewerbungsfotos verwandelt. Perfekt für LinkedIn,
              Lebensläufe und alle weiteren professionellen Anforderungen.
            </p>
            <button className="cta-button" type="button">
              Jetzt starten
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="cta-image">
            <img alt="Drei professionelle Bewerbungsfotos von Menschen in Businesskleidung, zwei Frauen und ein Mann, alle schauen freundlich in die Kamera" src="https://meinprofilbild.de/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgroup-me.824c96c1.png&w=750&q=75" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>MeinProfilbild</h2>
            <p>
              MeinProfilbild.de – Dein Schnellzugang zu professionellen
              Bewerbungsfotos dank modernster KI-Technologie.
            </p>
            <p className="footer-email">
              info@meinprofilbild.de
            </p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">Fragen und Antworten</a>
              </li>
              <li>
                <a href="#">Preis</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Rechtliches</h3>
            <ul>
              <li>
                <a href="#">Allgemeine Geschäftsbedingungen</a>
              </li>
              <li>
                <a href="#">Datenschutzerklärung</a>
              </li>
              <li>
                <a href="#">Impressum</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a aria-label="YouTube" href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a aria-label="Facebook" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a aria-label="LinkedIn" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a aria-label="X (ehemals Twitter)" href="#">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;