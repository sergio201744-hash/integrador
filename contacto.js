const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita envío del formulario

  // Limpia errores previos
  document.getElementById("error-nombre").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-telefono").textContent = "";
  document.getElementById("resultado").innerHTML = "";

  // Captura valores
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  // Expresiones regulares
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const telRegex = /^\d{7,15}$/;

  let valido = true;

  // Validar nombre
  if (nombre.length === 0 || nombre.length > 30) {
  const error = document.getElementById("error-nombre");
  error.textContent = "El nombre debe tener entre 1 y 30 caracteres.";
  error.style.display = "block";
  error.style.color = "#d33";
  error.style.marginTop = "6px";
  error.style.marginBottom = "10px";
  valido = false;
}

  // Validar email
  if (!emailRegex.test(email)) {
    const error = document.getElementById("error-email");
    error.textContent = "Correo inválido.";
    error.style.display = "block";
    error.style.color = "#d33";
    error.style.marginTop = "6px";
    error.style.marginBottom = "10px";
    valido = false;
  }

  // Validar teléfono
  if (!telRegex.test(telefono)) {
    const error = document.getElementById("error-telefono");
    error.textContent = "Teléfono inválido (solo números, 7-15 dígitos).";
    error.style.display = "block";
    error.style.color = "#d33";
    error.style.marginTop = "6px";
    error.style.marginBottom = "10px";
    valido = false;
  }

  // Si todo está bien, mostrar los datos
  if (valido) {
    const resultado = document.getElementById("resultado");

    const titulo = document.createElement("h2");
    titulo.textContent = "Datos enviados:";

    const pNombre = document.createElement("p");
    pNombre.textContent = `Nombre: ${nombre}`;

    const pEmail = document.createElement("p");
    pEmail.textContent = `Email: ${email}`;

    const pTelefono = document.createElement("p");
    pTelefono.textContent = `Teléfono: ${telefono}`;

    resultado.appendChild(titulo);
    resultado.appendChild(pNombre);
    resultado.appendChild(pEmail);
    resultado.appendChild(pTelefono);

    formulario.reset();
  }
});
