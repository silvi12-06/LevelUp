function openModal(imageUrls, title) {
    const modal = document.getElementById('imageModal');
    const modalImageContainer = document.getElementById('modalImageContainer');
    const modalTitle = document.getElementById('modalTitle');
    
    // Set modal title
    modalTitle.textContent = title;
    
    // Clear previous images
    modalImageContainer.innerHTML = '';
    
    // Add new images
    if (Array.isArray(imageUrls)) {
        imageUrls.forEach(url => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            const img = document.createElement('img');
            img.src = url;
            img.className = 'img-fluid';
            img.alt = title;
            col.appendChild(img);
            modalImageContainer.appendChild(col);
        });
    } else {
        const col = document.createElement('div');
        col.className = 'col-md-12';
        const img = document.createElement('img');
        img.src = imageUrls;
        img.className = 'img-fluid';
        img.alt = title;
        col.appendChild(img);
        modalImageContainer.appendChild(col);
    }
    
    // Show modal
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Animación con GSAP
document.addEventListener("DOMContentLoaded", () => {
    const elementoFrase = document.querySelector(".frase");
    if (elementoFrase) { // Verifica que el elemento exista
        gsap.fromTo(
            elementoFrase,
            { x: "-100vw" },
            {
                x: "100vw",
                duration: 15,
                ease: "power1.inOut",
                repeat: -1,
                repeatDelay: 1,
                onRepeat: () => {
                    gsap.set(elementoFrase, { x: "-100vw" });
                }
            }
        );
    } else {
        console.error("No se encontró el elemento con clase 'frase'");
    }
});

        