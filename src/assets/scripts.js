let activeItem = null;

function setupDragAndDrop() {
  const items = document.querySelectorAll(".pool-list-item");
  const zones = document.querySelectorAll(".dropzone");

  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      activeItem = item;
      item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      activeItem = null;
    });
  });

  zones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");

      if (!activeItem) {
        return;
      }

      const dropzone = zone.querySelector(".pool-list");

      if (dropzone) {
        dropzone.appendChild(activeItem);
        return;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupDragAndDrop);
