const button = document.getElementById("button");
button.addEventListener("click", () => {
  const rating_container = document.getElementsByClassName("rating_container")[0];
  const result_container = document.getElementsByClassName("result_cont")[0];
  rating_container.style.display = "none";
  result_container.style.display = "flex";
});

const numbers = document.querySelectorAll(".number_item");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    numbers.forEach((num) => {
      num.style.color = "";
      num.style.background = "";
    });

    const selectedNumber = event.currentTarget;
    selectedNumber.style.color = "#FFFFFF";
    selectedNumber.style.background = "#FC7614";
    rate(selectedNumber.dataset.value);
  });
});

let current_rate = 0;

function rate(selectedRate) {
  current_rate = Number(selectedRate);
  result_rate();
  rate_text();
}

function result_rate() {
  numbers.forEach((number) => {
    number.classList.remove("active");
  });

  numbers.forEach((number, index) => {
    if (index + 1 <= current_rate) {
      number.classList.add("active");
    }
  });
}

const rate_text = () => {
  const rating = document.getElementById("rating");
  if (current_rate === 0) {
    rating.textContent = "Sorry";
  } else {
    rating.textContent = `You selected ${current_rate} out of 5`;
  }
};

rate(0);