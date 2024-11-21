

/*-------------scroll aos -----------------*/


AOS.init();



// --------------------------- music -------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const playButton = document.querySelector(".music-player__button");
  const audio = document.querySelector(".music-player__audio");

  // Cambia entre play y pause
  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
      playButton.setAttribute("aria-label", "Pause");
    } else {
      audio.pause();
      playButton.innerHTML = '<i class="fas fa-play"></i>';
      playButton.setAttribute("aria-label", "Play");
    }
  });
});




// ---------------------- temporizador -------------------------
function updateTimer() {
  const targetDate = new Date("january 11, 2025 18:30:00").getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// --------------------------------fotos---------------------------------




document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
  });

  // Inicializar Fancybox
  $(".fancybox").fancybox({
      buttons: [
          "zoom",
          "slideShow",
          "fullScreen",
          "thumbs",
          "close"
      ],
      loop: true,
      infobar: true,
      arrows: true,
      protect: true,
      animationEffect: "fade",
      transitionEffect: "slide",
      transitionDuration: 500,
      touch: {
          vertical: false,
      },
      autoFocus: false,
  });
});




  // --------------------------- dresscode-------------------------


const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function() {
  lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
  textoDesplegable.classList.toggle('oculto');
});


// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('mostrarBoton');
  const textoDesplegable = document.getElementById('textoDesplegable');

  boton.addEventListener('click', function () {
    textoDesplegable.classList.toggle('mostrar');
  });
});


function copyText() {
  var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
  var tempInput = document.createElement('input');
  tempInput.value = aliasText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Mostrar el mensaje de "¡Copiado!"
  var copyMessage = document.getElementById('copyMessage');
  copyMessage.style.display = 'block';
  setTimeout(function() {
      copyMessage.style.display = 'none';
  }, 1500); // Ocultar el mensaje después de 1.5 segundos
}



function copyCbuText() {
  const aliasText = document.getElementById('cbuAlias').textContent;
  const copyMessage = document.getElementById('copyCbuMessage');

  const textarea = document.createElement('textarea');
  textarea.value = aliasText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  copyMessage.style.display = 'block';
  setTimeout(() => {
      copyMessage.style.display = 'none';
  }, 2000);
}


// --------------------------- playlist --------------------------------

document.addEventListener('DOMContentLoaded', function() {
  // Definir los números de teléfono
  const phoneNumber1 = '542984515330'; // Número para el primer botón
  const phoneNumber2 = '543816591298'; // Número para el segundo botón

  // Función para enviar mensaje por WhatsApp
  function sendMessage(phoneNumber) {
      const name = document.getElementById('userName').value;
      const message = document.getElementById('whatsappMessage').value;

      if (name.trim() === '' || message.trim() === '') {
          alert('Por favor, completa ambos campos antes de enviar.');
          return;
      }

      const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

      // Abre la URL de WhatsApp en una nueva pestaña
      window.open(whatsappURL, '_blank');

      // Mostrar mensaje de confirmación
      alert('Mensaje enviado');

      // Limpiar los campos de entrada
      document.getElementById('userName').value = '';
      document.getElementById('whatsappMessage').value = '';

      // Volver al bloque de formulario
      document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
  }

  // Asignar eventos a los botones
  document.getElementById('botonplay1').addEventListener('click', function() {
      sendMessage(phoneNumber1);
  });

  document.getElementById('botonplay2').addEventListener('click', function() {
      sendMessage(phoneNumber2);
  });
});



// --------------------------------Invitados---------------------------------


 // --------------------------------Invitados---------------------------------

