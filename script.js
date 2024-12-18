document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

function abrirModal() {
    document.getElementById("modalContato").style.display = "flex";
}

// Fechar o modal
function fecharModal() {
    document.getElementById("modalContato").style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function (event) {
    const modal = document.getElementById("modalContato");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
