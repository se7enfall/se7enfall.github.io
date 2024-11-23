function goHome() {
    window.location.href = "index.html"; // Перенаправление на главную страницу
}
document.addEventListener("DOMContentLoaded", function() {
    // Показать основной контент с анимацией
    const mainContent = document.querySelector("main");
    mainContent.style.opacity = 1; // Установить непрозрачность в 1
    mainContent.style.transform = "translateY(0)"; // Вернуть на место
});
