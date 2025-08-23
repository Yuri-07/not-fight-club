const characterName = localStorage.getItem('characterName');
if (!characterName) {
  window.location.href = 'registration.html';
}