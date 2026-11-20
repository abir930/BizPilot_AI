/**
 * BizPilot AI — Core Application Logic, Router, CRUD & Interactions
 * Apple Cupertino UI Interactions, Modal Managers, Toast System
 */

class AppRouter {
  constructor() {
    this.pages = [
      'overview', 'copilot', 'sales', 'financial',
      'inventory', 'forecasting', 'anomalies', 'reports',
      'agents', 'data-sources', 'automation', 'settings'
    ];
    this.currentPage = 'overview';
    this.init();
  }

  init() {
    // Hash change listener
    window.addEventListener('hashchange', () => this.handleHashChange());
    
    // Initial page load
    const hash = window.location.hash.replace('#', '');
    if (this.pages.includes(hash)) {
      this.navigate(hash, false);
    } else {
      this.navigate('overview', false);
    }
  }

  handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (this.pages.includes(hash) && hash !== this.currentPage) {
      this.navigate(hash, false);
    }
  }

  navigate(pageId, updateHash = true) {
    if (!this.pages.includes(pageId)) return;
    this.currentPage = pageId;

    if (updateHash) {
      window.location.hash = pageId;
    }

    // Hide all pages, show target
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
      targetPage.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update navigation sidebar active state
    document.querySelectorAll('.nav-link').forEach(link => {
      const target = link.getAttribute('data-page');
      if (target === pageId) {
        link.classList.add('active-nav');
        link.classList.remove('text-slate-400', 'hover:bg-white/5');
        link.classList.add('bg-blue-600/15', 'text-blue-400', 'font-semibold');
      } else {
        link.classList.remove('active-nav', 'bg-blue-600/15', 'text-blue-400', 'font-semibold');
        link.classList.add('text-slate-400', 'hover:bg-white/5');
      }
    });

    // Update breadcrumb / header title
    const headerTitle = document.getElementById('headerPageTitle');
    if (headerTitle) {
      const titles = {
        overview: "Overview Dashboard",
        copilot: "AI Business Copilot",
        sales: "Sales Analytics",
        financial: "Financial Intelligence",
        inventory: "Inventory Management",
        forecasting: "Predictive Forecasting",
        anomalies: "Anomaly Detection",
        reports: "Reports & Documents",
        agents: "Autonomous AI Agents",
        'data-sources': "Data Sources & Ingestion",
        automation: "Automated Workflows",
        settings: "Settings & AI Configuration"
      };
      headerTitle.textContent = titles[pageId] || "Overview";
    }

    // Trigger page-specific initializations
    this.onPageEntered(pageId);
  }

  onPageEntered(pageId) {
    // Reinitialize icons
    if (window.lucide) lucide.createIcons();

    if (pageId === 'overview') {
      window.BizCharts.initOverviewRevenueChart();
      window.BizCharts.initOverviewCategoryChart();
    } else if (pageId === 'sales') {
      window.BizCharts.initSalesTrendsChart();
      window.BizCharts.initSalesChannelChart();
      window.renderSalesTable();
    } else if (pageId === 'financial') {
      window.BizCharts.initFinancialPLChart();
      window.BizCharts.initFinancialExpenseChart();
    } else if (pageId === 'inventory') {
      window.renderInventoryTable();
    } else if (pageId === 'forecasting') {
      window.BizCharts.initForecastingChart('forecastingChart', window.currentForecastTimeframe || '30d');
    } else if (pageId === 'anomalies') {
      window.renderAnomaliesTable();
    } else if (pageId === 'copilot') {
      if (!window.bizCopilot.chatContainer) window.bizCopilot.init();
    } else if (pageId === 'automation') {
      window.renderAutomationCards();
    } else if (pageId === 'data-sources') {
      window.renderDataSourcesList();
    }
  }
}

