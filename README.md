# BizPilot AI — Autonomous Business Intelligence Platform for SMEs

> **Tagline:** *Your Business. Your Intelligence. Your Next Move.*  
> **Style:** Apple Cupertino Dark / Light UI System  
> **Architecture:** 100% Client-Side Pure HTML5, CSS3, JavaScript (ES6+). Zero backend, zero Node.js server dependencies. **Ready for instant hosting on GitHub Pages.**

---

## 🚀 Live Demo & GitHub Pages Hosting

### Hosting on GitHub Pages (Instant 1-Click)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete BizPilot AI prototype for hackathon"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder, then click **Save**.
5. Your live prototype will be live at `https://<your-username>.github.io/<your-repo-name>/`!

### Running Locally
Simply double-click `index.html` in your file explorer to open it in Chrome, Edge, Safari, or Brave!  
Or run a lightweight local static server:
```bash
# Python
python -m http.server 3000

# or Node / npx
npx serve .
```

---

## 📱 12 Interactive Application Pages

| # | Page | Capabilities |
|---|------|-------------|
| 1 | **Overview Dashboard** | KPI cards ($124,580 Rev, $32,450 Profit, $92,130 Expenses, 1,284 Orders, $48,900 Inventory, $18,250 Cash Flow), Revenue vs Expenses chart, Category Mix, Top SKUs, Business Health Score (84/100, Grade A-), AI Insights, Live Activity Stream. |
| 2 | **AI Business Copilot** | Multi-agent orchestration visualizer (Supervisor, Financial Analyst, Forecasting, Anomaly, Business Advisor), typewriter streaming, suggested prompt chips, verified citations, inline widgets, copy/regenerate. |
| 3 | **Sales Analytics** | AOV, sales growth index, channel mix (Shopify, Amazon, B2B, Retail), monthly sales bar chart, 50-item transaction ledger with search, filters, pagination, and CSV export. |
| 4 | **Financial Intelligence** | P&L breakdown, EBITDA trajectory, operating expense donut, gross vs net margin, runway evaluation, and AI financial auditor notes. |
| 5 | **Inventory Management** | Full CRUD operations (Add, Edit, Delete SKUs via modal), low-stock warnings, category filtering, search, sorting, pagination, and AI stockout restocking plan. |
| 6 | **Forecasting Dashboard** | Prophet-SARIMAX predictive modeling across 7-day, 30-day, and 90-day selectors with 95% Bayesian confidence intervals, MAE, RMSE, and MAPE accuracy metrics. |
| 7 | **Anomaly Detection** | Statistical deviation alerts (Unusual Sales, Suspicious Expenses, Inventory Shrink, Conversion Drops), severity tags, and full slide-in Investigation Drawer with "Mark as Reviewed" and "Resolve Alert". |
| 8 | **Reports & Documents** | 6 executive reports (Daily Summary, Weekly Sales, Monthly P&L, Inventory Risk, 90-Day Forecast, Anomaly Audit) with modal preview and CSV/PDF export. |
| 9 | **AI Agents Roster** | Status cards for all 5 specialized autonomous agents (Supervisor, Financial, Forecasting, Anomaly, Advisor) with task throughput, success rates, latency, and simulated MCP tool traces. |
| 10 | **Data Sources & Ingestion** | Drag-and-drop file uploader supporting CSV, XLSX, JSON, PDF with client-side progress simulation, schema validation status, and removal. |
| 11 | **Automated Workflows** | 5 cron/event workflows with iOS toggle switches, "Run Now" simulation, schedule viewer, and execution history. |
| 12 | **Settings & AI Config** | Business entity profiles, team permissions & roles, demo AI model provider configuration (Gemini 2.0, Claude 3.5, GPT-4o), and notification preferences. |

---

## 🎨 Design System: Apple Cupertino
- **Color Palette:**
  - Background: `#080D19` (Cupertino Space Black) / Light Mode: `#F4F6F9`
  - Sidebar: `#0C1322`
  - Cards: `#111B2D` with subtle glassmorphic borders `rgba(255, 255, 255, 0.08)`
  - Accent Primary: `#3B82F6` (Cupertino Blue)
  - Cyan: `#22D3EE` | Success: `#22C55E` | Warning: `#F59E0B` | Danger: `#EF4444`
- **Typography:** Plus Jakarta Sans & JetBrains Mono (SF Pro-inspired)
- **Controls:** Cupertino iOS toggle switches, segmented button bars, squircle corners, pill toasts, glass modal overlays.
- **Demo Transparency:** Persistent `DEMO ENVIRONMENT · SIMULATED DATA` indicator.

