// ===== HEADER HAMBURGER =====

const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

function updateParentHeight() {
    const header = document.querySelector('header');
    if (!header) return;

    const headerHeight = header.offsetHeight;

    window.parent.postMessage({
        type: 'resizeHeader',
        height: headerHeight
    }, '*');
}

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        updateParentHeight();
    });
}

window.addEventListener('load', updateParentHeight);


// ===== Header Resize (applies to all pages safely) =====

window.addEventListener('message', (event) => {

    if (event.data && event.data.type === 'resizeHeader') {

        const iframe = document.querySelector('iframe[src*="header.html"]');

        if (iframe) {
            iframe.style.height = event.data.height + 'px';
        }

    }

});

/* ===== AUDIO CONTROL (Adopt page) ===== */

document.addEventListener('DOMContentLoaded', () => {

    const audio = document.getElementById("my_audio");
    const button = document.getElementById("audio_btn");
    const icon = document.getElementById("audio_icon");

    if (button && audio && icon) {
        button.addEventListener("click", () => {

            if (audio.paused) {
                audio.play();
                icon.classList.remove("fa-volume-xmark");
                icon.classList.add("fa-volume-high");
            } else {
                audio.pause();
                icon.classList.remove("fa-volume-high");
                icon.classList.add("fa-volume-xmark");
            }

        });
    }

});



// script.js

