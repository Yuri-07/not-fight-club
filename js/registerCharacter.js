document.getElementById('regForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const characterName = document.getElementById('charName').value.trim();
  if (characterName) {
    localStorage.setItem('characterName', characterName);
    window.location.href = 'index.html';
  }
});