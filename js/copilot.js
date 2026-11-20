/**
 * BizPilot AI — Business Copilot Simulator
 * Multi-Agent Orchestration Visualizer with Streaming Display & Rich Inline Widgets
 * DEMO ENVIRONMENT · SIMULATED RESPONSES
 */

const COPILOT_MOCK_RESPONSES = {
  profit: {
    title: "Profit Margin Analysis — November 2026",
    agents: [
      { name: "Supervisor Agent", action: "Dispatched query to Financial Analyst & Anomaly Detection agents." },
      { name: "Financial Analyst Agent", action: "Audited Q3/Q4 GL accounts; calculated 3.7% gross margin compression." },
      { name: "Anomaly Detection Agent", action: "Identified unexpected peak air-freight surcharge ($2,270 overcharge)." }
    ],
    citations: [
      "QuickBooks General Ledger Account #5100 (Inbound Freight)",
      "Apex Logistics Pacific Master Agreement Section 4.2",
      "Shopify Gross Sales Ledger Nov 01–20"
    ],
    summary: `Your net profit contracted by **4.2%** (from $33,880 to **$32,450**) despite gross revenue increasing **+14.8%** to $124,580. 

### Key Drivers:
1. **Air Freight Surge (+197%)**: Peak seasonal congestion surcharges from Shenzhen increased freight costs by **$3,420** (Invoice #FRT-8812).
2. **Ad Spend CPA Increase**: Meta CAC rose from $18.40 to $23.10 due to pre-holiday bidding competition.
3. **Product Mix Shift**: Sales tilted toward *MagCharge Mats* (lower margin, 38%) versus *PulseFlow Buds* (higher margin, 46%).

### Recommended Actions:
- **Dispute Surcharge**: Carrier applied uncontracted surcharge without 14-day notice. Estimated recovery: **$2,270**.
- **Ocean Freight Transition**: Switch future restocking shipments for non-critical SKUs to standard ocean freight.`,
    widget: `
      <div class="mt-4 p-4 rounded-xl bg-black/20 border border-white/10 text-xs font-mono">
        <div class="text-slate-400 font-semibold mb-2">P&L VARIANCE COMPARISON</div>
        <div class="grid grid-cols-3 gap-2 py-1 border-b border-white/5 font-semibold text-slate-300">
          <div>Metric</div><div>Oct Actual</div><div>Nov Actual</div>
        </div>
        <div class="grid grid-cols-3 gap-2 py-1 text-slate-400">
          <div>Gross Revenue</div><div>$128,900</div><div class="text-blue-400">$124,580</div>
        </div>
        <div class="grid grid-cols-3 gap-2 py-1 text-slate-400">
          <div>COGS & Freight</div><div>$68,400</div><div class="text-rose-400">$73,820 (+7.9%)</div>
        </div>
        <div class="grid grid-cols-3 gap-2 py-1 text-slate-400">
          <div>Net Operating Profit</div><div>$33,500</div><div class="text-amber-400">$32,450 (-4.2%)</div>
        </div>
      </div>
    `
  },

  forecast: {
    title: "30-Day Sales & Revenue Forecast",
    agents: [
      { name: "Supervisor Agent", action: "Routed inquiry to Forecasting Agent & Business Advisor." },
      { name: "Forecasting Agent", action: "Executed Prophet-SARIMAX algorithm with 95% Bayesian confidence band." },
      { name: "Business Advisor Agent", action: "Benchmarked seasonality uplift with SME holiday commerce indices." }
    ],
    citations: [
      "Prophet-SARIMAX Seasonality Model v2.4",
      "14-Day Trailing Order Velocity (Shopify / Amazon)",
      "Historical Q4 SME Commerce Benchmark"
    ],
    summary: `Projected revenue for the next 30 days is **$148,200** (with a 95% confidence interval of **$141,000 to $155,400**). This reflects a **+19.2%** increase driven by Black Friday and Cyber Week sales velocity.

### Forecast Highlights:
- **Peak Day**: Expected on Day 18 (Cyber Monday) with projected daily volume of **$11,850**.
- **Growth Engine**: Smart Audio and Smart Home Hubs will account for **64%** of incremental volume.
- **Accuracy Confidence**: Backtesting MAE is **$1,240.50** (MAPE 3.24%), indicating high predictive reliability.`,
    widget: `
      <div class="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs">
        <div class="flex items-center justify-between mb-2">
          <span class="font-semibold text-blue-400">Projected 30-Day Revenue Trajectory</span>
          <span class="text-slate-400">95% Confidence Band</span>
        </div>
        <div class="h-2 bg-slate-800 rounded-full overflow-hidden flex">
          <div class="bg-blue-500" style="width: 78%"></div>
          <div class="bg-cyan-400" style="width: 22%"></div>
        </div>
        <div class="flex justify-between text-[11px] text-slate-400 mt-2">
          <span>Base Run-Rate: $124.5k</span>
          <span class="text-cyan-400 font-semibold">Projected Holiday Peak: $148.2k</span>
        </div>
      </div>
    `
  },

  restock: {
    title: "Inventory Stockout Risk & AI Restock Plan",
    agents: [
      { name: "Supervisor Agent", action: "Assigned lead-time evaluation to Forecasting Agent." },
      { name: "Forecasting Agent", action: "Calculated burn rates based on 7-day velocity and supplier lead-times." }
    ],
    citations: [
      "WMS Real-time Stock Register",
      "Supplier Master Lead-Time Matrix (Asia/Pacific)",
      "Holiday Buffer Reserve Rules"
    ],
    summary: `**4 SKUs** require immediate replenishment to prevent catastrophic stockouts prior to peak holiday demand:

1. **OmniHub Smart Screen Pro (PRD-102)**:
   - Current Stock: **18 units** | Daily Velocity: 14.2 units/day
   - Stockout in: **~1.3 days** (Lead-time: 21 days from Taiwan)
   - Action: **URGENT** — Initiate air-transfer of 75 backup units immediately.
2. **PulseFlow Silicone Replacement Tips (PRD-107)**:
   - Current Stock: **0 units** (Already Stocked Out!)
   - Deficit: -50 units | Reorder Recommendation: 250 units.
3. **Lumio Smart Ambient Light (PRD-106)**:
   - Current Stock: **6 units** | Stockout in: **4 days**.`,
    widget: `
      <div class="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs">
        <div class="font-semibold text-rose-400 mb-2">CRITICAL REORDER RECOMMENDATION</div>
        <table class="w-full text-left">
          <thead>
            <tr class="text-slate-400 border-b border-white/10 pb-1">
              <th>Product</th><th>Stock</th><th>Deficit</th><th>Action</th>
            </tr>
          </thead>
          <tbody class="text-slate-300">
            <tr><td class="py-1">OmniHub Pro</td><td class="text-rose-400 font-bold">18</td><td>-76</td><td><button onclick="window.appRouter.navigate('inventory')" class="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px]">Reorder</button></td></tr>
            <tr><td class="py-1">Lumio Ambient</td><td class="text-rose-400 font-bold">6</td><td>-42</td><td><button onclick="window.appRouter.navigate('inventory')" class="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px]">Reorder</button></td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  anomalies: {
    title: "Anomaly Audit & Risk Detection",
    agents: [
      { name: "Supervisor Agent", action: "Triggered Anomaly Detection Agent on live transaction and ledger feeds." },
      { name: "Anomaly Detection Agent", action: "Flagged 2 high-risk anomalies matching fraud and overbilling signatures." }
    ],
    citations: [
      "Shopify Risk Evaluation Engine API",
      "Stripe Automated Fraud Radar",
      "Internal Inventory Balance Log"
    ],
    summary: `The Anomaly Detection Agent identified **2 critical events** requiring immediate review:

1. **High-Velocity Fraud Pattern (#ANM-202)**:
   - Six rapid orders from Eastern European IP ($4,800 total) using mismatched names.
   - Severity: **CRITICAL**.
   - Recommendation: Void authorizations before fulfillment to prevent chargebacks.
2. **Supplier Freight Discrepancy (#ANM-201)**:
   - Surcharge of $2,270 added without prior contractual addendum.
   - Status: Needs Dispute Submission.`,
    widget: `
      <div class="mt-4 flex gap-2">
        <button onclick="window.appRouter.navigate('anomalies')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition">
          <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Open Investigation Drawer
        </button>
      </div>
    `
  },

  margin: {
    title: "Executive Margin Enhancement Playbook",
    agents: [
      { name: "Supervisor Agent", action: "Dispatched strategic analysis to Business Advisor and Financial Analyst." },
      { name: "Business Advisor Agent", action: "Benchmarked unit economics with peer hardware DTC brands." }
    ],
    citations: [
      "Hardware Tech SME Benchmark Index 2026",
      "Shopify Pricing Sensitivity Testing Model"
    ],
    summary: `Here is a 3-step strategy to boost your overall net margin from **26.0% to 31.5%** over the next 60 days:

1. **Price Optimization on AeroTrack Band**:
   - Current: $70.00 | Competitor Median: $89.00
   - Price elasticity modeling indicates a price increase to **$79.00** will result in less than 4% drop in conversion while capturing **+$2,790** in pure net margin monthly.
2. **Bundle High-Margin Accessories**:
   - Create the "Audiophile Pack" (PulseFlow Buds + Hardcase + Fast Charger) at $129. Increases AOV by **32%** and lifts basket margin by 4.8%.
3. **Automate Wholesale Invoice Terms**:
   - Enforce 2% 10 Net 30 discounts for wholesale partners to accelerate cash recovery and eliminate short-term working capital financing.`,
    widget: `
      <div class="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
        <div class="font-semibold mb-1">Projected Annual Profit Impact: +$42,800</div>
        <p class="text-slate-300 text-[11px]">Combining accessory bundling and minor price adjustment recovers $3,560/month in net profit margin.</p>
      </div>
    `
  }
};

class BizCopilot {
  constructor() {
    this.chatContainer = null;
    this.isStreaming = false;
    this.history = [];
  }

  init() {
    this.chatContainer = document.getElementById('copilotMessages');
  }

  // Pick prompt from chips
  askPrompt(type) {
    const questions = {
      profit: "Why did my profit decrease this month?",
      forecast: "Forecast my sales for the next 30 days.",
      restock: "Which products need restocking?",
      anomalies: "Identify unusual transactions.",
      margin: "How can I improve my profit margin?"
    };

    const text = questions[type] || "Analyze our business performance.";
    this.sendMessage(text, type);
  }

  // Submit message
  sendMessage(userText = null, forcedType = null) {
    if (this.isStreaming) return;
    const input = document.getElementById('copilotInput');
    const text = userText || (input ? input.value.trim() : "");
    if (!text) return;

    if (input) input.value = '';

    // Append user message
    this.appendMessage('user', text);

    // Determine mock response
    let responseKey = forcedType;
    if (!responseKey) {
      const lower = text.toLowerCase();
      if (lower.includes('profit') || lower.includes('decrease') || lower.includes('expense')) responseKey = 'profit';
      else if (lower.includes('forecast') || lower.includes('predict') || lower.includes('sales') || lower.includes('30 day')) responseKey = 'forecast';
      else if (lower.includes('stock') || lower.includes('inventory') || lower.includes('reorder')) responseKey = 'restock';
      else if (lower.includes('unusual') || lower.includes('anomaly') || lower.includes('fraud') || lower.includes('transaction')) responseKey = 'anomalies';
      else if (lower.includes('margin') || lower.includes('improve') || lower.includes('strategy')) responseKey = 'margin';
      else responseKey = 'profit';
    }

    const mock = COPILOT_MOCK_RESPONSES[responseKey] || COPILOT_MOCK_RESPONSES.profit;

    // Show simulated agent activity timeline first
    this.showAgentActivity(mock.agents, () => {
      this.streamAIResponse(mock);
    });
  }

  // Add message bubble
  appendMessage(sender, text) {
    if (!this.chatContainer) return;
    const isUser = sender === 'user';
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : ''} animate-fade-in`;

    msgDiv.innerHTML = `
      <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isUser ? 'bg-blue-600 text-white' : 'bg-gradient-to-tr from-blue-600 to-cyan-400 text-white'} text-xs font-bold shadow-md">
        ${isUser ? 'You' : '<i data-lucide="sparkles" class="w-4 h-4"></i>'}
      </div>
      <div class="space-y-1.5 ${isUser ? 'text-right' : ''}">
        <div class="px-4 py-3 rounded-2xl ${isUser ? 'bg-blue-600 text-white rounded-tr-none' : 'glass-card text-slate-200 rounded-tl-none'} text-sm leading-relaxed">
          ${text}
        </div>
        <div class="text-[10px] text-slate-500">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;

    this.chatContainer.appendChild(msgDiv);
    this.scrollToBottom();
    if (window.lucide) lucide.createIcons();
  }

  // High-level simulated Agent Activity Timeline
  showAgentActivity(agents, onComplete) {
    if (!this.chatContainer) return;

    const activityDiv = document.createElement('div');
    activityDiv.className = 'p-3.5 rounded-2xl glass-card border border-blue-500/20 max-w-2xl text-xs space-y-2 text-slate-300';
    activityDiv.id = 'copilotAgentActivity';

    let html = `
      <div class="flex items-center justify-between border-b border-white/5 pb-2">
        <div class="flex items-center gap-2 font-semibold text-blue-400">
          <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
          Simulated Multi-Agent Orchestration
        </div>
        <span class="text-[10px] text-slate-500">MOCK COGNITIVE STACK</span>
      </div>
      <div class="space-y-1.5" id="agentTimelineSteps">
    `;

    agents.forEach((ag, idx) => {
      html += `
        <div class="flex items-start gap-2 text-[11px] opacity-75" id="ag-step-${idx}">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"></i>
          <div><strong class="text-white">${ag.name}:</strong> <span class="text-slate-400">${ag.action}</span></div>
        </div>
      `;
    });

    html += `</div>`;
    activityDiv.innerHTML = html;
    this.chatContainer.appendChild(activityDiv);
    this.scrollToBottom();
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      onComplete();
    }, 900);
  }

  // Streaming Typewriter Effect
  streamAIResponse(mock) {
    if (!this.chatContainer) return;
    this.isStreaming = true;

    const responseWrapper = document.createElement('div');
    responseWrapper.className = 'flex gap-3 max-w-3xl animate-fade-in';
    const uniqueId = 'resp-' + Date.now();

    responseWrapper.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-md">
        <i data-lucide="bot" class="w-4 h-4"></i>
      </div>
      <div class="space-y-2 flex-1">
        <div class="glass-card p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm leading-relaxed border border-white/10">
          <div class="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
            <span class="font-semibold text-blue-400 text-xs flex items-center gap-1.5">
              <i data-lucide="brain" class="w-3.5 h-3.5"></i> ${mock.title}
            </span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              DEMO SIMULATION · MOCK COPILOT
            </span>
          </div>

          <!-- Typewriter content target -->
          <div id="${uniqueId}-content" class="prose prose-invert max-w-none text-sm space-y-2"></div>

          <!-- Rich inline widget -->
          <div id="${uniqueId}-widget" class="hidden">
            ${mock.widget || ''}
          </div>

          <!-- Mock Citations -->
          <div class="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400 space-y-1">
            <div class="font-semibold text-slate-500 flex items-center gap-1">
              <i data-lucide="link-2" class="w-3 h-3"></i> Verified Context Citations:
            </div>
            ${mock.citations.map(c => `<div class="pl-3 border-l border-blue-500/30 text-slate-400">${c}</div>`).join('')}
          </div>

          <!-- Action buttons (Copy, Regenerate) -->
          <div class="mt-3 flex items-center gap-2 pt-2 border-t border-white/5">
            <button onclick="window.bizCopilot.copyResponse('${uniqueId}')" class="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs flex items-center gap-1 transition">
              <i data-lucide="copy" class="w-3 h-3"></i> Copy Response
            </button>
            <button onclick="window.bizCopilot.regenerateResponse()" class="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs flex items-center gap-1 transition">
              <i data-lucide="refresh-cw" class="w-3 h-3"></i> Regenerate
            </button>
          </div>
        </div>
      </div>
    `;

    this.chatContainer.appendChild(responseWrapper);
    this.scrollToBottom();
    if (window.lucide) lucide.createIcons();

    const contentTarget = document.getElementById(`${uniqueId}-content`);
    const widgetTarget = document.getElementById(`${uniqueId}-widget`);

    // Parse simple markdown to HTML paragraphs
    const formattedHtml = mock.summary
      .replace(/### (.*?)\n/g, '<h4 class="font-semibold text-slate-100 mt-2 mb-1">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
      .replace(/\n\n/g, '<br><br>');

    // Simulate fast streaming
    let currentIdx = 0;
    const textLength = formattedHtml.length;
    const step = 8; // chars per tick

    const interval = setInterval(() => {
      currentIdx += step;
      if (currentIdx >= textLength) {
        contentTarget.innerHTML = formattedHtml;
        clearInterval(interval);
        if (widgetTarget) widgetTarget.classList.remove('hidden');
        this.isStreaming = false;
        this.scrollToBottom();
        if (window.lucide) lucide.createIcons();
      } else {
        contentTarget.innerHTML = formattedHtml.substring(0, currentIdx) + '<span class="inline-block w-1.5 h-3 bg-blue-400 ml-0.5 animate-pulse"></span>';
        this.scrollToBottom();
      }
    }, 25);
  }

  copyResponse(uniqueId) {
    const el = document.getElementById(`${uniqueId}-content`);
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      window.showToast("Response copied to clipboard", "success");
    }
  }

  regenerateResponse() {
    window.showToast("Simulating fresh multi-agent generation...", "info");
    this.askPrompt('profit');
  }

  scrollToBottom() {
    if (this.chatContainer) {
      this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
  }
}

window.bizCopilot = new BizCopilot();

