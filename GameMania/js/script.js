//window.alert("teste");

// Menu de Barras com JS
let menu = document.getElementById("menu");

function mostrarMenu() {
  if (getComputedStyle(menu).display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

// JQuery e Owl Carousel
$(document).ready(function () {
  //Owl Carousel
  $(".js-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoPlayHoverPause: true,
    items: 3,
    navText: [
      "<img src='imagens/icon_previous.png'>",
      "<img src='imagens/icon_next.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });

  $(".js-carousel-2").owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    autoWidth: true,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoPlayHoverPause: true,
    items: 2,
    navText: [
      "<img src='imagens/icon_previous.png'>",
      "<img src='imagens/icon_next.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoWidth: false,
      },
      600: {
        items: 1,
        nav: false,
        autoWidth: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
    },
  });

  //Carrosel Depoimentos
  $("#carrosel img:eq(0)").addClass("dep_show").show();

  setInterval(slide, 5000);

  function slide() {
    if ($(".dep_show").next().length) {
      $(".dep_show")
        .removeClass("dep_show")
        .hide()
        .next()
        .addClass("dep_show")
        .show();
    } else {
      $(".dep_show").removeClass().hide();
      $("#carrosel img:eq(0)").addClass("dep_show").show();
    }
  }

  //Teste do Menu de Barras com Jquery
  //   $("#barras").click(function () {
  //     //Exemplo com toggleClass
  //     //$("#menu").toggleClass("menu_show");

  //     if ($("#menu").hasClass("menu_show")) {
  //       $("#menu").removeClass("menu_show");
  //     } else {
  //       $("#menu").addClass("menu_show");
  //     }
  //   });
});

//Cadastrar email para Newsletter
let email = document.getElementById("email_newsletter");

function cadastrarEmail() {
  let emailDigitado = email.value;
  console.log(emailDigitado);
}
