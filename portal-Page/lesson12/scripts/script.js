// Función para alternar el menú
function toggleMenu() {
    const menu = document.getElementById('primaryNav');
    const toggle = document.querySelector('.menu-toggle');
    
    // Si el menú está oculto, mostrarlo
    if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
    toggle.setAttribute('aria-expanded', 'true');
    }
    // Si el menú está visible, ocultarlo
    else {
    menu.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
    }
    }
    
    // Evento para el botón del menú
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
    
//contact modal

// Obtener la ventana modal
var modal = document.getElementById("modal");

// Obtener el botón que abre la ventana modal
var btn = document.getElementById("contact-form").querySelector('button[type="submit"]');

// Obtener el elemento span que cierra la ventana modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón "Enviar", mostrar la ventana modal
btn.onclick = function() {
  modal.style.display = "block";
};

// Cuando el usuario hace clic en el botón de cerrar (x), cerrar la ventana modal
span.onclick = function() {
  modal.style.display = "none";
};

// Cuando el usuario hace clic en cualquier lugar fuera de la ventana modal, cerrarla
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



    