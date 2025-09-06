// 自執行函式，避免污染全域
(function () {
  const body = document.body;

  // 1️⃣ 頁面一開始先套用使用者上次選擇的模式，避免閃白
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme || savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (!savedTheme) localStorage.setItem("theme", "dark");
    console.log("Applying dark mode.");
  } else {
    body.classList.remove("dark-mode");
    console.log("Applying light mode.");
  }

  console.log("Page loaded. Current theme:", localStorage.getItem("theme"));

  // 2️⃣ 設定切換按鈕功能
  const darkBtn = document.getElementById("dark-mode");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        console.log("Dark mode enabled. Updated localStorage.");
      } else {
        localStorage.setItem("theme", "light");
        console.log("Light mode enabled. Updated localStorage.");
      }

      console.log(
        "Current theme in localStorage:",
        localStorage.getItem("theme")
      );
    });
  }
})();
