// /assets/js/blog_page/dark-mode.js

// 💡 這是你原始 JS 檔的「第二部分」
// 它只負責處理按鈕的點擊事件

// 自執行函式，避免污染全域
(function () {
  const body = document.body;

  // 1️⃣ 初始化邏輯已經從這個檔案移除

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
