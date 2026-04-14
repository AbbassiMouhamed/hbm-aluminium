import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Projects and references HBM ALU",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="site-topbar">
        <div className="site-shell bar-wrap">
          <span>
            <i className="bi bi-images"></i>{" "}
            <span data-i18n="projects.heroTitle">Nos Projets en Images</span>
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
              <img
                className="agrees-badge"
                src="/images/agrees.png"
                alt="Agrées"
              />
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
                <i className="bi bi-images"></i>{" "}
                <span data-i18n="nav.projects">Projets</span>
              </span>
              <h1 data-i18n="projects.heroTitle">Quelques Réalisations</h1>
              <p data-i18n="projects.heroLead">
                Découvrez une sélection de projets: façades, murs rideaux,
                menuiserie et alucobond.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell card-grid reveal delay-1">
            <article className="card">
              <img
                src="/images/blog/blog-grid/blog-grid1.jpg"
                alt="Projet façade aluminium"
              />
              <div className="body">
                <span className="service-tag">Project 01</span>
                <h3 data-i18n="projects.p1">Façade Aluminium</h3>
                <p className="muted" data-i18n="projects.p1d">
                  Habillage et finition premium pour immeubles et commerces.
                </p>
              </div>
            </article>
            <article className="card">
              <img
                src="/images/blog/blog-grid/blog-grid2.jpg"
                alt="Projet mur rideau"
              />
              <div className="body">
                <span className="service-tag">Project 02</span>
                <h3 data-i18n="projects.p2">Mur Rideau</h3>
                <p className="muted" data-i18n="projects.p2d">
                  Grandes surfaces vitrées, confort visuel et esthétique moderne.
                </p>
              </div>
            </article>
            <article className="card">
              <img
                src="/images/blog/blog-grid/blog-grid3.jpg"
                alt="Projet alucobond"
              />
              <div className="body">
                <span className="service-tag">Project 03</span>
                <h3 data-i18n="projects.p3">Alucobond</h3>
                <p className="muted" data-i18n="projects.p3d">
                  Revêtements extérieurs durables avec rendu propre.
                </p>
              </div>
            </article>
            <article className="card">
              <img
                src="/images/blog/blog-grid/blog-grid4.jpg"
                alt="Projet menuiserie"
              />
              <div className="body">
                <span className="service-tag">Project 04</span>
                <h3 data-i18n="projects.p4">Menuiserie</h3>
                <p className="muted" data-i18n="projects.p4d">
                  Fenêtres et portes aluminium adaptées à chaque besoin.
                </p>
              </div>
            </article>
            <article className="card">
              <img
                src="/images/blog/blog-grid/blog-grid5.jpg"
                alt="Projet garde-corps"
              />
              <div className="body">
                <span className="service-tag">Project 05</span>
                <h3 data-i18n="projects.p5">Garde Corps</h3>
                <p className="muted" data-i18n="projects.p5d">
                  Sécurité et design: verre, aluminium, finitions variées.
                </p>
              </div>
            </article>
            <article className="card">
              <img
                src="/images/blog/blog-grid/blog-grid6.jpg"
                alt="Projet structure"
              />
              <div className="body">
                <span className="service-tag">Project 06</span>
                <h3 data-i18n="projects.p6">Structure Sur Mesure</h3>
                <p className="muted" data-i18n="projects.p6d">
                  Conception et exécution selon les plans et contraintes chantier.
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
            <h3 data-i18n="projects.footerNext">Un projet en tête ?</h3>
            <p>
              <Link href="/contact" data-i18n="projects.footerCta">
                Parlons-en
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