// Global Toast System (Apple Cupertino Pill Toast)
window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const icons = {
    info: 'info',
    success: 'check-circle-2',
    warning: 'alert-triangle',
    danger: 'alert-octagon'
  };
  const colors = {
    info: 'border-blue-500/30 text-blue-400',
    success: 'border-emerald-500/30 text-emerald-400',
    warning: 'border-amber-500/30 text-amber-400',
    danger: 'border-rose-500/30 text-rose-400'
  };

  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-2xl glass-card border shadow-xl text-xs font-medium text-slate-200 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto ${colors[type] || colors.info}`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'bell'}" class="w-4 h-4 shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

// -------------------------------------------------------------------------
// INVENTORY CRUD & TABLE MANAGER
// -------------------------------------------------------------------------
window.inventoryState = {
  search: '',
  categoryFilter: 'all',
  statusFilter: 'all',
  sortBy: 'name',
  sortOrder: 'asc',
  page: 1,
  pageSize: 8
};

window.renderInventoryTable = function() {
  const tableBody = document.getElementById('inventoryTableBody');
  if (!tableBody) return;

  let items = window.store.getInventory();

  // Search filter
  if (window.inventoryState.search) {
    const q = window.inventoryState.search.toLowerCase();
    items = items.filter(i => i.name.toLowerCase().includes(q) || i.id.toLowerCase().includes(q) || i.category.toLowerCase().includes(q));
  }

  // Category filter
  if (window.inventoryState.categoryFilter !== 'all') {
    items = items.filter(i => i.category === window.inventoryState.categoryFilter);
  }

  // Status filter
  if (window.inventoryState.statusFilter !== 'all') {
    items = items.filter(i => i.status === window.inventoryState.statusFilter);
  }

  // Sorting
  items.sort((a, b) => {
    let fieldA = a[window.inventoryState.sortBy];
    let fieldB = b[window.inventoryState.sortBy];
    if (typeof fieldA === 'string') fieldA = fieldA.toLowerCase();
    if (typeof fieldB === 'string') fieldB = fieldB.toLowerCase();
    if (fieldA < fieldB) return window.inventoryState.sortOrder === 'asc' ? -1 : 1;
    if (fieldA > fieldB) return window.inventoryState.sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Calculate KPIs
  const totalVal = items.reduce((acc, curr) => acc + (curr.stock * curr.unitPrice), 0);
  const lowCount = items.filter(i => i.status === 'low-stock').length;
  const outCount = items.filter(i => i.status === 'out-of-stock').length;

  const totalEl = document.getElementById('invTotalProducts');
  if (totalEl) totalEl.innerText = items.length;
  const valEl = document.getElementById('invStockValue');
  if (valEl) valEl.innerText = '$' + totalVal.toLocaleString(undefined, { minimumFractionDigits: 2 });
  const lowEl = document.getElementById('invLowStockCount');
  if (lowEl) lowEl.innerText = lowCount;
  const outEl = document.getElementById('invOutStockCount');
  if (outEl) outEl.innerText = outCount;

  // Pagination
  const totalPages = Math.ceil(items.length / window.inventoryState.pageSize) || 1;
  if (window.inventoryState.page > totalPages) window.inventoryState.page = totalPages;
  const startIdx = (window.inventoryState.page - 1) * window.inventoryState.pageSize;
  const pagedItems = items.slice(startIdx, startIdx + window.inventoryState.pageSize);

  const pageInfo = document.getElementById('invPaginationInfo');
  if (pageInfo) pageInfo.innerText = `Showing ${startIdx + 1} to ${Math.min(startIdx + window.inventoryState.pageSize, items.length)} of ${items.length} products`;

  tableBody.innerHTML = '';

  if (pagedItems.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="8" class="text-center py-8 text-slate-500">No products match your criteria.</td></tr>`;
    return;
  }

  pagedItems.forEach(item => {
    const statusBadges = {
      'in-stock': '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">In Stock</span>',
      'low-stock': '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Low Stock</span>',
      'out-of-stock': '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">Out of Stock</span>'
    };

    const tr = document.createElement('tr');
    tr.className = 'border-b border-white/5 hover:bg-white/[0.02] transition text-xs';
    tr.innerHTML = `
      <td class="py-3.5 px-4 font-mono font-medium text-slate-400">${item.id}</td>
      <td class="py-3.5 px-4 font-semibold text-slate-200">${item.name}</td>
      <td class="py-3.5 px-4 text-slate-400">${item.category}</td>
      <td class="py-3.5 px-4 font-semibold ${item.stock <= item.minStock ? 'text-amber-400' : 'text-slate-200'}">${item.stock} units</td>
      <td class="py-3.5 px-4 text-slate-400">${item.minStock} units</td>
      <td class="py-3.5 px-4 font-mono text-slate-300">$${item.unitPrice.toFixed(2)}</td>
      <td class="py-3.5 px-4">${statusBadges[item.status] || item.status}</td>
      <td class="py-3.5 px-4 text-right">
        <div class="flex items-center justify-end gap-1.5">
          <button onclick="window.openEditProductModal('${item.id}')" title="Edit Product" class="p-1.5 rounded-lg hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition">
            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
          </button>
          <button onclick="window.deleteProductHandler('${item.id}')" title="Delete Product" class="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  if (window.lucide) lucide.createIcons();
};

window.openAddProductModal = function() {
  document.getElementById('productModalTitle').innerText = 'Add New Inventory SKU';
  document.getElementById('prodModalId').value = 'PRD-' + Math.floor(100 + Math.random() * 900);
  document.getElementById('prodModalName').value = '';
  document.getElementById('prodModalCategory').value = 'Smart Audio';
  document.getElementById('prodModalStock').value = 50;
  document.getElementById('prodModalMinStock').value = 25;
  document.getElementById('prodModalPrice').value = 49.99;
  document.getElementById('prodModalSupplier').value = 'AcousticTech Shenzen';
  document.getElementById('productModal').classList.remove('hidden');
};

window.openEditProductModal = function(id) {
  const items = window.store.getInventory();
  const prod = items.find(p => p.id === id);
  if (!prod) return;

  document.getElementById('productModalTitle').innerText = 'Edit Inventory Item';
  document.getElementById('prodModalId').value = prod.id;
  document.getElementById('prodModalName').value = prod.name;
  document.getElementById('prodModalCategory').value = prod.category;
  document.getElementById('prodModalStock').value = prod.stock;
  document.getElementById('prodModalMinStock').value = prod.minStock;
  document.getElementById('prodModalPrice').value = prod.unitPrice;
  document.getElementById('prodModalSupplier').value = prod.supplier || 'AcousticTech Shenzen';
  document.getElementById('productModal').classList.remove('hidden');
};

window.closeProductModal = function() {
  document.getElementById('productModal').classList.add('hidden');
};

window.saveProductHandler = function(e) {
  if (e) e.preventDefault();
  const id = document.getElementById('prodModalId').value;
  const name = document.getElementById('prodModalName').value.trim();
  const category = document.getElementById('prodModalCategory').value;
  const stock = parseInt(document.getElementById('prodModalStock').value) || 0;
  const minStock = parseInt(document.getElementById('prodModalMinStock').value) || 0;
  const unitPrice = parseFloat(document.getElementById('prodModalPrice').value) || 0;
  const supplier = document.getElementById('prodModalSupplier').value;

  if (!name) {
    window.showToast("Product name is required", "warning");
    return;
  }

  let status = 'in-stock';
  if (stock === 0) status = 'out-of-stock';
  else if (stock <= minStock) status = 'low-stock';

  const productData = { id, name, category, stock, minStock, unitPrice, status, supplier };

  const existing = window.store.getInventory().find(p => p.id === id);
  if (existing) {
    window.store.updateProduct(productData);
    window.showToast(`Updated product "${name}"`, "success");
  } else {
    window.store.addProduct(productData);
    window.showToast(`Added product "${name}"`, "success");
  }

  window.closeProductModal();
  window.renderInventoryTable();
};

window.deleteProductHandler = function(id) {
  if (confirm(`Are you sure you want to delete product SKU ${id}?`)) {
    window.store.deleteProduct(id);
    window.showToast(`Product ${id} removed`, "info");
    window.renderInventoryTable();
  }
};

// -------------------------------------------------------------------------
// SALES TABLE MANAGER
// -------------------------------------------------------------------------
window.salesState = {
  search: '',
  statusFilter: 'all',
  channelFilter: 'all',
  page: 1,
  pageSize: 8
};

window.renderSalesTable = function() {
  const tableBody = document.getElementById('salesTableBody');
  if (!tableBody) return;

  let items = BIZ_DATA.transactions;

  if (window.salesState.search) {
    const q = window.salesState.search.toLowerCase();
    items = items.filter(t => t.customer.toLowerCase().includes(q) || t.id.toLowerCase().includes(q) || t.product.toLowerCase().includes(q));
  }

  if (window.salesState.statusFilter !== 'all') {
    items = items.filter(t => t.status === window.salesState.statusFilter);
  }

  if (window.salesState.channelFilter !== 'all') {
    items = items.filter(t => t.channel.includes(window.salesState.channelFilter));
  }

  const startIdx = (window.salesState.page - 1) * window.salesState.pageSize;
  const paged = items.slice(startIdx, startIdx + window.salesState.pageSize);

  tableBody.innerHTML = '';
  paged.forEach(tx => {
    const statusBadges = {
      completed: '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Completed</span>',
      pending: '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Pending</span>',
      cancelled: '<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">Cancelled</span>'
    };

    const tr = document.createElement('tr');
    tr.className = 'border-b border-white/5 hover:bg-white/[0.02] transition text-xs';
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-medium text-slate-400">${tx.id}</td>
      <td class="py-3 px-4 text-slate-400">${tx.date}</td>
      <td class="py-3 px-4 font-semibold text-slate-200">${tx.customer}</td>
      <td class="py-3 px-4 text-slate-300">${tx.product}</td>
      <td class="py-3 px-4 text-slate-400">${tx.channel}</td>
      <td class="py-3 px-4 font-mono font-semibold text-slate-100">$${tx.amount.toFixed(2)}</td>
      <td class="py-3 px-4">${statusBadges[tx.status] || tx.status}</td>
    `;
    tableBody.appendChild(tr);
  });
};

