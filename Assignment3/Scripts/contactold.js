(function (content) {

    // loccal VAriables
    let FirstName = document.getElementById("FirstName");
    let LastName = document.getElementById("LastName");
    let ContactNumber = document.getElementById("ContactNumber");
    let Email = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");

    function OutputFormDataTOConsole() {
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Full Name     : ${FullName.value}`, "color: blue;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");

        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");

        }

    }
    function clearValidationMessages() {

    }

    function setEventHandlersForFormElements() {

    }
    function ValidateForm() {

    }
    function ContactContent() {

        clearValidationMessages();

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

    }
     // Local Variables--------------------
    //  let FullName = document.getElementById("FullName");
    //  let ContactNumber = document.getElementById("ContactNumber");
    //  let EmailAddress = document.getElementById("EmailAddress");
    //  let Message = document.getElementById("Message");
 
 
    //  function OutputFormDataToConsole() {
    //      console.log(`%c ---------------------------------------`, "color: blue;");
    //      console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
    //      console.log(`%c ---------------------------------------`, "color: blue;");
    //      console.log(`%c Full Name     : ${FullName.value}`, "color: blue;");
    //      console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;");
    //      console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;");
    //      console.log(`%c Your Message  : ${Message.value}`, "color: blue;");
    //      console.log(`%c ---------------------------------------`, "color: blue;");
 
    //      console.log(`%c ---------------------------------------`, "color: blue;");
    //      console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
    //      console.log(`%c ---------------------------------------`, "color: blue;");
    //      console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");
 
    //      for (let index = 0; index < document.forms[0].length; index++) {
    //          console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: blue;");
 
    //      }
 
    //  }---------------------
 
     function clearValidationMessages() {
         FullName.setCustomValidity("");
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
                     switch(element.id) {
                         case "FullName":
                         element.setCustomValidity("Enter at least two characters for name");
                         break;
                         case "ContactNumber":
                         element.setCustomValidity("Enter a phone number with the pattern (###) ###-####");
                         break;
                         case "EmailAddress":
                         element.setCustomValidity("Email address is not valid");
                         break;
                         case "Message":
                         element.setCustomValidity("Enter some message");
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
 
 
     function ContactContent() {
         clearValidationMessages();
 
         console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");
 
         document.getElementsByClassName("card-title")[0].textContent = "Contact You!";
 
         // create a new HTML Element
         let cancelButton = document.createElement("button");
         // configure the HTML Element
         cancelButton.setAttribute("class", "btn btn-warning");
         cancelButton.classList.add("btn-lg");
         cancelButton.textContent = "Cancel";
         cancelButton.addEventListener("click", function (event) {
             event.preventDefault();
             window.open("index.html", "_parent");
         });
 
         // add the HTML Element to the page somewhere 
         // in this case I'm attaching a button to the first forml element
         document.forms[0].appendChild(cancelButton);
 
 
         let SendButton = document.getElementById("SendButton");
         SendButton.addEventListener("click", (event) => {
             //event.preventDefault();
             if (!document.forms[0].checkValidity()) {
                 OutputFormDataToConsole();
                 ValidateForm();
             }
 
 
         });
 
     }
 
     // public functions exposed to the content namespace
     //content.ContactContent = ContactContent;
    // public functions exposed to the content namespace lab6 comment line
    // ContactContent() is a function which has some functionality and that is enclosed in this cage
   
    // attach ContentContent function to the "content" namespace
    content.ContactContent= ContactContent;
}(content || (content = {})));