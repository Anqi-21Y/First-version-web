// 2. Comportamiento Dinámico con JavaScript 
// 3. Validación con JavaScript (6 Puntos)

document.addEventListener('DOMContentLoaded', ()=>{
    event.preventDefault();

    const form = document.querySelector('form');
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
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // examinar gmail
        const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailR.test(email)){
            alert("Error: Please provide a valid email address.");
            event.preventDefault();// no enviar
            return;
        }

        // MAYUS DE LA PRIIMERA CHAAR DE NOMBRE
        const  nameR = /^[A-Z]/;

        // si no 
        if (!nameR.test(name)) {
            alert("Error: Your Name must start with an Uppercase letter (A-Z).");
            event.preventDefault();
            return;
        }

        // password 
        if(password.length <8){
            alert("The Security Code must be at least 8 characters long.");
            event.preventDefault();
        }else if(!/[A-Z]/.test(password)){
            alert("The code must contain at least one uppercase letter (A-Z).");
            event.preventDefault();
        }else if(!/[a-z]/.test(password)){
            alert("The code must contain at least one lowercase letter (a-z).");
            event.preventDefault();
        }else if(!/[0-9]/.test(password)){
            alert("The code must contain at least one number (0-9).");
            event.preventDefault();
        }else{
            alert("Application submitted successfully! Please save your access code.");
            form.submit();
        }
    });
});