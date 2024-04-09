document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
    item.addEventListener('click', function() {
      const url = this.dataset.url;
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
});
