// ON Reload
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");

  // Iterate over Panels
  panels.forEach((panel) => {
    // Manipulate class list on click
    panel.addEventListener("click", () => {
      removeActive();

      panel.classList.add("active");
    });

    // Remove active from class list
    const removeActive = () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    };
  });
});