// Export Sales CSV
window.exportSalesCSV = function() {
  const rows = [
    ["Transaction ID", "Date", "Customer", "Product", "Channel", "Amount", "Status", "Payment"]
  ];
  BIZ_DATA.transactions.forEach(t => {
    rows.push([t.id, t.date, t.customer, t.product, t.channel, t.amount, t.status, t.payment]);
  });
  let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `BizPilot_Sales_Export_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.showToast("Sales CSV export downloaded", "success");
};

// -------------------------------------------------------------------------
// ANOMALIES & INVESTIGATION DRAWER
// -------------------------------------------------------------------------
window.activeInvestigation = null;

window.renderAnomaliesTable = function() {
  const tableBody = document.getElementById('anomaliesTableBody');
  if (!tableBody) return;

  const anomalies = window.store.getAnomalies();
  tableBody.innerHTML = '';

  anomalies.forEach(anm => {
    const severityBadges = {
      critical: '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">CRITICAL</span>',
      high: '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">HIGH</span>',
      medium: '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">MEDIUM</span>',
      low: '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-500/20 text-slate-300 border border-slate-500/30">LOW</span>'
    };

    const statusPills = {
      new: '<span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-rose-500/10 text-rose-400">Action Required</span>',
      reviewed: '<span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400">Under Review</span>',
      resolved: '<span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400">Resolved</span>'
    };

    const tr = document.createElement('tr');
    tr.className = 'border-b border-white/5 hover:bg-white/[0.02] transition text-xs';
    tr.innerHTML = `
      <td class="py-3.5 px-4 font-mono text-slate-400">${anm.id}</td>
      <td class="py-3.5 px-4 font-semibold text-slate-200">
        <div>${anm.title}</div>
        <div class="text-[11px] text-slate-500 font-normal">${anm.category} · ${anm.source}</div>
      </td>
      <td class="py-3.5 px-4 font-mono font-bold text-rose-400">${anm.amount}</td>
      <td class="py-3.5 px-4 font-semibold text-amber-400">${anm.deviation}</td>
      <td class="py-3.5 px-4">${severityBadges[anm.severity] || anm.severity}</td>
      <td class="py-3.5 px-4">${statusPills[anm.status] || anm.status}</td>
      <td class="py-3.5 px-4 text-right">
        <button onclick="window.openInvestigationDrawer('${anm.id}')" class="px-3 py-1 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white transition font-medium text-xs flex items-center gap-1.5 ml-auto">
          <i data-lucide="search" class="w-3.5 h-3.5"></i> Investigate
        </button>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  if (window.lucide) lucide.createIcons();
};

