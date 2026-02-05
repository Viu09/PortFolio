/**
 * All copy lives here so the UI stays language-agnostic and easy to evolve.
 */
export const profile = {
  name: "Silviu Zaino",
  email: "prenom.nom@email.com",
  github: "https://github.com/tonpseudo",
  linkedin: "https://www.linkedin.com/in/tonpseudo"
};

export const content = {
  fr: {
    profile: {
      role: "Developpeur logiciel",
      tagline: "Je transforme des idees en produits numeriques fiables, elegants et utiles.",
      focus: "Focus: produit + full-stack",
      availability: "Disponible pour un premier poste ou une mission courte."
    },
    nav: {
      about: "A propos",
      projects: "Projets",
      skills: "Competences",
      contact: "Contact"
    },
    hero: {
      eyebrow: "",
      ctaPrimary: "Decouvrir les projets",
      ctaSecondary: "Me contacter"
    },
    panel: {
      title: "En un coup d'oeil",
      subtitle: "Valeur ajoutee",
      stats: [
        { value: "10", label: "Projets" },
        { value: "12+", label: "Techs maitrisees" },
        { value: "UX", label: "Sens du detail" }
      ],
      body: "Je structure, je documente, et je priorise l'impact utilisateur."
    },
    about: {
      kicker: "A propos",
      title: "Je concois des produits numeriques utiles, fiables et bien concus.",
      body:
        "Developpeur informatique en fin d'etudes, je m'interesse autant a la qualite du code qu'a l'experience utilisateur. Je concois des interfaces claires, des systemes robustes et des applications pensees pour la production. Mon objectif : livrer des solutions simples, maintenables et reellement utiles."
    },
    projects: {
      kicker: "Projets selectionnes",
      title: "Une selection de projets pour illustrer mes competences et ma progression.",
      viewProject: "Voir le projet",
      view: "Voir le code",
      labels: {
        focus: "Points forts"
      },
      groups: [
        {
          title: "C",
          intro: "Systeme, memoire et rigueur.",
          items: [
            {
              title: "Mini-Shell Unix",
              slug: "mini-shell",
              subtitle: "Shell unix miniature",
              description: "Reproduction d'un shell pour comprendre le coeur d'un OS.",
              visual: "terminal",
              focus: ["Parsing robuste", "Processus + signaux", "Gestion memoire"],
              stack: ["C", "Processus", "Signaux", "Parsing"],
              link: "https://github.com/tonpseudo/mini-shell"
            },
            {
              title: "Bibliotheque de structures de donnees",
              slug: "data-structures",
              subtitle: "Librairie reutilisable",
              description: "Bibliotheque generique pour listes, piles, files et arbres.",
              visual: "library",
              focus: ["API documentee", "Tests Criterion", "Gestion memoire"],
              stack: ["C", "API", "Criterion", "Memoire"],
              link: "https://github.com/tonpseudo/data-structures"
            }
          ]
        },
        {
          title: "C++",
          intro: "Reseau, concurrence et design logiciel.",
          items: [
            {
              title: "Serveur TCP multi-clients",
              slug: "tcp-server",
              subtitle: "Reseau et concurrence",
              description: "Serveur capable de gerer plusieurs clients simultanes.",
              visual: "server",
              focus: ["Sockets TCP", "Threads ou async", "RAII + smart pointers"],
              stack: ["C++", "Sockets", "Threads", "RAII"],
              link: "https://github.com/tonpseudo/tcp-server"
            },
            {
              title: "Mini moteur de jeu 2D",
              slug: "mini-engine-2d",
              subtitle: "Design logiciel",
              description: "Moteur 2D modulaire et pedagogique.",
              visual: "engine",
              focus: ["Architecture modulaire", "UML + SOLID", "Boucle de jeu"],
              stack: ["C++", "UML", "SOLID", "Game loop"],
              link: "https://github.com/tonpseudo/mini-engine-2d"
            }
          ]
        },
        {
          title: "Python / ML",
          intro: "Comprendre le fond et livrer un produit.",
          items: [
            {
              title: "Reseau neuronal from scratch",
              slug: "neural-net-scratch",
              subtitle: "Fondamentaux ML",
              description: "Implementation d'un petit reseau pour comprendre la theorie.",
              visual: "neural",
              focus: ["NumPy", "Backpropagation", "Maths appliquees"],
              stack: ["Python", "NumPy", "Backprop", "Maths"],
              link: "https://github.com/tonpseudo/neural-net-scratch"
            },
            {
              title: "API REST du modele ML",
              slug: "ml-api",
              subtitle: "ML en produit",
              description: "Expose le modele via une API propre et testee.",
              visual: "api",
              focus: ["FastAPI ou Flask", "Tests Pytest", "Docker"],
              stack: ["FastAPI", "Flask", "Pytest", "Docker"],
              link: "https://github.com/tonpseudo/ml-api"
            }
          ]
        },
        {
          title: "Web / Front-end",
          intro: "Un projet vitrine avec de la valeur produit.",
          items: [
            {
              title: "Dashboard developpeur",
              slug: "dev-dashboard",
              subtitle: "Projet vitrine",
              description: "Dashboard qui centralise projets, CI et metriques.",
              visual: "dashboard",
              focus: ["Integration API GitHub", "Statut CI", "Metriques cle"],
              stack: ["React", "Vue", "API", "Dashboard"],
              link: "https://github.com/tonpseudo/dev-dashboard"
            }
          ]
        },
        {
          title: "DevOps / Qualite",
          intro: "Automatisation et culture qualite.",
          items: [
            {
              title: "Pipeline CI/CD complet",
              slug: "ci-cd-pipeline",
              subtitle: "Automatisation",
              description: "Pipeline complet du build au deploiement.",
              visual: "cicd",
              focus: ["Build auto", "Tests", "Deploiement"],
              stack: ["GitHub", "Jenkins", "CI/CD", "Deploiement"],
              link: "https://github.com/tonpseudo/ci-cd-pipeline"
            },
            {
              title: "Projet test-driven",
              slug: "tdd-project",
              subtitle: "Culture qualite",
              description: "Code guide par les tests pour une meilleure fiabilite.",
              visual: "tdd",
              focus: ["Tests avant code", "Criterion / Pytest / HUnit", "Refactor guide"],
              stack: ["TDD", "Criterion", "Pytest", "HUnit"],
              link: "https://github.com/tonpseudo/tdd-project"
            }
          ]
        },
        {
          title: "Securite",
          intro: "Analyse de risque et recommandations.",
          items: [
            {
              title: "Audit de securite",
              slug: "security-audit",
              subtitle: "Projet differenciant",
              description: "Audit d'une application avec recommandations actionnables.",
              visual: "security",
              focus: ["Vulnerabilites", "Menaces", "Recommandations"],
              stack: ["Security", "Audit", "Threats", "Recommendations"],
              link: "https://github.com/tonpseudo/security-audit"
            }
          ]
        }
      ]
    },
    projectPage: {
      back: "Retour aux projets",
      overview: "Vue d'ensemble",
      category: "Categorie",
      toc: {
        overview: "Vue d'ensemble",
        caseStudy: "Etude de cas",
        documentation: "Documentation",
        video: "Video",
        resources: "Ressources"
      },
      caseStudy: {
        title: "Etude de cas",
        items: [
          { key: "context", label: "Contexte" },
          { key: "goals", label: "Objectifs" },
          { key: "approach", label: "Approche" },
          { key: "results", label: "Resultats" },
          { key: "challenges", label: "Defis" },
          { key: "lessons", label: "Lecons" }
        ],
        placeholder: "Contenu detaille a venir."
      },
      stack: "Stack technique",
      documentation: "Documentation utilisateur",
      video: "Video de presentation",
      resources: "Ressources",
      code: "Voir le code",
      previous: "Projet precedent",
      next: "Projet suivant",
      comingSoon: "Contenu detaille a venir.",
      notFoundTitle: "Projet introuvable",
      notFoundBody: "Ce projet n'existe pas ou le lien est incomplet."
    },
    skills: {
      kicker: "Competences",
      title: "Des fondamentaux solides et une stack moderne.",
      body: "Langages systeme, front-end, DevOps et qualite logicielle.",
      groups: [
        {
          title: "Langages",
          items: [
            { key: "c", label: "C", icon: "C" },
            { key: "cpp", label: "C++", icon: "C++" },
            { key: "python", label: "Python", icon: "Py" },
            { key: "haskell", label: "Haskell", icon: "Hs" },
            { key: "bash", label: "Bash", icon: "SH" }
          ]
        },
        {
          title: "Front-end",
          items: [
            { key: "react", label: "React", icon: "R" },
            { key: "nextjs", label: "Next.js", icon: "N" },
            { key: "vue", label: "Vue", icon: "V" },
            { key: "quasar", label: "Quasar", icon: "Q" },
            { key: "flutter", label: "Flutter", icon: "F" }
          ]
        },
        {
          title: "Back-end",
          items: [
            { key: "nextjs", label: "Next.js", icon: "N" }
          ]
        },
        {
          title: "DevOps",
          items: [
            { key: "github", label: "GitHub", icon: "GH" },
            { key: "jenkins", label: "Jenkins", icon: "J" },
            { key: "kubernetes", label: "Kubernetes", icon: "K8s" }
          ]
        },
        {
          title: "Qualite & securite",
          items: [
            { key: "unit-tests", label: "Tests unitaires", icon: "UT" },
            { key: "cybersec", label: "Cybersec", icon: "SEC" }
          ]
        }
      ]
    },
    services: {
      kicker: "Ce que je propose",
      title: "Des solutions concretes, du code propre, un vrai suivi.",
      items: [
        {
          title: "Developpement full-stack",
          description: "Applications et APIs robustes, du prototype a la production, avec un focus produit."
        },
        {
          title: "Systemes & performance",
          description: "C/C++ rigoureux: memoire, reseau, concurrence, architecture propre."
        },
        {
          title: "DevOps & automatisation",
          description: "Pipelines CI/CD, conteneurs, Kubernetes, deploiements fiables."
        },
        {
          title: "Qualite & securite",
          description: "Tests unitaires, TDD, audits de base et pratiques de securite."
        }
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Discutons d'un projet ou d'une opportunite.",
      body: "N'hesitez pas a me contacter pour un premier echange. Je reponds rapidement et je privilegie des objectifs clairs."
    },
    footer: ""
  },
  en: {
    profile: {
      role: "Software Developer",
      tagline: "I turn ideas into reliable, elegant, and useful digital products.",
      focus: "Focus: product + full-stack",
      availability: "Open to a first role or short mission."
    },
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      eyebrow: "",
      ctaPrimary: "Explore the work",
      ctaSecondary: "Let's talk"
    },
    panel: {
      title: "At a glance",
      subtitle: "Value delivered",
      stats: [
        { value: "10", label: "Projects" },
        { value: "12+", label: "Techs mastered" },
        { value: "UX", label: "Attention to detail" }
      ],
      body: "I structure, document, and prioritize user impact."
    },
    about: {
      kicker: "About",
      title: "I design useful, reliable, well-crafted digital products.",
      body:
        "A software developer nearing the end of my studies, I care as much about code quality as user experience. I design clear interfaces, robust systems, and applications built for production. My goal: deliver simple, maintainable, and truly useful solutions."
    },
    projects: {
      kicker: "Selected projects",
      title: "A curated set of projects that show how I think and build.",
      viewProject: "View project",
      view: "View code",
      labels: {
        focus: "Highlights"
      },
      groups: [
        {
          title: "C",
          intro: "Systems, memory, and rigor.",
          items: [
            {
              title: "Mini Unix shell",
              slug: "mini-shell",
              subtitle: "Miniature shell",
              description: "Rebuilding a shell to understand the core of an OS.",
              visual: "terminal",
              focus: ["Robust parsing", "Processes + signals", "Memory management"],
              stack: ["C", "Processes", "Signals", "Parsing"],
              link: "https://github.com/tonpseudo/mini-shell"
            },
            {
              title: "Data structures library",
              slug: "data-structures",
              subtitle: "Reusable library",
              description: "Generic library for lists, stacks, queues, and trees.",
              visual: "library",
              focus: ["Documented API", "Criterion tests", "Memory management"],
              stack: ["C", "API", "Criterion", "Memory"],
              link: "https://github.com/tonpseudo/data-structures"
            }
          ]
        },
        {
          title: "C++",
          intro: "Networking and software design.",
          items: [
            {
              title: "Multi-client TCP server",
              slug: "tcp-server",
              subtitle: "Networking + concurrency",
              description: "Server handling multiple clients in parallel.",
              visual: "server",
              focus: ["TCP sockets", "Threads or async", "RAII + smart pointers"],
              stack: ["C++", "Sockets", "Threads", "RAII"],
              link: "https://github.com/tonpseudo/tcp-server"
            },
            {
              title: "2D mini game engine",
              slug: "mini-engine-2d",
              subtitle: "Software design",
              description: "Modular 2D engine built to be easy to explain.",
              visual: "engine",
              focus: ["Modular architecture", "UML + SOLID", "Game loop"],
              stack: ["C++", "UML", "SOLID", "Game loop"],
              link: "https://github.com/tonpseudo/mini-engine-2d"
            }
          ]
        },
        {
          title: "Python / ML",
          intro: "Understand the fundamentals and ship a product.",
          items: [
            {
              title: "Neural network from scratch",
              slug: "neural-net-scratch",
              subtitle: "ML fundamentals",
              description: "Implementing a small network to understand the theory.",
              visual: "neural",
              focus: ["NumPy", "Backpropagation", "Applied math"],
              stack: ["Python", "NumPy", "Backprop", "Math"],
              link: "https://github.com/tonpseudo/neural-net-scratch"
            },
            {
              title: "REST API for the ML model",
              slug: "ml-api",
              subtitle: "ML to product",
              description: "Serving the model behind a clean, tested API.",
              visual: "api",
              focus: ["FastAPI or Flask", "Pytest tests", "Docker"],
              stack: ["FastAPI", "Flask", "Pytest", "Docker"],
              link: "https://github.com/tonpseudo/ml-api"
            }
          ]
        },
        {
          title: "Web / Front-end",
          intro: "A showcase project with product value.",
          items: [
            {
              title: "Developer dashboard",
              slug: "dev-dashboard",
              subtitle: "Showcase project",
              description: "Dashboard centralizing projects, CI, and metrics.",
              visual: "dashboard",
              focus: ["GitHub API integration", "CI status", "Key metrics"],
              stack: ["React", "Vue", "API", "Dashboard"],
              link: "https://github.com/tonpseudo/dev-dashboard"
            }
          ]
        },
        {
          title: "DevOps / Quality",
          intro: "Automation and quality culture.",
          items: [
            {
              title: "Full CI/CD pipeline",
              slug: "ci-cd-pipeline",
              subtitle: "Automation",
              description: "End-to-end pipeline from build to deployment.",
              visual: "cicd",
              focus: ["Automated builds", "Tests", "Deployment"],
              stack: ["GitHub", "Jenkins", "CI/CD", "Deployment"],
              link: "https://github.com/tonpseudo/ci-cd-pipeline"
            },
            {
              title: "Test-driven project",
              slug: "tdd-project",
              subtitle: "Quality culture",
              description: "Tests-first workflow for better reliability.",
              visual: "tdd",
              focus: ["Tests before code", "Criterion / Pytest / HUnit", "Refactor guided"],
              stack: ["TDD", "Criterion", "Pytest", "HUnit"],
              link: "https://github.com/tonpseudo/tdd-project"
            }
          ]
        },
        {
          title: "Security",
          intro: "Risk analysis and recommendations.",
          items: [
            {
              title: "Security audit",
              slug: "security-audit",
              subtitle: "Stand-out project",
              description: "Application audit with actionable recommendations.",
              visual: "security",
              focus: ["Vulnerabilities", "Threats", "Recommendations"],
              stack: ["Security", "Audit", "Threats", "Recommendations"],
              link: "https://github.com/tonpseudo/security-audit"
            }
          ]
        }
      ]
    },
    projectPage: {
      back: "Back to projects",
      overview: "Overview",
      category: "Category",
      toc: {
        overview: "Overview",
        caseStudy: "Case study",
        documentation: "Documentation",
        video: "Video",
        resources: "Resources"
      },
      caseStudy: {
        title: "Case study",
        items: [
          { key: "context", label: "Context" },
          { key: "goals", label: "Goals" },
          { key: "approach", label: "Approach" },
          { key: "results", label: "Results" },
          { key: "challenges", label: "Challenges" },
          { key: "lessons", label: "Lessons" }
        ],
        placeholder: "Detailed content coming soon."
      },
      stack: "Tech stack",
      documentation: "User documentation",
      video: "Presentation video",
      resources: "Resources",
      code: "View code",
      previous: "Previous project",
      next: "Next project",
      comingSoon: "Detailed content coming soon.",
      notFoundTitle: "Project not found",
      notFoundBody: "This project does not exist or the link is incomplete."
    },
    skills: {
      kicker: "Skills",
      title: "Strong fundamentals with a modern stack.",
      body: "Systems languages, front-end, DevOps, and software quality.",
      groups: [
        {
          title: "Languages",
          items: [
            { key: "c", label: "C", icon: "C" },
            { key: "cpp", label: "C++", icon: "C++" },
            { key: "python", label: "Python", icon: "Py" },
            { key: "haskell", label: "Haskell", icon: "Hs" },
            { key: "bash", label: "Bash", icon: "SH" }
          ]
        },
        {
          title: "Front-end",
          items: [
            { key: "react", label: "React", icon: "R" },
            { key: "nextjs", label: "Next.js", icon: "N" },
            { key: "vue", label: "Vue", icon: "V" },
            { key: "quasar", label: "Quasar", icon: "Q" },
            { key: "flutter", label: "Flutter", icon: "F" }
          ]
        },
        {
          title: "Back-end",
          items: [
            { key: "nextjs", label: "Next.js", icon: "N" }
          ]
        },
        {
          title: "DevOps",
          items: [
            { key: "github", label: "GitHub", icon: "GH" },
            { key: "jenkins", label: "Jenkins", icon: "J" },
            { key: "kubernetes", label: "Kubernetes", icon: "K8s" }
          ]
        },
        {
          title: "Quality & Security",
          items: [
            { key: "unit-tests", label: "Unit testing", icon: "UT" },
            { key: "cybersec", label: "Cybersecurity", icon: "SEC" }
          ]
        }
      ]
    },
    services: {
      kicker: "What I do",
      title: "Practical delivery, clean code, real follow-through.",
      items: [
        {
          title: "Full-stack delivery",
          description: "Apps and APIs from prototype to production with a product focus."
        },
        {
          title: "Systems & performance",
          description: "C/C++ rigor: memory, networking, concurrency, clean architecture."
        },
        {
          title: "DevOps & automation",
          description: "CI/CD pipelines, containers, Kubernetes, reliable deployments."
        },
        {
          title: "Quality & security",
          description: "Unit tests, TDD, baseline security practices and audits."
        }
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about a project or opportunity.",
      body: "Please feel free to reach out for an initial discussion. I respond quickly and value clear goals."
    },
    footer: ""
  }
};
