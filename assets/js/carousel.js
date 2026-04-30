document.addEventListener('DOMContentLoaded', () => {
    const viewers = document.querySelectorAll('.deck-viewer');

    viewers.forEach(viewer => {
        const mainImg = viewer.querySelector('.deck-slide-img');
        const thumbnails = viewer.querySelectorAll('.deck-thumb');
        const prevBtn = viewer.querySelector('.deck-prev');
        const nextBtn = viewer.querySelector('.deck-next');
        const currentSlideText = viewer.querySelector('.current-slide');
        const titleText = viewer.querySelector('.deck-title-area h3');
        
        let currentIndex = 0;

        function updateSlide(index) {
            // Remove active class from all
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Set new active thumbnail
            thumbnails[index].classList.add('active');
            
            // Update main image source
            const targetImg = thumbnails[index].querySelector('img').src;
            mainImg.src = targetImg;
            
            // Update text
            if(currentSlideText) currentSlideText.textContent = index + 1;
            if(titleText) titleText.textContent = `Slide ${index + 1}`;
            
            // Scroll thumbnail into view if needed
            thumbnails[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            
            currentIndex = index;
        }

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                updateSlide(index);
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const newIndex = currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
                updateSlide(newIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const newIndex = currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
                updateSlide(newIndex);
            });
        }
    });
});
