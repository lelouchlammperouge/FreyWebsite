// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling for contact form
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting Frey Studios! We will get back to you soon.');
    this.reset();
  });
  
  // Admin login functionality
  const loginForm = document.getElementById('login-form');
  const uploadSection = document.getElementById('upload-section');
  const gallery = document.getElementById('gallery');
  
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    if (email === 'yae12genshin@gmail.com' && password === 'AiHoshinoFan.678') {
      uploadSection.classList.remove('hidden');
      alert('Admin login successful!');
    } else {
      alert('Invalid email or password.');
    }
  });
  
  // Artwork upload functionality
  const uploadForm = document.getElementById('upload-form');
  
  uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('art-title').value;
    const url = document.getElementById('art-url').value;
  
    // Create new art item
    const artItem = document.createElement('div');
    artItem.classList.add('art-item');
    artItem.innerHTML = `
      <img src="${url}" alt="${title}">
      <p>${title}</p>
    `;
  
    // Add to gallery
    gallery.appendChild(artItem);
  
    // Reset form
    uploadForm.reset();
    alert('Artwork uploaded successfully!');
  });