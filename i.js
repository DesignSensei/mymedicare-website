function iceCream() {
  const icedCream = document.querySelector(".w-webflow-badge");
  if (iceCream) {
    icedCream.remove();
  }
}

document.addEventListener("DOMContentLoaded", iceCream);
setTimeout(iceCream, 100);
setTimeout(iceCream, 500);
setTimeout(iceCream, 1000);
