
/* Custom javaScripts goes here */
/*  File name          app.js
    Author's name      Nusrat Ara Riaz
    Web site name      nusratarasg.github.io
    File description   This file contain JavaScript Code */
// IIFE

(function () {

    // About Button Click To enter text through String variable
    function AboutButtonClick() {
        console.log("About Button Clicked");
        event.document.getElementById(aboutButton)
        let mytextB = "My mission is to learn new things and service community better with high quality, excellent value, integrity and enthusiasm. We will function as a team, work ethically, and focus on meeting and striving to exceed the expectations of our community.";
        aboutButton.textContent = mytextB;
    }
    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }
    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }
    function AboutHomeContent() {
         
        let paragraph1 = document.getElementById("paragraph1");
        let mytext1 = "Welcome to my portfolio! I am Nusrat Riaz, a student at Centennial College, ON. My previous education is MSc in Computer Science. I am fluent in English, Urdu, Hindi, Punjabi and French. I have experience in HTML / CSS, Relational Databases (ORACLE, MYSQL), C#, Microsoft Office (Word, Visio, Project, Excel, PowerPoint, Access), Dreamweaver.";
        paragraph1.textContent = mytext1;

        let paragraph2 = document.getElementById("paragraph2");
        let mytext2 = "My personal mission is to lead a fulfilling and happy life, which includes professional development and being a positive influence for my family and community members. My professional goal is to establish a successful career in Web Development with an emphasis on intellectual growth and networking with professionals in the field. I seek out challenges that help me better my skills as a web developer and I find overcoming these challenges extremely rewarding and fulfilling. I move forward in life with a sense of purpose and gratitude, and strive to make a personal commitment to hard work and integrity. One of my favourite quote is by Joshua J. Marine: ";
        paragraph2.textContent = mytext2;

        // About Button EventListner
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);

    }

    function AboutAboutContent() {

        let pranew = document.getElementById("pra2");
        let mysentence = "Some ";
        pranew.textContent = mysentence;

    }
    // Code for project Details and Vaules Not used in this Assignment
    let proDetailSentence = "Project Details!";
    let projValue1Sentence = "The app helps police force to manage cases from start to finish, centralizing massive amounts of critical information. It also allows for rapid detailed searches across districts - a capability that was labor intensive in the past.!<br> The new case management system has taken the police force to another level. All the necessary information is stored and is helping our police force in fast detecting common cases through similar modus operandi.";
    let projValue2Sentence = "The app allows Tasty Fresh Food Co. to save on the cost of hiring additional relief drivers to manage unfamiliar routes. It has also increased customer satisfaction. Real-time insights into driver routes and food truck inventory means support personnel can answer customer complains in minutes instead of hours.";
    let projValue3Sentence = "Benefits <br> Went from spreadsheets to iPad for a holistic view of orders with instant prompts such as follow-ups and missing orders; gave management instant visibility into sales progress; increased ROI through fast, easy in-house app development";
    function myFunctionDetail() {
        document.getElementsByTagName("h4")[0].innerHTML = proDetailSentence;
        document.getElementsByTagName("h4")[2].innerHTML = proDetailSentence;
        document.getElementsByTagName("h4")[4].innerHTML = proDetailSentence;
    }

    function myFunctionResult() {
        document.getElementsByTagName("h6")[0].innerHTML = projValue1Sentence;
        document.getElementsByTagName("h6")[1].innerHTML = projValue2Sentence;
        document.getElementsByTagName("h6")[2].innerHTML = projValue3Sentence;
    }
    //=======Code to Write Project Details  Not used in this Assignment
    function myFunction2() {
        let x = document.getElementsByTagName("h5");
        let counter;
        for (counter = 0; counter < x.length; counter++) {
    let proDetailSentence = "A custom app built on the FileMaker Platform allows this South American food delivery service to deliver on their 'on time' promise.!";
    let proDetailSentence = "A custom app built on the FileMaker Platform allows this South American food delivery service to deliver on their 'on time' promise.!";
    x[counter].innerHTML = "New Project Details With For Loop";
        }
    }
    //======
    // Switch Statement
    function Start() {
        let title = document.title;
        console.log(title);

        switch (title) {
            case "Assignment-Home":
                AboutHomeContent();
                break;
            case "Assignment-Contact":
                AboutAboutContent();
                break;
            case "Project-Details":
                myFunction2();
                myFunctionDetail();
                myFunctionResult();
                myfunky();
                
                break;
            default:
                break;
        }
    }
    // Project Page h4 Section
    let mytextmain = "Some of my projects datails "
    if (document.getElementById("mainTitle")) {
        document.getElementById("mainTitle").innerHTML = mytextmain;
    }
    let mytext = "Project Details"

        if(  document.getElementById("projectHeading1")){
            document.getElementById("projectHeading1").innerHTML = mytext;
        }
        if(  document.getElementById("projectHeading2")){
            document.getElementById("projectHeading2").innerHTML = mytext;
        }
        if(  document.getElementById("projectHeading3")){
            document.getElementById("projectHeading3").innerHTML = mytext;
        }

 // Project Page h6 Section
     myProject1= "<strong>Benefits:</strong> <br>The website facilitates the dealership’s business by making information about their inventory and prices readily available to customers..";
     
     myProjectr= " <strong>Benefits:</strong> <br>The app allows Tasty Fresh Food Co. to save on the cost of hiring additional relief drivers to manage unfamiliar routes. It has also increased customer satisfaction. Real-time insights into driver routes and food truck inventory means support personnel can answer customer complains in minutes instead of hours.";

     if( document.getElementById("proj1")){
         document.getElementById("proj1").innerHTML= myProject1;
     }
     
     if ( document.getElementById("projr1")){
         document.getElementById("projr1").innerHTML= myProjectr;

     } 

    myProject4 = " <strong>Benefits:</strong> <br>The reservation system helps minimize human errors and greatly facilitates hotel business by making reservations more efficient and cost-effective. .";
    myProject7 = " <strong>Benefits:</strong> <br>The app helps police force to manage cases from start to finish, centralizing massive amounts of critical information. It also allows for rapid detailed searches across districts - a capability that was labor intensive in the past. "
    if (document.getElementById("proj4")) {
        document.getElementById("proj4").innerHTML = myProject4;
    }
    if (document.getElementById("projr2")) {
        document.getElementById("projr2").innerHTML = myProject7;
    }
    myProject4 = "<strong>Benefits:</strong> <br> This project enabled me to give back to my community and add to the beauty of my surroundings  ";
    myProject7 = "<strong>Benefits:</strong> <br> Went from spreadsheets to iPad for a holistic view of orders with instant prompts such as follow-ups and missing orders; gave management instant visibility into sales progress; increased ROI through fast, easy in-house app development "
    if (document.getElementById("proj5")) {
        document.getElementById("proj5").innerHTML = myProject4;
    }
    if (document.getElementById("projr3")) {
        document.getElementById("projr3").innerHTML = myProject7;

    }
    // ======== Project Detail Section ========================
     /*    
    let myProject1List = [
        "My Second Advance DataBase Project",
        "It has fifty tables and  many fileds",
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
        
    ];*/
    //While loop Starts here
   /* let myFavouritesList = document.getElementById("proj1DetailsList")

    let index = 0;
    while (index < myProject1List.length) {
        console.log(myProject1List[index]);
        let newItem = document.createElement("li");
        myFavouritesList.appendChild(newItem);
        newItem.textContent = myProject1List[index];
        index++;
    }*/
/*
     // "hook into" a ul that is empty that has an id of "proj1DetailsList"

     let myProj1DetailList = document.getElementById("proj1DetailsList");

     myProject1List.forEach(thing1 => {
         let newItem = document.createElement("li");
         newItem.textContent = thing1;
         myProj1DetailList.appendChild(newItem);
     });

    
    
     
     //"hook into" a ul that is empty that has an id of "proj2DetailsList"
    let myProj2DetailList = document.getElementById("proj2DetailsList");
 
    myProject2List.forEach(thing2 => {
        let newItem = document.createElement("li");
        newItem.textContent = thing2;
        myProj2DetailList.appendChild(newItem);
    });
    
   
     // "hook into" a ul that is empty that has an id of "proj3DetailsList"
    let myProj3DetailList = document.getElementById("proj3DetailsList");
 
        myProject3Array.forEach(info => {
        let newItem = document.createElement("li");
        newItem.textContent = info;
        myProj3DetailList.appendChild(newItem);
    });*/
  
   // console.log(myFavouritesList1);

    window.addEventListener("load", Start);

})();
