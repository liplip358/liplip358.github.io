// ...existing code...
document.addEventListener("DOMContentLoaded", function () {
  const items = Array.from(document.querySelectorAll(".grid-item"));
  if (!items.length) return;

  items.forEach((item) => {
    // 若 HTML 沒加 tabindex，程式自動補一個，方便 focus 與鍵盤操作
    if (!item.hasAttribute("tabindex")) item.setAttribute("tabindex", "0");
    // 設定 role 方便輔助使用
    if (!item.hasAttribute("role")) item.setAttribute("role", "button");

    item.addEventListener("click", function (e) {
      e.stopPropagation();
      // 切換此項目，並關閉其他項目
      const isOpen = item.classList.toggle("is-open");
      items.forEach((i) => {
        if (i !== item) i.classList.remove("is-open");
      });
      item.setAttribute("aria-pressed", String(!!isOpen));
    });

    // 支援鍵盤：Enter 或 空白鍵
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
  });

  // 點空白處關閉所有已開啟的項目
  document.addEventListener("click", function () {
    items.forEach((i) => {
      i.classList.remove("is-open");
      i.setAttribute("aria-pressed", "false");
    });
  });
});
