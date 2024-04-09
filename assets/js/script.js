document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.custom-carousel');

  carousels.forEach(carousel => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;
    let animationId = 0;

    carouselInner.style.display = 'flex';

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mousemove', handleMouseMove);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
    carousel.addEventListener('touchcancel', handleTouchEnd);

    function handleMouseDown(e) {
      isDragging = true;
      startPosition = e.clientX || e.touches[0].clientX;
      prevTranslate = currentTranslate;
      cancelAnimation();
    }

    function handleMouseMove(e) {
      if (!isDragging) return;
      const currentPosition = e.clientX || e.touches[0].clientX;
      const diff = currentPosition - startPosition;
      currentTranslate = prevTranslate + diff;
      carouselInner.style.transform = `translateX(${currentTranslate}px)`;
    }

    function handleMouseUp() {
      if (!isDragging) return;
      isDragging = false;
      setIndex();
      startAnimation();
    }

    function handleMouseLeave() {
      if (!isDragging) return;
      isDragging = false;
      setIndex();
      startAnimation();
    }

    function handleTouchStart(e) {
      handleMouseDown(e);
    }

    function handleTouchMove(e) {
      handleMouseMove(e);
    }

    function handleTouchEnd() {
      handleMouseUp();
    }

    function goToSlide(index) {
      currentIndex = index;
      const offset = -currentIndex * carouselItems[0].offsetWidth;
      carouselInner.style.transform = `translateX(${offset}px)`;
    }

    function setIndex() {
      const slideWidth = carouselItems[0].offsetWidth;
      const threshold = slideWidth / 3;
      if (Math.abs(currentTranslate - prevTranslate) > threshold) {
        if (currentTranslate > prevTranslate && currentIndex > 0) {
          currentIndex--;
        } else if (currentTranslate < prevTranslate && currentIndex < carouselItems.length - 1) {
          currentIndex++;
        }
      }
      goToSlide(currentIndex);
    }

    function startAnimation() {
      cancelAnimation();
      animationId = requestAnimationFrame(startAnimation);
      carouselInner.style.transition = 'transform 0.3s ease';
    }

    function cancelAnimation() {
      cancelAnimationFrame(animationId);
    }
  });
});
