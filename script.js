/* =====================================================
   WHATSAPP
===================================================== */

/*
    IMPORTANTE:
    Coloque aqui o número REAL da empresa.

    Exemplo:
    Brasil +55
    DDD 34
    Número 99999-9999

    Ficaria:
    5534999999999
*/

const numeroWhatsApp = "5534988231096";


function abrirWhatsApp(mensagem = "Olá! Gostaria de solicitar um orçamento.") {

    const texto = encodeURIComponent(mensagem);

    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, "_blank");
}


/* =====================================================
   ORÇAMENTO DE MATERIAL
===================================================== */

function solicitarMaterial(material) {

    const mensagem =
        `Olá! Gostaria de solicitar um orçamento para ${material}.`;

    abrirWhatsApp(mensagem);
}


/* =====================================================
   MENU MOBILE
===================================================== */

const menuMobile = document.getElementById("menuMobile");
const nav = document.getElementById("nav");


menuMobile.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fecha o menu depois de clicar em um link */

const linksMenu = document.querySelectorAll(".nav a");


linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =====================================================
   ANIMAÇÕES AO ROLAR A PÁGINA
===================================================== */

const elementos = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementos.forEach(elemento => {

    observer.observe(elemento);

});


/* =====================================================
   HEADER AO ROLAR
===================================================== */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});