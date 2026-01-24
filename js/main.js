const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(reveal => observer.observe(reveal));
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');

          const id = entry.target.getAttribute('id');
          const activeLink = document.querySelector(
            `.nav-links a[href="#${id}"]`
          );

          if (activeLink) {
            activeLink.classList.add('active');
          }
        });
      }
    });
  },
  {
    threshold: 0.6
  }
);

sections.forEach(section => navObserver.observe(section));
