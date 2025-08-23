document.addEventListener("DOMContentLoaded", () => {
  const fightBtn = document.getElementById("fightBtn");

  if (fightBtn) {
    fightBtn.addEventListener("click", () => {
      window.location.href = "battle.html";
    });
  }
});
