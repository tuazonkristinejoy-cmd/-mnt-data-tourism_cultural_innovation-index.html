const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

const checklist = document.querySelector("#tripChecklist");
const checkboxes = [...checklist.querySelectorAll('input[type="checkbox"]')];
const progressCount = document.querySelector("#progressCount");
const progressFill = document.querySelector("#progressFill");
const feedback = document.querySelector("#plannerFeedback");

function updateProgress() {
  const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
  progressCount.textContent = `${completed} / ${checkboxes.length}`;
  progressFill.style.width = `${(completed / checkboxes.length) * 100}%`;
  progressFill.parentElement.setAttribute("aria-valuenow", String(completed));
  progressFill.parentElement.setAttribute("aria-valuemin", "0");
  progressFill.parentElement.setAttribute("aria-valuemax", String(checkboxes.length));
  feedback.textContent = completed === checkboxes.length
    ? "All set! Review local details before you travel."
    : completed === 0
      ? "Your island plan begins here."
      : `${completed} of ${checkboxes.length} steps complete. Keep going!`;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateProgress));

document.querySelector("#resetChecklist").addEventListener("click", () => {
  checkboxes.forEach((checkbox) => { checkbox.checked = false; });
  updateProgress();
  checkboxes[0].focus();
});

updateProgress();
