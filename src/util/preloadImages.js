import { questions } from "util/question.js";

// Preload every question and answer image using the bundled (hashed) URLs.
// Keep references so the browser holds the decoded images in memory.
const preloadedImages = [];

questions.forEach((q) => {
  [q.question, ...q.answers.map((a) => a.img)].forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    preloadedImages.push(img);
  });
});

export default preloadedImages;
