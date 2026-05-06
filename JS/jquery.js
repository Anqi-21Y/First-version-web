/*
Name: Anqi Yang
Missions completed: 1,2,3,4,5

Mission 1: Element selection and visual changes
Mission 2: Add and remove DOM elements
Mission 3: Event handling
Mission 4: Animations
Mission 5: jQuery UI plugin integration
*/



$(document).ready(function() {

    //Mission 1: Element selection and visual changes --------------------------------------------------
    // etiqueta
    $("h2").css("color","#e2c002");

    //class
    $(".pet_card").css("border" , "1px solid #eee");

    // id
    $("#headerFrame").css("border-bottom" , "3px solid #e67e22");

    //pet_card
    $(".pet_card:even").css("background", "#fffaf0")


    // Mission 2: Add and remove DOM elements--------------------------------------------------------------
    // Primero, agregue dinámicamente un botón "Agregar historia" en una ubicación adecuada en la página.

    $("#addStory").on("click", function(){
        const formHtml = `
            <div id="storyForm">
                <input type="text" id="storyName" placeholder="Pet name" style="width:100%; margin-bottom:10px;">
                <input type="text" id="storyDate">
                <input type="text" id="storyAuthor" placeholder="Author" style="width:100%; margin-bottom:10px;">
                <textarea id="storyText" placeholder="Write the story..." style="width:100%; margin-bottom:10px;"></textarea>
                <label for="storyImage" class="custom-file-upload">Choose Photo</label>
                <input type="file" id="storyImage" accept="image/*" capture="environment" hidden>
            </div>
        `;

        $(formHtml).dialog({
            title: "Add New Story 🐾",
            modal: true,
            width: 400,

            open: function() {
                $("#storyDate").datepicker({
                    dateFormat: "MM yy",
                    changeMonth: true,
                    changeYear: true
                });
            },

            buttons: {
                "Add Story": function(){

                    const name = $("#storyName").val();
                    const date = $("#storyDate").val();
                    const author = $("#storyAuthor").val();
                    const text = $("#storyText").val();
                    const file = $("#storyImage")[0].files[0];

                    if(!name || !date || !author){
                        alert("Please fill required fields!");
                        return;
                    }

                    // ejecutar img
                    const reader = new FileReader();

                    reader.onload = function(e){

                        const newStory = `
                            <div class="story" style="display:none;">
                                <img src="${e.target.result}" alt="${name}">
                                <div class="story-content">
                                    <p class="story-names"><strong>${name}</strong></p>
                                    <p class="story-date">Adopted: ${date}</p>
                                    <p class="story-author">— ${author}</p>
                                    <p>${text}</p>
                                    <button class="btn btn-outline deleteStory" style="color:red;">Delete</button>
                                </div>
                            </div>
                        `;

                        $(".stories_container").append(newStory);
                        $(".story").last().fadeIn();
                    };

                    if(file){
                        reader.readAsDataURL(file);
                    } else {
                        // no hay img tabien puede submit
                        reader.onload({ target: { result: "../imag_carpeta/default.jpg" }});
                    }

                    $(this).dialog("close");
                },

                "Cancel": function(){
                    $(this).dialog("close");
                }
            }
        });

    });

    // Delefated events
    $(".stories_container").on("click",".deleteStory", function(){
        $(this).closest(".story").remove();
    });


    // Mission 3: Event handling-----------------------------------------------------------------------

    //1. Mouse: Click en el botón de adoptar
    //Haga doble clic en la imagen para mostrar el nombre del animal.
    $(".pet_card img").on("dblclick", function(){
        const name = $(this).siblings("h4").text();// obtener el nombre de pets
        alert("You are looking at " + name + "! Great choice!");
    });

    // 2. Keyboeard 
    $(window).on("keypress", function(e){
        if(e.key === "f" || e.key === "F"){
            alert("Search feature coming soon! You pressed 'F'");
        }
    });

    // 3. Form/Other: Hover feedback
    $(".adopt_button").on("click", function(e) {
        e.preventDefault(); // Prevenir redirección
        $(this).fadeOut(200).fadeIn(200).text("Selected ✓").css("background-color", "#27ae60");
    });

    $("video").on("play", function(){
        $(".video-section p").text("Enjoy the video!");
    });

    // Mission 4: Animations--------------------------------------------------------------------------------
    //La imagen se vuelve transparente cuando el ratón click sobre la tarjeta.
    $(".adopt_button").on("click", function(){
        $(this).fadeTo(300, 0.7);

    }).on("mouseleave", function(){
        $(this).fadeTo(300, 1);
    });

    // Haga clic en "Acerca de nosotros" para ocultar el contenido del título.
    $(".about h2").on("click", function(){
        $(".about p").slideToggle(500);
    });

    // Animate (Custom):Animación personalizada durante la carga de texto en Hero
    $(".text h2").animate({
        fontSize: "56px",
        letterSpacing: "5px"
    }, 1500);


    // Mission 5: jQuery UI plugin integration------------------------------------------------------------
    //Agregue información sobre herramientas de jQuery UI a todos los elementos que contengan la clase .btn.
    $(document).tooltip();

    // Agregue un efecto de diálogo jQuery UI simple al texto de la sección de adopción.
    $(".adopt_header h2").on("click", function(){
        // crear un div temporal 
        $('<div title="MeowWoof says:">Each pet is vaccinated and ready!</div>').dialog({
             modal: true,
             buttons:{
                "Cool ! ": function(){
                    $(this).dialog("close");
                }
            }
        });
    });

});