// Función para normalizar el texto eliminando acentos
function eliminarAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para capitalizar la primera letra
function capitalizarPrimeraLetra(texto) {
  if (texto.length === 0) return texto;
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Función para buscar la mesa por nombre
function buscarMesa() {
  // Obtener el valor del nombre de la búsqueda, eliminar espacios y convertirlo a minúsculas y eliminar acentos
  var nombreBuscado = eliminarAcentos(document.getElementById("nombreBusqueda").value.trim().toLowerCase());

  // Validar si se ingresó un nombre
  if (nombreBuscado !== "") {
    // Simular una búsqueda (puedes ajustar esto según tu situación real)
    var mesaInfo = obtenerInformacionMesa(nombreBuscado);

    // Validar si se encontró la mesa
    if (mesaInfo !== null) {
      // Capitalizar la primera letra del nombre
      var nombreCapitalizado = capitalizarPrimeraLetra(mesaInfo.nombre);

      // Crear el texto a desplegar
      var texto = "¡Hola, " + nombreCapitalizado + "! " + mesaInfo.textoLibre;

      // Mostrar el texto en el div de resultado con transición suave
      var resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerText = texto;
      resultadoDiv.style.display = "block"; // Mostrar el div
      resultadoDiv.style.opacity = 1;

      // Limpiar el input de búsqueda
      document.getElementById("nombreBusqueda").value = "";
    } else {
      alert("Lo siento, no se encontró el nombre ingresado, prueba con mayúsculas o minúsculas");
    }
  } else {
    alert("Por favor, ingrese su nombre.");
  }
}

// Función de ejemplo para obtener la información de la mesa (puedes personalizar según tus necesidades)
function obtenerInformacionMesa(nombre) {
  // Simulamos una búsqueda, aquí deberías implementar la lógica real
  var invitados = [
    { nombre: "Estela Beatriz Gaspar", textoLibre: "Su invitación corresponde para 1 persona" },
    { nombre: "Andres Rene Yanos", textoLibre: "Su invitación corresponde para 1 persona" },
    { nombre: "Angelica Rosario Lasquera", textoLibre: "Su invitación corresponde para 1 persona" },
  ];

  for (var i = 0; i < invitados.length; i++) {
    // Convertir los nombres a minúsculas y eliminar acentos para la comparación
    if (eliminarAcentos(invitados[i].nombre.toLowerCase()) === nombre) {
      return invitados[i]; // Retornar el objeto completo para usar el nombre capitalizado
    }
  }

  return null; // Retornar null si no se encuentra el nombre
}




// --------------- confirmacion --------------------------------------




document.addEventListener('DOMContentLoaded', function() {
  // Definir los números de teléfono
  const recipientNumber1 = '542984515330'; // Número para el primer botón
  const recipientNumber2 = '543816591298'; // Número para el segundo botón

  // Función para enviar mensaje por WhatsApp
  function sendMessage(phoneNumber) {
      const userName = document.getElementById('userFullName').value.trim();
      const userMessage = document.getElementById('customMessage').value.trim();
      const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');

      if (!attendanceStatus) {
          alert('Por favor, selecciona si asistirás o no.');
          return;
      }

      if (userName === '') {
          alert('Por favor, completa todos los campos antes de enviar.');
          return;
      }

      const alimenticioSeleccionado = document.querySelector('input[name="alimenticioOption"]:checked');
      let restriccionAlimenticia = 'N/A';
      if (alimenticioSeleccionado) {
          const selectedId = alimenticioSeleccionado.id;
          switch (selectedId) {
              case 'celiaca':
                  restriccionAlimenticia = 'Celíac@';
                  break;
              case 'vegetariana':
                  restriccionAlimenticia = 'Vegetarian@';
                  break;
              case 'hipertesion':
                  restriccionAlimenticia = 'Hipertensión';
                  break;
              case 'diabetica':
                  restriccionAlimenticia = 'Diabétic@';
                  break;
              case 'ninguna':
                  restriccionAlimenticia = 'Ninguna';
                  break;
          }
      }

      const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Restricción alimenticia:* ${restriccionAlimenticia}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

      // Abre la URL de WhatsApp en una nueva pestaña
      window.open(whatsappLink, '_blank');

      // Mostrar mensaje de confirmación
      alert('Mensaje enviado');

      // Limpiar los campos de entrada
      document.getElementById('userFullName').value = '';
      document.getElementById('customMessage').value = '';
      document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);
      document.querySelectorAll('input[name="alimenticioOption"]').forEach(radio => radio.checked = false);

      // Redirigir a la sección con id 'correo'
      window.location.hash = 'correo';
  }

  // Asignar eventos a los botones
  document.getElementById('btnConfirmacion1').addEventListener('click', function() {
      sendMessage(recipientNumber1);
  });

  document.getElementById('btnConfirmacion2').addEventListener('click', function() {
      sendMessage(recipientNumber2);
  });
});






function descargarArchivo() {
  // Mostrar la alerta "Descargado" durante 1 segundo
  setTimeout(function() {
    alert('Descargado');
  }, 1000);
}