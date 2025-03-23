const ctx = document.getElementById("populationChart").getContext("2d");

// Real-world estimated population data from 1980 to 2025
const years = [
    1980, 1985, 1990, 1995, 2000, 2005, 2010, 
    2015, 2020, 2025
];
const population = [
    4.43, 4.85, 5.28, 5.73, 6.14, 6.52, 6.96, 
    7.38, 7.79, 8.1
]; // Population in billions

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: years,
        datasets: [
            {
                label: "World Population (Billions)",
                data: population,
                borderColor: "#00d4ff",
                borderWidth: 3,
                backgroundColor: "rgba(0, 212, 255, 0.1)",
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: "#00d4ff",
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false,
                ticks: { color: "white" },
                grid: { color: "rgba(255, 255, 255, 0.2)" },
            },
            x: {
                ticks: { color: "white" },
                grid: { color: "rgba(255, 255, 255, 0.2)" },
            },
        },
        plugins: {
            legend: { labels: { color: "white" } },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        return `Population: ${context.raw}B`;
                    },
                },
            },
        },
        animation: {
            duration: 2000,
            easing: "easeInOutQuart",
        },
    },
});

// Update UI with latest values
document.getElementById("current-year").innerText = years[years.length - 1];
document.getElementById("current-population").innerText = population[population.length - 1] + " Billion";
document.getElementById("growth-rate").innerText = "1.05% per year"; // Adjusted for accuracy
