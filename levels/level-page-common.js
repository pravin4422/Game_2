function updateLevelDisplay() {
    const levels = document.querySelectorAll(".level");
    let unlockedLevel = parseInt(localStorage.getItem("unlockedLevel")) || 1;
    let completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];
  
    levels.forEach((btn) => {
      const levelNum = Number(btn.dataset.level);
      const img = btn.querySelector("img");
  
      if (levelNum > unlockedLevel) {
        btn.classList.add("locked");
        img.src = "../levels/lock_button.webp";
      } else {
        btn.classList.remove("locked");
        img.src = `../assets/level_page/${levelNum}.webp`;
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const levels = document.querySelectorAll(".level");
    
    updateLevelDisplay();
  
    levels.forEach((btn) => {
      btn.addEventListener("click", () => {
        const levelNum = Number(btn.dataset.level);
        const unlockedLevel = parseInt(localStorage.getItem("unlockedLevel")) || 1;
        
        if (levelNum > unlockedLevel) {
          alert(`Complete Level ${levelNum - 1} first!`);
          return;
        }
  
        localStorage.setItem("lastPlayedLevel", levelNum);
        window.location.href = "level" + levelNum + ".html";
      });
    });
});

const completeBtn = document.getElementById("completeBtn");

if (completeBtn) {
  completeBtn.addEventListener("click", () => {
    let currentLevel = Number(localStorage.getItem("lastPlayedLevel")) || 1;
    let unlockedLevel = Number(localStorage.getItem("unlockedLevel")) || 1;
    let completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];

    // Mark current level as completed
    if (!completedLevels.includes(currentLevel)) {
      completedLevels.push(currentLevel);
      localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    }

    // Unlock next level
    if (currentLevel >= unlockedLevel) {
      localStorage.setItem("unlockedLevel", currentLevel + 1);
    }

    completeBtn.style.opacity = "0.7";
    
    setTimeout(() => {
      if (currentLevel >= 1 && currentLevel <= 10) {
        window.location.href = 'level1to10.html';
      } else if (currentLevel >= 11 && currentLevel <= 20) {
        window.location.href = 'level11to20.html';
      } else if (currentLevel >= 21 && currentLevel <= 30) {
        window.location.href = 'level21to30.html';
      } else if (currentLevel >= 31 && currentLevel <= 40) {
        window.location.href = 'level31to40.html';
      } else if (currentLevel >= 41 && currentLevel <= 50) {
        window.location.href = 'level41to50.html';
      } else if (currentLevel >= 51 && currentLevel <= 60) {
        window.location.href = 'level51to60.html';
      } else if (currentLevel >= 61 && currentLevel <= 70) {
        window.location.href = 'level61to70.html';
      } else if (currentLevel >= 71 && currentLevel <= 80) {
        window.location.href = 'level71to80.html';
      } else if (currentLevel >= 81 && currentLevel <= 90) {
        window.location.href = 'level81to90.html';
      } else if (currentLevel >= 91 && currentLevel <= 100) {
        window.location.href = 'level91to100.html';
      }
    }, 300);
  });
}
