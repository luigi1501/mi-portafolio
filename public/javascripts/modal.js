document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const backdrop = document.querySelector('.modal-backdrop');

    if (!modal || openModalBtns.length === 0) {
        return; 
    }

    const openModal = (proyecto) => {
        const modalTitle = document.getElementById('modal-title');
        const modalStatus = document.getElementById('modal-status');
        const modalTechTags = document.getElementById('modal-tech-tags');
        const modalDescription = document.getElementById('modal-description');
        const linkDemo = document.getElementById('modal-link-demo');
        const linkRepo = document.getElementById('modal-link-repo');

        modalTitle.textContent = proyecto.nombre;
        modalDescription.textContent = proyecto.descripcionLarga || proyecto.resumen;

        modalTechTags.innerHTML = '';
        proyecto.tecnologias.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tech;
            modalTechTags.appendChild(span);
        });

        if (proyecto.enProceso) {
            modalStatus.textContent = '⚡ Proyecto actualmente En Proceso de Desarrollo';
            modalStatus.className = 'status-in-progress';
            modalStatus.style.display = 'inline-block';
        } else {
            modalStatus.textContent = '✓ Proyecto Completado y Desplegado';
            modalStatus.className = 'status-completed';
            modalStatus.style.display = 'inline-block';
        }

        if (proyecto.linkDemo && !proyecto.enProceso) {
            linkDemo.href = proyecto.linkDemo;
            const spanDemo = linkDemo.querySelector('span');
            if (spanDemo) spanDemo.textContent = "Ver Demo en Vivo";
            linkDemo.style.display = 'inline-flex';
            linkDemo.classList.remove('btn-disabled');
            linkDemo.target = "_blank";
        } else {
            linkDemo.style.display = 'none';
        }
        
        if (proyecto.linkRepo) {
            linkRepo.href = proyecto.linkRepo;
            const spanRepo = linkRepo.querySelector('span');
            if (spanRepo) spanRepo.textContent = "Ver Código Fuente";
            linkRepo.classList.remove('btn-disabled');
            linkRepo.style.cursor = 'pointer';
            linkRepo.onclick = null;
            linkRepo.target = "_blank";
        } else {
            linkRepo.href = '#'; 
            const spanRepo = linkRepo.querySelector('span');
            if (spanRepo) spanRepo.textContent = "Repo Privado / En Proceso";
            linkRepo.classList.add('btn-disabled');
            linkRepo.style.cursor = 'not-allowed';
            linkRepo.target = "_self";
            linkRepo.onclick = (e) => {
                e.preventDefault();
                alert("El código para este proyecto aún está en proceso de subida y organización.");
                return false;
            };
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    openModalBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            try {
                const projectData = JSON.parse(e.currentTarget.getAttribute('data-proyecto'));
                openModal(projectData);
            } catch (error) {
                console.error("Error al parsear JSON del proyecto:", error);
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});