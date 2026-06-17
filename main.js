// 1. Mobile Toggle Code 
const menuToggle = document.getElementById("menu-toggle"); 
const navLinks = document.getElementById("nav-links"); 

if (menuToggle) { 
  menuToggle.addEventListener("click", () => { 
    navLinks.classList.toggle("active-menu"); 
  }); 
} 

// 2. Image Slider Code
let slideIndex = 0; 
showSlides(); 

function showSlides() { 
  let i; 
  let slides = document.getElementsByClassName("my-slide"); 
  if (slides.length === 0) return; 
  
  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none"; 
  } 
  
  slideIndex++; 
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  } 
  
  slides[slideIndex - 1].style.display = "block"; 
  setTimeout(showSlides, 10000); 
}

// ========================================================
// 🎯 3. FAQ Accordion Logic (सुधरा हुआ कोड)
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      
      // दूसरे खुले हुए सभी सवालों को बंद करने के लिए
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });

      // इस पर्टिकुलर सवाल को खोलना या बंद करना (Toggle)
      faqItem.classList.toggle('active');
    });
  });
});