window.openInvestigationDrawer = function(id) {
  const anomalies = window.store.getAnomalies();
  const anm = anomalies.find(a => a.id === id);
  if (!anm) return;
  window.activeInvestigation = anm;

  document.getElementById('invDrawerId').innerText = anm.id;
  document.getElementById('invDrawerTitle').innerText = anm.title;
  document.getElementById('invDrawerCategory').innerText = anm.category;
  document.getElementById('invDrawerSource').innerText = anm.source;
  document.getElementById('invDrawerDetected').innerText = anm.detectedAt;
  document.getElementById('invDrawerAmount').innerText = anm.amount;
  document.getElementById('invDrawerExpected').innerText = anm.expected;
  document.getElementById('invDrawerDeviation').innerText = anm.deviation;
  document.getElementById('invDrawerDescription').innerText = anm.description;
  document.getElementById('invDrawerAction').innerText = anm.suggestedAction;
  document.getElementById('invDrawerImpact').innerText = anm.impact;

  const drawer = document.getElementById('anomalyDrawer');
  drawer.classList.remove('hidden');
};

window.closeInvestigationDrawer = function() {
  document.getElementById('anomalyDrawer').classList.add('hidden');
};

window.markAnomalyReviewed = function() {
  if (!window.activeInvestigation) return;
  window.store.updateAnomalyStatus(window.activeInvestigation.id, 'reviewed');
  window.showToast(`Marked alert ${window.activeInvestigation.id} as Reviewed`, "info");
  window.closeInvestigationDrawer();
  window.renderAnomaliesTable();
};

