const openModal = () => {
  let container = document.getElementById("newlaster");
  container.classList.add("showModal");
};

export const closeModal = () => {
  let container = document.getElementById("newlaster");
  container.classList.add("close-modal");
};

window.addEventListener("load", openModal);
window.addEventListener("load", () => {
  let closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", (event) => {
    closeModal();
  });
});