import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact HBM ALU",
};

export default function ContactPage() {
  return (
    <>
      <div className="site-topbar">
        <div className="site-shell bar-wrap">
          <span>
            <i className="bi bi-chat-dots"></i>{" "}
            <span data-i18n="contact.top">Contactez-nous</span>
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
          <a className="btn-main nav-cta" href="#contactForm">
            <i className="bi bi-send-fill"></i>
            <span data-i18n="contact.send">Envoyer</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="site-shell hero-box reveal">
            <div className="hero-content">
              <span className="eyebrow">
                <i className="bi bi-chat-dots"></i>{" "}
                <span data-i18n="nav.contact">Contact</span>
              </span>
              <h1 data-i18n="contact.heroTitle">Parlons de votre projet</h1>
              <p data-i18n="contact.heroLead">
                Demandez un devis ou posez une question: nous vous répondrons
                rapidement.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell reveal delay-1">
            <div className="card" style={{ overflow: "hidden" }}>
              <div className="body">
                <h2 className="mb-3" data-i18n="contact.formTitle">
                  Formulaire de contact
                </h2>

                <form id="contactForm" className="contact-form" noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">
                        <span data-i18n="form.name">Nom</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="form-control"
                        type="text"
                        data-i18n-placeholder="form.namePh"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">
                        <span data-i18n="form.email">Email</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        className="form-control"
                        type="email"
                        data-i18n-placeholder="form.emailPh"
                        placeholder="Votre email"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="phone">
                        <span data-i18n="form.phone">Téléphone</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        className="form-control"
                        type="tel"
                        data-i18n-placeholder="form.phonePh"
                        placeholder="Votre numéro"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="subject">
                        <span data-i18n="form.subject">Sujet</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        className="form-control"
                        type="text"
                        data-i18n-placeholder="form.subjectPh"
                        placeholder="Sujet"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="message">
                        <span data-i18n="form.message">Message</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows={6}
                        data-i18n-placeholder="form.messagePh"
                        placeholder="Votre message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 d-flex align-items-center gap-3">
                      <button type="submit" className="btn-main">
                        <i className="bi bi-send-fill"></i>{" "}
                        <span data-i18n="form.submit">Envoyer</span>
                      </button>

                      <span className="form-status" aria-live="polite"></span>
                    </div>
                  </div>
                </form>

                <div className="mt-4">
                  <p className="muted mb-1">
                    <i className="bi bi-geo-alt-fill"></i>{" "}
                    <span data-i18n="contact.address">Tunis, Tunisie</span>
                  </p>
                  <p className="muted mb-1">
                    <i className="bi bi-telephone-fill"></i>{" "}
                    <a href="tel:+21627333020">+216 27 333 020</a>
                  </p>
                  <p className="muted mb-0">
                    <i className="bi bi-envelope-fill"></i>{" "}
                    <a href="mailto:contact@hbm-alu.tn">contact@hbm-alu.tn</a>
                  </p>
                </div>
              </div>
            </div>
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
            <h3 data-i18n="contact.footerFast">Réponse rapide</h3>
            <p data-i18n="contact.footerFastD">
              Envoyez votre message et on vous rappelle.
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
