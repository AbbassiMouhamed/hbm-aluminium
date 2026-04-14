(function () {
  function normalizePathname(input) {
    var raw = input == null ? "" : String(input);
    raw = raw.split("?")[0].split("#")[0];

    var pathname = raw;
    try {
      pathname = new URL(raw, window.location.href).pathname;
    } catch (e) {}

    if (!pathname) pathname = "/";
    if (!pathname.startsWith("/")) pathname = "/" + pathname;
    if (pathname === "/index.html") pathname = "/";
    if (pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    return pathname;
  }

  var currentPath = normalizePathname(window.location.pathname || "/");

  function markActive(selector) {
    document.querySelectorAll(selector).forEach(function (link) {
      var target = link.getAttribute("href");
      if (!target) return;
      if (target.charAt(0) === "#") return;
      if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(target)) return;

      var targetPath = normalizePathname(target);
      if (targetPath === currentPath) link.classList.add("active");
    });
  }

  markActive(".nav-links a");
  markActive(".mobile-app-nav a[data-page]");

  var I18N = {
    fr: {
      dir: "ltr",
      strings: {
        "meta.homeTitle": "HBM ALU | Accueil",
        "meta.homeDesc":
          "HBM ALU - Votre partenaire en menuiserie aluminium, alucobond, garde-corps et murs rideaux en Tunisie.",
        "meta.aboutTitle": "HBM ALU | A Propos",
        "meta.aboutDesc": "À propos de HBM ALU",
        "meta.servicesTitle": "HBM ALU | Services",
        "meta.servicesDesc": "Services HBM ALU",
        "meta.projectsTitle": "HBM ALU | Projets",
        "meta.projectsDesc": "Projets et galerie HBM ALU",
        "meta.contactTitle": "HBM ALU | Contact",
        "meta.contactDesc": "Contact HBM ALU",
        "lang.label": "Langue",
        "theme.toggle": "Changer le thème",
        "nav.home": "Accueil",
        "nav.about": "A Propos",
        "nav.services": "Services",
        "nav.projects": "Projets",
        "nav.contact": "Contact",
        "cta.quote": "Demander un Devis",
        "cta.call": "Appeler",
        "btn.viewServices": "Voir Services",
        "btn.viewGallery": "Voir Galerie",
        "btn.seeAll": "Tout Voir",
        "btn.sendMessage": "Envoyer un Message",
        "btn.send": "Envoyer",
        "form.sending": "Envoi en cours...",
        "form.sent": "Message envoyé. Merci !",
        "form.error": "Erreur d'envoi. Réessayez plus tard.",
        "form.localServer":
          "Le formulaire ne peut pas fonctionner en mode fichier (file://). Lancez le site avec un serveur local (ex: vercel dev) ou testez sur Vercel.",
        "home.eyebrow": "Explorons Ensemble",
        "home.h1Lead": "Votre Partenaire de Confiance en Menuiserie",
        "home.h1Tail": "Aluminium",
        "home.lead":
          "HBM ALU est l'expert de la menuiserie aluminium et de l'alucobond. Nous concevons des solutions sur mesure pour les architectes, constructeurs et propriétaires avec une finition moderne et durable.",
        "home.quick1.title": "Fabrication Sur Mesure",
        "home.quick1.desc":
          "Conception et pose personnalisées selon votre architecture et votre budget.",
        "home.quick2.title": "Qualite Premium",
        "home.quick2.desc":
          "Matériaux aluminium et alucobond sélectionnés pour résister au temps.",
        "home.quick3.title": "Equipe Experte",
        "home.quick3.desc":
          "Savoir-faire terrain dans les projets résidentiels, commerciaux et industriels.",
        "home.quick4.title": "Delais Respectes",
        "home.quick4.desc":
          "Processus de chantier optimisé pour une livraison fluide et efficace.",
        "home.featured": "Services Vedettes",
        "home.feature3.title": "Garde Corps et Murs Rideaux",
        "home.feature3.desc":
          "Sécurité et design architectural pour villas, bâtiments et commerces.",
        "home.commitment": "Notre Engagement",
        "home.commitmentText":
          "Notre entreprise se distingue par la qualité supérieure de ses matériaux, son savoir-faire, la personnalisation de chaque produit et un engagement absolu envers la satisfaction client.",
        "home.kpi.custom": "Sur Mesure",
        "home.kpi.keyServices": "Services Clés",
        "home.kpi.support": "Support Commercial",
        "home.kpi.coverage": "Intervention Tunisie",
        "home.quickContact": "Contact Rapide",
        "label.phone": "Téléphone",
        "label.email": "Email",
        "label.address": "Adresse",
        "label.hours": "Horaires",
        "footer.contact": "Contact",
        "footer.pages": "Pages",
        "footer.hours": "Horaires",
        "footer.follow": "Suivez-Nous",
        "footer.networks": "Reseaux",
        "footer.homeBlurb":
          "Votre partenaire de confiance en menuiserie aluminium et alucobond avec des solutions élégantes, solides et adaptées à chaque projet.",
        "footer.servicesBlurb": "Experts en menuiserie aluminium et alucobond.",
        "footer.contactDirect": "Contact Direct",
        "footer.thanks":
          "Merci pour votre confiance. Nous vous accompagnons de l'idée à la réalisation.",
        "footer.hoursText":
          "Lundi - Vendredi: 08:00 - 17:00<br />Samedi: 08:00 - 13:00<br />Dimanche: Fermé",
        "services.top": "Services Professionnels Aluminium",
        "services.heroTitle": "Des Solutions Completes Pour Vos Projets",
        "services.heroLead":
          "Basé sur vos besoins, nous livrons des systèmes aluminium fiables, élégants et adaptés à votre architecture.",
        "services.s1": "Menuiserie Classique",
        "services.s1d":
          "Fenêtres, portes et structures aluminium pour maisons et locaux professionnels.",
        "services.s2": "Pose Alucobond",
        "services.s2d":
          "Revêtement extérieur et habillage de façade avec rendu moderne et propre.",
        "services.s3": "Garde Corps",
        "services.s3d":
          "Solutions de sécurité esthétiques pour escaliers, terrasses et balcons.",
        "services.s4": "Murs Rideaux",
        "services.s4d":
          "Façades vitrées aluminium pour une image premium et une belle luminosité.",
        "services.s5": "Facades Aluminium",
        "services.s5d":
          "Conception et exécution de façades sur mesure pour projets architecturaux.",
        "services.s6": "Conseil et Suivi",
        "services.s6d":
          "Accompagnement technique, recommandations matériaux et suivi chantier.",
        "services.footerNeed": "Besoin d'un devis ?",
        "services.footerCta": "Contactez-nous maintenant",
        "services.footerPhone": "Telephone",
        "projects.topGallery": "Galerie",
        "projects.topTunisia": "Tunisie",
        "projects.eyebrow": "Realisations",
        "projects.heroTitle": "Nos Projets en Images",
        "projects.heroLead":
          "Une sélection de réalisations inspirées de nos interventions en menuiserie aluminium, façades et finition architecturale.",
        "projects.gallery": "Galerie",
        "projects.zones": "Zones d'Intervention",
        "projects.zonesText":
          "Nous intervenons en Tunisie selon la nature du chantier. Contactez-nous pour valider la faisabilité et les délais selon votre région.",
        "projects.footerAlso": "Voir Aussi",
        "projects.footerServices": "Nos Services",
        "projects.footerTalk": "Parler d'un Projet",
        "projects.footerContact": "Contact",
        "projects.footerTag":
          "Nous transformons vos idées en réalisations durables.",
        "about.eyebrow": "A Propos",
        "about.heroTitle": "HBM ALU, L'Excellence Aluminium",
        "about.heroLead":
          "Notre engagement: matériaux premium, personnalisation complète et satisfaction client. Nous créons des solutions sur mesure pour les architectes, promoteurs et propriétaires.",
        "about.mission": "Notre Mission",
        "about.mission1":
          "Offrir une menuiserie aluminium moderne et durable, avec des finitions soignées et une précision de pose élevée. Chaque chantier est piloté avec la même exigence de qualité.",
        "about.mission2":
          "Nous intervenons sur les projets résidentiels, professionnels et architecturaux avec une logique claire: esthétique, performance et longévité.",
        "about.valuesTag": "Valeurs",
        "about.valuesTitle": "Qualite, Confiance, Precision",
        "about.valuesText":
          "Un suivi transparent du premier contact jusqu'à la livraison finale.",
        "about.why": "Pourquoi Nous Choisir",
        "about.w1": "Savoir-Faire",
        "about.w1d": "Expertise reconnue en menuiserie aluminium et alucobond.",
        "about.w2": "Sur Mesure",
        "about.w2d":
          "Solutions personnalisées selon vos besoins techniques et esthétiques.",
        "about.w3": "Reponse Rapide",
        "about.w3d":
          "Conseil et devis dans les meilleurs délais pour accélérer votre projet.",
        "contact.top": "Contactez-nous",
        "contact.send": "Envoyer",
        "contact.formTitle": "Formulaire de contact",
        "contact.address": "Tunis, Tunisie",
        "contact.footerFast": "Réponse rapide",
        "contact.footerFastD": "Envoyez votre message et on vous rappelle.",
        "contact.topHours": "Lun-Ven 08:00-17:00 | Sam 08:00-13:00",
        "contact.eyebrow": "Demandez Votre Devis Gratuit",
        "contact.heroTitle": "Parlons de Votre Projet",
        "contact.heroLead":
          "Remplissez le formulaire et nous vous répondrons dans les plus brefs délais avec une proposition adaptée.",
        "contact.details": "Nos Coordonnees",
        "contact.form": "Formulaire",
        "form.name": "Nom",
        "form.namePh": "Votre nom",
        "form.email": "Email",
        "form.emailPh": "Votre email",
        "form.phonePh": "Votre numéro",
        "form.subject": "Sujet",
        "form.subjectPh": "Sujet",
        "form.messagePh": "Votre message",
        "form.submit": "Envoyer",
        "form.fullName": "Nom complet",
        "form.phone": "Téléphone",
        "form.service": "Service souhaité",
        "form.message": "Décrivez votre projet",
        "form.service.s1": "Menuiserie Classique",
        "form.service.s2": "Pose Alucobond",
        "form.service.s3": "Garde Corps",
        "form.service.s4": "Murs Rideaux",

        "projects.p1": "Façade Aluminium",
        "projects.p1d": "Habillage et finition premium pour immeubles et commerces.",
        "projects.p2": "Mur Rideau",
        "projects.p2d": "Grandes surfaces vitrées, confort visuel et esthétique moderne.",
        "projects.p3": "Alucobond",
        "projects.p3d": "Revêtements extérieurs durables avec rendu propre.",
        "projects.p4": "Menuiserie",
        "projects.p4d": "Fenêtres et portes aluminium adaptées à chaque besoin.",
        "projects.p5": "Garde Corps",
        "projects.p5d": "Sécurité et design: verre, aluminium, finitions variées.",
        "projects.p6": "Structure Sur Mesure",
        "projects.p6d": "Conception et exécution selon les plans et contraintes chantier.",
        "projects.footerNext": "Un projet en tête ?",
        "projects.footerCta": "Parlons-en",
      },
    },
    en: {
      dir: "ltr",
      strings: {
        "meta.homeTitle": "HBM ALU | Home",
        "meta.homeDesc":
          "HBM ALU - Your partner in aluminium joinery, Alucobond, guardrails, and curtain walls in Tunisia.",
        "meta.aboutTitle": "HBM ALU | About",
        "meta.aboutDesc": "About HBM ALU",
        "meta.servicesTitle": "HBM ALU | Services",
        "meta.servicesDesc": "HBM ALU services",
        "meta.projectsTitle": "HBM ALU | Projects",
        "meta.projectsDesc": "HBM ALU projects and gallery",
        "meta.contactTitle": "HBM ALU | Contact",
        "meta.contactDesc": "Contact HBM ALU",
        "lang.label": "Language",
        "theme.toggle": "Toggle theme",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "cta.quote": "Request a Quote",
        "cta.call": "Call",
        "btn.viewServices": "View Services",
        "btn.viewGallery": "View Gallery",
        "btn.seeAll": "See All",
        "btn.sendMessage": "Send a Message",
        "btn.send": "Send",
        "form.sending": "Sending...",
        "form.sent": "Message sent. Thank you!",
        "form.error": "Sending failed. Please try again later.",
        "form.localServer":
          "The form can't work from file://. Run the site with a local server (e.g. vercel dev) or test on Vercel.",
        "home.eyebrow": "Let's Explore",
        "home.h1Lead": "Your Trusted Partner in",
        "home.h1Tail": "Aluminium",
        "home.lead":
          "HBM ALU is an expert in aluminium joinery and Alucobond. We design custom solutions for architects, builders, and homeowners with a modern, durable finish.",
        "home.quick1.title": "Custom Fabrication",
        "home.quick1.desc":
          "Design and installation tailored to your project and budget.",
        "home.quick2.title": "Premium Quality",
        "home.quick2.desc":
          "Selected aluminium and Alucobond materials built to last.",
        "home.quick3.title": "Expert Team",
        "home.quick3.desc":
          "Hands-on experience across residential, commercial, and industrial work.",
        "home.quick4.title": "On-Time Delivery",
        "home.quick4.desc":
          "Optimized workflow for smooth, efficient delivery.",
        "home.featured": "Featured Services",
        "home.feature3.title": "Guardrails & Curtain Walls",
        "home.feature3.desc":
          "Safety and architectural design for villas, buildings, and commercial spaces.",
        "home.commitment": "Our Commitment",
        "home.commitmentText":
          "We stand out through top-quality materials, proven know-how, tailored products, and a strong commitment to customer satisfaction.",
        "home.kpi.custom": "Custom",
        "home.kpi.keyServices": "Key Services",
        "home.kpi.support": "Business Support",
        "home.kpi.coverage": "Coverage Tunisia",
        "home.quickContact": "Quick Contact",
        "label.phone": "Phone",
        "label.email": "Email",
        "label.address": "Address",
        "label.hours": "Hours",
        "footer.contact": "Contact",
        "footer.pages": "Pages",
        "footer.hours": "Hours",
        "footer.follow": "Follow Us",
        "footer.networks": "Social",
        "footer.homeBlurb":
          "Your trusted partner in aluminium joinery and Alucobond with elegant, solid solutions tailored to every project.",
        "footer.servicesBlurb": "Experts in aluminium joinery and Alucobond.",
        "footer.contactDirect": "Direct Contact",
        "footer.thanks":
          "Thanks for your trust. We support you from idea to delivery.",
        "footer.hoursText":
          "Mon - Fri: 08:00 - 17:00<br />Sat: 08:00 - 13:00<br />Sun: Closed",
        "services.top": "Professional Aluminium Services",
        "services.heroTitle": "Complete Solutions for Your Projects",
        "services.heroLead":
          "Based on your needs, we deliver reliable, elegant aluminium systems tailored to your architecture.",
        "services.s1": "Classic Joinery",
        "services.s1d":
          "Windows, doors, and aluminium structures for homes and businesses.",
        "services.s2": "Alucobond Installation",
        "services.s2d":
          "Exterior cladding and facade finishes with a clean modern result.",
        "services.s3": "Guardrails",
        "services.s3d":
          "Elegant safety solutions for stairs, terraces, and balconies.",
        "services.s4": "Curtain Walls",
        "services.s4d":
          "Aluminium glazed facades for a premium look and great daylight.",
        "services.s5": "Aluminium Facades",
        "services.s5d":
          "Design and execution of bespoke facades for architectural projects.",
        "services.s6": "Advice & Follow-up",
        "services.s6d":
          "Technical guidance, material recommendations, and site follow-up.",
        "services.footerNeed": "Need a quote?",
        "services.footerCta": "Contact us now",
        "services.footerPhone": "Phone",
        "projects.topGallery": "Gallery",
        "projects.topTunisia": "Tunisia",
        "projects.eyebrow": "Showcase",
        "projects.heroTitle": "Our Projects in Pictures",
        "projects.heroLead":
          "A selection of work inspired by our aluminium joinery, facades, and architectural finishes.",
        "projects.gallery": "Gallery",
        "projects.zones": "Service Areas",
        "projects.zonesText":
          "We operate across Tunisia depending on the project. Contact us to confirm feasibility and timelines in your region.",
        "projects.footerAlso": "Also See",
        "projects.footerServices": "Our Services",
        "projects.footerTalk": "Talk About a Project",
        "projects.footerContact": "Contact",
        "projects.footerTag": "We turn your ideas into durable results.",
        "about.eyebrow": "About",
        "about.heroTitle": "HBM ALU, Aluminium Excellence",
        "about.heroLead":
          "Our commitment: premium materials, full customization, and customer satisfaction. We build bespoke solutions for architects, developers, and owners.",
        "about.mission": "Our Mission",
        "about.mission1":
          "Deliver modern, durable aluminium joinery with refined finishes and precise installation. Every site is managed with the same quality standards.",
        "about.mission2":
          "We work on residential, professional, and architectural projects with a clear goal: aesthetics, performance, and longevity.",
        "about.valuesTag": "Values",
        "about.valuesTitle": "Quality, Trust, Precision",
        "about.valuesText":
          "Transparent follow-up from first contact to final delivery.",
        "about.why": "Why Choose Us",
        "about.w1": "Know-How",
        "about.w1d": "Recognized expertise in aluminium joinery and Alucobond.",
        "about.w2": "Tailor-Made",
        "about.w2d":
          "Solutions tailored to your technical and aesthetic needs.",
        "about.w3": "Fast Response",
        "about.w3d": "Advice and quotes quickly to speed up your project.",
        "contact.top": "Contact Us",
        "contact.send": "Send",
        "contact.formTitle": "Contact form",
        "contact.address": "Tunis, Tunisia",
        "contact.footerFast": "Fast response",
        "contact.footerFastD": "Send your message and we'll call you back.",
        "contact.topHours": "Mon-Fri 08:00-17:00 | Sat 08:00-13:00",
        "contact.eyebrow": "Request Your Free Quote",
        "contact.heroTitle": "Let's Talk About Your Project",
        "contact.heroLead":
          "Fill out the form and we will get back to you quickly with a tailored proposal.",
        "contact.details": "Our Details",
        "contact.form": "Form",
        "form.name": "Name",
        "form.namePh": "Your name",
        "form.email": "Email",
        "form.emailPh": "Your email",
        "form.phonePh": "Your phone number",
        "form.subject": "Subject",
        "form.subjectPh": "Subject",
        "form.messagePh": "Your message",
        "form.submit": "Send",
        "form.fullName": "Full name",
        "form.phone": "Phone",
        "form.service": "Desired service",
        "form.message": "Describe your project",
        "form.service.s1": "Classic Joinery",
        "form.service.s2": "Alucobond Installation",
        "form.service.s3": "Guardrails",
        "form.service.s4": "Curtain Walls",

        "projects.p1": "Aluminium Facade",
        "projects.p1d": "Premium cladding and finishing for buildings and shops.",
        "projects.p2": "Curtain Wall",
        "projects.p2d": "Large glazed surfaces with modern aesthetics.",
        "projects.p3": "Alucobond",
        "projects.p3d": "Durable exterior cladding with a clean result.",
        "projects.p4": "Joinery",
        "projects.p4d": "Aluminium windows and doors tailored to your needs.",
        "projects.p5": "Guardrails",
        "projects.p5d": "Safety and design: glass, aluminium, multiple finishes.",
        "projects.p6": "Custom Structure",
        "projects.p6d": "Design and execution based on plans and site constraints.",
        "projects.footerNext": "Have a project in mind?",
        "projects.footerCta": "Let's talk",
      },
    },
    ar: {
      dir: "rtl",
      strings: {
        "meta.homeTitle": "HBM ALU | الرئيسية",
        "meta.homeDesc":
          "HBM ALU - شريكك في نجارة الألومنيوم والألوكوبوند والحواجز والواجهات الزجاجية في تونس.",
        "meta.aboutTitle": "HBM ALU | من نحن",
        "meta.aboutDesc": "من نحن - HBM ALU",
        "meta.servicesTitle": "HBM ALU | الخدمات",
        "meta.servicesDesc": "خدمات HBM ALU",
        "meta.projectsTitle": "HBM ALU | المشاريع",
        "meta.projectsDesc": "مشاريع HBM ALU والمعرض",
        "meta.contactTitle": "HBM ALU | اتصل بنا",
        "meta.contactDesc": "اتصل بـ HBM ALU",
        "lang.label": "اللغة",
        "theme.toggle": "تغيير السمة",
        "nav.home": "الرئيسية",
        "nav.about": "من نحن",
        "nav.services": "الخدمات",
        "nav.projects": "المشاريع",
        "nav.contact": "اتصل بنا",
        "cta.quote": "اطلب عرض سعر",
        "cta.call": "اتصل",
        "btn.viewServices": "عرض الخدمات",
        "btn.viewGallery": "عرض المعرض",
        "btn.seeAll": "عرض الكل",
        "btn.sendMessage": "إرسال رسالة",
        "btn.send": "إرسال",
        "form.sending": "جارٍ الإرسال...",
        "form.sent": "تم إرسال الرسالة. شكراً لك!",
        "form.error": "فشل الإرسال. حاول لاحقاً.",
        "form.localServer":
          "لا يمكن للنموذج العمل عند فتح الموقع عبر file://. شغّل الموقع عبر خادم محلي (مثل vercel dev) أو اختبره على Vercel.",
        "home.eyebrow": "لنبدأ معاً",
        "home.h1Lead": "شريكك الموثوق في نجارة",
        "home.h1Tail": "الألومنيوم",
        "home.lead":
          "HBM ALU خبيرة في نجارة الألومنيوم والألوكوبوند. نصمم حلولاً حسب الطلب للمهندسين المعماريين والمقاولين والمالكين بلمسة عصرية وتشطيب متين.",
        "home.quick1.title": "تصنيع حسب الطلب",
        "home.quick1.desc": "تصميم وتركيب مخصصان حسب مشروعك وميزانيتك.",
        "home.quick2.title": "جودة ممتازة",
        "home.quick2.desc": "مواد ألومنيوم وألوكوبوند مختارة لتدوم طويلاً.",
        "home.quick3.title": "فريق محترف",
        "home.quick3.desc":
          "خبرة ميدانية في المشاريع السكنية والتجارية والصناعية.",
        "home.quick4.title": "التزام بالمواعيد",
        "home.quick4.desc": "سير عمل مُحسّن لتسليم سلس وفعّال.",
        "home.featured": "خدمات مميزة",
        "home.feature3.title": "حواجز وواجهات زجاجية",
        "home.feature3.desc": "أمان وتصميم معماري للفلل والمباني والمحلات.",
        "home.commitment": "التزامنا",
        "home.commitmentText":
          "نتميز بجودة المواد العالية والخبرة والتخصيص في كل منتج والالتزام التام برضا العملاء.",
        "home.kpi.custom": "حسب الطلب",
        "home.kpi.keyServices": "خدمات أساسية",
        "home.kpi.support": "دعم تجاري",
        "home.kpi.coverage": "تغطية تونس",
        "home.quickContact": "تواصل سريع",
        "label.phone": "الهاتف",
        "label.email": "البريد الإلكتروني",
        "label.address": "العنوان",
        "label.hours": "ساعات العمل",
        "footer.contact": "اتصل بنا",
        "footer.pages": "الصفحات",
        "footer.hours": "ساعات العمل",
        "footer.follow": "تابعنا",
        "footer.networks": "الشبكات",
        "footer.homeBlurb":
          "شريكك الموثوق في نجارة الألومنيوم والألوكوبوند بحلول أنيقة ومتينة ومناسبة لكل مشروع.",
        "footer.servicesBlurb": "خبراء في نجارة الألومنيوم والألوكوبوند.",
        "footer.contactDirect": "تواصل مباشر",
        "footer.thanks": "شكراً لثقتك. نرافقك من الفكرة إلى التنفيذ.",
        "footer.hoursText":
          "الإثنين - الجمعة: 08:00 - 17:00<br />السبت: 08:00 - 13:00<br />الأحد: مغلق",
        "services.top": "خدمات الألومنيوم الاحترافية",
        "services.heroTitle": "حلول متكاملة لمشاريعك",
        "services.heroLead":
          "وفقاً لاحتياجاتك، نقدم أنظمة ألومنيوم موثوقة وأنيقة تناسب تصميمك.",
        "services.s1": "نجارة كلاسيكية",
        "services.s1d": "نوافذ وأبواب وهياكل ألومنيوم للمنازل والمحلات.",
        "services.s2": "تركيب ألوكوبوند",
        "services.s2d": "كسوة خارجية وتشطيب واجهات بنتيجة عصرية ونظيفة.",
        "services.s3": "حواجز / درابزين",
        "services.s3d": "حلول أمان أنيقة للسلالم والتراسات والشرفات.",
        "services.s4": "واجهات زجاجية",
        "services.s4d": "واجهات ألمنيوم زجاجية لمظهر فاخر وإضاءة جميلة.",
        "services.s5": "واجهات ألومنيوم",
        "services.s5d": "تصميم وتنفيذ واجهات حسب الطلب للمشاريع المعمارية.",
        "services.s6": "استشارة ومتابعة",
        "services.s6d": "دعم تقني وتوصيات مواد ومتابعة الورشة.",
        "services.footerNeed": "تحتاج عرض سعر؟",
        "services.footerCta": "تواصل معنا الآن",
        "services.footerPhone": "الهاتف",
        "projects.topGallery": "المعرض",
        "projects.topTunisia": "تونس",
        "projects.eyebrow": "أعمالنا",
        "projects.heroTitle": "مشاريعنا بالصور",
        "projects.heroLead":
          "مختارات من أعمالنا في نجارة الألومنيوم والواجهات والتشطيبات المعمارية.",
        "projects.gallery": "المعرض",
        "projects.zones": "مناطق التدخل",
        "projects.zonesText":
          "نشتغل في تونس حسب طبيعة المشروع. اتصل بنا لتأكيد الإمكانية والآجال في منطقتك.",
        "projects.footerAlso": "شاهد أيضاً",
        "projects.footerServices": "خدماتنا",
        "projects.footerTalk": "تحدث عن مشروع",
        "projects.footerContact": "اتصل بنا",
        "projects.footerTag": "نحوّل أفكارك إلى إنجازات تدوم.",
        "about.eyebrow": "من نحن",
        "about.heroTitle": "HBM ALU، تميز الألومنيوم",
        "about.heroLead":
          "التزامنا: مواد ممتازة وتخصيص كامل ورضا العملاء. نصنع حلولاً حسب الطلب للمهندسين والمطورين والمالكين.",
        "about.mission": "مهمتنا",
        "about.mission1":
          "تقديم نجارة ألومنيوم عصرية ومتينة بتشطيب راقٍ وتركيب دقيق. كل مشروع يُدار بنفس معايير الجودة.",
        "about.mission2":
          "ننجز مشاريع سكنية وتجارية ومعمارية بهدف واضح: الجمال والأداء وطول العمر.",
        "about.valuesTag": "قيمنا",
        "about.valuesTitle": "جودة، ثقة، دقة",
        "about.valuesText": "متابعة شفافة من أول تواصل إلى التسليم النهائي.",
        "about.why": "لماذا تختارنا",
        "about.w1": "خبرة",
        "about.w1d": "خبرة معترف بها في نجارة الألومنيوم والألوكوبوند.",
        "about.w2": "حسب الطلب",
        "about.w2d": "حلول مخصصة حسب احتياجاتك التقنية والجمالية.",
        "about.w3": "استجابة سريعة",
        "about.w3d": "نصائح وعروض أسعار بسرعة لتسريع مشروعك.",
        "contact.top": "اتصل بنا",
        "contact.send": "إرسال",
        "contact.formTitle": "نموذج التواصل",
        "contact.address": "تونس، تونس",
        "contact.footerFast": "رد سريع",
        "contact.footerFastD": "أرسل رسالتك وسنتواصل معك بسرعة.",
        "contact.topHours": "الإثنين-الجمعة 08:00-17:00 | السبت 08:00-13:00",
        "contact.eyebrow": "اطلب عرض سعر مجاني",
        "contact.heroTitle": "لنتحدث عن مشروعك",
        "contact.heroLead": "املأ النموذج وسنرد عليك سريعاً باقتراح مناسب.",
        "contact.details": "معلومات التواصل",
        "contact.form": "النموذج",
        "form.name": "الاسم",
        "form.namePh": "اسمك",
        "form.email": "البريد الإلكتروني",
        "form.emailPh": "بريدك الإلكتروني",
        "form.phonePh": "رقم الهاتف",
        "form.subject": "الموضوع",
        "form.subjectPh": "الموضوع",
        "form.messagePh": "رسالتك",
        "form.submit": "إرسال",
        "form.fullName": "الاسم الكامل",
        "form.phone": "الهاتف",
        "form.service": "الخدمة المطلوبة",
        "form.message": "صف مشروعك",
        "form.service.s1": "نجارة كلاسيكية",
        "form.service.s2": "تركيب ألوكوبوند",
        "form.service.s3": "حواجز / درابزين",
        "form.service.s4": "واجهات زجاجية",

        "projects.p1": "واجهة ألومنيوم",
        "projects.p1d": "كسوة وتشطيب فاخر للمباني والمحلات.",
        "projects.p2": "واجهة زجاجية",
        "projects.p2d": "مساحات زجاجية كبيرة مع مظهر عصري.",
        "projects.p3": "ألوكوبوند",
        "projects.p3d": "كسوة خارجية متينة بنتيجة نظيفة.",
        "projects.p4": "نجارة",
        "projects.p4d": "نوافذ وأبواب ألومنيوم حسب الحاجة.",
        "projects.p5": "حواجز / درابزين",
        "projects.p5d": "أمان وتصميم: زجاج، ألومنيوم، تشطيبات متعددة.",
        "projects.p6": "هيكل حسب الطلب",
        "projects.p6d": "تصميم وتنفيذ حسب المخططات وقيود الورشة.",
        "projects.footerNext": "هل لديك مشروع؟",
        "projects.footerCta": "تواصل معنا",
      },
    },
  };

  function getStoredTheme() {
    try {
      return localStorage.getItem("hbmTheme") || "";
    } catch (e) {
      return "";
    }
  }

  function setStoredTheme(theme) {
    try {
      if (!theme) {
        localStorage.removeItem("hbmTheme");
        return;
      }
      localStorage.setItem("hbmTheme", theme);
    } catch (e) {}
  }

  function getSystemTheme() {
    try {
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (e) {
      return "light";
    }
  }

  function applyTheme(theme) {
    var chosen = theme || getSystemTheme();
    document.documentElement.setAttribute("data-theme", chosen);

    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      var isDark = chosen === "dark";
      toggle.setAttribute("aria-pressed", String(isDark));
      var icon = toggle.querySelector("i");
      if (icon) {
        icon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
      }
    }
  }

  function getStoredLang() {
    try {
      return localStorage.getItem("hbmLang") || "fr";
    } catch (e) {
      return "fr";
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem("hbmLang", lang);
    } catch (e) {}
  }

  function translate(lang, key) {
    var pack = I18N[lang] && I18N[lang].strings;
    var frPack = I18N.fr.strings;
    return (pack && pack[key]) || frPack[key] || "";
  }

  function applyI18n(lang) {
    var dir = (I18N[lang] && I18N[lang].dir) || "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = translate(lang, key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = translate(lang, key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      el.setAttribute("placeholder", translate(lang, key));
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var attr = el.getAttribute("data-i18n-attr");
      var key = el.getAttribute("data-i18n");
      if (!attr || !key) return;
      el.setAttribute(attr, translate(lang, key));
    });
  }

  var lang = getStoredLang();
  if (!I18N[lang]) lang = "fr";
  applyI18n(lang);

  var storedTheme = getStoredTheme();
  if (storedTheme !== "light" && storedTheme !== "dark") storedTheme = "";
  applyTheme(storedTheme);

  try {
    var mq =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    if (mq && mq.addEventListener) {
      mq.addEventListener("change", function () {
        if (!getStoredTheme()) applyTheme("");
      });
    }
  } catch (e) {}

  var switcher = document.querySelector("[data-lang-switch]");
  if (switcher) {
    switcher.value = lang;
    switcher.addEventListener("change", function () {
      var next = switcher.value;
      if (!I18N[next]) next = "fr";
      lang = next;
      setStoredLang(next);
      applyI18n(next);
    });
  }

  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current =
        document.documentElement.getAttribute("data-theme") || getSystemTheme();
      var next = current === "dark" ? "light" : "dark";
      setStoredTheme(next);
      applyTheme(next);
    });
  }

  var contactForm =
    document.getElementById("contactForm") ||
    document.getElementById("contact-form");
  if (contactForm) {
    var statusEl = contactForm.querySelector(".form-status");

    function setStatus(kind, key) {
      if (!statusEl) return;
      statusEl.classList.remove("success");
      statusEl.classList.remove("error");
      if (kind) statusEl.classList.add(kind);
      statusEl.textContent = key ? translate(lang, key) : "";
    }

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (window.location && window.location.protocol === "file:") {
        setStatus("error", "form.localServer");
        return;
      }

      setStatus("", "form.sending");

      var formData = new FormData(contactForm);
      var url = contactForm.getAttribute("action") || "/api/contact";

      var payload = {};
      try {
        formData.forEach(function (value, key) {
          payload[key] = String(value);
        });
      } catch (e) {
        // If FormData#forEach isn't available, fall back to basic reads
        payload.name = contactForm.querySelector('[name="name"]')?.value || "";
        payload.phone =
          contactForm.querySelector('[name="phone"]')?.value || "";
        payload.email =
          contactForm.querySelector('[name="email"]')?.value || "";
        payload.service =
          contactForm.querySelector('[name="service"]')?.value || "";
        payload.message =
          contactForm.querySelector('[name="message"]')?.value || "";
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then(function (data) {
          if (!data || !data.ok) throw new Error("bad response");
          contactForm.reset();
          setStatus("success", "form.sent");
        })
        .catch(function () {
          setStatus("error", "form.error");
        });
    });
  }

  function openBadgePopover(src, alt, variant) {
    var existing = document.querySelector(".badge-popover-backdrop");
    if (existing) existing.remove();

    var backdrop = document.createElement("div");
    backdrop.className = "badge-popover-backdrop";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");

    var popover = document.createElement("div");
    popover.className = "badge-popover";
    if (variant) {
      popover.classList.add("is-" + variant);
    }

    var closeBtn = document.createElement("button");
    closeBtn.className = "badge-popover-close";
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("aria-label", "Fermer");
    closeBtn.innerHTML = '<i class="bi bi-x-lg"></i>';

    var img = document.createElement("img");
    img.src = src;
    img.alt = alt || "";
    img.decoding = "async";

    popover.appendChild(closeBtn);
    popover.appendChild(img);
    backdrop.appendChild(popover);
    document.body.appendChild(backdrop);

    var previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function close() {
      document.body.style.overflow = previousOverflow;
      backdrop.remove();
      document.removeEventListener("keydown", onKeyDown);
    }

    function onKeyDown(e) {
      if (e.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) close();
    });

    closeBtn.focus();
  }

  document.querySelectorAll(".brand-badges img").forEach(function (img) {
    img.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var src = img.currentSrc || img.src;
      var isAgrees =
        img.classList.contains("agrees-badge") ||
        /\/images\/agrees\.(png|webp|jpe?g)(\?|#|$)/i.test(src);
      openBadgePopover(src, img.alt, isAgrees ? "agrees" : "");
    });
  });
})();
