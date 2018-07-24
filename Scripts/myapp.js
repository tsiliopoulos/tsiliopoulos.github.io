/* Custom JavaScript goes here  */
/*  File name          app.js
    Author's name      Nusrat Ara Riaz
    Web site name      nusratarasg.github.io
    File description   This file contain JavaScript Code */
    
// JavaScript for project.html
(function(){

    let myProject1List = [
        "My Second Advance DataBase Project",
        "It has fifty tables and many many fileds",
        "It was a complex project, Not easy to complet but it was an intersting project",
        "initially it was bit hard for us to design the ERD.",
        "Altogather it was a good Learning opportunity"
    ];
    let myProject2List = [
        "I worked with a team of dedicated individuals to help design an online hotel reservation system",
        "The reservation system was built using SQL Developer .",
        "I conducted extensive background research for the project and designed an Entity Relationship Diagram",
        "It was an excellent learning opportunity.",
        
    ];    
    let myProject3List = [
        "I volunteered to help care for the Scarborough community garden in my neighborhood ",
        "This project helped me connect with many members of my community who share a common interest in gardening",
        "Through this experience I learnt a lot about how to care for plants",
        "I was able to express my creativity in many ways through this project",
        
    ];
    //While loop Starts here
   let myFavouritesList = document.getElementById("proj1DetailsList")

    let index = 0;
    while (index < myProject1List.length) {
        console.log(myProject1List[index]);
        let newItem = document.createElement("li");
        myFavouritesList.appendChild(newItem);
        newItem.textContent = myProject1List[index];
        index++;
    }
    
     //"hook into" a ul that is empty that has an id of "proj2DetailsList"
     let myProj2DetailList = document.getElementById("proj2DetailsList");
 
     myProject2List.forEach(thing2 => {
         let newItem = document.createElement("li");
         newItem.textContent = thing2;
         myProj2DetailList.appendChild(newItem);
     });
     // "hook into" a ul that is empty that has an id of "proj3DetailsList"
    let myProj3DetailList = document.getElementById("proj3DetailsList");
 
    myProject3List.forEach(info => {
    let newItem = document.createElement("li");
    newItem.textContent = info;
    myProj3DetailList.appendChild(newItem);
});

})();