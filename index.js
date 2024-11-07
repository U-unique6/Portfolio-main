// navbar
let navbar = document.getElementById("navbar-list");
function show() {
  navbar.style.right = "0px";
}
function remove() {
  navbar.style.right = "-250px";
}

//main text animation
var typed = new Typed("#element", {
  strings: ["<i>UMANSHI.</i>", "Software Engineer."],
  typeSpeed: 100,
  loop: 900,
});

// animation create

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

let main = document.querySelectorAll(".section");
main.forEach((el) => observer.observe(el));

//project link
let projectlink = [
  "https://ttodo-list.netlify.app/",
  "https://drum-playy.netlify.app",
  "https://diceggame.netlify.app",
  "https://digitaalclock.netlify.app/",
  "https://myntra-cclone.netlify.app",
  "https://netflixcloone.netlify.app/",
];

let project = document.querySelectorAll(".pro");

project.forEach((project, index) => {
  project.onclick = function () {
    const link = document.createElement("a");

    link.href = projectlink[index];
    link.target = "_blank";
    project.appendChild(link);
  };
});

//contact section

function sendEmail() {
  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let message = document.getElementById("Message").value;
  let body = `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`;

  Email.send({
    SecureToken: "2a76a155-5baf-433e-8c1c-74ac05b1b0ba",
    To: "umanshilodhi023@gmail.com",
    From: "umanshilodhi023@gmail.com",
    Subject: "Message from contact form",
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      swal("Thank you! I will contact soon.");
    } else {
      swal("indirect");
    }
  });
}
