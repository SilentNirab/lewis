// Initialize charts when page loads
document.addEventListener("DOMContentLoaded", function () {

  // Net Worth Chart
  const netWorthCtx = document.getElementById("netWorthChart2").getContext("2d");
  // Data points for the chart
  const netWorthData = [
    { month: "01", value: 42000 },
    { month: "02", value: 48000 },
    { month: "03", value: 52000 },
    { month: "04", value: 42000 },
    { month: "05", value: 41000 },
    { month: "06", value: 42000 }, // This is the pivot point
    { month: "07", value: 48000 },
    { month: "08", value: 49000 },
    { month: "09", value: 48000 },
    { month: "10", value: 58000 },
    { month: "11", value: 55000 },
  ];
  const netWorthLabels = netWorthData.map((d) => d.month);
  const netWorthValues = netWorthData.map((d) => d.value);

  // Custom plugin to draw the dotted line and tooltip
  const customLineAndTooltip = {
    id: "customLineAndTooltip",
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
        scales: { x, y },
      } = chart;

      // Find the index for the dotted line (e.g., month '06')
      const dottedLineIndex = netWorthLabels.indexOf("06");
      if (dottedLineIndex === -1) return;

      const point = chart.getDatasetMeta(0).data[dottedLineIndex];
      if (!point) return;

      const xPos = point.x;
      const yPos = point.y;
      const value = netWorthValues[dottedLineIndex];

      // Draw dotted line
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]); // Dotted line
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;
      ctx.moveTo(xPos, yPos);
      ctx.lineTo(xPos, bottom);
      ctx.stroke();
      ctx.restore();

      // Draw tooltip
      const tooltipText = `$${value.toLocaleString()}`;
      ctx.font = "500 16px Inter";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textMetrics = ctx.measureText(tooltipText);
      const textWidth = textMetrics.width;
      const textHeight = 20; // Approximate height for the text

      const padding = 10;
      const rectWidth = textWidth + padding * 2;
      const rectHeight = textHeight + padding * 2;
      const rectX = xPos - rectWidth / 2;
      const rectY = yPos - rectHeight - 15; // Position above the point and line

      // Draw black background rectangle with rounded corners
      ctx.fillStyle = "black";
      const borderRadius = 8;
      ctx.beginPath();
      ctx.moveTo(rectX + borderRadius, rectY);
      ctx.lineTo(rectX + rectWidth - borderRadius, rectY);
      ctx.quadraticCurveTo(
        rectX + rectWidth,
        rectY,
        rectX + rectWidth,
        rectY + borderRadius
      );
      ctx.lineTo(rectX + rectWidth, rectY + rectHeight - borderRadius);
      ctx.quadraticCurveTo(
        rectX + rectWidth,
        rectY + rectHeight,
        rectX + rectWidth - borderRadius,
        rectY + rectHeight
      );
      ctx.lineTo(rectX + borderRadius, rectY + rectHeight);
      ctx.quadraticCurveTo(
        rectX,
        rectY + rectHeight,
        rectX,
        rectY + rectHeight - borderRadius
      );
      ctx.lineTo(rectX, rectY + borderRadius);
      ctx.quadraticCurveTo(rectX, rectY, rectX + borderRadius, rectY);
      ctx.closePath();
      ctx.fill();

      // Draw text
      ctx.fillStyle = "white";
      ctx.fillText(tooltipText, xPos, rectY + rectHeight / 2);
    },
  };
  // Register the custom plugin
  Chart.register(customLineAndTooltip);

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
            if (!chartArea) {
              return;
            }
            const gradientRed = ctx.createLinearGradient(
              0,
              0,
              chartArea.width,
              0
            );
            gradientRed.addColorStop(0, "#ef4444"); // Red
            gradientRed.addColorStop(0.5, "#ef4444"); // Red up to the pivot
            gradientRed.addColorStop(0.5, "#22c55e"); // Green from the pivot
            gradientRed.addColorStop(1, "#22c55e"); // Green
            return gradientRed;
          },
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              return;
            }
            const gradientFill = ctx.createLinearGradient(
              0,
              chartArea.bottom,
              0,
              chartArea.top
            );
            gradientFill.addColorStop(0, "rgba(255, 255, 255, 0)"); // Transparent at bottom
            gradientFill.addColorStop(0.5, "rgba(239, 68, 68, 0.2)"); // Red shade
            gradientFill.addColorStop(0.5, "rgba(34, 197, 94, 0.2)"); // Green shade
            gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)"); // Transparent at top
            return gradientFill;
          },
          fill: true,
          tension: 0.4,
          pointRadius: 0, // Hide data points
          pointHoverRadius: 0,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false, // Disable default tooltip as we have a custom one
        },
      },
      scales: {
        x: {
          grid: {
            display: false, // Hide vertical grid lines
          },
          ticks: {
            color: "#6b7280",
            font: {
              size: 14,
              weight: "500",
            },
            padding: 10,
          },
          border: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 100000,
          ticks: {
            maxTicksLimit: 8,
            callback: function (value, index, values) {
              if (value === 5) return "0";
              return `$${value / 1000}K`;
            },
            color: "#6b7280",
            font: {
              size: 14,
              weight: "400",
            },
          },
          grid: {
            color: "#e5e7eb",
            borderDash: [5, 5], // Dashed horizontal grid lines
            drawBorder: false,
          },
          border: {
            display: false,
          },
        },
      },
    },
  });

  // Budget Chart
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
        legend: {
          display: false,
        },
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
