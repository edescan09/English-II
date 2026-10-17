/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy un joven de 18 años que disfruta creando proyectos personales para practicar mis habilidades de programación. Soy estudiante de la Universidad Uniespinal y futuro técnico en programación web.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Girardot, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B2-C1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Aprendo un poco de todo, a programar código ya sea php o javascript, las bases de datos, configuracion de servidores, etc.",
  "edu.2.title": "Certificación de B2 en inglés",
  "edu.2.text":  "Aprendí a cómo manejar una conversación fluida en inglés.",

  "exp.1.title": "Videojuegos",
  "exp.1.text":  "Hice 2 videojuegos usando la herramienta GODOT, esto me permitió conocer más el mundo del código para videojuegos.",
  "exp.2.title": "Desarrollo de Software",
  "exp.2.text":  "Creación y mantenimiento de aplicaciones web usando JavaScript, TypeScript y bases de datos.",

  "portfolio.title": "Proyectos",
  "project.1.title": "MILO",
  "project.1.text":  "Made in GODOT",
  "project.2.title": "A Normal Day",
  "project.2.text":  "Made in GODOT",
  "project.3.title": "Mascotas QR",
  "project.3.text":  "TypeScript + Supabase",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto o una vacante? Escríbeme y nos ponemos en contacto.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "https://www.linkedin.com/in/edisson-esteban-cantor-padilla-ba79a3428",

  "footer.note": "Edisson Esteban Cantor Padilla · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT ME",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am an 18-year-old developer who enjoys creating personal projects to practice my programming skills. I am a student at UniEspinal studying to become a Web Programming Technician.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Girardot, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B2-C1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and Experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Learning web development fundamentals including PHP, JavaScript, databases, and server configuration.",
  "edu.2.title": "B2 English Certification",
  "edu.2.text":  "Achieved fluent conversational English communication skills.",

  "exp.1.title": "Video Games",
  "exp.1.text":  "Developed 2 video games using Godot Engine, expanding my knowledge of game logic and coding principles.",
  "exp.2.title": "Software Development",
  "exp.2.text":  "Building and maintaining web applications using JavaScript, TypeScript, and databases.",

  "portfolio.title": "Projects",
  "project.1.title": "MILO",
  "project.1.text":  "Made in GODOT",
  "project.2.title": "A Normal Day",
  "project.2.text":  "Made in GODOT",
  "project.3.title": "Mascotas QR",
  "project.3.text":  "TypeScript + Supabase",

  "contact.title":         "Contact",
  "contact.intro":         "Do you have a project or job opening? Feel free to write me.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "https://www.linkedin.com/in/edisson-esteban-cantor-padilla-ba79a3428",

  "footer.note": "Edisson Esteban Cantor Padilla · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS
   ============================================================ */
function inicializarSkills() {
  console.log("Skills initialized");
}
