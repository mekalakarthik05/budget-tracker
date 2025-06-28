const form = document.getElementById("expense-form");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");

let chart;
let categories = [];
let amounts = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const category = categoryInput.value;
  const amount = parseFloat(amountInput.value);

  if (!category || !amount || amount <= 0) return;

  categories.push(category);
  amounts.push(amount);

  categoryInput.value = "";
  amountInput.value = "";

  updateChart();
});

function updateChart() {
  if (chart) chart.destroy();
  const ctx = document.getElementById("expense-chart").getContext("2d");

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: categories,
      datasets: [{
        label: "Expenses",
        data: amounts,
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
          "#9966FF", "#FF9F40", "#C9CBCF"
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });
}
