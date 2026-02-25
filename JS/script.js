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
