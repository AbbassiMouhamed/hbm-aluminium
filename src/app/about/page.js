import Link from "next/link";

export const metadata = {
  title: "A Propos",
  description: "À propos de HBM ALU",
};

export default function AboutPage() {
  return (
    <>
      <div className="site-topbar">
        <div className="site-shell bar-wrap">
          <span>
            <i className="bi bi-telephone-fill"></i> +216 27 333 020
          </span>
          <span>
            <i className="bi bi-envelope-fill"></i> hbm.aluminium@gmail.com
          </span>
          <span>
            <i className="bi bi-geo-alt-fill"></i> Ariana, Tunisie
          </span>
          <span className="topbar-controls">
            <select className="lang-switch" data-lang-switch aria-label="Langue">
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <button
              className="theme-toggle"
              type="button"
              data-theme-toggle
              aria-pressed="false"
            >
              <i className="bi bi-moon-stars-fill" aria-hidden="true"></i>
              <span className="visually-hidden" data-i18n="theme.toggle">
                Changer le thème
              </span>
            </button>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="site-shell nav-wrap">
          <Link className="brand" href="/" aria-label="HBM ALU home">
            <img src="/images/HMBLogo.png" alt="HBM ALU" />
            <span className="brand-badges" aria-hidden="true">
              <img
                className="agrees-badge"
                src="/images/agrees.png"
                alt="Agrées"
              />
              <img src="/images/aluminium.png" alt="Aluminium" />
            </span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            <Link href="/" data-i18n="nav.home">
              Accueil
            </Link>
            <Link href="/about" data-i18n="nav.about">
              A Propos
            </Link>
            <Link href="/services" data-i18n="nav.services">
              Services
            </Link>
            <Link href="/projects" data-i18n="nav.projects">
              Projets
            </Link>
            <Link href="/contact" data-i18n="nav.contact">
              Contact
            </Link>
          </nav>
          <Link className="btn-main nav-cta" href="/contact">
            <i className="bi bi-lightning-charge-fill"></i>
            <span data-i18n="cta.quote">Demander un Devis</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="site-shell hero-box reveal">
            <div className="hero-content">
              <span className="eyebrow">
                <i className="bi bi-building"></i>{" "}
                <span data-i18n="about.eyebrow">A Propos</span>
              </span>
              <h1 data-i18n="about.heroTitle">HBM ALU, L'Excellence Aluminium</h1>
              <p data-i18n="about.heroLead">
                Notre engagement: matériaux premium, personnalisation complète et
                satisfaction client. Nous créons des solutions sur mesure pour les
                architectes, promoteurs et propriétaires.
              </p>
              <div className="hero-actions only-mobile">
                <Link className="btn-main mobile-cta" href="/contact">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <span data-i18n="cta.quote">Demander un Devis</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell split reveal delay-1">
            <div className="contact-panel">
              <div className="section-title">
                <h2 data-i18n="about.mission">Notre Mission</h2>
              </div>
              <p className="muted" data-i18n="about.mission1">
                Offrir une menuiserie aluminium moderne et durable, avec des
                finitions soignées et une précision de pose élevée. Chaque
                chantier est piloté avec la même exigence de qualité.
              </p>
              <p className="muted" data-i18n="about.mission2">
                Nous intervenons sur les projets résidentiels, professionnels et
                architecturaux avec une logique claire: esthétique, performance et
                longévité.
              </p>
            </div>
            <div className="card">
              <img src="/images/about-us/ft-img1.jpg" alt="Equipe HBM ALU" />
              <div className="body">
                <span className="service-tag" data-i18n="about.valuesTag">
                  Valeurs
                </span>
                <h3 data-i18n="about.valuesTitle">Qualite, Confiance, Precision</h3>
                <p className="muted" data-i18n="about.valuesText">
                  Un suivi transparent du premier contact jusqu'à la livraison
                  finale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell section-title">
            <h2 data-i18n="about.why">Pourquoi Nous Choisir</h2>
          </div>
          <div className="site-shell card-grid reveal delay-2">
            <article className="card">
              <div className="body">
                <h3>
                  <i className="bi bi-award"></i>{" "}
                  <span data-i18n="about.w1">Savoir-Faire</span>
                </h3>
                <p className="muted" data-i18n="about.w1d">
                  Expertise reconnue en menuiserie aluminium et alucobond.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="body">
                <h3>
                  <i className="bi bi-sliders"></i>{" "}
                  <span data-i18n="about.w2">Sur Mesure</span>
                </h3>
                <p className="muted" data-i18n="about.w2d">
                  Solutions personnalisées selon vos besoins techniques et
                  esthétiques.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="body">
                <h3>
                  <i className="bi bi-lightning-charge"></i>{" "}
                  <span data-i18n="about.w3">Reponse Rapide</span>
                </h3>
                <p className="muted" data-i18n="about.w3d">
                  Conseil et devis dans les meilleurs délais pour accélérer votre
                  projet.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div>
            <h3>HBM ALU</h3>
            <p>Route de Raoued km 5 Jaafar 1 Ariana, Tunisie</p>
          </div>
          <div>
            <h3 data-i18n="footer.contact">Contact</h3>
            <p>
              <a href="tel:+21627333020">+216 27 333 020</a>
              <br />
              <a href="mailto:hbm.aluminium@gmail.com">hbm.aluminium@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 data-i18n="footer.follow">Suivez-Nous</h3>
            <p>
              <a href="https://www.facebook.com" target="_blank" rel="noopener">
                Facebook
              </a>
              <br />
              <a href="https://www.instagram.com" target="_blank" rel="noopener">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </footer>

      <nav className="mobile-app-nav" aria-label="Mobile app style navigation">
        <Link data-page href="/">
          <i className="bi bi-house-door-fill"></i>
          <span data-i18n="nav.home">Accueil</span>
        </Link>
        <Link data-page href="/services">
          <i className="bi bi-grid-fill"></i>
          <span data-i18n="nav.services">Services</span>
        </Link>
        <Link data-page href="/projects">
          <i className="bi bi-images"></i>
          <span data-i18n="nav.projects">Projets</span>
        </Link>
        <Link data-page href="/contact">
          <i className="bi bi-chat-dots-fill"></i>
          <span data-i18n="nav.contact">Contact</span>
        </Link>
        <a href="https://www.facebook.com" target="_blank" rel="noopener">
          <i className="bi bi-facebook"></i>
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener">
          <i className="bi bi-instagram"></i>
          <span>Instagram</span>
        </a>
      </nav>
    </>
  );
}
