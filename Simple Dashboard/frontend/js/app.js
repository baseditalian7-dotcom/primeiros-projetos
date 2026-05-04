const periodButtons = document.querySelectorAll("[data-period]");
const revenueValue = document.querySelector("#revenueValue");
const salesValue = document.querySelector("#salesValue");
const visitorsValue = document.querySelector("#visitorsValue");
const conversionValue = document.querySelector("#conversionValue");
const revenueChange = document.querySelector("#revenueChange");
const salesChange = document.querySelector("#salesChange");
const visitorsChange = document.querySelector("#visitorsChange");
const barChart = document.querySelector("#barChart");
const bestDayText = document.querySelector("#bestDayText");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryText = document.querySelector("#summaryText");
const ticketValue = document.querySelector("#ticketValue");
const goalValue = document.querySelector("#goalValue");
const channelTable = document.querySelector("#channelTable");

const dashboardData = {
    month: {
        revenue: 48200,
        sales: 386,
        visitors: 18340,
        change: {
            revenue: 18,
            sales: 11,
            visitors: 24
        },
        daily: [
            { label: "Seg", revenue: 5200 },
            { label: "Ter", revenue: 6800 },
            { label: "Qua", revenue: 7400 },
            { label: "Qui", revenue: 6100 },
            { label: "Sex", revenue: 9200 },
            { label: "Sáb", revenue: 8100 },
            { label: "Dom", revenue: 5400 }
        ],
        channels: [
            { name: "Instagram", visitors: 7200, sales: 156, revenue: 18400 },
            { name: "Google", visitors: 5300, sales: 122, revenue: 15200 },
            { name: "Indicação", visitors: 2100, sales: 74, revenue: 9600 },
            { name: "Email", visitors: 3740, sales: 34, revenue: 5000 }
        ]
    },
    week: {
        revenue: 12650,
        sales: 91,
        visitors: 4210,
        change: {
            revenue: 9,
            sales: 7,
            visitors: 13
        },
        daily: [
            { label: "Seg", revenue: 1100 },
            { label: "Ter", revenue: 1620 },
            { label: "Qua", revenue: 1840 },
            { label: "Qui", revenue: 1510 },
            { label: "Sex", revenue: 2750 },
            { label: "Sáb", revenue: 2440 },
            { label: "Dom", revenue: 1390 }
        ],
        channels: [
            { name: "Instagram", visitors: 1700, sales: 38, revenue: 5200 },
            { name: "Google", visitors: 1220, sales: 26, revenue: 3600 },
            { name: "Indicação", visitors: 490, sales: 18, revenue: 2450 },
            { name: "Email", visitors: 800, sales: 9, revenue: 1400 }
        ]
    },
    today: {
        revenue: 1860,
        sales: 14,
        visitors: 620,
        change: {
            revenue: 4,
            sales: 3,
            visitors: 8
        },
        daily: [
            { label: "08h", revenue: 120 },
            { label: "10h", revenue: 240 },
            { label: "12h", revenue: 310 },
            { label: "14h", revenue: 180 },
            { label: "16h", revenue: 390 },
            { label: "18h", revenue: 410 },
            { label: "20h", revenue: 210 }
        ],
        channels: [
            { name: "Instagram", visitors: 260, sales: 7, revenue: 840 },
            { name: "Google", visitors: 190, sales: 4, revenue: 530 },
            { name: "Indicação", visitors: 70, sales: 2, revenue: 320 },
            { name: "Email", visitors: 100, sales: 1, revenue: 170 }
        ]
    }
};

function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0
    }).format(value);
}

function formatNumber(value) {
    return new Intl.NumberFormat("pt-BR").format(value);
}

function calculateConversion(sales, visitors) {
    return ((sales / visitors) * 100).toFixed(1);
}

function renderKpis(data) {
    revenueValue.textContent = formatCurrency(data.revenue);
    salesValue.textContent = formatNumber(data.sales);
    visitorsValue.textContent = formatNumber(data.visitors);
    conversionValue.textContent = `${calculateConversion(data.sales, data.visitors)}%`;
    revenueChange.textContent = `+${data.change.revenue}%`;
    salesChange.textContent = `+${data.change.sales}%`;
    visitorsChange.textContent = `+${data.change.visitors}%`;
}

function renderChart(data) {
    const highestRevenue = Math.max(...data.daily.map(function (day) {
        return day.revenue;
    }));

    const bestDay = data.daily.find(function (day) {
        return day.revenue === highestRevenue;
    });

    bestDayText.textContent = `Melhor: ${bestDay.label}`;
    barChart.innerHTML = "";

    data.daily.forEach(function (day) {
        const item = document.createElement("div");
        const height = Math.max(12, (day.revenue / highestRevenue) * 100);

        item.className = "bar-item";
        item.innerHTML = `
            <div class="bar" style="height: ${height}%"></div>
            <span class="bar-label">${day.label}</span>
        `;
        barChart.appendChild(item);
    });
}

function renderSummary(data) {
    const averageTicket = data.revenue / data.sales;
    const goalPercent = Math.min(100, Math.round((data.revenue / 50000) * 100));

    ticketValue.textContent = formatCurrency(averageTicket);
    goalValue.textContent = `${goalPercent}%`;

    if (goalPercent >= 90) {
        summaryTitle.textContent = "Meta quase batida";
        summaryText.textContent = "O período selecionado está muito próximo da meta fake de receita.";
    } else if (goalPercent >= 50) {
        summaryTitle.textContent = "Crescimento estável";
        summaryText.textContent = "As métricas fake mostram evolução saudável e bom volume de vendas.";
    } else {
        summaryTitle.textContent = "Período em construção";
        summaryText.textContent = "Ainda existe espaço para aumentar visitantes, vendas e receita.";
    }
}

function renderChannels(data) {
    channelTable.innerHTML = "";

    data.channels.forEach(function (channel) {
        const conversion = calculateConversion(channel.sales, channel.visitors);
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${channel.name}</td>
            <td>${formatNumber(channel.visitors)}</td>
            <td>${formatNumber(channel.sales)}</td>
            <td>${formatCurrency(channel.revenue)}</td>
            <td><span class="conversion-pill">${conversion}%</span></td>
        `;
        channelTable.appendChild(row);
    });
}

function renderDashboard(period) {
    const data = dashboardData[period];

    renderKpis(data);
    renderChart(data);
    renderSummary(data);
    renderChannels(data);
}

periodButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        periodButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
        renderDashboard(button.dataset.period);
    });
});

renderDashboard("month");
