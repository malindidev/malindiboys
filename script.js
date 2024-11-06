// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll-to-Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
