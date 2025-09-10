const form = document.getElementById("loginForm");
const correoInput = document.getElementById("correo");
const passwordInput = document.getElementById("password");
const correoError = document.getElementById("correoError");
const passwordError = document.getElementById("passwordError");

form.onsubmit = (e) => {
  let valid = true;
  correoError.textContent = "";
  passwordError.textContent = "";

  const correoRegex = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
  if (!correoRegex.test(correoInput.value)) {
    correoError.textContent = "Correo inválido. Solo @duoc.cl, @profesor.duoc.cl o @gmail.com";
    valid = false;
  }

  if (passwordInput.value.length < 4 || passwordInput.value.length > 10) {
    passwordError.textContent = "La contraseña debe tener entre 4 y 10 caracteres.";
    valid = false;
  }

  if (!valid) e.preventDefault();
  else {
    e.preventDefault(); // quítalo si quieres enviar el form
    alert("Login válido ✅");
    // window.location.href = "home.html"; // opcional redirección
  }
};

