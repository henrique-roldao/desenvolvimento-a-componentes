$(document).ready(function () {
  home();

  $("#home").click(function () {
    home();
  });

  $("#features").click(function () {
    features();
  });

  $("#contact").click(function () {
    contact();
  });
});

function home() {
  $(".testeJs").html("<h1>Bem vindo!</h1>");
}

function features() {
  $(".testeJs").html("<h1>Features!</h1>");
}

function contact() {
  $(".testeJs").load("views/contact.html");
}

function LoadPerson() {
  var Person = {
    name: document.querySelector("#name_form").value,
    email: document.querySelector("#email_form").value,
    phone: document.querySelector("#phone_form").value,
    subject: document.querySelector("#subject_form").value,
  };
  $(".testeJs").load("views/person.html", function () {
    var teste = document.querySelector("#namePerson");
    teste.innerHTML = `${Person.name}`;

    var teste = document.querySelector("#emailPerson");
    teste.innerHTML = `${Person.email}`;

    var teste = document.querySelector("#phonePerson");
    teste.innerHTML = `${Person.phone}`;

    var teste = document.querySelector("#subjectPerson");
    teste.innerHTML = `${Person.subject}`;
  });
}
