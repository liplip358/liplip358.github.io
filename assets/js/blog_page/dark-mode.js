const darkBtn = document.getElementById("dark-mode");
const body = document.body;

// 預設暗色模式
if (!localStorage.getItem("theme")) {
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  console.log("No theme found. Setting default to dark mode.");
} else if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  console.log("Theme in localStorage is dark. Applying dark mode.");
} else {
  console.log("Theme in localStorage is light. Applying light mode.");
}

// 頁面載入時輸出當前模式
console.log("Page loaded. Current theme:", localStorage.getItem("theme"));

// 點按鈕切換模式
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    console.log("Dark mode enabled. Updated localStorage.");
  } else {
    localStorage.setItem("theme", "light");
    console.log("Light mode enabled. Updated localStorage.");
  }
  console.log("Current theme in localStorage:", localStorage.getItem("theme"));
});
