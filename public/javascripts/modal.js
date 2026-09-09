document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. MODAL DE PROYECTOS
    // ----------------------------------------------------
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('#project-modal .close-btn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const backdrop = document.querySelector('#project-modal .modal-backdrop');

    if (modal && openModalBtns.length > 0) {
        let currentModalProject = null;

        const renderModalContent = () => {
            if (!currentModalProject) return;
            const proyecto = currentModalProject;
            const currentLang = localStorage.getItem('portfolio_lang') || 'es';
            const isEn = currentLang === 'en';

            const modalTitle = document.getElementById('modal-title');
            const modalStatus = document.getElementById('modal-status');
            const modalTechTags = document.getElementById('modal-tech-tags');
            const modalDescription = document.getElementById('modal-description');
            const storyContainer = document.getElementById('modal-story-container');
            const problemText = document.getElementById('modal-problem-text');
            const solutionText = document.getElementById('modal-solution-text');
            const impactText = document.getElementById('modal-impact-text');
            const linkDemo = document.getElementById('modal-link-demo');
            const linkRepo = document.getElementById('modal-link-repo');

            modalTitle.textContent = (isEn && proyecto.nombre_en) ? proyecto.nombre_en : proyecto.nombre;

            const prob = (isEn && proyecto.problema_en) ? proyecto.problema_en : proyecto.problema;
            const sol = (isEn && (proyecto.solucionTecnica_en || proyecto.solucion_en)) ? (proyecto.solucionTecnica_en || proyecto.solucion_en) : proyecto.solucionTecnica;
            const imp = (isEn && proyecto.impacto_en) ? proyecto.impacto_en : proyecto.impacto;

            if (prob && sol && imp) {
                if (storyContainer) storyContainer.style.display = 'flex';
                if (modalDescription) modalDescription.style.display = 'none';
                if (problemText) problemText.textContent = prob;
                if (solutionText) solutionText.textContent = sol;
                if (impactText) impactText.textContent = imp;
            } else {
                if (storyContainer) storyContainer.style.display = 'none';
                if (modalDescription) {
                    const desc = isEn ? (proyecto.descripcion_en || proyecto.resumen_en || proyecto.resumen) : (proyecto.descripcionLarga || proyecto.resumen);
                    modalDescription.textContent = desc;
                    modalDescription.style.display = 'block';
                }
            }

            modalTechTags.innerHTML = '';
            proyecto.tecnologias.forEach(tech => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.textContent = tech;
                modalTechTags.appendChild(span);
            });

            if (proyecto.enProceso) {
                modalStatus.textContent = isEn ? '⚡ Project currently In Development' : '⚡ Proyecto actualmente En Proceso de Desarrollo';
                modalStatus.className = 'status-in-progress';
                modalStatus.style.display = 'inline-block';
            } else {
                modalStatus.textContent = isEn ? '✓ Project Completed and Deployed' : '✓ Proyecto Completado y Desplegado';
                modalStatus.className = 'status-completed';
                modalStatus.style.display = 'inline-block';
            }

            if (proyecto.linkDemo && !proyecto.enProceso) {
                linkDemo.href = proyecto.linkDemo;
                const spanDemo = linkDemo.querySelector('span');
                if (spanDemo) spanDemo.textContent = isEn ? "View Live Demo" : "Ver Demo en Vivo";
                linkDemo.style.display = 'inline-flex';
                linkDemo.classList.remove('btn-disabled');
                linkDemo.target = "_blank";
            } else {
                linkDemo.style.display = 'none';
            }
            
            if (proyecto.linkRepo) {
                linkRepo.href = proyecto.linkRepo;
                const spanRepo = linkRepo.querySelector('span');
                if (spanRepo) spanRepo.textContent = isEn ? "View Source Code" : "Ver Código Fuente";
                linkRepo.classList.remove('btn-disabled');
                linkRepo.style.cursor = 'pointer';
                linkRepo.onclick = null;
                linkRepo.target = "_blank";
            } else {
                linkRepo.href = '#'; 
                const spanRepo = linkRepo.querySelector('span');
                if (spanRepo) spanRepo.textContent = isEn ? "Private Repo / In Progress" : "Repo Privado / En Proceso";
                linkRepo.classList.add('btn-disabled');
                linkRepo.style.cursor = 'not-allowed';
                linkRepo.target = "_self";
                linkRepo.onclick = (e) => {
                    e.preventDefault();
                    alert(isEn ? "The code for this project is currently being uploaded and organized." : "El código para este proyecto aún está en proceso de subida y organización.");
                    return false;
                };
            }

            if (typeof window.applyTranslations === 'function') {
                window.applyTranslations(currentLang);
            }
        };

        const openModal = (proyecto) => {
            currentModalProject = proyecto;
            renderModalContent();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        window.addEventListener('languageChanged', () => {
            if (modal.classList.contains('active') && currentModalProject) {
                renderModalContent();
            }
        });

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

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (backdrop) backdrop.addEventListener('click', closeModal);

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
    }

    // ----------------------------------------------------
    // 2. MODAL VISOR DE CV (PDF ONLINE)
    // ----------------------------------------------------
    const cvModal = document.getElementById('cv-modal');
    const openCvBtns = document.querySelectorAll('.open-cv-modal-btn');
    const closeCvBtn = document.getElementById('close-cv-modal');
    const cvBackdrop = document.getElementById('cv-modal-backdrop');

    if (cvModal && openCvBtns.length > 0) {
        const openCvModal = (e) => {
            if (e) e.preventDefault();
            cvModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeCvModal = () => {
            cvModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        openCvBtns.forEach(btn => {
            btn.addEventListener('click', openCvModal);
        });

        if (closeCvBtn) closeCvBtn.addEventListener('click', closeCvModal);
        if (cvBackdrop) cvBackdrop.addEventListener('click', closeCvModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cvModal.classList.contains('active')) {
                closeCvModal();
            }
        });
    }
});