// Redirigir al planeta correspondiente
function redirectToPlanet(planetId) {
    window.location.href = `html/planet.html?id=${planetId}`;
}

// Activar tooltips de Bootstrap al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (el) {
    return new bootstrap.Tooltip(el);
  });
});

// Efecto parallax
document.addEventListener('mousemove', function(e) {
  const bg = document.getElementById('galactic-bg');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  bg.style.transform = `translate(${x}px, ${y}px)`;
});

// Botón de inicio - fade
document.getElementById('start-button').addEventListener('click', function() {
  const startScreen = document.getElementById('start-screen');
  const mainMap = document.getElementById('main-map');

  startScreen.classList.add('fade-out');

  // Esperar a que termine el fadeOut para ocultar
  setTimeout(() => {
    startScreen.style.display = 'none';
    mainMap.classList.remove('hidden');
    mainMap.classList.add('fade-in');
  }, 1500);
});

// VALIDACIÓN DE FORMULARIO
const form = document.querySelector('.needs-validation');
if (form) {
	form.addEventListener('submit', function(event) {
		const passwordInput = document.getElementById('password');
		const emailInput = document.getElementById('email');
		const password = passwordInput.value;
		const email = emailInput.value;
		const specialCharRegex = /[^A-Za-z0-9]/;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		let valid = true;

		// Validar email
		if (!emailRegex.test(email)) {
			emailInput.setCustomValidity("Introduce un email válido.");
			valid = false;
		} 
        // Validar longitud de email
        else {
			emailInput.setCustomValidity("");
		}
		// Validar contraseña
		if (!specialCharRegex.test(password)) {
			passwordInput.setCustomValidity("La contraseña debe contener al menos un carácter especial.");
			valid = false;
		} 
        //Validar longitud de contraseña
        else {
			passwordInput.setCustomValidity("");
		}
        // Validar longitud de contraseña
		if (!form.checkValidity() || !valid) {
			event.preventDefault();
			event.stopPropagation();
		}
		form.classList.add('was-validated');
	}, false);
}