window.resolveAnomalyAlert = function() {
  if (!window.activeInvestigation) return;
  window.store.updateAnomalyStatus(window.activeInvestigation.id, 'resolved');
  window.showToast(`Resolved alert ${window.activeInvestigation.id}`, "success");
  window.closeInvestigationDrawer();
  window.renderAnomaliesTable();
};

// -------------------------------------------------------------------------
// AUTOMATION WORKFLOWS MANAGER
// -------------------------------------------------------------------------
window.renderAutomationCards = function() {
  const container = document.getElementById('automationCardsContainer');
  if (!container) return;

  const workflows = window.store.getAutomations();
  container.innerHTML = '';

  workflows.forEach(wf => {
    const card = document.createElement('div');
    card.className = 'glass-card p-5 space-y-4';
    card.innerHTML = `
      <div class="flex items-start justify-between">
        <div>
          <h4 class="font-bold text-slate-200 text-sm flex items-center gap-2">
            ${wf.name}
          </h4>
          <p class="text-xs text-slate-400 mt-1 font-mono">${wf.trigger}</p>
        </div>
        <label class="ios-switch shrink-0">
          <input type="checkbox" ${wf.status ? 'checked' : ''} onchange="window.toggleAutomationHandler('${wf.id}')">
          <span class="ios-slider"></span>
        </label>
      </div>

      <p class="text-xs text-slate-300 leading-relaxed">${wf.actions}</p>

      <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
        <div class="text-slate-400">
          <span class="text-slate-500 font-mono">Last Run:</span> ${wf.lastRun}
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.runAutomationNow('${wf.id}')" class="px-3 py-1.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-semibold transition flex items-center gap-1.5">
            <i data-lucide="play" class="w-3.5 h-3.5"></i> Run Now
          </button>
          <button onclick="window.openEditScheduleModal('${wf.id}')" class="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-slate-200 transition">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
};

window.toggleAutomationHandler = function(id) {
  window.store.toggleAutomation(id);
  window.showToast("Automation state updated", "info");
};

window.runAutomationNow = function(id) {
  window.showToast("Executing workflow in simulated runtime...", "info");
  setTimeout(() => {
    window.showToast("Workflow completed successfully! Execution recorded.", "success");
  }, 1200);
};

window.openEditScheduleModal = function(id) {
  window.showToast("Schedule editor opened (Simulated)", "info");
};

// -------------------------------------------------------------------------
// DATA SOURCES SIMULATED INGESTION
// -------------------------------------------------------------------------
window.renderDataSourcesList = function() {
  const container = document.getElementById('dataSourcesList');
  if (!container) return;

  const items = window.store.getDataSources();
  container.innerHTML = '';

  items.forEach(ds => {
    const fileIcons = {
      CSV: 'file-spreadsheet',
      XLSX: 'file-spreadsheet',
      JSON: 'file-code',
      PDF: 'file-text'
    };

    const div = document.createElement('div');
    div.className = 'glass-card p-4 flex items-center justify-between text-xs';
    div.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
          <i data-lucide="${fileIcons[ds.type] || 'file'}" class="w-5 h-5"></i>
        </div>
        <div>
          <div class="font-semibold text-slate-200">${ds.name}</div>
          <div class="text-[11px] text-slate-400 mt-0.5">${ds.size} · ${ds.records} · Ingested ${ds.date}</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          ${ds.status}
        </span>
        <button onclick="window.removeDataSourceHandler('${ds.id}')" title="Remove" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
    container.appendChild(div);
  });

  if (window.lucide) lucide.createIcons();
};

window.removeDataSourceHandler = function(id) {
  window.store.removeDataSource(id);
  window.showToast("Data source removed from local state", "info");
  window.renderDataSourcesList();
};

// File Upload Simulator
window.handleSimulatedFileUpload = function(files) {
  if (!files || !files.length) return;
  const file = files[0];

  const progressWrap = document.getElementById('uploadProgressWrap');
  const progressBar = document.getElementById('uploadProgressBar');
  const statusText = document.getElementById('uploadStatusText');

  if (progressWrap) progressWrap.classList.remove('hidden');

  let pct = 0;
  const interval = setInterval(() => {
    pct += 25;
    if (progressBar) progressBar.style.width = pct + '%';
    if (statusText) statusText.innerText = `Simulating parsing and vectorizing: ${pct}%...`;

    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (progressWrap) progressWrap.classList.add('hidden');
        const ext = file.name.split('.').pop().toUpperCase();
        window.store.addDataSource({
          id: 'ds-' + Date.now(),
          name: file.name,
          type: ext || 'CSV',
          size: (file.size / 1024 / 1024).toFixed(1) + ' MB',
          date: 'Just now',
          records: '1,420 Extracted Records',
          status: 'Validated · Active',
          health: 'healthy'
        });
        window.showToast(`Ingested and vectorized ${file.name} (Simulated)`, "success");
        window.renderDataSourcesList();
      }, 500);
    }
  }, 250);
};

// -------------------------------------------------------------------------
// REPORTS & PREVIEW MODAL
// -------------------------------------------------------------------------
window.previewReport = function(repId) {
  const rep = BIZ_DATA.reports.find(r => r.id === repId);
  if (!rep) return;

  document.getElementById('reportModalTitle').innerText = rep.title;
  document.getElementById('reportModalDesc').innerText = rep.desc;
  document.getElementById('reportModalFreq').innerText = rep.frequency;
  document.getElementById('reportModalGen').innerText = rep.lastGenerated;
  document.getElementById('reportModalSize').innerText = rep.size;

  const modal = document.getElementById('reportModal');
  modal.classList.remove('hidden');
};

window.closeReportModal = function() {
  document.getElementById('reportModal').classList.add('hidden');
};

window.downloadReportFile = function(format) {
  window.showToast(`Generated & downloaded ${format.toUpperCase()} report sample`, "success");
  window.closeReportModal();
};

// -------------------------------------------------------------------------
// GLOBAL SEARCH MODAL (CMD + K)
// -------------------------------------------------------------------------
window.openSearchModal = function() {
  document.getElementById('searchModal').classList.remove('hidden');
  document.getElementById('globalSearchInput').focus();
};

window.closeSearchModal = function() {
  document.getElementById('searchModal').classList.add('hidden');
};

window.handleGlobalSearch = function(query) {
  const resultsContainer = document.getElementById('searchResultsContainer');
  if (!resultsContainer) return;
  const q = query.toLowerCase().trim();

  const searchable = [
    { title: "Overview Dashboard", category: "Navigation", page: "overview", icon: "layout-dashboard" },
    { title: "AI Business Copilot", category: "AI Assistant", page: "copilot", icon: "bot" },
    { title: "Sales Analytics & Channel Mix", category: "Analytics", page: "sales", icon: "bar-chart-2" },
    { title: "Financial Intelligence (P&L)", category: "Finance", page: "financial", icon: "dollar-sign" },
    { title: "Inventory Management & Stock", category: "Operations", page: "inventory", icon: "package" },
    { title: "Predictive Forecasting (30-day)", category: "AI Predictions", page: "forecasting", icon: "trending-up" },
    { title: "Anomaly Detection & Fraud Alerts", category: "Security", page: "anomalies", icon: "shield-alert" },
    { title: "Reports & Executive Documents", category: "Reports", page: "reports", icon: "file-text" },
    { title: "Autonomous AI Agents Roster", category: "AI Infrastructure", page: "agents", icon: "cpu" },
    { title: "Data Sources & Ingestion", category: "Data", page: "data-sources", icon: "database" },
    { title: "Automated Workflows (Cron)", category: "Automation", page: "automation", icon: "zap" },
    { title: "Settings & AI Models", category: "Settings", page: "settings", icon: "sliders" },
    { title: "PulseFlow Noise-Canceling Buds", category: "Inventory SKU", page: "inventory", icon: "package" },
    { title: "OmniHub Smart Screen Pro", category: "Inventory SKU", page: "inventory", icon: "package" },
    { title: "Air Freight Surcharge Discrepancy", category: "Anomaly", page: "anomalies", icon: "alert-triangle" }
  ];

  const filtered = q ? searchable.filter(s => s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)) : searchable.slice(0, 6);

  resultsContainer.innerHTML = '';
  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'p-3 rounded-xl hover:bg-blue-600/10 cursor-pointer flex items-center justify-between text-xs transition border border-transparent hover:border-blue-500/20';
    div.onclick = () => {
      window.appRouter.navigate(item.page);
      window.closeSearchModal();
    };
    div.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
          <i data-lucide="${item.icon}" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="font-semibold text-slate-200">${item.title}</div>
          <div class="text-[10px] text-slate-500">${item.category}</div>
        </div>
      </div>
      <span class="text-slate-500 text-[10px]">Jump →</span>
    `;
    resultsContainer.appendChild(div);
  });

  if (window.lucide) lucide.createIcons();
};

