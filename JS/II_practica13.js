// 2. Comportamiento Dinámico con JavaScript 
// 3. Validación con JavaScript (6 Puntos)

let allowSubmit = false;

document.addEventListener('DOMContentLoaded', ()=>{

    const form = document.querySelector('form');
    let formType = "";

    // Determina que forma es
    if (form.id === "adoptForm") {
        formType = "adopt";
    } else if (form.id === "volunForm") {
        formType = "volunteer";
    }
    const motivation = document.getElementById('motivation');
    const contador = document.getElementById('contador');

    // part 2
    motivation.addEventListener('input', ()=>{
        const currentLength = motivation.value.length;
        contador.textContent = `${currentLength} / 200`;

        // si menos 20 chars
        if(200 - currentLength < 20){
            contador.style.color = "red";
            contador.style.fontWeight = "bold";
        }else{
            contador.style.color = "inherit";
            contador.style.fontWeight = "normal";
        }
    });

    // part 3
    form.addEventListener('submit', (event) =>{
        
        event.preventDefault();

        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const passwordEl = document.getElementById('password');

        const name = nameEl ? nameEl.value : "";
        const email = emailEl ? emailEl.value : "";
        const password = passwordEl ? passwordEl.value : "";

        // examinar gmail
        const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailR.test(email)){
            alert("Error: Please provide a valid email address.");
            return;
        }

        // MAYUS DE LA PRIIMERA CHAAR DE NOMBRE
        const  nameR = /^[A-Z]/;

        // si no 
        if (!nameR.test(name)) {
            alert("Error: Your Name must start with an Uppercase letter (A-Z).");
            return;
        }

        // password 
        if (formType === "adopt") {

            if(password.length < 8){
                alert("The Security Code must be at least 8 characters long.");
                return;
            }else if(!/[A-Z]/.test(password)){
                alert("The code must contain at least one uppercase letter (A-Z).");
                return;
            }else if(!/[a-z]/.test(password)){
                alert("The code must contain at least one lowercase letter (a-z).");
                return;
            }else if(!/[0-9]/.test(password)){
                alert("The code must contain at least one number (0-9).");
                return;
            }

        }

        alert("Application submitted successfully!");
            // form.submit(); -> no ejecutar para que no mostrar 405
            window.location.href = `success.html?type=${formType}`;
    });
});