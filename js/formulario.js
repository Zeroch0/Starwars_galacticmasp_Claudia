
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
document.querySelectorAll('.fw-bold').forEach(el => {
  el.classList.remove('fw-bold');
});
