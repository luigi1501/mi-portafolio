function getTechIconHTML(techName) {
    if (!techName) return '';
    const cleanTag = techName.toLowerCase().split('(')[0].trim();
    switch (cleanTag) {
        case 'node.js':
        case 'node':
            return '<i class="tag-icon devicon-nodejs-plain colored"></i>';
        case 'express':
            return '<i class="tag-icon devicon-express-original"></i>';
        case '.net 10':
        case '.net':
        case '.net maui':
        case 'asp.net core web api':
            return '<i class="tag-icon devicon-dotnetcore-plain colored"></i>';
        case 'c#':
            return '<i class="tag-icon devicon-csharp-plain colored"></i>';
        case 'python':
            return '<i class="tag-icon devicon-python-plain colored"></i>';
        case 'flask':
            return '<i class="tag-icon devicon-flask-original colored"></i>';
        case 'django':
            return '<i class="tag-icon devicon-django-plain colored"></i>';
        case 'blazor':
            return '<i class="tag-icon devicon-blazor-original colored"></i>';
        case 'tailwind css':
        case 'tailwind':
            return '<i class="tag-icon devicon-tailwindcss-plain colored"></i>';
        case 'javascript':
        case 'js':
            return '<i class="tag-icon devicon-javascript-plain colored"></i>';
        case 'mongodb':
            return '<i class="tag-icon devicon-mongodb-plain colored"></i>';
        case 'mysql':
            return '<i class="tag-icon devicon-mysql-plain colored"></i>';
        case 'postgresql':
            return '<i class="tag-icon devicon-postgresql-plain colored"></i>';
        case 'sqlite':
            return '<i class="tag-icon devicon-sqlite-plain colored"></i>';
        case 'supabase':
            return '<i class="tag-icon devicon-supabase-plain colored"></i>';
        case 'html5':
        case 'html':
            return '<i class="tag-icon devicon-html5-plain colored"></i>';
        case 'css3':
        case 'css':
            return '<i class="tag-icon devicon-css3-plain colored"></i>';
        case 'bootstrap':
            return '<i class="tag-icon devicon-bootstrap-plain colored"></i>';
        case 'vercel':
            return '<i class="tag-icon devicon-vercel-original"></i>';
        case 'chart.js':
            return '<i class="tag-icon devicon-chartjs-plain colored"></i>';
        case 'ejs':
            return '<img class="tag-icon tag-icon-img" src="/images/ejs.svg" alt="EJS logo" width="16" height="16" loading="lazy" />';
        case 'tidb':
        case 'tidb cloud':
            return '<img class="tag-icon tag-icon-img" src="/images/tidb.svg" alt="TiDB logo" width="16" height="16" loading="lazy" />';
        case 'turso':
        case 'turso cloud':
            return '<span class="tag-icon-svg-wrapper"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#2dd4bf" stroke-width="2" style="vertical-align:middle;flex-shrink:0"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></span>';
        case 'cloudinary':
            return '<span class="tag-icon-svg-wrapper"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;flex-shrink:0"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></span>';
        case 'render':
            return '<span class="tag-icon-svg-wrapper"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#c084fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;flex-shrink:0"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></span>';
        case 'docker':
            return '<i class="tag-icon devicon-docker-plain colored"></i>';
        case 'sql/nosql':
            return '<span class="tag-icon-svg-wrapper"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" stroke-width="2" style="vertical-align:middle;flex-shrink:0"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></span>';
        case 'restful apis':
            return '<span class="tag-icon-svg-wrapper"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;flex-shrink:0"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></span>';
        case 'qr code scanner':
            return '<span class="tag-icon-svg-wrapper"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2" style="vertical-align:middle;flex-shrink:0"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></span>';
        default:
            return '';
    }
}

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
                span.className = 'tag has-logo';
                const iconHTML = getTechIconHTML(tech);
                span.innerHTML = `${iconHTML} ${tech}`;
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
                linkDemo.rel = "noopener noreferrer";
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
                linkRepo.rel = "noopener noreferrer";
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