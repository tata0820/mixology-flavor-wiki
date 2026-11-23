
const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const counter = document.getElementById("slide-counter");
const progressFill = document.getElementById("progress-fill");

let currentSlide = 0;

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  const currentNumber = String(currentSlide + 1).padStart(2, "0");
  const totalNumber = String(slides.length).padStart(2, "0");

  counter.textContent = `${currentNumber} / ${totalNumber}`;
  progressFill.style.width =
    `${((currentSlide + 1) / slides.length) * 100}%`;

  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;

  window.location.hash = `slide-${currentSlide + 1}`;
}

prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    showSlide(currentSlide + 1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showSlide(currentSlide - 1);
  }

  if (event.key === "Home") {
    showSlide(0);
  }

  if (event.key === "End") {
    showSlide(slides.length - 1);
  }
});

// 從網址的 slide 編號恢復目前頁面
const hashMatch = window.location.hash.match(/^#slide-(\d+)$/);

if (hashMatch) {
  showSlide(Number(hashMatch[1]) - 1);
} else {
  showSlide(0);
}

// 讀取知識圖譜 JSON，確認節點與關聯數量
async function loadKnowledgeGraph() {
  const status = document.getElementById("graph-status");

  try {
    const response = await fetch("../data/knowledge_graph.json");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const graph = await response.json();

    const nodeCount = Array.isArray(graph.nodes)
      ? graph.nodes.length
      : 0;

    const edgeCount = Array.isArray(graph.edges)
      ? graph.edges.length
      : 0;

    status.textContent =
      `知識圖譜已載入：${nodeCount} 個知識節點・${edgeCount} 條關聯`;
  } catch (error) {
    status.textContent =
      "目前無法讀取知識圖譜資料；請確認 GitHub Pages 路徑與 JSON 檔案。";

    console.error("Knowledge graph loading failed:", error);
  }
}

loadKnowledgeGraph();
