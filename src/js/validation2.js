// Nos aseguramos de que el script se ejecute después de que el HTML esté cargado
        document.addEventListener('DOMContentLoaded', function() {
            
            // 1. Seleccionamos los elementos del DOM
            const emailForm = document.getElementById('emailForm');
            const emailInput = document.getElementById('emailInput');
            const messageElement = document.getElementById('message');

            // 2. Definimos la expresión regular (Regex) para un email
            // Esta expresión comprueba un formato básico: "texto@texto.texto"
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // 3. Añadimos un "escuchador" al evento 'submit' del formulario
            emailForm.addEventListener('submit', function(event) {
                // Prevenimos que el formulario se envíe (recargue la página)
                // para poder hacer nuestra validación primero.
                event.preventDefault(); 

                // Obtenemos el valor actual del campo de email
                const email = emailInput.value;

                // 4. Validamos el email con el Regex
                if (emailRegex.test(email)) {
                    // Si es válido:
                    messageElement.textContent = '¡Email válido!';
                    messageElement.className = 'success';
                } else {
                    // Si NO es válido:
                    messageElement.textContent = 'Formato de email incorrecto. Por favor, inténtalo de nuevo.';
                    messageElement.className = 'error';
                }
            });
        });