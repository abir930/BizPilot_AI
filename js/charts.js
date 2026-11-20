/**
 * BizPilot AI — Apple Cupertino Style Chart.js Integrations
 * Responsive, Retina-crisp, Dark & Light Mode Theme Aware
 */

const BizCharts = {
  instances: {},

  // Determine current theme colors
  getColors() {
    const isDark = !document.documentElement.classList.contains('light-theme');
    return {
      isDark,
      textPrimary: isDark ? '#F8FAFC' : '#0F172A',
      textSecondary: isDark ? '#94A3B8' : '#64748B',
      gridLines: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
      tooltipBg: isDark ? 'rgba(12, 19, 34, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      tooltipBorder: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      tooltipText: isDark ? '#F8FAFC' : '#0F172A',
      primary: '#3B82F6',
      cyan: '#22D3EE',
      success: '#22C55E',
      warning: '#F59E0B',
      danger: '#EF4444',
      purple: '#A855F7',
      primaryTransparent: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)',
      cyanTransparent: isDark ? 'rgba(34, 211, 238, 0.15)' : 'rgba(34, 211, 238, 0.1)'
    };
  },

  // Base options factory
  getBaseOptions() {
    const c = this.getColors();
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: c.textSecondary,
            font: { family: 'Plus Jakarta Sans', size: 12, weight: 500 },
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 16
          }
        },
        tooltip: {
          backgroundColor: c.tooltipBg,
          titleColor: c.tooltipText,
          bodyColor: c.tooltipText,
          borderColor: c.tooltipBorder,
          borderWidth: 1,
          padding: 12,
          cornerRadius: 10,
          displayColors: true,
          titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: 600 },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
          boxPadding: 6,
          backdropFilter: 'blur(10px)'
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: c.textSecondary, font: { family: 'Plus Jakarta Sans', size: 11 } }
        },
        y: {
          grid: { color: c.gridLines, borderDash: [4, 4] },
          ticks: { color: c.textSecondary, font: { family: 'Plus Jakarta Sans', size: 11 } },
          border: { display: false }
        }
      }
    };
  },

  // 1. Overview: Revenue vs Expenses Chart
  initOverviewRevenueChart(canvasId = 'overviewRevenueChart') {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (this.instances[canvasId]) this.instances[canvasId].destroy();

    const c = this.getColors();
    const months = BIZ_DATA.financialMonths.map(m => m.month);
    const revData = BIZ_DATA.financialMonths.map(m => m.revenue);
    const expData = BIZ_DATA.financialMonths.map(m => m.expenses);
    const profitData = BIZ_DATA.financialMonths.map(m => m.profit);

    const opts = this.getBaseOptions();
    opts.scales.y.ticks.callback = (val) => '$' + (val / 1000) + 'k';

    this.instances[canvasId] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Total Revenue ($)',
            data: revData,
            borderColor: c.primary,
            backgroundColor: c.primaryTransparent,
            fill: true,
            tension: 0.4,
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: c.primary
          },
          {
            label: 'Total Expenses ($)',
            data: expData,
            borderColor: c.danger,
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: c.danger
          },
          {
            label: 'Net Profit ($)',
            data: profitData,
            borderColor: c.success,
            backgroundColor: 'transparent',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBackgroundColor: c.success
          }
        ]
      },
      options: opts
    });
  },

  // 2. Overview: Category Donut Chart
  initOverviewCategoryChart(canvasId = 'overviewCategoryChart') {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (this.instances[canvasId]) this.instances[canvasId].destroy();

    const c = this.getColors();
    const labels = BIZ_DATA.categories.map(c => c.name);
    const data = BIZ_DATA.categories.map(c => c.value);
    const colors = [c.primary, c.cyan, c.success, c.warning];

    this.instances[canvasId] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderWidth: 2,
          borderColor: c.isDark ? '#111B2D' : '#FFFFFF',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: c.textSecondary,
              font: { family: 'Plus Jakarta Sans', size: 11 },
              usePointStyle: true,
              padding: 12
            }
          },
          tooltip: {
            backgroundColor: c.tooltipBg,
            titleColor: c.tooltipText,
            bodyColor: c.tooltipText,
            borderColor: c.tooltipBorder,
            borderWidth: 1,
            cornerRadius: 10,
            callbacks: {
              label: (item) => ` $${item.raw.toLocaleString()} (${BIZ_DATA.categories[item.dataIndex].share}%)`
            }
          }
        }
      }
    });
  },

  // 3. Sales Analytics: Channel Share
  initSalesChannelChart(canvasId = 'salesChannelChart') {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (this.instances[canvasId]) this.instances[canvasId].destroy();

    const c = this.getColors();
    const labels = BIZ_DATA.salesChannels.map(s => s.channel);
    const data = BIZ_DATA.salesChannels.map(s => s.revenue);

    this.instances[canvasId] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [c.primary, c.cyan, c.purple, c.warning],
          borderWidth: 2,
          borderColor: c.isDark ? '#111B2D' : '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '68%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: c.textSecondary, font: { size: 11 }, usePointStyle: true, padding: 10 }
          }
        }
      }
    });
  },

  // 4. Sales Analytics: Monthly Sales Bar
  initSalesTrendsChart(canvasId = 'salesTrendsChart') {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (this.instances[canvasId]) this.instances[canvasId].destroy();

    const c = this.getColors();
    const months = BIZ_DATA.financialMonths.map(m => m.month);
    const orders = BIZ_DATA.financialMonths.map(m => m.orders);
    const revenue = BIZ_DATA.financialMonths.map(m => m.revenue);

    const opts = this.getBaseOptions();
    opts.scales.y.ticks.callback = (val) => '$' + (val / 1000) + 'k';

    this.instances[canvasId] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Monthly Sales ($)',
            data: revenue,
            backgroundColor: c.primary,
            borderRadius: 8,
            borderSkipped: false
          }
        ]
      },
      options: opts
    });
  },

  // 5. Financial Intelligence: P&L Breakdown
  initFinancialPLChart(canvasId = 'financialPLChart') {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (this.instances[canvasId]) this.instances[canvasId].destroy();

    const c = this.getColors();
    const months = BIZ_DATA.financialMonths.slice(-6).map(m => m.month);
    const rev = BIZ_DATA.financialMonths.slice(-6).map(m => m.revenue);
    const exp = BIZ_DATA.financialMonths.slice(-6).map(m => m.expenses);
    const profit = BIZ_DATA.financialMonths.slice(-6).map(m => m.profit);

    const opts = this.getBaseOptions();
    opts.scales.y.ticks.callback = (val) => '$' + (val / 1000) + 'k';

    this.instances[canvasId] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Revenue',
            data: rev,
            backgroundColor: c.primary,
            borderRadius: 6
          },
          {
            label: 'Expenses',
            data: exp,
            backgroundColor: c.danger,
            borderRadius: 6
          },
          {
            label: 'Net Margin',
            data: profit,
            backgroundColor: c.success,
            borderRadius: 6
          }
        ]
      },
      options: opts
    });
  },

  // 6. Financial Intelligence: Expense Breakdown Donut
  initFinancialExpenseChart(canvasId = 'financialExpenseChart') {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (this.instances[canvasId]) this.instances[canvasId].destroy();

    const c = this.getColors();
    const labels = ['Cost of Goods (COGS)', 'Payroll & Contractors', 'Marketing & Ads', 'Shipping & Logistics', 'SaaS, Software & Office'];
    const data = [53435, 16580, 11055, 7370, 3690];

    this.instances[canvasId] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [c.danger, c.primary, c.cyan, c.warning, c.purple],
          borderWidth: 2,
          borderColor: c.isDark ? '#111B2D' : '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: c.textSecondary, font: { size: 11 }, usePointStyle: true, padding: 8 }
          }
        }
      }
    });
  },

  // 7. Forecasting Dashboard: Interactive 7d, 30d, 90d
  initForecastingChart(canvasId = 'forecastingChart', timeframe = '30d') {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    if (this.instances[canvasId]) this.instances[canvasId].destroy();

    const c = this.getColors();
    let dataset = BIZ_DATA.forecasting.days30;
    if (timeframe === '7d') dataset = BIZ_DATA.forecasting.days7;
    if (timeframe === '90d') dataset = BIZ_DATA.forecasting.days90;

    const labels = dataset.map(d => d.date);
    const actuals = dataset.map(d => d.actual);
    const predicted = dataset.map(d => d.predicted);
    const lower = dataset.map(d => d.lower);
    const upper = dataset.map(d => d.upper);

    const opts = this.getBaseOptions();
    opts.scales.y.ticks.callback = (val) => '$' + (val / 1000) + 'k';

    this.instances[canvasId] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Actual Historical Revenue',
            data: actuals,
            borderColor: c.primary,
            backgroundColor: c.primary,
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 7
          },
          {
            label: 'Simulated AI Prediction (Prophet-SARIMAX)',
            data: predicted,
            borderColor: c.cyan,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            borderDash: [6, 4],
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: c.cyan
          },
          {
            label: 'Upper Confidence (95%)',
            data: upper,
            borderColor: 'rgba(34, 211, 238, 0.25)',
            borderDash: [2, 2],
            borderWidth: 1,
            pointRadius: 0,
            fill: '+1',
            backgroundColor: 'rgba(34, 211, 238, 0.08)'
          },
          {
            label: 'Lower Confidence (95%)',
            data: lower,
            borderColor: 'rgba(34, 211, 238, 0.25)',
            borderDash: [2, 2],
            borderWidth: 1,
            pointRadius: 0,
            fill: false
          }
        ]
      },
      options: opts
    });
  },

  // Re-render all active charts (e.g. after theme toggle or tab change)
  refreshAll() {
    this.initOverviewRevenueChart();
    this.initOverviewCategoryChart();
    this.initSalesChannelChart();
    this.initSalesTrendsChart();
    this.initFinancialPLChart();
    this.initFinancialExpenseChart();
    this.initForecastingChart('forecastingChart', window.currentForecastTimeframe || '30d');
  }
};

window.BizCharts = BizCharts;

