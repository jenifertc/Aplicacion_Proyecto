      function validarContra(miContra) {
          const longitudMinima = 8;
          const Mayuscula = /[A-Z]/;
          const Minuscula = /[a-z]/;
          const Numero = /[0-9]/;
          const CaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;

          if (miContra.length < longitudMinima) {
            return "La contraseña debe tener al menos 8 caracteres.";    
          }
          if (!Mayuscula.test(miContra)) {
            return "La contraseña debe tener al menos una mayúscula.";    
          }
          if (!Minuscula.test(miContra)) {
            return "La contraseña debe tener al menos una minúscula.";    
          }
          if (!Numero.test(miContra)) {
            return "La contraseña debe tener al menos un número.";    
          }
          if (!CaracterEspecial.test(miContra)) {
            return "La contraseña debe tener al menos un carácter especial.";    
          }
          return "La contraseña es válida.";
        }

        const formulario = document.querySelector("#formularioContrasena");
        const mensaje = document.querySelector("#mensaje");

        formulario.addEventListener('submit', function(e) {
            e.preventDefault();

            const miContra = document.querySelector("#password").value;
            const resultado = validarContra(miContra);

            if (resultado === "La contraseña es válida.") {
                mensaje.textContent = resultado;
                mensaje.className = "mensaje-valido";
            } else {
                mensaje.textContent = resultado;
                mensaje.className = "mensaje-error";
            }
        });