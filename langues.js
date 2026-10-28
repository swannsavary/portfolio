/* ==========================================================
   DICTIONNAIRE DES TEXTES
   - La clé (ex: nav_projects) correspond à data-i18n="..." dans le HTML
   - Si une traduction est vide (""), la page garde le texte
     écrit dans le HTML : rien ne casse pendant que tu remplis.
   ========================================================== */
const textes = {
    fr: {
        nav_projects: "Projets",
        nav_parcours: "Parcours",
        nav_contact: "Contact",
        hero_title: "Étudiant en développement web",
        hero_text: "Je conçois des applications web simples et utiles, du design de l'interface jusqu'à la base de données. Je cherche une équipe où apprendre le métier en contribuant dès le premier mois.",
        btn_contact: "Me contacter",
        btn_projects: "Voir mes projets",

        skills_title: "Compétences",
        skills_langs: "Langages",
        skills_tools: "Outils",
        skills_soft: "Soft skills",
        soft1: "Esprit d'équipe",
        soft2: "Autonomie",
        soft3: "Curiosité",
        soft4: "Résolution de problèmes",

        projects_title: "Projets",
        lbl_context: "Contexte",
        lbl_role: "Mon rôle",
        lbl_result: "Résultat",
        lbl_links: "Liens",
        lnk_demo: "Démo",
        lnk_and: "et",
        lnk_code: "code sur GitHub",
        lnk_notebook: "Voir le notebook",
        more_projects: "Voir plus de projets sur GitHub →",

        lbl_more: "Voir le détail",
        h_problem: "Le problème",
        h_choices: "Choix techniques",
        h_learned: "Ce que j'ai appris",

        p1_title: "Guess It 1, prédire le prochain nombre",
        p1_context: "Projet Zone01 : prédire une plage pour le prochain nombre d'une série.",
        p1_role: "Projet réalisé seul : algorithme et programme complet.",
        p1_result: "80 à 90 % de réussite sur les jeux de données de test, devant les algorithmes de référence (moyenne, médiane, grande plage).",
        p1_problem: "Le programme reçoit des nombres un par un et doit donner une plage pour le suivant. Plus la plage est petite, plus le score est élevé, mais une plage trop petite rate le nombre : il faut trouver le bon compromis.",
        p1_choices: "Je calcule la médiane de tous les nombres déjà vus, puis le MAD (écart absolu médian) pour fixer la largeur de la plage. Ces deux mesures résistent aux valeurs extrêmes, contrairement à la moyenne.",
        p1_learned: "Statistiques appliquées, performance (plus de 10 000 nombres traités) et comparaison de mon algorithme à d'autres lors de l'audit.",

        p2_title: "EditorFilter, mod Geometry Dash",
        p2_context: "Projet personnel : un mod pour l'éditeur de niveaux de Geometry Dash.",
        p2_role: "Idée, conception des fonctionnalités, tests. Code réalisé avec une IA (vibe coding).",
        p2_result: "Mod fonctionnel : sélection par familles d'objets et mode avancé. Finitions en cours.",
        p2_problem: "Dans l'éditeur, il est difficile de sélectionner précisément ce qu'on veut. Le mod permet de décocher des familles d'objets, ou de choisir directement un objet avec l'option avancée.",
        p2_choices: "J'ai d'abord essayé seul, avec un peu d'aide d'une IA, mais le C++ et les fonctions existantes du jeu rendaient la tâche trop longue. J'ai alors choisi de continuer en vibe coding.",
        p2_learned: "Le fonctionnement d'un mod, la lecture de code C++ et la conduite d'un projet avec une IA. Je continue à apprendre le C++ pour comprendre et modifier le code moi-même.",

        p3_title: "Forum (en développement)",
        p3_context: "Projet Zone01 en équipe : un forum web avec comptes, posts, commentaires, likes et filtres.",
        p3_role: "Conception de la base de données (schéma, tables, relations).",
        p3_result: "Projet en cours de développement.",
        p3_problem: "Permettre aux utilisateurs de communiquer, de classer les posts par catégories, de les liker et de les filtrer.",
        p3_choices: "Go et SQLite, sans framework front. L'équipe a simplifié mon premier schéma de base de données pour rester adaptée à la taille du projet.",
        p3_learned: "Modélisation d'une base de données et travail en équipe sur un projet commun.",

        parcours_title: "Parcours",
        tl_current: "En cours",
        tl_done: "Terminé",
        tl1_title: "Recherche d'une alternance",
        tl1_text: "Je cherche une alternance de 2 ans en développement logiciel.",
        tl2_title: "Formation à Zone01",
        tl2_text: "Formation en développement logiciel, basée sur des projets pratiques.",
        tl3_title: "2026, Baccalauréat général",
        tl3_text: "Spécialités mathématiques et NSI.",
        tl3_option: "option Math experte et Grec",
        parcours_extra: "Langues : français (natif), anglais (B1), espagnol (scolaire). Centres d'intérêt : jeux video, manga, musique.",
        langues: "Langues : français (natif), anglais (B1), espagnol (scolaire).",
        centres_de_interet: "Centres d'intérêt : jeux video, jeux video de rythme: Geometry Dash, osu! ; manga, musique.",

        contact_title: "Contact",
        btn_cv: "Mon CV"
    },

        en: {
        nav_projects: "Projects",
        nav_parcours: "Background",
        nav_contact: "Contact",
        hero_title: "Web development student",
        hero_text: "I build simple, useful web applications, from interface design to the database. I'm looking for a team where I can learn the trade while contributing from the first month.",
        btn_contact: "Contact me",
        btn_projects: "See my projects",

        skills_title: "Skills",
        skills_langs: "Languages",
        skills_tools: "Tools",
        skills_soft: "Soft skills",
        soft1: "Team spirit",
        soft2: "Autonomy",
        soft3: "Curiosity",
        soft4: "Problem solving",

        projects_title: "Projects",
        lbl_context: "Context",
        lbl_role: "My role",
        lbl_result: "Result",
        lbl_links: "Links",
        lnk_demo: "Demo",
        lnk_and: "and",
        lnk_code: "code on GitHub",
        lnk_notebook: "View the notebook",
        more_projects: "See more projects on GitHub →",

        lbl_more: "See details",
        h_problem: "The problem",
        h_choices: "Technical choices",
        h_learned: "What I learned",

        p1_title: "Guess It 1, predicting the next number",
        p1_context: "Zone01 project: predict a range for the next number in a series.",
        p1_role: "Solo project: algorithm and complete program.",
        p1_result: "80 to 90% success rate on the test datasets, ahead of the reference algorithms (average, median, big range).",
        p1_problem: "The program receives numbers one by one and must output a range for the next one. The smaller the range, the higher the score, but a range that is too small misses the number: the goal is to find the right trade-off.",
        p1_choices: "I compute the median of all numbers seen so far, then the MAD (median absolute deviation) to set the width of the range. Both measures resist outliers, unlike the mean.",
        p1_learned: "Applied statistics, performance (over 10,000 numbers processed) and benchmarking my algorithm against others during the audit.",

        p2_title: "EditorFilter, Geometry Dash mod",
        p2_context: "Personal project: a mod for the Geometry Dash level editor.",
        p2_role: "Idea, feature design, testing. Code written with an AI (vibe coding).",
        p2_result: "Working mod: selection by object families and an advanced mode. Final polish in progress.",
        p2_problem: "In the editor, it is hard to select exactly what you want. The mod lets you uncheck object families, or pick a specific object with the advanced option.",
        p2_choices: "I first tried on my own, with a little help from an AI, but C++ and the game's existing functions made it too slow. I then chose to continue with vibe coding.",
        p2_learned: "How a mod works, reading C++ code, and running a project with an AI. I'm still learning C++ so I can understand and edit the code myself.",

        p3_title: "Forum (in development)",
        p3_context: "Zone01 team project: a web forum with accounts, posts, comments, likes and filters.",
        p3_role: "Database design (schema, tables, relations).",
        p3_result: "Project under development.",
        p3_problem: "Let users communicate, sort posts by category, like them and filter them.",
        p3_choices: "Go and SQLite, no front-end framework. The team simplified my first database schema to fit the size of the project.",
        p3_learned: "Database modeling and teamwork on a shared project.",

        parcours_title: "Background",
        tl_current: "In progress",
        tl_done: "Completed",
        tl1_title: "Looking for a work-study position",
        tl1_text: "I'm looking for a 2-year work-study position in software development.",
        tl2_title: "Training at Zone01",
        tl2_text: "Software development training, based on hands-on projects.",
        tl3_title: "2026, General Baccalaureate",
        tl3_text: "Specializations in mathematics and computer science (NSI).",
        tl3_option: "advanced math option and Ancient Greek",
        langues: "Languages: French (native), English (B1), Spanish (school level).",
        centres_de_interet: "Interests: video games, rhythm video games Geometry Dash, osu! ; manga, music.",

        contact_title: "Contact",
        btn_cv: "My CV"
    }
};

