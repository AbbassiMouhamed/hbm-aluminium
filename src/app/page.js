import Link from "next/link";

export const metadata = {
  title: "Accueil",
  description:
    "HBM ALU - Votre partenaire en menuiserie aluminium, alucobond, garde-corps et murs rideaux en Tunisie.",
};

export default function HomePage() {
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
            <i className="bi bi-geo-alt-fill"></i> Route de Raoued km 5 Jaafar 1
            Ariana, Tunisie
          </span>
          <span className="topbar-controls">
            <select
              className="lang-switch"
              data-lang-switch
              aria-label="Langue"
            >
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
              <div className="hero-topbar">
                <span className="eyebrow">
                  <i className="bi bi-stars"></i>
                  <span data-i18n="home.eyebrow">Explorons Ensemble</span>
                </span>

                <Link
                  className="btn-main mobile-cta only-mobile"
                  href="/contact"
                >
                  <i className="bi bi-lightning-charge-fill"></i>
                  <span data-i18n="cta.quote">Demander un Devis</span>
                </Link>
              </div>
              <h1>
                <span data-i18n="home.h1Lead">
                  Votre Partenaire de Confiance en Menuiserie
                </span>
                <span className="h1-tail">
                  <span data-i18n="home.h1Tail">Aluminium</span>
                </span>
              </h1>
              <p data-i18n="home.lead">
                HBM ALU est l'expert de la menuiserie aluminium et de
                l'alucobond. Nous concevons des solutions sur mesure pour les
                architectes, constructeurs et propriétaires avec une finition
                moderne et durable.
              </p>
              <div className="hero-actions">
                <Link className="btn-main" href="/services">
                  <i className="bi bi-grid-1x2-fill"></i>
                  <span data-i18n="btn.viewServices">Voir Services</span>
                </Link>
                <Link
                  className="btn-outline btn-outline-light"
                  href="/projects"
                >
                  <i className="bi bi-images"></i>
                  <span data-i18n="btn.viewGallery">Voir Galerie</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="site-shell quick-grid reveal delay-1">
            <article className="quick-card">
              <div className="quick-head">
                <i className="bi bi-tools"></i>
                <h3 data-i18n="home.quick1.title">Fabrication Sur Mesure</h3>
              </div>
              <p className="quick-desc" data-i18n="home.quick1.desc">
                Conception et pose personnalisées selon votre architecture et
                votre budget.
              </p>
            </article>
            <article className="quick-card">
              <div className="quick-head">
                <i className="bi bi-shield-check"></i>
                <h3 data-i18n="home.quick2.title">Qualite Premium</h3>
              </div>
              <p className="quick-desc" data-i18n="home.quick2.desc">
                Matériaux aluminium et alucobond sélectionnés pour résister au
                temps.
              </p>
            </article>
            <article className="quick-card">
              <div className="quick-head">
                <i className="bi bi-bricks"></i>
                <h3 data-i18n="home.quick3.title">Equipe Experte</h3>
              </div>
              <p className="quick-desc" data-i18n="home.quick3.desc">
                Savoir-faire terrain dans les projets résidentiels, commerciaux
                et industriels.
              </p>
            </article>
            <article className="quick-card">
              <div className="quick-head">
                <i className="bi bi-stopwatch"></i>
                <h3 data-i18n="home.quick4.title">Delais Respectes</h3>
              </div>
              <p className="quick-desc" data-i18n="home.quick4.desc">
                Processus de chantier optimisé pour une livraison fluide et
                efficace.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="site-shell section-title">
            <h2 data-i18n="home.featured">Services Vedettes</h2>
            <Link
              className="btn-outline"
              href="/services"
              data-i18n="btn.seeAll"
            >
              Tout Voir
            </Link>
          </div>
          <div className="site-shell card-grid reveal delay-2">
            <article className="card">
              <img src="/images/services/1.jpg" alt="Menuiserie Classique" />
              <div className="body">
                <span className="service-tag">HBM Service</span>
                <h3 data-i18n="services.s1">Menuiserie Classique</h3>
                <p className="muted" data-i18n="services.s1d">
                  Fenêtres, portes et structures aluminium pour maisons et
                  locaux professionnels.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/services/2.jpg" alt="Pose Alucobond" />
              <div className="body">
                <span className="service-tag">HBM Service</span>
                <h3 data-i18n="services.s2">Pose Alucobond</h3>
                <p className="muted" data-i18n="services.s2d">
                  Revêtement extérieur et habillage de façade avec rendu moderne
                  et propre.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/services/3.jpg" alt="Garde Corps" />
              <div className="body">
                <span className="service-tag">HBM Service</span>
                <h3 data-i18n="home.feature3.title">
                  Garde Corps et Murs Rideaux
                </h3>
                <p className="muted" data-i18n="home.feature3.desc">
                  Sécurité et design architectural pour villas, bâtiments et
                  commerces.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="site-shell split">
            <article className="contact-panel reveal">
              <div className="section-title">
                <h2 data-i18n="home.commitment">Notre Engagement</h2>
              </div>
              <p className="muted" data-i18n="home.commitmentText">
                Notre entreprise se distingue par la qualité supérieure de ses
                matériaux, son savoir-faire, la personnalisation de chaque
                produit et un engagement absolu envers la satisfaction client.
              </p>
              <div className="kpi">
                <div className="item">
                  <div className="num">100%</div>
                  <div data-i18n="home.kpi.custom">Sur Mesure</div>
                </div>
                <div className="item">
                  <div className="num">4+</div>
                  <div data-i18n="home.kpi.keyServices">Services Clés</div>
                </div>
                <div className="item">
                  <div className="num">7j/7</div>
                  <div data-i18n="home.kpi.support">Support Commercial</div>
                </div>
                <div className="item">
                  <div className="num">TN</div>
                  <div data-i18n="home.kpi.coverage">Intervention Tunisie</div>
                </div>
              </div>
            </article>

            <article className="contact-panel reveal delay-1">
              <div className="section-title">
                <h2 data-i18n="home.quickContact">Contact Rapide</h2>
              </div>
              <div className="contact-list">
                <div className="row-item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <strong data-i18n="label.phone">Téléphone</strong>
                    <br />
                    <a href="tel:+21627333020">+216 27 333 020</a>
                  </div>
                </div>
                <div className="row-item">
                  <i className="bi bi-envelope"></i>
                  <div>
                    <strong data-i18n="label.email">Email</strong>
                    <br />
                    <a href="mailto:hbm.aluminium@gmail.com">
                      hbm.aluminium@gmail.com
                    </a>
                  </div>
                </div>
                <div className="row-item">
                  <i className="bi bi-geo-alt"></i>
                  <div>
                    <strong data-i18n="label.address">Adresse</strong>
                    <br />
                    Route de Raoued km 5 Jaafar 1 Ariana, Tunisie
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: "0.6rem",
                  flexWrap: "wrap",
                }}
              >
                <Link className="btn-main" href="/contact">
                  <i className="bi bi-send-check"></i>
                  <span data-i18n="btn.sendMessage">Envoyer un Message</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div>
            <h3>HBM ALU</h3>
            <p data-i18n="footer.homeBlurb">
              Votre partenaire de confiance en menuiserie aluminium et alucobond
              avec des solutions élégantes, solides et adaptées à chaque projet.
            </p>
          </div>
          <div>
            <h3 data-i18n="footer.pages">Pages</h3>
            <p>
              <Link href="/" data-i18n="nav.home">
                Accueil
              </Link>
              <br />
              <Link href="/about" data-i18n="nav.about">
                A Propos
              </Link>
              <br />
              <Link href="/services" data-i18n="nav.services">
                Services
              </Link>
              <br />
              <Link href="/projects" data-i18n="nav.projects">
                Projets
              </Link>
              <br />
              <Link href="/contact" data-i18n="nav.contact">
                Contact
              </Link>
            </p>
          </div>
          <div>
            <h3 data-i18n="footer.hours">Horaires</h3>
            <p data-i18n-html="footer.hoursText">
              Lundi - Vendredi: 08:00 - 17:00
              <br />
              Samedi: 08:00 - 13:00
              <br />
              Dimanche: Fermé
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
