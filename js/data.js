/**
 * BizPilot AI — Complete Mock Dataset & State Manager
 * Realistic Business Intelligence Data for Small & Medium Enterprises (SMEs)
 */

const STORAGE_KEYS = {
  INVENTORY: 'bizpilot_inventory_v1',
  ANOMALIES: 'bizpilot_anomalies_v1',
  AUTOMATIONS: 'bizpilot_automations_v1',
  THEME: 'bizpilot_theme_v1',
  SETTINGS: 'bizpilot_settings_v1',
  DATA_SOURCES: 'bizpilot_datasources_v1'
};

const BIZ_DATA = {
  // Brand & Metadata
  app: {
    name: "BizPilot AI",
    tagline: "Your Business. Your Intelligence. Your Next Move.",
    version: "2.4.0 (Hackathon Edition)",
    badge: "DEMO ENVIRONMENT · SIMULATED DATA",
    business: {
      name: "Apex Retail & Distribution Ltd.",
      industry: "Consumer Electronics & Smart Hardware",
      currency: "$",
      fiscalYear: "2026",
      timezone: "America/New_York (UTC-5)",
      employees: 28,
      location: "Austin, Texas"
    }
  },

  // Overview KPIs
  overviewKPIs: {
    revenue: 124580,
    revenueChange: "+14.8% vs last month",
    revenuePositive: true,
    netProfit: 32450,
    netProfitChange: "-4.2% vs last month",
    netProfitPositive: false,
    expenses: 92130,
    expensesChange: "+8.6% vs last month",
    expensesPositive: false, // higher expense is caution
    orders: 1284,
    ordersChange: "+18.2% vs last month",
    ordersPositive: true,
    inventoryValue: 48900,
    inventoryChange: "6 items low stock",
    inventoryPositive: true,
    cashFlow: 18250,
    cashFlowChange: "+9.1% runway (4.8 mos)",
    cashFlowPositive: true,
    healthScore: 84, // out of 100
    healthGrade: "A-",
    healthVerdict: "Strong operating margins with slight margin compression in Q3 freight."
  },

  // 12 Months Historical Financials
  financialMonths: [
    { month: "Jan", revenue: 88400, expenses: 68200, profit: 20200, cashflow: 14500, orders: 940 },
    { month: "Feb", revenue: 92100, expenses: 71000, profit: 21100, cashflow: 15100, orders: 980 },
    { month: "Mar", revenue: 104500, expenses: 78900, profit: 25600, cashflow: 16800, orders: 1105 },
    { month: "Apr", revenue: 98200, expenses: 75400, profit: 22800, cashflow: 15400, orders: 1040 },
    { month: "May", revenue: 112000, expenses: 84100, profit: 27900, cashflow: 17200, orders: 1190 },
    { month: "Jun", revenue: 118400, expenses: 88200, profit: 30200, cashflow: 18000, orders: 1240 },
    { month: "Jul", revenue: 115200, expenses: 87900, profit: 27300, cashflow: 16900, orders: 1210 },
    { month: "Aug", revenue: 121800, expenses: 90400, profit: 31400, cashflow: 17800, orders: 1265 },
    { month: "Sep", revenue: 120500, expenses: 89700, profit: 30800, cashflow: 17400, orders: 1250 },
    { month: "Oct", revenue: 128900, expenses: 95400, profit: 33500, cashflow: 18900, orders: 1320 },
    { month: "Nov", revenue: 124580, expenses: 92130, profit: 32450, cashflow: 18250, orders: 1284 },
    { month: "Dec (Proj)", revenue: 139200, expenses: 98500, profit: 40700, cashflow: 22400, orders: 1450 }
  ],

  // Sales Channels
  salesChannels: [
    { channel: "Shopify Storefront", share: 48, revenue: 59798, growth: "+16.4%" },
    { channel: "Amazon FBA US", share: 29, revenue: 36128, growth: "+11.2%" },
    { channel: "B2B Wholesale Portals", share: 15, revenue: 18687, growth: "+24.5%" },
    { channel: "Retail Popups & Direct", share: 8, revenue: 9967, growth: "+5.1%" }
  ],

  // Product Category Share
  categories: [
    { name: "Smart Audio & Speakers", share: 36, value: 44848, color: "#3B82F6" },
    { name: "IoT Smart Home Hubs", share: 28, value: 34882, color: "#22D3EE" },
    { name: "Wearables & Fitness", share: 20, value: 24916, color: "#22C55E" },
    { name: "Accessories & Cables", share: 16, value: 19934, color: "#F59E0B" }
  ],

  // Top Selling Products
  topProducts: [
    { id: "PRD-101", name: "PulseFlow Noise-Canceling Buds", units: 412, revenue: 32960, margin: "42.5%", trend: "up" },
    { id: "PRD-102", name: "OmniHub Smart Screen Pro", units: 238, revenue: 28560, margin: "38.0%", trend: "up" },
    { id: "PRD-103", name: "AeroTrack GPS Smartband 4", units: 310, revenue: 21700, margin: "49.1%", trend: "stable" },
    { id: "PRD-104", name: "NovaSound Portable Subwoofer", units: 145, revenue: 15950, margin: "36.2%", trend: "up" },
    { id: "PRD-105", name: "MagCharge 3-in-1 Wireless Mat", units: 284, revenue: 14200, margin: "55.0%", trend: "down" }
  ],

  // Recent Activity Feed
  recentActivities: [
    { id: "act-1", time: "12 mins ago", type: "order", title: "Bulk Wholesale Order #PO-9411", desc: "Acme Tech Distributors purchased 65x PulseFlow Buds ($5,200.00)", icon: "shopping-bag", badge: "New Sale" },
    { id: "act-2", time: "44 mins ago", type: "ai", title: "Forecasting Agent triggered", desc: "Detected 28% demand spike for OmniHub before Cyber Week", icon: "brain", badge: "AI Insight" },
    { id: "act-3", time: "2 hrs ago", type: "anomaly", title: "Unusual Freight Cost flagged", desc: "Invoice #FRT-8812 was 34% higher than historical supplier average", icon: "alert-triangle", badge: "Anomaly" },
    { id: "act-4", time: "4 hrs ago", type: "inventory", title: "Restock PO #8410 Generated", desc: "Auto-reorder initiated for 150 units of AeroTrack Silicon Straps", icon: "package", badge: "Automation" },
    { id: "act-5", time: "Yesterday", type: "sync", title: "Shopify & QuickBooks Synced", desc: "1,284 records matched with zero reconciliation discrepancies", icon: "refresh-cw", badge: "System" }
  ],

  // AI Generated Insights (Overview)
  overviewInsights: [
    {
      id: "ins-1",
      title: "Gross Margin Compression in Audio",
      summary: "Air freight surcharge increased COGS by $4.20 per unit on PulseFlow Buds, dropping gross margin from 46.2% to 42.5%.",
      impact: "-$1,730 Net Profit",
      action: "Switch reorder batch to expedited ocean freight to recover 3.8% margin.",
      agent: "Financial Analyst Agent",
      severity: "warning"
    },
    {
      id: "ins-2",
      title: "OmniHub Stockout Risk in 11 Days",
      summary: "Velocity surged from 6.8 units/day to 14.2 units/day following viral TikTok tech review. Current buffer is only 48 units.",
      impact: "$8,640 Potential Lost Revenue",
      action: "Trigger priority transfer of 75 units from West Coast backup warehouse.",
      agent: "Forecasting Agent",
      severity: "danger"
    },
    {
      id: "ins-3",
      title: "B2B Wholesale Channel Expansion",
      summary: "Wholesale channel grew +24.5% MoM with an average order value of $2,840 compared to DTC AOV of $97.",
      impact: "+$18,687 Monthly Run-rate",
      action: "Activate automated tiered volume discounts for top 5 tier-1 wholesale accounts.",
      agent: "Business Advisor Agent",
      severity: "success"
    }
  ],

  // 50 Sales Transactions
  transactions: [
    { id: "TX-1084", date: "2026-11-20 15:42", customer: "Apex Nordic Corp", product: "PulseFlow Noise-Canceling Buds", amount: 4800.00, status: "completed", channel: "B2B Wholesale", payment: "Wire Transfer" },
    { id: "TX-1083", date: "2026-11-20 14:15", customer: "Sarah Jenkins", product: "OmniHub Smart Screen Pro", amount: 120.00, status: "completed", channel: "Shopify", payment: "Apple Pay" },
    { id: "TX-1082", date: "2026-11-20 13:50", customer: "Marcus Vance", product: "AeroTrack GPS Smartband 4", amount: 70.00, status: "completed", channel: "Amazon US", payment: "Visa ···· 4219" },
    { id: "TX-1081", date: "2026-11-20 12:30", customer: "Elena Rostova", product: "MagCharge 3-in-1 Mat", amount: 50.00, status: "pending", channel: "Shopify", payment: "Mastercard ···· 8821" },
    { id: "TX-1080", date: "2026-11-20 11:12", customer: "David Chen", product: "NovaSound Portable Subwoofer", amount: 110.00, status: "completed", channel: "Retail Popups", payment: "Square POS" },
    { id: "TX-1079", date: "2026-11-20 09:44", customer: "Kendra Scott Inc", product: "OmniHub Smart Screen Pro (x10)", amount: 1200.00, status: "completed", channel: "B2B Wholesale", payment: "Net 30 Invoice" },
    { id: "TX-1078", date: "2026-11-19 22:15", customer: "Liam Gallagher", product: "PulseFlow Buds + Case", amount: 95.00, status: "completed", channel: "Shopify", payment: "PayPal" },
    { id: "TX-1077", date: "2026-11-19 20:05", customer: "Hana Takahashi", product: "AeroTrack Replacement Strap", amount: 24.00, status: "completed", channel: "Amazon US", payment: "Amazon Pay" },
    { id: "TX-1076", date: "2026-11-19 18:32", customer: "Robert Stirling", product: "MagCharge 3-in-1 Mat", amount: 50.00, status: "cancelled", channel: "Shopify", payment: "Failed Card" },
    { id: "TX-1075", date: "2026-11-19 16:20", customer: "BluePeak Solutions", product: "OmniHub Pro x25", amount: 3000.00, status: "completed", channel: "B2B Wholesale", payment: "ACH Transfer" },
    { id: "TX-1074", date: "2026-11-19 14:10", customer: "Chloe Bennett", product: "NovaSound Portable Subwoofer", amount: 110.00, status: "completed", channel: "Shopify", payment: "Shop Pay" },
    { id: "TX-1073", date: "2026-11-19 11:45", customer: "Thomas Weber", product: "PulseFlow Noise-Canceling Buds", amount: 80.00, status: "completed", channel: "Amazon US", payment: "Amex ···· 1004" },
    { id: "TX-1072", date: "2026-11-18 21:18", customer: "Priya Sharma", product: "AeroTrack GPS Smartband 4", amount: 70.00, status: "completed", channel: "Shopify", payment: "Google Pay" },
    { id: "TX-1071", date: "2026-11-18 19:40", customer: "Lucas Miller", product: "MagCharge 3-in-1 Mat", amount: 50.00, status: "completed", channel: "Retail Popups", payment: "Apple Pay" },
    { id: "TX-1070", date: "2026-11-18 17:05", customer: "Zenith Retail Partners", product: "PulseFlow Buds x50", amount: 4000.00, status: "completed", channel: "B2B Wholesale", payment: "Wire Transfer" },
    { id: "TX-1069", date: "2026-11-18 15:30", customer: "Samantha Reed", product: "OmniHub Smart Screen Pro", amount: 120.00, status: "completed", channel: "Shopify", payment: "Visa ···· 5512" },
    { id: "TX-1068", date: "2026-11-18 13:12", customer: "Austin Davies", product: "NovaSound Subwoofer", amount: 110.00, status: "pending", channel: "Amazon US", payment: "Amazon Pay" },
    { id: "TX-1067", date: "2026-11-17 18:22", customer: "Marta Gomez", product: "AeroTrack Smartband 4", amount: 70.00, status: "completed", channel: "Shopify", payment: "Apple Pay" },
    { id: "TX-1066", date: "2026-11-17 16:50", customer: "Horizon Coworking", product: "OmniHub Pro x15", amount: 1800.00, status: "completed", channel: "B2B Wholesale", payment: "Net 15 Invoice" },
    { id: "TX-1065", date: "2026-11-17 14:00", customer: "Daniel Wright", product: "PulseFlow Buds", amount: 80.00, status: "completed", channel: "Shopify", payment: "Mastercard" },
    { id: "TX-1064", date: "2026-11-17 11:30", customer: "Zoe Kravitz", product: "MagCharge Mat", amount: 50.00, status: "completed", channel: "Retail Popups", payment: "Square POS" },
    { id: "TX-1063", date: "2026-11-16 20:15", customer: "Gabriel Santos", product: "OmniHub Screen Pro", amount: 120.00, status: "cancelled", channel: "Shopify", payment: "Chargeback flagged" },
    { id: "TX-1062", date: "2026-11-16 18:40", customer: "Pacific Coast AV", product: "NovaSound Subwoofer x20", amount: 2200.00, status: "completed", channel: "B2B Wholesale", payment: "Wire Transfer" },
    { id: "TX-1061", date: "2026-11-16 16:10", customer: "Hannah Abbott", product: "PulseFlow Buds", amount: 80.00, status: "completed", channel: "Amazon US", payment: "Amex ···· 3321" },
    { id: "TX-1060", date: "2026-11-16 12:25", customer: "Oliver Twist", product: "AeroTrack 4", amount: 70.00, status: "completed", channel: "Shopify", payment: "PayPal" }
  ],

  // 24 SME Inventory Products
  defaultInventory: [
    { id: "PRD-101", name: "PulseFlow Noise-Canceling Buds", category: "Smart Audio", stock: 142, minStock: 50, unitPrice: 80.00, status: "in-stock", supplier: "AcousticTech Shenzen", leadDays: 14 },
    { id: "PRD-102", name: "OmniHub Smart Screen Pro", category: "IoT Smart Home", stock: 18, minStock: 45, unitPrice: 120.00, status: "low-stock", supplier: "VisionCore Taiwan", leadDays: 21 },
    { id: "PRD-103", name: "AeroTrack GPS Smartband 4", category: "Wearables", stock: 260, minStock: 60, unitPrice: 70.00, status: "in-stock", supplier: "BioSync Korea", leadDays: 12 },
    { id: "PRD-104", name: "NovaSound Portable Subwoofer", category: "Smart Audio", stock: 64, minStock: 30, unitPrice: 110.00, status: "in-stock", supplier: "AcousticTech Shenzen", leadDays: 14 },
    { id: "PRD-105", name: "MagCharge 3-in-1 Wireless Mat", category: "Accessories", stock: 320, minStock: 80, unitPrice: 50.00, status: "in-stock", supplier: "FluxPower Vietnam", leadDays: 10 },
    { id: "PRD-106", name: "Lumio Smart Ambient Light Bar", category: "IoT Smart Home", stock: 6, minStock: 35, unitPrice: 45.00, status: "low-stock", supplier: "OptoGlow Shanghai", leadDays: 18 },
    { id: "PRD-107", name: "PulseFlow Silicone Replacement Tips (3pk)", category: "Accessories", stock: 0, minStock: 50, unitPrice: 12.00, status: "out-of-stock", supplier: "AcousticTech Shenzen", leadDays: 8 },
    { id: "PRD-108", name: "AeroTrack Breathable Sport Loop", category: "Wearables", stock: 185, minStock: 40, unitPrice: 18.00, status: "in-stock", supplier: "BioSync Korea", leadDays: 7 },
    { id: "PRD-109", name: "ThunderVolt 100W GaN Fast Charger", category: "Accessories", stock: 95, minStock: 40, unitPrice: 38.00, status: "in-stock", supplier: "FluxPower Vietnam", leadDays: 10 },
    { id: "PRD-110", name: "OmniSensor Door & Window Contact (4pk)", category: "IoT Smart Home", stock: 12, minStock: 30, unitPrice: 34.00, status: "low-stock", supplier: "VisionCore Taiwan", leadDays: 15 },
    { id: "PRD-111", name: "SoundShield Travel Hardcase", category: "Accessories", stock: 210, minStock: 50, unitPrice: 22.00, status: "in-stock", supplier: "PackPro Dongguan", leadDays: 12 },
    { id: "PRD-112", name: "AirSense Indoor Air Quality Monitor", category: "IoT Smart Home", stock: 4, minStock: 25, unitPrice: 85.00, status: "low-stock", supplier: "EnviroTech Munich", leadDays: 25 },
    { id: "PRD-113", name: "PulseFlow Sport Earhooks", category: "Accessories", stock: 140, minStock: 30, unitPrice: 15.00, status: "in-stock", supplier: "AcousticTech Shenzen", leadDays: 10 },
    { id: "PRD-114", name: "NovaLink Bluetooth 5.4 HiFi Transmitter", category: "Smart Audio", stock: 78, minStock: 25, unitPrice: 42.00, status: "in-stock", supplier: "AcousticTech Shenzen", leadDays: 14 },
    { id: "PRD-115", name: "AeroTrack Milanese Loop Strap", category: "Wearables", stock: 0, minStock: 30, unitPrice: 28.00, status: "out-of-stock", supplier: "BioSync Korea", leadDays: 14 },
    { id: "PRD-116", name: "PowerBank MagSafe 10000mAh", category: "Accessories", stock: 165, minStock: 50, unitPrice: 48.00, status: "in-stock", supplier: "FluxPower Vietnam", leadDays: 12 }
  ],

  // Forecasting Datasets (Historical + Predictions for 7d, 30d, 90d)
  forecasting: {
    metrics: {
      mae: "$1,240.50",
      rmse: "$1,852.10",
      mape: "3.24%",
      model: "Prophet-SARIMAX Hybrid + SME Bayesian Priors",
      confidenceInterval: "95% Confidence Band"
    },
    days7: [
      { date: "Day 1", actual: 4120, predicted: 4100, lower: 3950, upper: 4250 },
      { date: "Day 2", actual: 3980, predicted: 4050, lower: 3880, upper: 4200 },
      { date: "Day 3", actual: 4450, predicted: 4380, lower: 4200, upper: 4550 },
      { date: "Day 4", actual: null, predicted: 4890, lower: 4620, upper: 5150 },
      { date: "Day 5", actual: null, predicted: 5400, lower: 5080, upper: 5720 },
      { date: "Day 6", actual: null, predicted: 5850, lower: 5450, upper: 6250 },
      { date: "Day 7", actual: null, predicted: 4650, lower: 4300, upper: 5000 }
    ],
    days30: [
      { date: "Wk 1", actual: 28400, predicted: 28100, lower: 26800, upper: 29400 },
      { date: "Wk 2", actual: 31200, predicted: 30900, lower: 29400, upper: 32400 },
      { date: "Wk 3", actual: null, predicted: 34500, lower: 32600, upper: 36400 },
      { date: "Wk 4", actual: null, predicted: 38900, lower: 36500, upper: 41300 }
    ],
    days90: [
      { date: "Month 1 (Current)", actual: 124580, predicted: 123800, lower: 119000, upper: 128600 },
      { date: "Month 2 (Holiday)", actual: null, predicted: 148200, lower: 141000, upper: 155400 },
      { date: "Month 3 (Post-Q4)", actual: null, predicted: 118400, lower: 109000, upper: 127800 }
    ],
    demandForecasting: [
      { sku: "PRD-102", product: "OmniHub Smart Screen Pro", current: 18, projectedDemand: 94, deficit: -76, reorderUnits: 120, urgency: "CRITICAL" },
      { sku: "PRD-106", product: "Lumio Smart Ambient Light", current: 6, projectedDemand: 48, deficit: -42, reorderUnits: 75, urgency: "HIGH" },
      { sku: "PRD-112", product: "AirSense Air Monitor", current: 4, projectedDemand: 32, deficit: -28, reorderUnits: 50, urgency: "HIGH" },
      { sku: "PRD-101", product: "PulseFlow Earbuds", current: 142, projectedDemand: 190, deficit: -48, reorderUnits: 150, urgency: "MEDIUM" }
    ]
  },

  // Simulated Anomaly Events
  defaultAnomalies: [
    {
      id: "ANM-201",
      category: "Suspicious Expenses",
      title: "Expedited Air Freight Surcharge Deviation",
      amount: "$3,420.00",
      expected: "$1,150.00",
      deviation: "+197.4%",
      severity: "high",
      status: "new",
      detectedAt: "2026-11-20 08:34",
      source: "QuickBooks PO-9821",
      description: "Air freight carrier 'Apex Logistics Pacific' applied unexpected peak congestion surcharge of $2,270 on electronics shipment from Shenzhen without prior contract amendment.",
      suggestedAction: "Dispute invoice surcharge under master service agreement section 4.2; recover $2,270 overcharge.",
      impact: "Reduces November gross profit by 2.1%"
    },
    {
      id: "ANM-202",
      category: "Unusual Sales",
      title: "Spike in Repeated High-Velocity Orders",
      amount: "$4,800.00",
      expected: "$320.00",
      deviation: "+1,400%",
      severity: "critical",
      status: "new",
      detectedAt: "2026-11-19 23:12",
      source: "Shopify Fraud Risk API",
      description: "Six consecutive orders placed within 18 minutes using identical IP address in Eastern Europe with different cardholder names and prepaid gift cards.",
      suggestedAction: "Place temporary fulfillment hold on orders #TX-1052 through #TX-1057; trigger 3D-Secure verification.",
      impact: "Potential chargeback liability of $4,800 + $150 bank fees"
    },
    {
      id: "ANM-203",
      category: "Inventory Changes",
      title: "Negative Stock Delta without Sales Link",
      amount: "42 Units ($2,100)",
      expected: "0 Units",
      deviation: "Unaccounted Shrinkage",
      severity: "medium",
      status: "reviewed",
      detectedAt: "2026-11-18 16:40",
      source: "Warehouse WMS Scanner #4",
      description: "Cycle count in aisle C-12 showed 42 fewer MagCharge 3-in-1 Mats than recorded in system after pallet transfer.",
      suggestedAction: "Audit physical security camera footage for dock door 3 and cross-reference pallet manifest #PL-89.",
      impact: "Inventory asset writedown of $2,100"
    },
    {
      id: "ANM-204",
      category: "Revenue Deviations",
      title: "Sudden Drop in Shopify Mobile Conversion Rate",
      amount: "-$6,800 Est. Gap",
      expected: "3.4% Conv Rate",
      deviation: "-58.8% (Drop to 1.4%)",
      severity: "high",
      status: "reviewed",
      detectedAt: "2026-11-17 11:20",
      source: "Google Analytics 4 & Shopify Pixel",
      description: "Mobile checkout bounce rate spiked after iOS 18.2 safari update due to broken address autocomplete modal on checkout step 2.",
      suggestedAction: "Deploy CSS fix to mobile checkout template to fix overlay clipping on WebKit.",
      impact: "Estimated $1,100/day ongoing checkout loss"
    },
    {
      id: "ANM-205",
      category: "Suspicious Expenses",
      title: "Duplicate SaaS Subscription Charge",
      amount: "$299.00",
      expected: "$0.00",
      deviation: "Double Billing",
      severity: "low",
      status: "resolved",
      detectedAt: "2026-11-15 09:10",
      source: "Stripe Billing Feed",
      description: "HubSpot Marketing Hub billed twice on Corporate Card ending in 4102 due to renewal webhook retry.",
      suggestedAction: "Requested refund via Stripe dashboard; credited to card statement on Nov 16.",
      impact: "$299.00 recovered"
    }
  ],

  // 5 AI Agents
  agents: [
    {
      id: "agt-supervisor",
      name: "Supervisor Agent",
      role: "Orchestration & Workflow Commander",
      badge: "Core Orchestrator",
      avatar: "crown",
      status: "active",
      tasksCompleted: 4892,
      successRate: "99.8%",
      lastActivity: "2 mins ago",
      executionTime: "142ms avg",
      description: "Coordinates multi-agent workflows, decomposes user business inquiries, assigns tasks to specialized agents, and synthesizes executive conclusions.",
      tools: ["mcp://bizpilot/agent_dispatch", "mcp://bizpilot/query_router", "mcp://bizpilot/context_compressor"]
    },
    {
      id: "agt-financial",
      name: "Financial Analyst Agent",
      role: "P&L, Margins & Cash Runway Intelligence",
      badge: "Financial Engine",
      avatar: "dollar-sign",
      status: "active",
      tasksCompleted: 3410,
      successRate: "99.4%",
      lastActivity: "12 mins ago",
      executionTime: "310ms avg",
      description: "Monitors EBITDA, gross profit margins, operational overhead, vendor pricing contracts, and delivers actionable margin enhancement strategies.",
      tools: ["mcp://quickbooks/gl_ledger", "mcp://stripe/payout_feed", "mcp://bizpilot/margin_calculator"]
    },
    {
      id: "agt-forecasting",
      name: "Forecasting Agent",
      role: "Demand, Revenue & Cash Flow Modeling",
      badge: "Predictive Analytics",
      avatar: "trending-up",
      status: "active",
      tasksCompleted: 2854,
      successRate: "98.9%",
      lastActivity: "44 mins ago",
      executionTime: "680ms avg",
      description: "Runs seasonal Prophet-SARIMAX predictive simulations across 7-day, 30-day, and 90-day time horizons with 95% Bayesian confidence intervals.",
      tools: ["mcp://bizpilot/prophet_forecast", "mcp://shopify/order_velocity", "mcp://inventory/leadtime_evaluator"]
    },
    {
      id: "agt-anomaly",
      name: "Anomaly Detection Agent",
      role: "Automated Fraud, Expense & Stock Guard",
      badge: "Security & Risk",
      avatar: "shield-alert",
      status: "active",
      tasksCompleted: 5120,
      successRate: "99.9%",
      lastActivity: "Just now",
      executionTime: "95ms avg",
      description: "Continuously monitors transactional streams, inventory cycles, and supplier invoices using statistical Z-score and isolation forest deviation detection.",
      tools: ["mcp://bizpilot/isolation_forest", "mcp://bank/feed_monitor", "mcp://shopify/fraud_analyzer"]
    },
    {
      id: "agt-advisor",
      name: "Business Advisor Agent",
      role: "Strategic Growth & Executive Recommendations",
      badge: "Strategy Advisor",
      avatar: "compass",
      status: "idle",
      tasksCompleted: 1980,
      successRate: "99.1%",
      lastActivity: "1 hr ago",
      executionTime: "420ms avg",
      description: "Provides tactical growth advice tailored to SMEs, benchmark pricing insights against competitors, and unit economics optimization playbooks.",
      tools: ["mcp://bizpilot/industry_benchmarks", "mcp://bizpilot/growth_playbooks", "mcp://bizpilot/competitor_pricing"]
    }
  ],

  // Mock MCP Tool Activity Log
  mcpActivities: [
    { time: "15:42:10", agent: "Supervisor Agent", tool: "mcp://bizpilot/agent_dispatch", status: "200 OK", params: "{ route: 'financial_health', priority: 'high' }" },
    { time: "15:42:11", agent: "Financial Analyst", tool: "mcp://quickbooks/gl_ledger", status: "200 OK", params: "{ dateRange: '2026-11-01..2026-11-20', accounts: ['COGS', 'OPEX'] }" },
    { time: "15:42:12", agent: "Financial Analyst", tool: "mcp://bizpilot/margin_calculator", status: "200 OK", params: "{ unitGrossMargin: 0.425, target: 0.460 }" },
    { time: "15:41:05", agent: "Anomaly Detection", tool: "mcp://bank/feed_monitor", status: "200 OK", params: "{ scanWindow: '15m', threshold_z: 2.8 }" },
    { time: "15:38:22", agent: "Forecasting Agent", tool: "mcp://shopify/order_velocity", status: "200 OK", params: "{ sku: 'PRD-102', daysLookback: 14 }" }
  ],

  // 6 Pre-configured Reports
  reports: [
    {
      id: "REP-01",
      title: "Daily Business Summary",
      frequency: "Daily at 07:00 AM",
      format: "PDF / CSV",
      lastGenerated: "Today at 07:00 AM",
      size: "1.2 MB",
      desc: "Executive snapshot covering gross sales, completed orders, pending shipments, returns, and daily cash position.",
      sampleRows: 28
    },
    {
      id: "REP-02",
      title: "Weekly Sales Performance & Velocity",
      frequency: "Every Monday at 08:00 AM",
      format: "PDF / CSV / XLSX",
      lastGenerated: "Nov 17, 2026",
      size: "2.4 MB",
      desc: "Multi-channel sales performance, conversion rates by channel, top SKU contribution, and customer acquisition metrics.",
      sampleRows: 142
    },
    {
      id: "REP-03",
      title: "Monthly Financial Intelligence & P&L",
      frequency: "Monthly (1st of month)",
      format: "PDF / XLSX",
      lastGenerated: "Nov 01, 2026",
      size: "4.1 MB",
      desc: "Full GAAP compliant balance sheet, income statement, EBITDA breakdown, cash flow statement, and vendor cost audits.",
      sampleRows: 380
    },
    {
      id: "REP-04",
      title: "Inventory Stockout Risk & Restocking Plan",
      frequency: "Twice Weekly",
      format: "CSV / PDF",
      lastGenerated: "Nov 19, 2026",
      size: "890 KB",
      desc: "Lead-time adjusted stock projections, safety stock health, dead-stock warnings, and pre-calculated supplier PO drafts.",
      sampleRows: 85
    },
    {
      id: "REP-05",
      title: "90-Day Predictive Demand Forecast",
      frequency: "Bi-weekly",
      format: "PDF / CSV",
      lastGenerated: "Nov 15, 2026",
      size: "3.6 MB",
      desc: "Prophet-SARIMAX statistical forecast for Q4 peak season with 95% Bayesian bounds and supplier capacity constraints.",
      sampleRows: 90
    },
    {
      id: "REP-06",
      title: "Comprehensive Security & Anomaly Audit",
      frequency: "On Demand / Triggered",
      format: "PDF / CSV",
      lastGenerated: "Nov 20, 2026",
      size: "1.5 MB",
      desc: "Full event log of flagged transactions, expense variances, supplier billing disputes, and inventory shrinkage events.",
      sampleRows: 45
    }
  ],

  // 5 Automations
  defaultAutomations: [
    {
      id: "auto-1",
      name: "Daily Business Intelligence Digest",
      trigger: "Cron: Daily @ 07:00 AM EST",
      channel: "Slack #executive-bi & Email",
      status: true,
      lastRun: "Today, 07:00 AM (Success)",
      actions: "Summarize revenue, flag pending order surges, dispatch daily KPI briefing.",
      runsCount: 142
    },
    {
      id: "auto-2",
      name: "Low Inventory Stockout Guard",
      trigger: "Stock <= minStock threshold",
      channel: "Slack #warehouse-ops & Webhook",
      status: true,
      lastRun: "4 hrs ago (Triggered PRD-102)",
      actions: "Draft purchase order PO with lead time buffer, notify procurement lead.",
      runsCount: 48
    },
    {
      id: "auto-3",
      name: "High Severity Anomaly Escalation",
      trigger: "Anomaly Severity == High / Critical",
      channel: "SMS & Mobile Push Notification",
      status: true,
      lastRun: "Yesterday, 23:14 (Triggered ANM-202)",
      actions: "Place fulfillment hold on flagged order IDs, alert security lead instantly.",
      runsCount: 19
    },
    {
      id: "auto-4",
      name: "Weekly Sales & Demand Forecast Refresh",
      trigger: "Every Sunday @ 23:59 PM",
      channel: "Automated Dashboard Refresh",
      status: true,
      lastRun: "Nov 16, 23:59 (Success)",
      actions: "Re-train Prophet forecasting model with past 14 days of Shopify sales data.",
      runsCount: 36
    },
    {
      id: "auto-5",
      name: "Monthly P&L Variance Audit",
      trigger: "Monthly @ 1st day 02:00 AM",
      channel: "CFO Email & PDF Export",
      status: false,
      lastRun: "Nov 01, 02:00 (Paused by User)",
      actions: "Audit all GL expense accounts exceeding historical standard deviation +1.5x.",
      runsCount: 11
    }
  ],

  // Data Sources & Uploads
  defaultDataSources: [
    { id: "ds-1", name: "Shopify_Orders_Q3_Q4_Export.csv", type: "CSV", size: "4.8 MB", date: "2026-11-19 14:20", records: "12,480 Rows", status: "Validated · 100% Synced", health: "healthy" },
    { id: "ds-2", name: "QuickBooks_GeneralLedger_2026.xlsx", type: "XLSX", size: "8.2 MB", date: "2026-11-18 10:15", records: "4,120 Rows", status: "Validated · Clean", health: "healthy" },
    { id: "ds-3", name: "Amazon_FBA_Inventory_Report.json", type: "JSON", size: "1.4 MB", date: "2026-11-20 09:00", records: "840 Skus", status: "Validated · Active", health: "healthy" },
    { id: "ds-4", name: "Apex_Vendor_Contracts_Master.pdf", type: "PDF", size: "14.2 MB", date: "2026-11-10 16:45", records: "18 Documents", status: "Parsed & Vectorized", health: "healthy" }
  ],

  // Team Members
  team: [
    { name: "Abir Rahman", email: "abir@bizpilot.ai", role: "CEO & Founder", status: "Active", avatar: "AR", permissions: "Owner / Full Access" },
    { name: "Elena Rostova", email: "elena@bizpilot.ai", role: "Chief Financial Officer", status: "Active", avatar: "ER", permissions: "Financials & Approvals" },
    { name: "Marcus Vance", email: "marcus@bizpilot.ai", role: "Head of Operations & Supply", status: "Active", avatar: "MV", permissions: "Inventory & Logistics" },
    { name: "Sophia Zhang", email: "sophia@bizpilot.ai", role: "Growth & Ecommerce Lead", status: "Active", avatar: "SZ", permissions: "Sales & Marketing" }
  ]
};

