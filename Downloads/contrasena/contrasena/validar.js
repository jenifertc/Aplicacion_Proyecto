function validarPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  return regex.test(password);
}
const miPassword = "Jenifer12*";

if (validarPassword(miPassword)) {
  console.log("La contraseña es segura y válida.");
} else {
  console.log("La contraseña no cumple con los requisitos de seguridad.");
}