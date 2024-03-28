document.addEventListener('DOMContentLoaded', function() {
    const accordionTitles = document.querySelectorAll('.accordion-title[data-toggle="accordion-content"]');
  
    accordionTitles.forEach(title => {
      title.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  