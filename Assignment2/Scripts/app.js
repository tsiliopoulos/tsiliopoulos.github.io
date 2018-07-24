/* Custom javaScripts goes here */
/*  File name          app.js
    Author's name      Nusrat Ara Riaz
    Web site name      nusratarasg.github.io
    File description   This file contain JavaScript Code */
    
// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app;
(function (app) {
    "use strict"
    function Start() {
        // local variable
        let title = document.title;
    
        console.log("%c Assignment2!", " text-align:centre;font-weight:bold; font-size: 40px;color:Brown");
        console.log(`%c ----------------------------------------------`, "font-weight:bold;background-color:grey");
        console.log("%c Welcome to : " + title,"font-weight:bold;color:brown;font-size: 20px"   );

        try {

            switch (title) {
                case "About Me":
                    content.AboutHomeContent();
                    break;

                case "Contact-Details":
                    content.AboutContactContent();
                    break;

                case "Project-Details":
                    content.AboutProjectContent();
                    break;

                default:
                    throw ("Title not Defined");
                    break;
            }
        }
        catch (err) {
            console.log(err);
            console.warn("Something went wrong when switching pages");
        }
    }


    //window.onload = Start;

    window.addEventListener("load", Start);


    // these are all app properties
    app.Title = document.title;


})(app || (app = {}));