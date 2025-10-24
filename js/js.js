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

        