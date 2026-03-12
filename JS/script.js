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
            "footer-cookies": "Cookies"
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
            "footer-cookies": "Cookies"
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
            "footer-cookies": "Cookies"
        }

    };

    $("#selector-idiomas button").click(function () {

        const lang = $(this).data("lang");

        localStorage.setItem("lang", lang); // remember 

        // Traducir esta pagina
        $("[id]").each(function () {

            const id = $(this).attr("id");

            if (translations[lang][id]) {
                $(this).text(translations[lang][id]);
            }

        });


        // traducir header iframe
        const headerDoc = $("#headerFrame")[0].contentWindow.document;

        $(headerDoc).find("[id]").each(function () {

            const id = $(this).attr("id");

            if (translations[lang][id]) {
                $(this).text(translations[lang][id]);
            }

        });


        // traducir footer iframe
        const footerDoc = $("iframe[src*='footer']")[0].contentWindow.document;

        $(footerDoc).find("[id]").each(function () {

            const id = $(this).attr("id");

            if (translations[lang][id]) {
                $(this).text(translations[lang][id]);
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
                    $(this).text(translations[lang][id]);
                }
            });
        }
    });

    $(document).ready(function(){

        const savedLang = localStorage.getItem("lang");

        if(savedLang){
            $("#selector-idiomas button[data-lang='" + savedLang + "']").click();
        }

    });

});

