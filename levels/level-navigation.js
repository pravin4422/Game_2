// Automatic level navigation
function getCurrentLevel() {
    const filename = window.location.pathname.split('/').pop();
    const match = filename.match(/level(\d+)\.html/);
    return match ? parseInt(match[1]) : 1;
}

function goToNextLevel() {
    const currentLevel = getCurrentLevel();
    
    // Determine which level page to go to
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
}

// Initialize next button when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.onclick = goToNextLevel;
    }
});
