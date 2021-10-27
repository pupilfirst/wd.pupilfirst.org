window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          document
            .querySelector(`.stats__side-nav-item a[href="#${id}"]`)
            .parentElement.classList.add("stats__side-nav-item--active");
        } else {
          document
            .querySelector(`.stats__side-nav-item a[href="#${id}"]`)
            .parentElement.classList.remove("stats__side-nav-item--active");
        }
      });
    },
    {
      rootMargin: "-50% 0px -49%",
    }
  );

  // Track all sections that have an `id` applied
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