// -------------------------------------------------------------------------
// THEME SWITCHER (Dark & Light Mode)
// -------------------------------------------------------------------------
window.toggleTheme = function() {
  const root = document.documentElement;
  const isCurrentlyLight = root.classList.contains('light-theme');
  if (isCurrentlyLight) {
    root.classList.remove('light-theme');
    localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    window.showToast("Switched to Cupertino Dark Mode", "info");
  } else {
    root.classList.add('light-theme');
    localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    window.showToast("Switched to Cupertino Light Mode", "info");
  }
  // Refresh chart palettes
  window.BizCharts.refreshAll();
};

// -------------------------------------------------------------------------
// AUTHENTICATION & LOGIN SCREEN MANAGER
// -------------------------------------------------------------------------
const AUTH_KEY = 'bizpilot_authenticated_session';

window.checkAuth = function() {
  const isAuth = localStorage.getItem(AUTH_KEY) === 'true';
  const loginScreen = document.getElementById('loginScreen');
  const appContainer = document.getElementById('mainAppContainer');

  if (isAuth) {
    if (loginScreen) loginScreen.classList.add('hidden');
    if (appContainer) appContainer.classList.remove('hidden');
    if (window.appRouter) {
      window.appRouter.onPageEntered(window.appRouter.currentPage);
    }
  } else {
    if (loginScreen) loginScreen.classList.remove('hidden');
    if (appContainer) appContainer.classList.add('hidden');
  }
  if (window.lucide) lucide.createIcons();
};