// --------Diccionario de traducciones-----------------------
$(document).ready(function () {

    const translations = {

        en: {
            "hero-h2": "Welcome to MeowWoof !!",
            "hero-p": "We give homeless pets a second chance to find love, warmth, and family",

            "about-h2": "About Us",
            "about-p1": "MeowWoof was born from a simple dream — to see every cat and dog with a safe, loving home.",
            "about-p2": "Our mission is to rescue, rehabilitate, and rehome abandoned animals in Barcelona. With the help of local volunteers and kind-hearted adopters, we’ve successfully found families for over 200 pets since 2023.",
            "about-p3": "We believe that adoption is not just saving a life, but also gaining a loyal friend who will love you forever.",
            "about-p4": "Our goal for the future is to expand our foster network, provide medical care for more stray animals, and inspire a stronger community of compassion and responsibility.",

            "video-h2": "See Love in Action",
            "video-p": "Every rescue tells a story. Watch how love changes lives.",

            "volunteer-h2": "Become Our Partner",
            "volunteer-p1": "Join our mission to rescue, rehabilitate, and rehome abandoned pets in Barcelona.",
            "volunteer-p2": "Your time, love, and kindness can change a life — sometimes, even save one.",
            "volunteer-btn": "Become a Volunteer",

            "adopt-h2": "Find Your Soulmate",
            "adopt-p": "There are some cute guys waiting for a home",

            "pet1-name": "Name: Lily",
            "pet1-gender": "Gender: Girl",
            "pet1-age": "Age: 5 months",
            "pet1-character": "Character: Energetic",
            "pet1-adopt": "Adopt",

            "pet2-name": "Name: Molly",
            "pet2-gender": "Gender: Girl",
            "pet2-age": "Age: 3 years old",
            "pet2-character": "Character: Reliable",
            "pet2-adopt": "Adopt",

            "pet3-name": "Name: Princes",
            "pet3-gender": "Gender: Girl",
            "pet3-age": "Age: 3 years old",
            "pet3-character": "Character: Enthusiastic",
            "pet3-adopt": "Adopt",

            "pet4-name": "Name: DJ",
            "pet4-gender": "Gender: Boy",
            "pet4-age": "Age: 1 year old",
            "pet4-character": "Character: Resourceful",
            "pet4-adopt": "Adopt",

            "adopt-btn": "Meet More",

            "stories-h2": "Lovely Story",
            "stories-p": "Every adoption marks a new beginning. These transformations fill us with pride and joy.",

            "cta-h3": "Ready to make a difference?",
            "cta-btn1": "Join Us Now",
            "cta-btn2": "Adopt a Pet",

            "nav-home": "Home",
            "nav-adopt": "Adopt",
            "nav-volunteer": "Volunteer",
            "nav-contact": "Contact",

            "footer-desc1": "Rescuing and rehoming pets in Barcelona since 2023.",
            "footer-desc2": "Every life counts, every adoption matters.",
            "footer-links-title": "Quick Links",
            "footer-home": "Home",
            "footer-adopt": "Adopt",
            "footer-volunteer": "Volunteer",
            "footer-contact": "Contact",
            "footer-contact-title": "Contact Us",
            "footer-hours": "Mon-Fri: 10:00 - 18:00<br>Sat: 10:00 - 14:00",
            "footer-copy": "© 2025 MeowWoof! | Made with love 🐾",
            "footer-privacy": "Privacy Policy",
            "footer-terms": "Terms & Conditions",
            "footer-cookies": "Cookies",

            "adopt-hero-title": "Give Love a Home",
            "adopt-title": "OUR LOVELY FRIENDS",

            "petA-name": "Name: Emilia",
            "petA-gender": "Gender: Girl",
            "petA-age": "Age: 1 year old",
            "petA-character": "Character: Considerate",
            "petA-adopt": "Adopt",

            "petB-name": "Name: Lily",
            "petB-gender": "Gender: Girl",
            "petB-age": "Age: 5 months",
            "petB-character": "Character: Energetic",
            "petB-adopt": "Adopt",

            "petC-name": "Name: Molly",
            "petC-gender": "Gender: Girl",
            "petC-age": "Age: 3 years old",
            "petC-character": "Character: Reliable",
            "petC-adopt": "Adopt",

            "petD-name": "Name: Princes",
            "petD-gender": "Gender: Girl",
            "petD-age": "Age: 3 years old",
            "petD-character": "Character: Enthusiastic",
            "petD-adopt": "Adopt",

            "petE-name": "Name: Coco",
            "petE-gender": "Gender: Boy",
            "petE-age": "Age: 3 months",
            "petE-character": "Character: Bubbly",
            "petE-adopt": "Adopt",

            "petF-name": "Name: DJ",
            "petF-gender": "Gender: Boy",
            "petF-age": "Age: 1 year old",
            "petF-character": "Character: Resourceful",
            "petF-adopt": "Adopt",

            "petG-name": "Name: Jungle",
            "petG-gender": "Gender: Girl",
            "petG-age": "Age: 7 months",
            "petG-character": "Character: Reticent",
            "petG-adopt": "Adopt",

            "petH-name": "Name: Holiday",
            "petH-gender": "Gender: Boy",
            "petH-age": "Age: 5 months",
            "petH-character": "Character: Outgoing",
            "petH-adopt": "Adopt",

            "petI-name": "Name: Mimi",
            "petI-gender": "Gender: Girl",
            "petI-age": "Age: 7 months",
            "petI-character": "Character: Sociable",
            "petI-adopt": "Adopt",

            "petJ-name": "Name: Simba",
            "petJ-gender": "Gender: Boy",
            "petJ-age": "Age: 2 years old",
            "petJ-character": "Character: Approachable",
            "petJ-adopt": "Adopt",

            "form-guidelines-title": "Adoption Guidelines",
            "form-before-title": "1. Before You Adopt",
            "form-before-1": "A long-term commitment — Pets can live for 10–15 years or more. Are you ready to care for them for life?",
            "form-before-2": "Time and attention — Do you have enough time each day to feed, clean, and spend time with your pet?",
            "form-before-3": "Financial stability — Adoption includes costs for food, vet visits, vaccinations, supplies, and possible emergencies.",
            "form-before-4": "Family environment — Does everyone in your home agree with the adoption? Is anyone allergic or against having pets?",
            "form-before-5": "Housing conditions — Does your home allow pets and provide enough safe space?",

            "form-resp-title": "2. Responsibilities of Adopters",
            "form-resp-1": "Provide a safe and healthy environment for your pet.",
            "form-resp-2": "Ensure regular vaccinations and veterinary check-ups.",
            "form-resp-3": "Never abandon or neglect your pet.",
            "form-resp-4": "Do not use the pet for breeding or selling purposes.",
            "form-resp-5": "Offer love, patience, and positive training.",

            "form-hope-title": "3. What We Hope From Our Adopters",
            "form-hope-1": "A strong sense of responsibility and willingness to learn.",
            "form-hope-2": "Pets are family members, not toys.",
            "form-hope-3": "Ask for help when facing problems.",

            "form-note": "🐾 Adoption is an act of love — but also a lifelong responsibility.",

            "form-title": "Adoption Application Form",
            "form-legend": "Your Information",

            "label-name": "Name :",
            "label-lastname": "Last name :",
            "label-female": "Female",
            "label-male": "Male",
            "label-age": "Age :",
            "label-email": "Email :",
            "label-number": "Number :",
            "label-address": "Address :",
            "label-pet": "Which one do you want to adopt (name):",

            "form-warning": "Please make sure you have read and agreed to the guidelines before submitting.",
            "form-submit": "Submit Application",

            "vol-schedule-title": "Volunteer Activities Schedule",
            "vol-caption": "Weekly schedule of MeowWoof volunteer activities",

            "vol-day": "DAY",
            "vol-activity": "Activity",
            "vol-time": "Time",
            "vol-location": "Location",

            "vol-mon": "Monday",
            "vol-mon-act": "Feeding and cleaning shelter",
            "vol-mon-loc": "Main Shelter, Barcelona",

            "vol-wed": "Wednesday",
            "vol-wed-act": "Pet socialization & training",
            "vol-wed-loc": "Training Park",

            "vol-fri": "Friday",
            "vol-fri-act": "Adoption event preparation",
            "vol-fri-loc": "Event Center",

            "vol-sun": "Sunday",
            "vol-sun-act": "Adoption day & community outreach",
            "vol-sun-loc": "Community Plaza",

            "vol-form-title": "Volunteer",
            "vol-legend": "Your Information",

            "vol-label-name": "Name :",
            "vol-label-last": "Last name :",
            "vol-label-female": "Female",
            "vol-label-male": "Male",
            "vol-label-age": "Age :",
            "vol-label-email": "Email :",
            "vol-label-number": "Number :",
            "vol-label-exp": "Do you have experience with pets:",
            "vol-label-day": "Which day you want :",

            "vol-submit": "Submit",

            "vol-note": "If you become a volunteer, we will send you an email to notify you!",

            "contact-title": "Contact",

            "contact-number-label": "Number :",
            "contact-email-label": "Email :",
            "contact-address-label": "Address :",
            "contact-hours-label": "Hours :",

            "contact-hours": "Mon - Fri: 10:00–18:00 and Sat: 10:00 - 14:00",

            "contact-map-title": "FIND US HERE"
        },

        es: {
            "hero-h2": "Bienvenido a MeowWoof !!",
            "hero-p": "Damos a las mascotas sin hogar una segunda oportunidad para encontrar amor y una familia",

            "about-h2": "Sobre Nosotros",
            "about-p1": "MeowWoof nació de un sueño simple: ver a cada gato y perro con un hogar seguro y amoroso.",
            "about-p2": "Nuestra misión es rescatar, rehabilitar y encontrar hogar para animales abandonados en Barcelona.",
            "about-p3": "Creemos que adoptar no solo salva una vida, sino que también te da un amigo fiel.",
            "about-p4": "Nuestro objetivo es ampliar nuestra red de acogida y ayudar a más animales.",

            "video-h2": "Mira el Amor en Acción",
            "video-p": "Cada rescate cuenta una historia.",

            "volunteer-h2": "Conviértete en Voluntario",
            "volunteer-p1": "Únete a nuestra misión para ayudar a los animales abandonados.",
            "volunteer-p2": "Tu tiempo y cariño pueden cambiar una vida.",
            "volunteer-btn": "Ser Voluntario",

            "adopt-h2": "Encuentra tu Compañero",
            "adopt-p": "Hay algunos animales esperando un hogar",

            "pet1-name": "Nombre: Lily",
            "pet1-gender": "Género: Hembra",
            "pet1-age": "Edad: 5 meses",
            "pet1-character": "Carácter: Energética",
            "pet1-adopt": "Adoptar",

            "pet2-name": "Nombre: Molly",
            "pet2-gender": "Género: Hembra",
            "pet2-age": "Edad: 3 años",
            "pet2-character": "Carácter: Fiable",
            "pet2-adopt": "Adoptar",

            "pet3-name": "Nombre: Princes",
            "pet3-gender": "Género: Hembra",
            "pet3-age": "Edad: 3 años",
            "pet3-character": "Carácter: Entusiasta",
            "pet3-adopt": "Adoptar",

            "pet4-name": "Nombre: DJ",
            "pet4-gender": "Género: Macho",
            "pet4-age": "Edad: 1 año",
            "pet4-character": "Carácter: Inteligente",
            "pet4-adopt": "Adoptar",

            "adopt-btn": "Ver Más",

            "stories-h2": "Historias",
            "stories-p": "Cada adopción es un nuevo comienzo.",

            "cta-h3": "¿Listo para ayudar?",
            "cta-btn1": "Únete Ahora",
            "cta-btn2": "Adoptar",

            "nav-home": "Inicio",
            "nav-adopt": "Adoptar",
            "nav-volunteer": "Voluntario",
            "nav-contact": "Contacto",

            "footer-desc1": "Rescatando y dando hogar a mascotas en Barcelona desde 2023.",
            "footer-desc2": "Cada vida cuenta, cada adopción importa.",
            "footer-links-title": "Enlaces rápidos",
            "footer-home": "Inicio",
            "footer-adopt": "Adoptar",
            "footer-volunteer": "Voluntario",
            "footer-contact": "Contacto",
            "footer-contact-title": "Contáctanos",
            "footer-hours": "Lun-Vie: 10:00 - 18:00<br>Sáb: 10:00 - 14:00",
            "footer-copy": "© 2025 MeowWoof! | Hecho con amor 🐾",
            "footer-privacy": "Política de Privacidad",
            "footer-terms": "Términos y Condiciones",
            "footer-cookies": "Cookies",

            "adopt-hero-title": "Dale amor a un hogar",
            "adopt-title": "NUESTROS AMIGOS",

            "petA-name": "Nombre: Emilia",
            "petA-gender": "Género: Hembra",
            "petA-age": "Edad: 1 año",
            "petA-character": "Carácter: Considerada",

            "petB-name": "Nombre: Lily",
            "petB-gender": "Género: Hembra",
            "petB-age": "Edad: 5 meses",
            "petB-character": "Carácter: Energética",

            "petC-name": "Nombre: Molly",
            "petC-gender": "Género: Hembra",
            "petC-age": "Edad: 3 años",
            "petC-character": "Carácter: Fiable",

            "petD-name": "Nombre: Princes",
            "petD-gender": "Género: Hembra",
            "petD-age": "Edad: 3 años",
            "petD-character": "Carácter: Entusiasta",

            "petE-name": "Nombre: Coco",
            "petE-gender": "Género: Macho",
            "petE-age": "Edad: 3 meses",
            "petE-character": "Carácter: Alegre",

            "petF-name": "Nombre: DJ",
            "petF-gender": "Género: Macho",
            "petF-age": "Edad: 1 año",
            "petF-character": "Carácter: Ingenioso",

            "petG-name": "Nombre: Jungle",
            "petG-gender": "Género: Hembra",
            "petG-age": "Edad: 7 meses",
            "petG-character": "Carácter: Tímida",

            "petH-name": "Nombre: Holiday",
            "petH-gender": "Género: Macho",
            "petH-age": "Edad: 5 meses",
            "petH-character": "Carácter: Extrovertido",

            "petI-name": "Nombre: Mimi",
            "petI-gender": "Género: Hembra",
            "petI-age": "Edad: 7 meses",
            "petI-character": "Carácter: Sociable",

            "petJ-name": "Nombre: Simba",
            "petJ-gender": "Género: Macho",
            "petJ-age": "Edad: 2 años",
            "petJ-character": "Carácter: Amigable",

            "form-guidelines-title": "Guía de Adopción",
            "form-before-title": "1. Antes de Adoptar",
            "form-before-1": "Un compromiso a largo plazo — Las mascotas pueden vivir de 10 a 15 años o más. ¿Estás preparado para cuidarlas durante toda su vida?",
            "form-before-2": "Tiempo y atención diaria — ¿Tienes suficiente tiempo cada día para alimentar, limpiar y pasar tiempo con tu mascota?",
            "form-before-3": "Estabilidad financiera — La adopción incluye gastos de alimentación, visitas al veterinario, vacunas, suministros y posibles emergencias.",
            "form-before-4": "Entorno familiar — ¿Están todos en casa de acuerdo con la adopción? ¿Alguien es alérgico o está en contra de tener mascotas?",
            "form-before-5": "Condiciones de vivienda — ¿Tu hogar permite mascotas y ofrece suficiente espacio seguro?",

            "form-resp-title": "2. Responsabilidades del Adoptante",
            "form-resp-1": "Proporcionar un entorno seguro.",
            "form-resp-2": "Vacunas y revisiones veterinarias.",
            "form-resp-3": "Nunca abandonar la mascota.",
            "form-resp-4": "No usar para reproducción o venta.",
            "form-resp-5": "Dar amor y paciencia.",

            "form-hope-title": "3. Lo que Esperamos",
            "form-hope-1": "Responsabilidad.",
            "form-hope-2": "Las mascotas son familia.",
            "form-hope-3": "Pedir ayuda cuando sea necesario.",

            "form-note": "🐾 Adoptar es un acto de amor.",

            "form-title": "Formulario de Adopción",
            "form-legend": "Tu Información",

            "label-name": "Nombre :",
            "label-lastname": "Apellido :",
            "label-female": "Mujer",
            "label-male": "Hombre",
            "label-age": "Edad :",
            "label-email": "Correo :",
            "label-number": "Teléfono :",
            "label-address": "Dirección :",
            "label-pet": "¿Qué mascota quieres adoptar?",

            "form-warning": "Asegúrate de haber leído las normas.",
            "form-submit": "Enviar Solicitud",

            "vol-schedule-title": "Horario de Actividades de Voluntarios",
            "vol-caption": "Horario semanal de actividades de voluntariado de MeowWoof",

            "vol-day": "DÍA",
            "vol-activity": "Actividad",
            "vol-time": "Hora",
            "vol-location": "Lugar",

            "vol-mon": "Lunes",
            "vol-mon-act": "Alimentar y limpiar el refugio",
            "vol-mon-loc": "Refugio principal, Barcelona",

            "vol-wed": "Miércoles",
            "vol-wed-act": "Socialización y entrenamiento",
            "vol-wed-loc": "Parque de entrenamiento",

            "vol-fri": "Viernes",
            "vol-fri-act": "Preparación del evento de adopción",
            "vol-fri-loc": "Centro de eventos",

            "vol-sun": "Domingo",
            "vol-sun-act": "Día de adopción y comunidad",
            "vol-sun-loc": "Plaza comunitaria",

            "vol-form-title": "Voluntario",
            "vol-legend": "Tu información",

            "vol-label-name": "Nombre :",
            "vol-label-last": "Apellido :",
            "vol-label-female": "Mujer",
            "vol-label-male": "Hombre",
            "vol-label-age": "Edad :",
            "vol-label-email": "Correo :",
            "vol-label-number": "Teléfono :",
            "vol-label-exp": "¿Tienes experiencia con mascotas?",
            "vol-label-day": "¿Qué día quieres?",

            "vol-submit": "Enviar",

            "vol-note": "Si te conviertes en voluntario, te enviaremos un correo de confirmación.",

            "contact-title": "Contacto",

            "contact-number-label": "Número :",
            "contact-email-label": "Correo :",
            "contact-address-label": "Dirección :",
            "contact-hours-label": "Horario :",

            "contact-hours": "Lun - Vie: 10:00–18:00 y Sáb: 10:00 - 14:00",

            "contact-map-title": "ENCUÉNTRANOS AQUÍ"
        },

        ca: {
            "hero-h2": "Benvingut a MeowWoof !!",
            "hero-p": "Donem una segona oportunitat a les mascotes sense llar",

            "about-h2": "Sobre Nosaltres",
            "about-p1": "MeowWoof va néixer d'un somni simple: que cada gat i gos tingui una llar.",
            "about-p2": "La nostra missió és rescatar i trobar família als animals abandonats.",
            "about-p3": "Adoptar és salvar una vida.",
            "about-p4": "Volem ajudar cada vegada més animals.",

            "video-h2": "Mira l'Amor en Acció",
            "video-p": "Cada rescat explica una història.",

            "volunteer-h2": "Fes-te Voluntari",
            "volunteer-p1": "Ajuda'ns a cuidar animals abandonats.",
            "volunteer-p2": "El teu temps pot salvar vides.",
            "volunteer-btn": "Ser Voluntari",

            "adopt-h2": "Troba el teu Company",
            "adopt-p": "Alguns animals esperen una llar",

            "pet1-name": "Nom: Lily",
            "pet1-gender": "Gènere: Femella",
            "pet1-age": "Edat: 5 mesos",
            "pet1-character": "Caràcter: Energètica",
            "pet1-adopt": "Adoptar",

            "pet2-name": "Nom: Molly",
            "pet2-gender": "Gènere: Femella",
            "pet2-age": "Edat: 3 anys",
            "pet2-character": "Caràcter: Fiable",
            "pet2-adopt": "Adoptar",

            "pet3-name": "Nom: Princes",
            "pet3-gender": "Gènere: Femella",
            "pet3-age": "Edat: 3 anys",
            "pet3-character": "Caràcter: Entusiasta",
            "pet3-adopt": "Adoptar",

            "pet4-name": "Nom: DJ",
            "pet4-gender": "Gènere: Mascle",
            "pet4-age": "Edat: 1 any",
            "pet4-character": "Caràcter: Intel·ligent",
            "pet4-adopt": "Adoptar",

            "adopt-btn": "Veure Més",

            "stories-h2": "Històries",
            "stories-p": "Cada adopció és un nou començament.",

            "cta-h3": "Preparat per ajudar?",
            "cta-btn1": "Uneix-te Ara",
            "cta-btn2": "Adoptar",

            "nav-home": "Inici",
            "nav-adopt": "Adoptar",
            "nav-volunteer": "Voluntari",
            "nav-contact": "Contacte",

            "footer-desc1": "Rescatant i trobant llar per animals a Barcelona des de 2023.",
            "footer-desc2": "Cada vida compta, cada adopció importa.",
            "footer-links-title": "Enllaços ràpids",
            "footer-home": "Inici",
            "footer-adopt": "Adoptar",
            "footer-volunteer": "Voluntari",
            "footer-contact": "Contacte",
            "footer-contact-title": "Contacta'ns",
            "footer-hours": "Dl-Dv: 10:00 - 18:00<br>Ds: 10:00 - 14:00",
            "footer-copy": "© 2025 MeowWoof! | Fet amb amor 🐾",
            "footer-privacy": "Política de Privacitat",
            "footer-terms": "Termes i Condicions",
            "footer-cookies": "Cookies",

            "adopt-hero-title": "Dóna amor a una llar",
            "adopt-title": "ELS NOSTRES AMICS",

            "petA-name": "Nom: Emilia",
            "petA-gender": "Gènere: Femella",
            "petA-age": "Edat: 1 any",
            "petA-character": "Caràcter: Considerada",

            "petB-name": "Nom: Lily",
            "petB-gender": "Gènere: Femella",
            "petB-age": "Edat: 5 mesos",
            "petB-character": "Caràcter: Energètica",

            "petC-name": "Nom: Molly",
            "petC-gender": "Gènere: Femella",
            "petC-age": "Edat: 3 anys",
            "petC-character": "Caràcter: Fiable",

            "petD-name": "Nom: Princes",
            "petD-gender": "Gènere: Femella",
            "petD-age": "Edat: 3 anys",
            "petD-character": "Caràcter: Entusiasta",

            "petD-name": "Nom: Coco",
            "petE-gender": "Gènere: Mascle",
            "petE-age": "Edat: 3 mesos",
            "petE-character": "Caràcter: Alegre",

            "petF-name": "Nom: DJ",
            "petF-gender": "Gènere: Mascle",
            "petF-age": "Edat: 1 any",
            "petF-character": "Caràcter: Enginyós",

            "petG-name": "Nom: Jungle",
            "petG-gender": "Gènere: Femella",
            "petG-age": "Edat: 7 mesos",
            "petG-character": "Caràcter: Reservada",

            "petH-name": "Nom: Holiday",
            "petH-gender": "Gènere: Mascle",
            "petH-age": "Edat: 5 mesos",
            "petH-character": "Caràcter: Extrovertit",

            "petI-name": "Nom: Mimi",
            "petI-gender": "Gènere: Femella",
            "petI-age": "Edat: 7 mesos",
            "petI-character": "Caràcter: Sociable",

            "petJ-name": "Nom: Simba",
            "petJ-gender": "Gènere: Mascle",
            "petJ-age": "Edat: 2 anys",
            "petJ-character": "Caràcter: Amigable",

            "form-guidelines-title": "Guia d'Adopció",
            "form-before-title": "1. Abans d'Adoptar",
            "form-before-1": "Compromís a llarg termini — Les mascotes poden viure de 10 a 15 anys o més. Estàs preparat per cuidar-les durant tota la seva vida?",
            "form-before-2": "Temps i atenció — Tens prou temps cada dia per alimentar, netejar i passar estones amb la teva mascota?",
            "form-before-3": "Estabilitat financera — L'adopció inclou despeses d'alimentació, visites al veterinari, vacunes, subministraments i possibles emergències.",
            "form-before-4": "Entorn familiar — Tothom a casa està d'acord amb l'adopció? Algú és al·lèrgic o està en contra de tenir mascotes?",
            "form-before-5": "Condicions d'habitatge — La teva llar permet mascotes i ofereix prou espai segur?",

            "form-resp-title": "2. Responsabilitats de l'Adoptant",
            "form-resp-1": "Proporcionar un entorn segur.",
            "form-resp-2": "Vacunes i revisions veterinàries.",
            "form-resp-3": "No abandonar mai la mascota.",
            "form-resp-4": "No utilitzar per cria o venda.",
            "form-resp-5": "Donar amor i paciència.",

            "form-hope-title": "3. El que Esperem",
            "form-hope-1": "Responsabilitat.",
            "form-hope-2": "Les mascotes són família.",
            "form-hope-3": "Demanar ajuda quan sigui necessari.",

            "form-note": "🐾 Adoptar és un acte d'amor.",

            "form-title": "Formulari d'Adopció",
            "form-legend": "La Teva Informació",

            "label-name": "Nom :",
            "label-lastname": "Cognom :",
            "label-female": "Dona",
            "label-male": "Home",
            "label-age": "Edat :",
            "label-email": "Correu :",
            "label-number": "Telèfon :",
            "label-address": "Adreça :",
            "label-pet": "Quina mascota vols adoptar?",

            "form-warning": "Assegura't d'haver llegit les normes.",
            "form-submit": "Enviar Sol·licitud",

            "vol-schedule-title": "Horari d'Activitats de Voluntaris",
            "vol-caption": "Horari setmanal de voluntariat de MeowWoof",

            "vol-day": "DIA",
            "vol-activity": "Activitat",
            "vol-time": "Hora",
            "vol-location": "Lloc",

            "vol-mon": "Dilluns",
            "vol-mon-act": "Alimentar i netejar el refugi",
            "vol-mon-loc": "Refugi principal, Barcelona",

            "vol-wed": "Dimecres",
            "vol-wed-act": "Socialització i entrenament",
            "vol-wed-loc": "Parc d'entrenament",

            "vol-fri": "Divendres",
            "vol-fri-act": "Preparació de l'esdeveniment d'adopció",
            "vol-fri-loc": "Centre d'esdeveniments",

            "vol-sun": "Diumenge",
            "vol-sun-act": "Dia d'adopció i comunitat",
            "vol-sun-loc": "Plaça comunitària",

            "vol-form-title": "Voluntari",
            "vol-legend": "La teva informació",

            "vol-label-name": "Nom :",
            "vol-label-last": "Cognom :",
            "vol-label-female": "Dona",
            "vol-label-male": "Home",
            "vol-label-age": "Edat :",
            "vol-label-email": "Correu :",
            "vol-label-number": "Telèfon :",
            "vol-label-exp": "Tens experiència amb mascotes?",
            "vol-label-day": "Quin dia vols?",

            "vol-submit": "Enviar",

            "vol-note": "Si et converteixes en voluntari, t'enviarem un correu per confirmar-ho.",

            "contact-title": "Contacte",

            "contact-number-label": "Telèfon :",
            "contact-email-label": "Correu :",
            "contact-address-label": "Adreça :",
            "contact-hours-label": "Horari :",

            "contact-hours": "Dl - Dv: 10:00–18:00 i Ds: 10:00 - 14:00",

            "contact-map-title": "TROBA'NS AQUÍ"
        }

    };

    $("#selector-idiomas button").click(function () {

        const lang = $(this).data("lang");

        localStorage.setItem("lang", lang); // remember 

        // Traducir esta pagina
        $("[id]").each(function () {

            const id = $(this).attr("id");

            if (translations[lang][id]) {
                $(this).html(translations[lang][id]);
            }

        });


        // traducir header iframe
        const headerDoc = $("#headerFrame")[0].contentWindow.document;

        $(headerDoc).find("[id]").each(function () {

            const id = $(this).attr("id");

            if (translations[lang][id]) {
                $(this).html(translations[lang][id]);
            }

        });


        // traducir footer iframe
        const footerDoc = $("iframe[src*='footer']")[0].contentWindow.document;

        $(footerDoc).find("[id]").each(function () {

            const id = $(this).attr("id");

            if (translations[lang][id]) {
                $(this).html(translations[lang][id]);
            }

        });

    });

    // actualizar iframe
    $("#headerFrame").on("load", function () {
        const lang = localStorage.getItem("lang");
        if(lang){
            $(this).contents().find("[id]").each(function(){
                const id = $(this).attr("id");
                if(translations[lang][id]){
                    $(this).html(translations[lang][id]);
                }
            });
        }
    });

    const savedLang = localStorage.getItem("lang");

    if(savedLang){
        $(".lang-selected").text(savedLang.toUpperCase() + " ▾");
        $("#selector-idiomas button[data-lang='" + savedLang + "']").click();
    }

    $("#selector-idiomas button").click(function () {

    const lang = $(this).data("lang");

    $(".lang-selected").text(lang.toUpperCase() + " ▾"); // Actual idioma

    localStorage.setItem("lang", lang);

    });

});

