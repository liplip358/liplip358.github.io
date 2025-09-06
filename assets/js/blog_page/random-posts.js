function initializeRandomPosts() {
  if (!window.jekyllData || !window.jekyllData.candidatePosts) return;

  const container = document.getElementById("random-posts-container");
  if (!container) return;

  const allPosts = [...window.jekyllData.candidatePosts];

  if (allPosts.length === 0) return;

  // Fisher-Yates 洗牌
  for (let i = allPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allPosts[i], allPosts[j]] = [allPosts[j], allPosts[i]];
  }

  // 取前 5 篇
  const randomPosts = allPosts.slice(0, 5);

  container.innerHTML = randomPosts
    .map((post) => {
      const categoriesHtml = post.categories
        .map(
          (cat) =>
            `<a class="text-capitalize text-muted smoothscroll" href="/blog/categories.html#${cat.toLowerCase()}">${cat}</a>`
        )
        .join('<span class="sep">, </span>');

      return `
      <li class="mb-4">
        <span>
          <h6 class="font-weight-bold">
            <a href="${post.url}" class="text-dark">${post.title}</a>
          </h6>
          <span class="d-block text-muted">
            In <span class="catlist">${categoriesHtml}</span>
          </span>
        </span>
      </li>
    `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", initializeRandomPosts);
