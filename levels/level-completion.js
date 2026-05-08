// Shared function to mark level as completed when player wins
function markLevelCompleted() {
    const currentLevel = getCurrentLevel();
    const unlockedLevel = parseInt(localStorage.getItem("unlockedLevel")) || 1;
    let completedLevels = JSON.parse(localStorage.getItem("completedLevels")) || [];
    
    // Add to completed levels
    if (!completedLevels.includes(currentLevel)) {
        completedLevels.push(currentLevel);
        localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
    }
    
    // Unlock next level
    if (currentLevel >= unlockedLevel) {
        localStorage.setItem("unlockedLevel", currentLevel + 1);
    }
}
