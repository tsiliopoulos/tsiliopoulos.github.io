/* Custom javaScripts goes here */
/*  File name          project.js
    Author's name      Nusrat Ara Riaz
    Web site name      nusratarasg.github.io
    File description   This file contain JavaScript Code */
(function (content) {

    function AboutProjectContent() {
        console.log("%c View my project Details ", "font-weight:bold; font-size: 20px;color:blue");


        let myProject1List = [
            "I built a website to help advertise the inventory of a car dealership and enable customers to contact the dealership with questions",
            "The website was built using Web Expression",
            "I designed and executed the webpage",
            "This project helped me gain expertise in the use of Web Templates and image gallery designs"

        ];
        let myProject2List = [
            "I worked with a team of dedicated individuals to help design an online hotel reservation system",
            "The reservation system was built using SQL Developer .",
            "I conducted extensive background research for the project and designed an Entity Relationship Diagram",
            "It was an excellent learning opportunity."

        ];
        let myProject3List = [
            "I volunteered to help care for the Scarborough community garden in my neighborhood ",
            "This project helped me connect with many members of my community who share a common interest in gardening",
            "Through this experience I learnt a lot about how to care for plants",
            "I was able to express my creativity in many ways through this project"

        ];
        //While loop Starts here
        let myFavouritesList = document.getElementById("proj1DetailsList")

        let index = 0;
        while (index < myProject1List.length) {
         
            let newItem = document.createElement("li");
            myFavouritesList.appendChild(newItem);
            newItem.textContent = myProject1List[index];
            index++;
        }

        //hook into a ul that has an id of "proj2DetailsList"
        let myProj2DetailList = document.getElementById("proj2DetailsList");

        myProject2List.forEach(thing2 => {
            let newItem = document.createElement("li");
            newItem.textContent = thing2;
            myProj2DetailList.appendChild(newItem);
        });
        // hook into a ul that has an id of "proj3DetailsList"
        let myProj3DetailList = document.getElementById("proj3DetailsList");

        myProject3List.forEach(info => {
            let newItem = document.createElement("li");
            newItem.textContent = info;
            myProj3DetailList.appendChild(newItem);
        });
        //--New Code Appended 
        let projectStart = "Project Details"

        if (document.getElementById("Project1")) {
            let projectStart = "Project Details"
            document.getElementById("Project1").innerHTML = projectStart;
        }
        if (document.getElementById("Project2")) {
            document.getElementById("Project2").innerHTML = projectStart;
        }
        if (document.getElementById("Project3")) {
            document.getElementById("Project3").innerHTML = projectStart;
        }

        // Project Page h6 Section
        let Project1Benefits = "<strong>Benefits:</strong> <br>The website facilitates the dealership’s business by making information about their inventory and prices readily available to customers..";
        let Project2Benefits = " <strong>Benefits:</strong> <br>The reservation system helps minimize human errors and greatly facilitates hotel business by making reservations more efficient and cost-effective. .";
        let Project3Benefits = "<strong>Benefits:</strong> <br> This project enabled me to give back to my community and add to the beauty of my surroundings  ";

        if (document.getElementById("proj1")) {
            document.getElementById("proj1").innerHTML = Project1Benefits;
        }

        if (document.getElementById("proj2")) {
            document.getElementById("proj2").innerHTML = Project2Benefits;
        }

        if (document.getElementById("proj3")) {
            document.getElementById("proj3").innerHTML = Project3Benefits;

        }
    }
    // attach ProjectContent function to the "content" namespace
    content.AboutProjectContent = AboutProjectContent;
}(content || (content = {})));