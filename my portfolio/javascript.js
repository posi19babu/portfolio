function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out, your message has been submitted!');
});