window.handleLogin = function(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('loginSubmitBtn');
  if (btn) {
    btn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Authenticating...';
    btn.disabled = true;
  }

  setTimeout(() => {
    localStorage.setItem(AUTH_KEY, 'true');
    window.showToast("Welcome back, Abir! Accessing Business Intelligence...", "success");
    window.checkAuth();
    if (btn) {
      btn.innerHTML = '<span>Sign In to Executive Dashboard</span><i data-lucide="arrow-right" class="w-4 h-4"></i>';
      btn.disabled = false;
      if (window.lucide) lucide.createIcons();
    }
  }, 600);
};

window.instantDemoLogin = function() {
  localStorage.setItem(AUTH_KEY, 'true');
  window.showToast("Signed in as Abir Rahman (CEO)", "success");
  window.checkAuth();
};

window.handleLogout = function() {
  localStorage.removeItem(AUTH_KEY);
  window.showToast("Signed out successfully", "info");
  window.checkAuth();
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Theme check
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
  }

  // Check login authentication state
  window.checkAuth();

  // Keyboard shortcut for Cmd+K / Ctrl+K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      window.openSearchModal();
    }
    if (e.key === 'Escape') {
      window.closeSearchModal();
      window.closeProductModal();
      window.closeInvestigationDrawer();
      window.closeReportModal();
    }
  });

  // Start Router
  window.appRouter = new AppRouter();

  // Create Lucide Icons
  if (window.lucide) lucide.createIcons();
});

