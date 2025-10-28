// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {


    // --- 2. LÓGICA DEL MODAL DE EXPERIENCIA ---

    // ¡¡IMPORTANTE!! Aquí defines la información extra de tus trabajos
    // El nombre (ej: 'cocinero') DEBE coincidir con el 'data-job' del HTML
    const detallesExperiencia = {
        
        'cocinero': {
            titulo: "Ayudante de cocina en Kugo Gourmet",
            fecha: "Junio 2020 - Junio 2025",
            descripcion: "Hamburguesería ubicada en Arroyomolinos, Madrid.<br>Responsable de cocina desde 2022 a 2025.",
            puntos: [
                "Apoyo en la elaboración y preparación de platos.",
                "Gestión de pedidos.",
                "Control de stock e inventario de productos.",
                "Supervisión y organización de tareas en equipo."
            ]
        },
        
        'profesor': {
            titulo: "Profesor Particular de educación primaria y secundaria",
            fecha: "Septiembre 2023 - Presente",
            descripcion: "Clases particulares para estudiantes de educación primaria y secundaria.",
            puntos: [
                "Refuerzo y apoyo para alumnos con dificultad en el aprendizaje.",
                "Desarrollo de planes de estudio personalizados.",
                "Fomento de habilidades de resolución de problemas y pensamiento analítico.",
                "Implementación de técnicas de estudio y métodos de organización para mejorar el rendimiento académico",
                
            ]
        }
    };

    // Seleccionamos los elementos del DOM
    const imagenesExperiencia = document.querySelectorAll('.experiencia-img');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');

    // Función para abrir el modal
    function abrirModal(jobId) {
        const info = detallesExperiencia[jobId];

        if (!info) return; // Si no hay info, no hace nada

        // Construir el HTML interno del modal
        let contenidoHtml = `<h2>${info.titulo}</h2>`;
        contenidoHtml += `<h4>${info.fecha}</h4>`;
        contenidoHtml += `<p>${info.descripcion}</p>`;
        
        // Añadir la lista de puntos
        contenidoHtml += '<ul>';
        info.puntos.forEach(punto => {
            contenidoHtml += `<li>${punto}</li>`;
        });
        contenidoHtml += '</ul>';

        // Poner el HTML en el modal y mostrarlo
        modalBody.innerHTML = contenidoHtml;
        modalBackdrop.classList.add('modal-visible');
    }

    // Función para cerrar el modal
    function cerrarModal() {
        modalBackdrop.classList.remove('modal-visible');
    }

    // Añadir los "escuchadores" de clics
    
    // 1. A cada imagen de experiencia
    imagenesExperiencia.forEach(img => {
        img.addEventListener('click', () => {
            // Obtiene el ID del trabajo desde el atributo 'data-job'
            const jobId = img.getAttribute('data-job');
            abrirModal(jobId);
        });
    });

    // 2. Al botón de cerrar (la 'X')
    closeModalBtn.addEventListener('click', cerrarModal);

    // 3. Al fondo oscuro (para cerrar clickando fuera)
    modalBackdrop.addEventListener('click', (evento) => {
        // Cierra solo si se clicka en el fondo (el 'backdrop')
        // y no en el contenido (el 'modal-content')
        if (evento.target === modalBackdrop) {
            cerrarModal();
        }
    });
});