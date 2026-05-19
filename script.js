import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://rwaubuyknncsesmgcden.supabase.co";
const supabaseKey = "sb_publishable_QOLhX311imtLROJlkgDlTg_qk-trPQq";

const supabase = createClient(supabaseUrl, supabaseKey);

let allData = [];
let categoryChart;
let statusChart;
let dateChart;

async function loadData() {
  const { data, error } = await supabase
    .from("amazon_sales")
    .select("*");

  if (error) {
    console.error("Supabase error:", error);
    alert("Error loading data from Supabase.");
    return;
  }

  allData = data;
  populateCategoryFilter(data);
  updateDashboard(data);
}

function populateCategoryFilter(data) {
  const filter = document.getElementById("categoryFilter");
  const categories = [...new Set(data.map(item => item.category))];

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filter.appendChild(option);
  });

  filter.addEventListener("change", () => {
    const selected = filter.value;

    if (selected === "All") {
      updateDashboard(allData);
    } else {
      const filtered = allData.filter(item => item.category === selected);
      updateDashboard(filtered);
    }
  });
}

function updateDashboard(data) {
  updateKPIs(data);
  renderCategoryChart(data);
  renderStatusChart(data);
  renderDateChart(data);
}

function updateKPIs(data) {
  const totalOrders = data.length;

  const totalRevenue = data.reduce((sum, item) => {
    return sum + Number(item.amount || 0);
  }, 0);

  const averageSales = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  document.getElementById("totalOrders").textContent = totalOrders;
  document.getElementById("totalRevenue").textContent =
    "₹" + totalRevenue.toLocaleString();
  document.getElementById("averageSales").textContent =
    "₹" + averageSales.toFixed(2);
}

function renderCategoryChart(data) {
  const categorySales = {};

  data.forEach(item => {
    const category = item.category || "Unknown";
    categorySales[category] = (categorySales[category] || 0) + Number(item.amount || 0);
  });

  const labels = Object.keys(categorySales);
  const values = Object.values(categorySales);

  if (categoryChart) categoryChart.destroy();

  categoryChart = new Chart(document.getElementById("categoryChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Total Sales",
        data: values
      }]
    }
  });
}

function renderStatusChart(data) {
  const statusCount = {};

  data.forEach(item => {
    const status = item.status || "Unknown";
    statusCount[status] = (statusCount[status] || 0) + 1;
  });

  const labels = Object.keys(statusCount);
  const values = Object.values(statusCount);

  if (statusChart) statusChart.destroy();

  statusChart = new Chart(document.getElementById("statusChart"), {
    type: "pie",
    data: {
      labels,
      datasets: [{
        data: values
      }]
    }
  });
}

function renderDateChart(data) {
  const dateSales = {};

  data.forEach(item => {
    const date = item.order_date;
    dateSales[date] = (dateSales[date] || 0) + Number(item.amount || 0);
  });

  const labels = Object.keys(dateSales).sort();
  const values = labels.map(date => dateSales[date]);

  if (dateChart) dateChart.destroy();

  dateChart = new Chart(document.getElementById("dateChart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Sales Trend",
        data: values
      }]
    }
  });
}

loadData();