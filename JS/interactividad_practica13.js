(()=>{

    /*1. CHART.JS------------------------------------------------------------*/

    const canvasChart = document.getElementById("adoptionChart");

    // eviatr error
    if(canvasChart){
        const chart = new Chart(canvasChart,{
            type:'bar',

            data: {
                labels: ['Dogs', 'Cats', 'Others'],

                datasets: [{
                    label: 'Adopted Pets',

                    data: [80, 90, 30],

                    // color define
                    backgroundColor: [
                        '#57cca5',
                        '#bb8f61',
                        '#f5dc9c'
                    ],
                    hoverBackgroundColor: [
                        '#357A63',
                        '#8D663E',
                        '#D4A72C' 
                    ],
                    borderWidth: 0,
                    borderRadius: 5
                }]
            }
        });

        // btn interaccion
        const btn = document.getElementById("updateChart");

        if(btn){
            btn.addEventListener("click", () =>{
                // random data
                chart.data.datasets[0].data = [
                    Math.floor(Math.random()*100),
                    Math.floor(Math.random()*100),
                    Math.floor(Math.random()*100)
                ];

                chart.update();
            })
        }

    }


    /*2. ANIME.JS------------------------------------------------------------*/

    const cards = document.querySelectorAll(".pet_card");

    if(cards.length > 0){
        // stagger
        anime({
            targets: '.pet_card',
            opacity: [0,1],
            translateY:[50 ,0],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutQuad'

        });


        // raton hover
        document.querySelectorAll('.adopt_button').forEach(btn =>{
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                
                document.querySelectorAll('.adopt_button').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');

                setTimeout(() => {
                    window.location.href = btn.getAttribute("href");
                }, 400);
            });
        
            btn.addEventListener("mouseenter",()=>{
                anime({
                    targets: btn,
                    scale: 1.1,
                    duration: 200
                });
            });

            btn.addEventListener("mouseleave", ()=>{
                anime({
                    targets: btn,
                    scale: 1,
                    duration: 200
                });
            });
        });
    }


    /*canvas-------------------------------------------------------------------- */
    const canvas = document.getElementById("heroCanvas");

    if(canvas){
        const ctx = canvas.getContext("2d");
        const container = canvas.parentElement;

        const setSize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        };
        setSize();
        window.addEventListener("resize", setSize);

        let mouse = { x: -100, y: -100 };

        // movimiento de raton
        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });


        // bucle anime
        function animate(){

            // clean 
            ctx.fillStyle = "rgba(122, 199, 169, 0.1)";
            ctx.clearRect(0, 0, canvas.width,canvas.height);

            //dibujar un circle
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();


            // bucle
            requestAnimationFrame(animate);
        }

        

        animate();
    }
})();