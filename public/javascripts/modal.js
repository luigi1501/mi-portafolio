document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos base
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn'); 

    // Si el modal no existe o no hay botones, salimos y reportamos en consola.
    if (!modal || openModalBtns.length === 0) {
        console.error("DEBUG: Modal o botones de apertura no encontrados. Verifique IDs/Clases en projects.ejs y la carga de modal.js.");
        return; 
    }

    const openModal = (proyecto) => {
        // Elementos internos del Modal
        const modalTitle = document.getElementById('modal-title');
        const modalStatus = document.getElementById('modal-status');
        const modalTechTags = document.getElementById('modal-tech-tags');
        const modalDescription = document.getElementById('modal-description');
        const linkDemo = document.getElementById('modal-link-demo');
        const linkRepo = document.getElementById('modal-link-repo');

        // Llenar Contenido Básico
        modalTitle.textContent = proyecto.nombre;
        modalDescription.textContent = proyecto.resumen;

        // Llenar Tags
        modalTechTags.innerHTML = '';
        proyecto.tecnologias.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tech;
            modalTechTags.appendChild(span);
        });

        // 3. Manejo del Estado "En Proceso" (Muestra el badge dentro del modal)
        if (proyecto.enProceso) {
            modalStatus.textContent = 'Este proyecto está actualmente En Proceso.';
            modalStatus.className = 'status-in-progress';
            modalStatus.style.display = 'block';
        } else {
            modalStatus.style.display = 'none';
        }

        // 4. Manejo del Link Demo
        if (proyecto.linkDemo && !proyecto.enProceso) {
            linkDemo.href = proyecto.linkDemo;
            linkDemo.textContent = "Ver Demo";
            linkDemo.style.display = 'inline-block';
            linkDemo.classList.remove('btn-disabled'); // Aseguramos que no esté deshabilitado
            linkDemo.target = "_blank";
        } else {
            // Oculta el botón de demo si no hay link o está en proceso
            linkDemo.style.display = 'none';
        }
        
        // 5. Manejo del Link Repo
        if (proyecto.linkRepo) {
            // Si hay link de GitHub (Alimentos del Alba)
            linkRepo.href = proyecto.linkRepo;
            linkRepo.textContent = "Ver Código (GitHub)";
            linkRepo.classList.remove('btn-disabled');
            linkRepo.style.cursor = 'pointer';
            linkRepo.onclick = null; // Quita la función de alerta
            linkRepo.target = "_blank";
        } else {
            // Si NO hay link (es null, para Sensus, Inventario, Blog)
            linkRepo.href = '#'; 
            linkRepo.textContent = "Repo en Proceso..."; 
            linkRepo.classList.add('btn-disabled'); // Estilo deshabilitado
            linkRepo.style.cursor = 'not-allowed';
            linkRepo.target = "_self";

            // Función de alerta (el mensaje emergente)
            linkRepo.onclick = () => {
                alert("El código para este proyecto aún está en proceso de subida y organización. ¡Muy pronto estará disponible en GitHub!");
                return false;
            };
        }

        // 6. CLAVE: Mostrar el Modal
        modal.style.display = 'block'; 
    };

    // Listener para los botones de las tarjetas
    openModalBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            // 🛑 Asegúrate de que el JSON.parse no esté fallando
            try {
                const projectData = JSON.parse(e.currentTarget.getAttribute('data-proyecto'));
                openModal(projectData);
            } catch (error) {
                console.error("Error al parsear JSON del proyecto:", error);
            }
        });
    });

    // Cierre del modal (Botón X)
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cierre al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});