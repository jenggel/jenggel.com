let clickCount = 0;

function handleClick() {
  clickCount++;

  const infoText = document.getElementById("infoText");
  const mainButton = document.getElementById("mainButton");
  const welcomeText = document.getElementById("welcomeText");
  const videoContainer = document.querySelector(".video-container");
  const video = document.getElementById("prankVideo");

  if (clickCount === 1) {
    document.getElementById("prankSound").play();
    infoText.textContent = "Hah? Kok diklik sih?";
    mainButton.textContent = "Serius Jangan Diklik!";
  } 
  else if (clickCount === 2) {
    if (welcomeText) welcomeText.remove(); // hilangkan h1
    infoText.textContent = "Nah kan, udah muncul videonya!";
    mainButton.textContent = "Masih Mau Klik?";
    videoContainer.style.display = "flex";
    video.muted = false;
    video.play();
  } 
  else if (clickCount === 3) {
    video.pause();
    video.currentTime = 0;
    videoContainer.style.display = "none";
    alert("jangan ditekan terus dongo 😑");
    infoText.textContent = "Ya udah lah, kamu keras kepala banget.";
    mainButton.textContent = "Masih Klik Lagi?";
  } 
  else if (clickCount === 4) {
    document.getElementById("prankImageBox").style.display = "block";
    mainButton.style.display = "none"; // tombol utama hilang
    infoText.textContent = "Pilih dengan bijak 😏";
  } 
  else if (clickCount === 5) {
    window.location.href = "https://instagram.com/kvn.egr_";
  }
}

// Tombol "Tidak" bergerak dalam layar saat didekati/di-tap
function gerakButton() {
  const btn = document.getElementById("btnTidak");
  const sound = document.getElementById("moveSound");
  const maxX = window.innerWidth - btn.offsetWidth - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.position = "absolute";
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;


  if (sound) {
  sound.currentTime = 0; // mulai dari awal setiap kali
  sound.play();
  }
}

// Klik "Lanjut" langsung ke klik ke-5
function lanjutKeLima() {
      const sound = document.getElementById("lanjutSound");
  if (sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }
  clickCount = 4;
  handleClick();
}

const btnTidak = document.getElementById("btnTidak");
const prankArea = document.getElementById("prankArea");

btnTidak.addEventListener("mouseenter", gerakButton);
btnTidak.addEventListener("touchstart", gerakButton);

prankArea.addEventListener("touchmove", function (event) {
  const touch = event.touches[0];
  const touchX = touch.clientX;
  const touchY = touch.clientY;

  const btnRect = btnTidak.getBoundingClientRect();
  const dx = touchX - (btnRect.left + btnRect.width / 2);
  const dy = touchY - (btnRect.top + btnRect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 80) {
    gerakButton();
  }
});
