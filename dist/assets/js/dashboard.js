document.addEventListener("DOMContentLoaded", function () {

  var options1 = {
    chart: {
      height: 300,
      type: "radialBar",
      animations: {
        enabled: false // ❌ No animation
      }
    },

    // ❌ Disable hover & active effects
    states: {
      hover: {
        filter: {
          type: "none"
        }
      },
      active: {
        filter: {
          type: "none"
        }
      }
    },

    // ❌ Disable tooltip
    tooltip: {
      enabled: false
    },

    series: [67, 84, 61],

    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 270,

        hollow: {
          size: "30%" // thickness
        },

        track: {
          margin: 10 // 👈 gap between rings
        },

        dataLabels: {
          show: false // ❌ remove text flicker
        }
      }
    },

    // ✅ Rounded edges
    stroke: {
      lineCap: "round"
    },

    colors: ["#22c55e", "#ef4444", "#3b82f6"]
  };

  new ApexCharts(
    document.querySelector("#chart1"),
    options1
  ).render();

});

document.addEventListener("DOMContentLoaded", function () {

  var options1 = {
    chart: {
      height: 220,
      type: "radialBar",
      animations: {
        enabled: false
      }
    },
    states: {
      hover: {
        filter: {
          type: "none"
        }
      },
      active: {
        filter: {
          type: "none"
        }
      }
    },
    tooltip: {
      enabled: false
    },

    series: [67, 84, 61],

    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 270,

        hollow: {
          size: "30%"
        },

        track: {
          margin: 10
        },

        dataLabels: {
          show: false
        }
      }
    },

    stroke: {
      lineCap: "round"
    },

    colors: ["#22c55e", "#ef4444", "#3b82f6"]
  };

  new ApexCharts(
    document.querySelector("#chart2"),
    options1
  ).render();

});


// Mobile menu toggle
function toggleMobileMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("w-16");
  sidebar.classList.toggle("w-64");
}

// Initialize charts when page loads
document.addEventListener("DOMContentLoaded", function () {
  // ==============================
  // Earning Chart
  // ==============================
  const earningCtx = document.getElementById("earningChart").getContext("2d");

new Chart(earningCtx, {
  type: "bar",
  data: {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        data: [40, 35, 55, 60, 50, 85, 45, 75, 35, 40, 55, 50],
        backgroundColor: function (context) {
          const { chart, dataIndex } = context;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;

          if (dataIndex === 5) {
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, "#FCE166");
            gradient.addColorStop(1, "#0D743B");
            return gradient;
          }
          return "#D4E2DA";
        },
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true, // keep tooltip
        mode: "nearest", // focus only on hovered bar
        intersect: true, // only when directly over a bar
      },
    },
    interaction: {
      mode: "nearest",
      intersect: true, // prevents the vertical hover line
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20 },
        grid: { color: "#f1f0f1" },
      },
      x: {
        grid: { display: false },
      },
    },
  },
});


  // ==============================
  // Net Worth Chart
  // ==============================
  const netWorthCtx = document.getElementById("netWorthChart").getContext("2d");

  const netWorthData = [
    { month: "01", value: 42000 },
    { month: "02", value: 48000 },
    { month: "03", value: 52000 },
    { month: "04", value: 42000 },
    { month: "05", value: 41000 },
    { month: "06", value: 42000 }, // Pivot point
    { month: "07", value: 48000 },
    { month: "08", value: 49000 },
    { month: "09", value: 48000 },
    { month: "10", value: 58000 },
    { month: "11", value: 55000 },
  ];
  const netWorthLabels = netWorthData.map((d) => d.month);
  const netWorthValues = netWorthData.map((d) => d.value);


  new Chart(netWorthCtx, {
    type: "line",
    data: {
      labels: netWorthLabels,
      datasets: [
        {
          label: "Net Worth",
          data: netWorthValues,
          borderColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return;

            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, "#FCE166");
            gradient.addColorStop(1, "#0D743B");
            return gradient;
          },
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return;

            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, "rgba(13, 116, 59, 0.1)");
            gradient.addColorStop(1, "rgba(252, 225, 102, 0.1)");
            return gradient;
          },
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 0,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: "#6b7280",
            font: { size: 14, weight: "500" },
            padding: 10,
          },
          border: { display: false },
        },
        y: {
          beginAtZero: true,
          max: 100000,
          ticks: {
            maxTicksLimit: 8,
            callback: function (value) {
              return `$${value / 1000}K`;
            },
            color: "#6b7280",
            font: { size: 14, weight: "400" },
          },
          grid: {
            color: "#e5e7eb",
            borderDash: [5, 5],
            drawBorder: false,
          },
          border: { display: false },
        },
      },
    },
  });

  // ==============================
  // Budget Chart
  // ==============================
  const budgetCtx = document.getElementById("budgetChart").getContext("2d");
  new Chart(budgetCtx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [1414, 2262, 1414],
          backgroundColor: ["#22c55e", "#fbbf24", "#60a5fa"],
          borderWidth: 0,
          cutout: "70%",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
    },
  });
});

// Responsive sidebar for mobile
window.addEventListener("resize", function () {
  const sidebar = document.getElementById("sidebar");
  if (window.innerWidth < 1024) {
    sidebar.classList.add("w-16");
    sidebar.classList.remove("w-64");
  } else {
    sidebar.classList.remove("w-16");
    sidebar.classList.add("w-64");
  }
});


// Budget page Popup dropdown problem solve starts
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const selectedItems = document.getElementById("selectedItems");

  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
      const value = item.textContent;

      // prevent duplicate
      if ([...selectedItems.children].some(t => t.dataset.value === value)) {
        dropdownMenu.classList.add("hidden");
        return;
      }

      const tag = document.createElement("div");
      tag.className = "tag";
      tag.dataset.value = value;
      tag.innerHTML = `
        <span>${value}</span>
        <button>&times;</button>
      `;

      tag.querySelector("button").onclick = () => tag.remove();

      selectedItems.appendChild(tag);
      dropdownMenu.classList.add("hidden");
    });
  });

  // Close dropdown on outside click
  document.addEventListener("click", e => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
    }
  });
// Budget page Popup dropdown problem solve Ends

// Custom Dropdown JavaScript Starts
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const menu = dropdown.querySelector(".dropdown-menu");
    const items = dropdown.querySelectorAll(".dropdown-item");
    const valueSpan = dropdown.querySelector(".dropdown-value");

    // Toggle dropdown
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();

      // Close other dropdowns
      dropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("active");
        }
      });

      dropdown.classList.toggle("active");
    });

    // Select item
    items.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.stopPropagation();

        // Remove selected class from all items
        items.forEach((i) => i.classList.remove("selected"));

        // Add selected class to clicked item
        this.classList.add("selected");

        // Update trigger value
        valueSpan.textContent = this.getAttribute("data-value");

        // Close dropdown
        dropdown.classList.remove("active");
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  });

  // Set initial selected state
  dropdowns.forEach((dropdown) => {
    const items = dropdown.querySelectorAll(".dropdown-item");
    const currentValue =
      dropdown.querySelector(".dropdown-value").textContent;
    items.forEach((item) => {
      if (item.getAttribute("data-value") === currentValue) {
        item.classList.add("selected");
      }
    });
  });
});
// Custom Dropdown JavaScript Starts