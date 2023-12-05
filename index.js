const stars = document.querySelectorAll(".stars i");
console.log(stars);

stars.forEach((star, i1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, i2) => {
      i1 >= i2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});
