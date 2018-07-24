/* Custom javaScripts goes here */
/*  File name          home.js
    Author's name      Nusrat Ara Riaz
    Web site name      nusratarasg.github.io
    File description   This file contain JavaScript Code */

let content;
(function (content) {

  function AboutHomeContent() {
    console.log("%c My mini portfolio", "font-weight:bold; font-size: 20px;color:blue");

    let paragraph1 = document.getElementById("paragraph1");
    let mytext1 = "Welcome to my portfolio! I am Nusrat Riaz, a student at Centennial College, ON. My previous education is MSc in Computer Science. I am fluent in English, Urdu, Hindi, Punjabi and French. I have previous work experience with HTML / CSS, Relational Databases (ORACLE, MYSQL), C#, Microsoft Office (Word, Visio, Project, PowerPoint, Excel, Access), Dreamweaver.";
    paragraph1.textContent = mytext1;

    let paragraph2 = document.getElementById("paragraph2");
    let mytext2 = "My personal mission is to lead a fulfilling and happy life, which includes professional development and being a positive influence for my family, friends and community. My professional goal is to establish a successful career in Web Development with an emphasis on intellectual growth and networking with professionals in the field. I seek out challenges that help me better my skills as a web developer and I find overcoming these challenges extremely rewarding and fulfilling. I move forward in life with a sense of purpose and gratitude, and strive to make a personal commitment to hard work and integrity. One of my favourite quote is by Joshua J. Marine: ";
    paragraph2.textContent = mytext2;

    let quotationid = document.getElementById("quote");
    let quotationtxt = "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. -- Albert Schweitzer";
    quotationid.textContent = quotationtxt;

  }

  // attach AboutHomeContent function to the "content" namespace
  content.AboutHomeContent = AboutHomeContent;
  //  content.HomeContent;
})(content || (content = {}));
