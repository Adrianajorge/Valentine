document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (!envelope || !openBtn || !resetBtn) {
    console.log("Missing element(s):", { envelope, openBtn, resetBtn });
    return;
  }

  openBtn.addEventListener("click", () => envelope.classList.add("open"));
  resetBtn.addEventListener("click", () => envelope.classList.remove("open"));

  // bonus: tap the envelope itself
  envelope.addEventListener("click", () => envelope.classList.toggle("open"));
});
