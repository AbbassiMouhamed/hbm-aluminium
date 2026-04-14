import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Services HBM ALU",
};

export default function ServicesPage() {
  return (
    <>
      <div className="site-topbar">
        <div className="site-shell bar-wrap">
          <span>
            <i className="bi bi-tools"></i>{" "}
            <span data-i18n="services.top">Services Professionnels Aluminium</span>
          </span>
          <span>
            <i className="bi bi-telephone-fill"></i> +216 27 333 020
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
              <img src="/images/aluminium.png" alt="Aluminium" />
              <img src="/images/agrees.png" alt="Agrées" />
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
                <i className="bi bi-grid-1x2"></i>{" "}
                <span data-i18n="nav.services">Services</span>
              </span>
              <h1 data-i18n="services.heroTitle">
                Des Solutions Completes Pour Vos Projets
              </h1>
              <p data-i18n="services.heroLead">
                Basé sur vos besoins, nous livrons des systèmes aluminium fiables,
                élégants et adaptés à votre architecture.
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
          <div className="site-shell card-grid reveal delay-1">
            <article className="card">
              <img src="/images/services/1.jpg" alt="Menuiserie Classique" />
              <div className="body">
                <span className="service-tag">Service 01</span>
                <h3 data-i18n="services.s1">Menuiserie Classique</h3>
                <p className="muted" data-i18n="services.s1d">
                  Fenêtres, portes et structures aluminium pour maisons et locaux
                  professionnels.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/services/2.jpg" alt="Pose Alucobond" />
              <div className="body">
                <span className="service-tag">Service 02</span>
                <h3 data-i18n="services.s2">Pose Alucobond</h3>
                <p className="muted" data-i18n="services.s2d">
                  Revêtement extérieur et habillage de façade avec rendu moderne et
                  propre.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/services/3.jpg" alt="Garde Corps" />
              <div className="body">
                <span className="service-tag">Service 03</span>
                <h3 data-i18n="services.s3">Garde Corps</h3>
                <p className="muted" data-i18n="services.s3d">
                  Solutions de sécurité esthétiques pour escaliers, terrasses et
                  balcons.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/services/4.jpg" alt="Mur Rideaux" />
              <div className="body">
                <span className="service-tag">Service 04</span>
                <h3 data-i18n="services.s4">Murs Rideaux</h3>
                <p className="muted" data-i18n="services.s4d">
                  Façades vitrées aluminium pour une image premium et une belle
                  luminosité.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/services/5.jpg" alt="Façades" />
              <div className="body">
                <span className="service-tag">Service 05</span>
                <h3 data-i18n="services.s5">Facades Aluminium</h3>
                <p className="muted" data-i18n="services.s5d">
                  Conception et exécution de façades sur mesure pour projets
                  architecturaux.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/services/6.jpg" alt="Maintenance" />
              <div className="body">
                <span className="service-tag">Service 06</span>
                <h3 data-i18n="services.s6">Conseil et Suivi</h3>
                <p className="muted" data-i18n="services.s6d">
                  Accompagnement technique, recommandations matériaux et suivi
                  chantier.
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
            <p data-i18n="footer.servicesBlurb">
              Experts en menuiserie aluminium et alucobond.
            </p>
          </div>
          <div>
            <h3 data-i18n="services.footerNeed">Besoin d'un devis ?</h3>
            <p>
              <Link href="/contact" data-i18n="services.footerCta">
                Contactez-nous maintenant
              </Link>
            </p>
          </div>
          <div>
            <h3 data-i18n="services.footerPhone">Telephone</h3>
            <p>
              <a href="tel:+21627333020">+216 27 333 020</a>
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
