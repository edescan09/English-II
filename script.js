/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
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
  "edu.1.text":  "Estudiante en UniEspinal enfocado en el desarrollo frontend, backend básico y gestión de bases de datos relacionales.",
  "edu.2.title": "[Curso o certificación]",
  "edu.2.text":  "[Qué aprendiste y para qué te sirve.]",

  "exp.1.title": "[Rol o tipo de proyecto]",
  "exp.1.text":  "[Qué hiciste, con qué herramientas y qué resultado tuvo.]",
  "exp.2.title": "[Rol o tipo de proyecto]",
  "exp.2.text":  "[Qué hiciste, con qué herramientas y qué resultado tuvo.]",

  "portfolio.title": "Proyectos",
  "project.1.title": "[Nombre del proyecto]",
  "project.1.text":  "[Tecnologías usadas]",
  "project.2.title": "[Nombre del proyecto]",
  "project.2.text":  "[Tecnologías usadas]",
  "project.3.title": "[Nombre del proyecto]",
  "project.3.text":  "[Tecnologías usadas]",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto o una vacante? Escríbeme y nos ponemos en contacto.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "://linkedin.com",

  "footer.note": "Edisson Cantor · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am an 18-year-old developer who builds personal projects to strengthen my programming skills. I am a Web Programming student at UniEspinal focused on creating clean and efficient web solutions.",
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

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Student at UniEspinal learning frontend technologies, responsive design, and database management.",
  "edu.2.title": "[Course or certificate]",
  "edu.2.text":  "[What you learned and how you use it.]",

  "exp.1.title": "[Role or type of project]",
  "exp.1.text":  "[What you did, which tools you used, and what the result was.]",
  "exp.2.title": "[Role or type of project]",
  "exp.2.text":  "[What you did, which tools you used, and what the result was.]",

  "portfolio.title": "Projects",
  "project.1.title": "[Project name]",
  "project.1.text":  "[Technologies used]",
  "project.2.title": "[Project name]",
  "project.2.text":  "[Technologies used]",
  "project.3.title": "[Project name]",
  "project.3.text":  "[Technologies used]",

  "contact.title":         "Contact",
  "contact.intro":         "Do you have a project or a vacancy? Send me a message.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "://linkedin.com",

  "footer.note": "Edisson Cantor · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
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
// Nota: Dejé esta función declarada correctamente al final del archivo
function inicializarSkills() {
  console.log("Skills initialized");
}
