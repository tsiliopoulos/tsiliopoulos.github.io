/* Custom javaScripts goes here */
/*  File name          contact.js
    Author's name      Nusrat Ara Riaz
    Web site name      nusratarasg.github.io
    File description   This file contain JavaScript Code */

(function (content) {
    // Local Variables
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");


    function OutputFormDataToConsole() {
        console.log(`%c ----------------------------------------------`, "color: blue;background-color:grey;font-weight:bold;");
        console.log(`%c Personal Data:`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ----------------------------------------------`, "color: blue;background-color:grey;font-weight:bold;");
        console.log(`%c First Name    : ${FirstName.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Last Name     : ${LastName.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;font-weight:bold;");
        console.log(`%c ----------------------------------------------`, "color: blue;background-color:grey;font-weight:bold;");

    }

    function clearValidationMessages() {
        FirstName.setCustomValidity("");
        LastName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is inputting data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });

                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch (element.id) {
                        case "FirstName":
                            element.setCustomValidity("Enter at least initial for name");
                            break;
                        case "LastName":
                            element.setCustomValidity("Enter at least initial for name");
                            break;    
                        case "ContactNumber":
                            element.setCustomValidity("Required pattern is (###) ###-####");
                            break;
                        case "EmailAddress":
                            element.setCustomValidity("Email should like this xxx@x.xxx");
                            break;
                        case "Message":
                            element.setCustomValidity("Can not be Empaty");
                            break;
                        default:
                            element.setCustomValidity("This Field is Required");
                            break;
                    }

                });
            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function AboutContactContent() {
        clearValidationMessages();

        console.log("%c  Form Data will be displayed below", "font-weight:bold; font-size: 15px;color:blue");
       // console.log("%c Once form is filled with valid data it will be submitted", "font-weight:bold; font-size: 15px;color:blue");

        // To display text on contact form head By Class Name
        document.getElementsByClassName("card-title")[0].textContent = "Contact Us!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configuring the HTML Element
        cancelButton.setAttribute("class", "btn btn-primary btn-lg");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the HTML Element to the page somewhere 
        // Attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);


        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {
            // For Assignment 2 Commenting out validity check
            event.preventDefault();
            /*  if (document.forms[0].checkValidity()) {
                  OutputFormDataToConsole();
                   ValidateForm();
              }*/
            OutputFormDataToConsole();
            ValidateForm();

        });

    }

    // public functions exposed to the content namespace
    content.AboutContactContent = AboutContactContent;

})(content || (content = {}));