/* ==========================================================
   FONCTION QUI CHANGE LA LANGUE
   ========================================================== */
function setLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        // On garde en mémoire le texte d'origine (celui du HTML)
        if (el.dataset.original === undefined) {
            el.dataset.original = el.textContent;
        }
        const traduction = textes[lang] && textes[lang][el.dataset.i18n];
        // Pas de traduction ? On remet le texte d'origine
        el.textContent = traduction || el.dataset.original;
    });

    // Met en évidence le bouton de la langue active
    document.querySelectorAll(".lang button").forEach(btn => {
        btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
    });

    // Mémorise le choix pour la prochaine visite
    try { localStorage.setItem("lang", lang); } catch (e) {}
    const cv = document.getElementById("lien-cv");
    if (cv) cv.href = lang === "en" ? "CV-Swann-Savary-EN.pdf" : "CV-Swann-Savary-FR.pdf";
}
/* ==========================================================
   THEME CLAIR / SOMBRE
   ========================================================== */
const ICON_MOON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
const ICON_SUN = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) {
        // Sombre : on propose le soleil. Clair : on propose la lune.
        btn.innerHTML = theme === "dark" ? ICON_SUN : ICON_MOON;
        btn.setAttribute("aria-label",
            theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre");
    }
    try { localStorage.setItem("theme", theme); } catch (e) {}
}
/* ==========================================================
   AU CHARGEMENT DE LA PAGE
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Clic sur les boutons FR / EN
    document.querySelectorAll(".lang button").forEach(btn => {
        btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });

    // Langue de départ : choix mémorisé, sinon langue du navigateur
    let lang = "fr";
    try {
        lang = localStorage.getItem("lang")
            || (navigator.language.startsWith("en") ? "en" : "fr");
    } catch (e) {}
    setLang(lang);
        // Thème : choix mémorisé, sinon préférence du système
    let theme = "light";
    try {
        theme = localStorage.getItem("theme")
            || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } catch (e) {}
    setTheme(theme);

    document.getElementById("theme-toggle").addEventListener("click", () => {
        const actuel = document.documentElement.getAttribute("data-theme");
        setTheme(actuel === "dark" ? "light" : "dark");
    });
});