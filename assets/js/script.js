const initialize = () => { 
  const logo = document.querySelector(".logo img");
  const menuButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".main-menu ul");
  const barsIcon = document.querySelector(".fa-bars");
  const xmarkIcon = document.querySelector(".fa-xmark");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");
  const galleryImages = document.querySelectorAll(".gallery-image");
  const animatedContainer = document.querySelector(".animated-container");
  const animatedElements = document.querySelectorAll(".animated-text");
  const animatedElement = document.querySelectorAll(".animated-container, .post");

  if (logo) {
    logo.addEventListener("mouseover", () => {
      logo.style.transform = "scale(1.2) rotate(5deg)";
      logo.style.transition = "transform 0.3s ease-in-out";
    });

    logo.addEventListener("mouseout", () => {
      logo.style.transform = "scale(1) rotate(0deg)";
    });
  }

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      if (navMenu.classList.contains("active")) {
        barsIcon.style.display = "none";
        xmarkIcon.style.display = "block";
      } else {
        barsIcon.style.display = "block";
        xmarkIcon.style.display = "none";
      }
    });

    if (navMenu.classList.contains("active")) {
      barsIcon.style.display = "none";
      xmarkIcon.style.display = "block";
    } else {
      barsIcon.style.display = "block";
      xmarkIcon.style.display = "none";
    }
  }

  animatedElements.forEach((element, index) => {
    setTimeout(() => {
      animatedContainer.classList.add("visible");
      element.classList.add("visible");
    }, index * 500);
  });

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      document.body.classList.add("no-scroll");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedElement.forEach((element) => observer.observe(element));
}
initialize();