// LocalStorage State Initializer & Helper Functions
class BizStore {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEYS.INVENTORY)) {
      localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(BIZ_DATA.defaultInventory));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ANOMALIES)) {
      localStorage.setItem(STORAGE_KEYS.ANOMALIES, JSON.stringify(BIZ_DATA.defaultAnomalies));
    }
    if (!localStorage.getItem(STORAGE_KEYS.AUTOMATIONS)) {
      localStorage.setItem(STORAGE_KEYS.AUTOMATIONS, JSON.stringify(BIZ_DATA.defaultAutomations));
    }
    if (!localStorage.getItem(STORAGE_KEYS.DATA_SOURCES)) {
      localStorage.setItem(STORAGE_KEYS.DATA_SOURCES, JSON.stringify(BIZ_DATA.defaultDataSources));
    }
  }

  // Inventory CRUD
  getInventory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.INVENTORY)) || BIZ_DATA.defaultInventory;
    } catch {
      return BIZ_DATA.defaultInventory;
    }
  }

  saveInventory(items) {
    localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(items));
  }

  addProduct(product) {
    const items = this.getInventory();
    items.unshift(product);
    this.saveInventory(items);
    return items;
  }

  updateProduct(updated) {
    const items = this.getInventory();
    const idx = items.findIndex(p => p.id === updated.id);
    if (idx !== -1) {
      items[idx] = { ...items[idx], ...updated };
      this.saveInventory(items);
    }
    return items;
  }

  deleteProduct(id) {
    const items = this.getInventory().filter(p => p.id !== id);
    this.saveInventory(items);
    return items;
  }

  // Anomalies
  getAnomalies() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.ANOMALIES)) || BIZ_DATA.defaultAnomalies;
    } catch {
      return BIZ_DATA.defaultAnomalies;
    }
  }

  updateAnomalyStatus(id, newStatus) {
    const items = this.getAnomalies();
    const item = items.find(a => a.id === id);
    if (item) {
      item.status = newStatus;
      localStorage.setItem(STORAGE_KEYS.ANOMALIES, JSON.stringify(items));
    }
    return items;
  }

  // Automations
  getAutomations() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.AUTOMATIONS)) || BIZ_DATA.defaultAutomations;
    } catch {
      return BIZ_DATA.defaultAutomations;
    }
  }

  toggleAutomation(id) {
    const items = this.getAutomations();
    const item = items.find(a => a.id === id);
    if (item) {
      item.status = !item.status;
      localStorage.setItem(STORAGE_KEYS.AUTOMATIONS, JSON.stringify(items));
    }
    return items;
  }

  // Data Sources
  getDataSources() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.DATA_SOURCES)) || BIZ_DATA.defaultDataSources;
    } catch {
      return BIZ_DATA.defaultDataSources;
    }
  }

  addDataSource(file) {
    const items = this.getDataSources();
    items.unshift(file);
    localStorage.setItem(STORAGE_KEYS.DATA_SOURCES, JSON.stringify(items));
    return items;
  }

  removeDataSource(id) {
    const items = this.getDataSources().filter(d => d.id !== id);
    localStorage.setItem(STORAGE_KEYS.DATA_SOURCES, JSON.stringify(items));
    return items;
  }

  // Reset to Factory Demo
  resetAll() {
    localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(BIZ_DATA.defaultInventory));
    localStorage.setItem(STORAGE_KEYS.ANOMALIES, JSON.stringify(BIZ_DATA.defaultAnomalies));
    localStorage.setItem(STORAGE_KEYS.AUTOMATIONS, JSON.stringify(BIZ_DATA.defaultAutomations));
    localStorage.setItem(STORAGE_KEYS.DATA_SOURCES, JSON.stringify(BIZ_DATA.defaultDataSources));
  }
}

// Global store instance
window.store = new BizStore();

