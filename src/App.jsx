import React, { useState } from 'react';
import { 
  Search, Globe, FileText, ExternalLink, Download, 
  CheckCircle2, Building2, ShieldCheck, ArrowRight, 
  Check, X, CreditCard, Bookmark, Share2, AlertCircle, 
  Layers, Settings, Plus, RefreshCw, Send, MoreVertical,
  ChevronLeft, Menu
} from 'lucide-react';

const initialUpdates = [
  {
    id: 1,
    authority: 'US FDA',
    country: 'United States',
    flag: '🇺🇸',
    circularNo: 'FDA-2026-D-0412',
    date: 'Sep 28, 2026',
    timeAgo: '3h ago',
    urgency: 'Critical',
    urgencyColor: 'bg-red-50 text-red-700 border-red-200',
    title: 'Guidance on Microbial Quality & Endotoxin Limits for Sterile Injectables',
    category: 'Manufacturing Quality (GMP)',
    deadline: 'December 31, 2026',
    simpleSummary: 'The US FDA has released updated rules regarding cleanliness and sterility testing for liquid medicines and injections. Pharma companies must update their factory sterilization standards within 90 days.',
    actionItems: [
      'Recalibrate online endotoxin screening sensors against new standards.',
      'Submit revised microbial qualification dossiers prior to audits.',
      'Review cleanroom airflow and pressure records.'
    ],
    whoNeedsToAct: 'Sterile injection manufacturers, QA Directors, and plant engineers.',
    sourceUrl: 'https://www.fda.gov',
    fileSize: '2.4 MB PDF'
  },
  {
    id: 2,
    authority: 'EMA',
    country: 'European Union',
    flag: '🇪🇺',
    circularNo: 'EMA/CHMP/5521/2026',
    date: 'Sep 27, 2026',
    timeAgo: '1d ago',
    urgency: 'Major',
    urgencyColor: 'bg-amber-50 text-amber-700 border-amber-200',
    title: 'Cleanroom Classification & Automated Barrier Isolator Protocols',
    category: 'Cleanroom Standards',
    deadline: 'November 15, 2026',
    simpleSummary: 'European health authorities have released new guidelines for sterile cleanrooms. Manual glove inspections will be replaced with automated electronic logging.',
    actionItems: [
      'Upgrade barrier isolators with digital pressure transmitters.',
      'Implement electronic audit records for batch approvals.'
    ],
    whoNeedsToAct: 'Plant Engineering and Quality Assurance teams.',
    sourceUrl: 'https://www.ema.europa.eu',
    fileSize: '1.8 MB PDF'
  },
  {
    id: 3,
    authority: 'CDSCO',
    country: 'India',
    flag: '🇮🇳',
    circularNo: 'CDSCO-DCGI-2026-118',
    date: 'Sep 26, 2026',
    timeAgo: '2d ago',
    urgency: 'Mandatory',
    urgencyColor: 'bg-red-50 text-red-700 border-red-200',
    title: 'Mandatory Dynamic 2D QR Traceability on Active Pharmaceutical Ingredients',
    category: 'Packaging & Anti-Counterfeit',
    deadline: 'Immediate Effect',
    simpleSummary: 'The Indian drug regulator mandates QR codes on all raw medicine shipments (APIs). Barcodes must link to the central government database to prevent counterfeit drugs.',
    actionItems: [
      'Connect barcode scanners with the central government portal.',
      'Print dynamic 2D barcodes on all bulk packaging containers.'
    ],
    whoNeedsToAct: 'API manufacturers, exporters, and supply chain managers.',
    sourceUrl: 'https://cdsco.gov.in',
    fileSize: '950 KB PDF'
  },
  {
    id: 4,
    authority: 'MHRA',
    country: 'United Kingdom',
    flag: '🇬🇧',
    circularNo: 'MHRA-UK-2026-09',
    date: 'Sep 24, 2026',
    timeAgo: '4d ago',
    urgency: 'Standard Notice',
    urgencyColor: 'bg-blue-50 text-blue-700 border-blue-200',
    title: 'Expedited Safety Reporting Protocols for Biological Products',
    category: 'Drug Safety & Reporting',
    deadline: 'January 10, 2027',
    simpleSummary: 'New digital submission forms for reporting unexpected medicine side effects directly through the UK government portal.',
    actionItems: [
      'Verify team login credentials on the MHRA portal.',
      'Update internal Standard Operating Procedures (SOP) for adverse event logging.'
    ],
    whoNeedsToAct: 'Drug safety and clinical compliance teams.',
    sourceUrl: 'https://www.gov.uk/mhra',
    fileSize: '1.2 MB PDF'
  }
];

const subscriptionPlans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    badge: 'Standard Access',
    priceINR: '₹4,999',
    period: '/ month',
    description: 'Basic access for small pharma companies and local manufacturers.',
    features: [
      'Access to 15 Major Authorities (US FDA, EMA, CDSCO, WHO)',
      'Keyword & Medicine Search',
      'Download Official PDF Circulars',
      'Single User Login',
      'Weekly Email Updates'
    ],
    popular: false,
    cta: 'Select Starter Plan'
  },
  {
    id: 'pro',
    name: 'Professional Plan',
    badge: 'Most Popular',
    priceINR: '₹14,999',
    period: '/ month',
    description: 'Complete regulatory tracking for pharma exporters and QA teams.',
    features: [
      'Access to All 170+ Global Health Authorities',
      'Immediate Email & WhatsApp Alerts',
      'Plain English Summary of Every Update',
      'Up to 5 Team User Accounts',
      'Export Data to Excel & PDF Reports',
      'Dedicated Account Support'
    ],
    popular: true,
    cta: 'Upgrade to Professional'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    badge: 'Full Company',
    priceINR: '₹34,999',
    period: '/ month',
    description: 'Custom corporate license with unlimited access across all plants.',
    features: [
      'Unlimited Users Across All Manufacturing Sites',
      'Direct API Access for Internal Company Software',
      'Custom Tracking for Specific Medicines',
      'Quarterly Compliance Audit Reports',
      '24/7 Priority Support'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

const initialSubscribers = [
  { id: 'SUB-8901', company: 'Sun Pharma Ltd', user: 'Dr. Rajesh Mehta', email: 'r.mehta@sunpharma.com', plan: 'Professional', amount: '₹14,999/mo', status: 'Active', billingCycle: 'Monthly Auto', renewal: '24 Oct 2026' },
  { id: 'SUB-8902', company: 'Dr. Reddy’s Labs', user: 'Anjali Sharma', email: 'asharma@drreddys.com', plan: 'Enterprise', amount: '₹34,999/mo', status: 'Active', billingCycle: 'Annual Contract', renewal: '12 Nov 2026' },
  { id: 'SUB-8903', company: 'Cipla QA Team', user: 'Vikas Patel', email: 'v.patel@cipla.com', plan: 'Professional', amount: '₹14,999/mo', status: 'Active', billingCycle: 'Monthly Auto', renewal: '19 Oct 2026' },
  { id: 'SUB-8904', company: 'Aurobindo Pharma', user: 'Karthik Rao', email: 'k.rao@aurobindo.com', plan: 'Starter', amount: '₹4,999/mo', status: 'Trial', billingCycle: 'Trial (4 Days)', renewal: '02 Oct 2026' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'plans' | 'admin'
  const [adminSubTab, setAdminSubTab] = useState('subscribers'); // 'subscribers' | 'publish' | 'connectors'
  
  const [updates, setUpdates] = useState(initialUpdates);
  const [selectedUpdate, setSelectedUpdate] = useState(initialUpdates[0]);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [search, setSearch] = useState('');
  const [selectedAuthority, setSelectedAuthority] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [chosenPlan, setChosenPlan] = useState(null);
  const [savedIds, setSavedIds] = useState([1]);

  // Admin Form State
  const [newTitle, setNewTitle] = useState('');
  const [newAuthority, setNewAuthority] = useState('US FDA');
  const [newCategory, setNewCategory] = useState('Manufacturing Quality (GMP)');
  const [newUrgency, setNewUrgency] = useState('Critical');
  const [newSummary, setNewSummary] = useState('');
  const [newWho, setNewWho] = useState('');
  const [publishSuccess, setPublishSuccess] = useState(false);

  const [connectors, setConnectors] = useState([
    { id: 1, name: 'US FDA', full: 'Food and Drug Administration', country: 'United States', flag: '🇺🇸', interval: '15m', status: 'Connected', autoPublish: true },
    { id: 2, name: 'EMA', full: 'European Medicines Agency', country: 'European Union', flag: '🇪🇺', interval: '30m', status: 'Connected', autoPublish: true },
    { id: 3, name: 'CDSCO', full: 'Central Drugs Standard Control Org', country: 'India', flag: '🇮🇳', interval: '15m', status: 'Connected', autoPublish: true },
    { id: 4, name: 'MHRA', full: 'Medicines & Healthcare Reg Agency', country: 'United Kingdom', flag: '🇬🇧', interval: '60m', status: 'Connected', autoPublish: false }
  ]);

  const toggleAutoPublish = (id) => {
    setConnectors(connectors.map(c => c.id === id ? { ...c, autoPublish: !c.autoPublish } : c));
  };

  const handleSelectCard = (item) => {
    setSelectedUpdate(item);
    setMobileDetailOpen(true);
  };

  const handleCreateCircular = (e) => {
    e.preventDefault();
    if (!newTitle || !newSummary) return;

    const newEntry = {
      id: Date.now(),
      authority: newAuthority,
      country: newAuthority === 'US FDA' ? 'United States' : newAuthority === 'CDSCO' ? 'India' : 'Europe',
      flag: newAuthority === 'US FDA' ? '🇺🇸' : newAuthority === 'CDSCO' ? '🇮🇳' : '🇪🇺',
      circularNo: `CIRC-${Math.floor(1000 + Math.random() * 9000)}/2026`,
      date: 'Sep 28, 2026',
      timeAgo: 'Just now',
      urgency: newUrgency,
      urgencyColor: newUrgency === 'Critical' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-blue-50 text-blue-700 border-blue-200',
      title: newTitle,
      category: newCategory,
      deadline: 'Standard Compliance (60 Days)',
      simpleSummary: newSummary,
      actionItems: [
        'Review internal manufacturing and quality SOPs against published terms.',
        'Submit mandatory validation paperwork to regional health inspectors.'
      ],
      whoNeedsToAct: newWho || 'All QA and Manufacturing Heads.',
      sourceUrl: 'https://example.com/regulatory',
      fileSize: '1.5 MB PDF'
    };

    setUpdates([newEntry, ...updates]);
    setSelectedUpdate(newEntry);
    setPublishSuccess(true);
    setTimeout(() => {
      setPublishSuccess(false);
      setActiveTab('feed');
      setMobileDetailOpen(false);
    }, 1200);

    setNewTitle('');
    setNewSummary('');
    setNewWho('');
  };

  const toggleBookmark = (id) => {
    setSavedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const filteredUpdates = updates.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.simpleSummary.toLowerCase().includes(search.toLowerCase()) ||
                          item.circularNo.toLowerCase().includes(search.toLowerCase());
    const matchesAuth = selectedAuthority === 'All' || item.authority === selectedAuthority;
    const matchesCat = selectedCategory === 'All' || item.category.includes(selectedCategory);
    return matchesSearch && matchesAuth && matchesCat;
  });

  const handleSelectPlan = (plan) => {
    setChosenPlan(plan);
    setShowCheckoutModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans antialiased">
      
      {/* 1. Universal Responsive Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm font-bold text-base sm:text-lg shrink-0">
              N
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg tracking-tight">Nexaro Healthcare</span>
                <span className="hidden xs:inline-block text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200">
                  Regulatory
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">Global Pharmaceutical Compliance Intelligence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => { setActiveTab('feed'); setMobileDetailOpen(false); }}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'feed'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Latest Updates
              </button>
              <button
                onClick={() => setActiveTab('plans')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'plans'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                Pricing Plans
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                  activeTab === 'admin'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                Admin Panel
              </button>
            </div>

            <button 
              onClick={() => setActiveTab('plans')}
              className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-lg transition-colors shadow-sm flex items-center gap-1.5"
            >
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={() => setActiveTab('plans')}
              className="text-xs font-bold bg-blue-600 text-white px-2.5 py-1.5 rounded-lg"
            >
              Plans
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 shadow-lg">
            <button
              onClick={() => { setActiveTab('feed'); setMobileDetailOpen(false); setMobileMenuOpen(false); }}
              className={`w-full text-left text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'feed' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" /> Latest Regulatory Updates
            </button>
            <button
              onClick={() => { setActiveTab('plans'); setMobileMenuOpen(false); }}
              className={`w-full text-left text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'plans' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <CreditCard className="w-4 h-4" /> Subscription Pricing
            </button>
            <button
              onClick={() => { setActiveTab('admin'); setMobileMenuOpen(false); }}
              className={`w-full text-left text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'admin' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Settings className="w-4 h-4" /> Enterprise Admin Console
            </button>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-7 w-full flex-1">
        
        {/* VIEW 1: REGULATORY FEED */}
        {activeTab === 'feed' && (
          <div>
            {/* KPI Cards (2 Columns on mobile, 4 Columns on desktop) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-1.5">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 truncate">Websites Tracked</span>
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900">170+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">Global health portals</div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-1.5">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 truncate">Countries</span>
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900">54</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">US, Europe, India+</div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-1.5">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 truncate">Circulars</span>
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 shrink-0" />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900">{updates.length + 2400}+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">Searchable library</div>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-1.5">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 truncate">New Today</span>
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 shrink-0" />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold text-red-600">3 Notices</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">Immediate attention</div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-3 sm:p-3.5 mb-4 sm:mb-6 space-y-2.5 sm:space-y-3">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3">
                
                {/* Search */}
                <div className="relative w-full md:flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search by drug name, rule, or circular number..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 pl-9 pr-3 py-2 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Authority Buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider pl-0.5 mr-1 shrink-0">Agency:</span>
                  {['All', 'US FDA', 'EMA', 'CDSCO', 'MHRA'].map((auth) => (
                    <button
                      key={auth}
                      onClick={() => setSelectedAuthority(auth)}
                      className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                        selectedAuthority === auth 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {auth}
                    </button>
                  ))}
                </div>
              </div>

              {/* Domain Category Chips */}
              <div className="flex items-center gap-1.5 sm:gap-2 pt-2 border-t border-slate-100 overflow-x-auto text-[11px] pb-1 sm:pb-0 scrollbar-none">
                <span className="text-slate-400 font-medium shrink-0">Domain:</span>
                {['All', 'GMP', 'Cleanroom', 'Packaging', 'Safety'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-slate-800 text-white font-semibold' 
                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {cat === 'All' ? 'All Categories' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Layout: Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
              
              {/* Left Column (List) */}
              <div className={`space-y-3 ${mobileDetailOpen ? 'hidden lg:block lg:col-span-5' : 'block lg:col-span-5'}`}>
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Recent Circulars ({filteredUpdates.length})
                  </span>
                  <span className="text-[11px] text-slate-400">Live indexed</span>
                </div>

                {filteredUpdates.map((item) => {
                  const isSelected = selectedUpdate?.id === item.id;
                  const isSaved = savedIds.includes(item.id);

                  return (
                    <div 
                      key={item.id}
                      onClick={() => handleSelectCard(item)}
                      className={`cursor-pointer bg-white p-3.5 sm:p-4 rounded-xl border transition-all text-left relative group ${
                        isSelected 
                          ? 'border-blue-600 shadow-md ring-2 ring-blue-600/10' 
                          : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm sm:text-base">{item.flag}</span>
                          <span className="font-bold text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                            {item.authority}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono hidden xs:inline">• {item.circularNo}</span>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${item.urgencyColor}`}>
                          {item.urgency}
                        </span>
                      </div>

                      <h3 className={`font-bold text-xs sm:text-sm leading-snug mb-1.5 transition-colors ${
                        isSelected ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'
                      }`}>
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                        {item.simpleSummary}
                      </p>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium text-[10px]">
                            {item.category.split('/')[0]}
                          </span>
                          <span>{item.timeAgo}</span>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(item.id);
                          }}
                          className={`p-1 rounded hover:bg-slate-100 transition-colors ${isSaved ? 'text-blue-600' : 'text-slate-400'}`}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-blue-600 text-blue-600' : ''}`} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column (Reader) */}
              <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6 lg:sticky lg:top-24 ${
                mobileDetailOpen ? 'block col-span-1 lg:col-span-7' : 'hidden lg:block lg:col-span-7'
              }`}>
                {selectedUpdate && (
                  <div>
                    {/* Mobile Back Button (Only shows on small devices) */}
                    <div className="lg:hidden mb-3 pb-2 border-b border-slate-100">
                      <button 
                        onClick={() => setMobileDetailOpen(false)}
                        className="text-xs font-bold text-blue-600 flex items-center gap-1 py-1"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back to Circulars List
                      </button>
                    </div>

                    <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{selectedUpdate.flag}</span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded">
                              {selectedUpdate.authority} Official Circular
                            </span>
                            <span className="text-xs text-slate-500 hidden sm:inline">{selectedUpdate.country}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button 
                          onClick={() => toggleBookmark(selectedUpdate.id)}
                          className="p-1.5 sm:p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                          title="Save Circular"
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${savedIds.includes(selectedUpdate.id) ? 'fill-blue-600 text-blue-600' : ''}`} />
                        </button>
                        <button 
                          onClick={() => alert('Link copied to clipboard for team sharing.')}
                          className="p-1.5 sm:p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                          title="Share Link"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="py-3 sm:py-4">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mb-1">
                        <span>Ref: {selectedUpdate.circularNo}</span>
                        <span>•</span>
                        <span>{selectedUpdate.date}</span>
                      </div>
                      <h2 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">
                        {selectedUpdate.title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <div className="p-2.5 sm:p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">Topic</span>
                        <span className="text-xs font-bold text-slate-800 mt-0.5 block">{selectedUpdate.category}</span>
                      </div>
                      <div className="p-2.5 sm:p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">Compliance Target</span>
                        <span className="text-xs font-bold text-red-600 mt-0.5 block">{selectedUpdate.deadline}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-4 sm:mb-5 bg-blue-50/60 border border-blue-100 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs mb-1.5">
                        <FileText className="w-4 h-4 text-blue-700" />
                        Key Highlights:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {selectedUpdate.simpleSummary}
                      </p>
                    </div>

                    {/* Action Items */}
                    <div className="mb-4 sm:mb-5">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Action Checklist for Manufacturing Sites:
                      </div>
                      <div className="space-y-2">
                        {selectedUpdate.actionItems.map((act, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 sm:p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Department impact */}
                    <div className="mb-5 sm:mb-6 p-2.5 sm:p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl text-xs">
                      <span className="font-bold text-amber-900 block mb-0.5">Who Needs to Take Action:</span>
                      <span className="text-amber-800">{selectedUpdate.whoNeedsToAct}</span>
                    </div>

                    {/* Buttons */}
                    <div className="pt-3 sm:pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                      <button 
                        onClick={() => alert(`Downloading official authentic gazette: ${selectedUpdate.circularNo}`)}
                        className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download Official Gazette ({selectedUpdate.fileSize})
                      </button>
                      <a 
                        href={selectedUpdate.sourceUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full sm:w-auto text-center border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                      >
                        Source Portal <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: PRICING PLANS */}
        {activeTab === 'plans' && (
          <div className="px-1">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pharmaceutical Regulatory Plans
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-2">
                Select the access level suited for your QA, compliance, and export leadership teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
              {subscriptionPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`bg-white rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all relative ${
                    plan.popular 
                      ? 'border-blue-600 shadow-lg ring-2 ring-blue-600' 
                      : 'border-slate-200 shadow-xs hover:border-slate-300'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                      {plan.badge}
                    </span>
                  )}

                  <div>
                    <div className="text-base font-bold text-slate-900">{plan.name}</div>
                    <p className="text-xs text-slate-500 mt-1 min-h-[30px]">{plan.description}</p>

                    <div className="mt-4 mb-5 flex items-baseline">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{plan.priceINR}</span>
                      <span className="text-xs text-slate-400 ml-1">{plan.period}</span>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8">
                    <button
                      onClick={() => handleSelectPlan(plan)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: ADVANCED ENTERPRISE ADMIN CONTROL CENTER */}
        {activeTab === 'admin' && (
          <div className="space-y-4 sm:space-y-6">
            
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 rounded">
                    Admin Console
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Nexaro Healthcare Pvt Ltd
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Platform Control Center</h2>
              </div>

              {/* Responsive Admin Tabs */}
              <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold w-full md:w-auto overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setAdminSubTab('subscribers')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
                    adminSubTab === 'subscribers' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Subscribers & Revenue
                </button>
                <button
                  onClick={() => setAdminSubTab('publish')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-all flex items-center gap-1 ${
                    adminSubTab === 'publish' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" /> Publish Circular
                </button>
                <button
                  onClick={() => setAdminSubTab('connectors')}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
                    adminSubTab === 'connectors' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Authority Feeds
                </button>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] sm:text-xs font-medium text-slate-500">Active Companies</div>
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">{initialSubscribers.length} Paid</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">+2 joined this week</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] sm:text-xs font-medium text-slate-500">Monthly Revenue (MRR)</div>
                <div className="text-lg sm:text-2xl font-extrabold text-blue-600 mt-1">₹84,495</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Recurring auto-debit</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] sm:text-xs font-medium text-slate-500">Tracked Authorities</div>
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">174 Active</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Global coverage</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-[11px] sm:text-xs font-medium text-slate-500">Payment Gateway</div>
                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-1">Razorpay Live</div>
                <div className="text-[10px] text-slate-500 mt-0.5">UPI & Cards enabled</div>
              </div>
            </div>

            {/* SUB-VIEW A: SUBSCRIBERS TABLE WITH HORIZONTAL SCROLL FOR MOBILE */}
            {adminSubTab === 'subscribers' && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-3.5 sm:p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Active Customer Subscriptions</h3>
                    <p className="text-xs text-slate-400">Companies with licensed access to the regulatory database.</p>
                  </div>
                  <button 
                    onClick={() => alert('Exporting subscriber list in CSV format...')}
                    className="text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg self-start sm:self-auto"
                  >
                    Export CSV
                  </button>
                </div>

                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse text-xs whitespace-nowrap">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                        <th className="py-3 px-4">Company Name</th>
                        <th className="py-3 px-4">Account Lead</th>
                        <th className="py-3 px-4">Plan</th>
                        <th className="py-3 px-4">Fee</th>
                        <th className="py-3 px-4">Billing</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Renewal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {initialSubscribers.map((sub) => (
                        <tr key={sub.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {sub.company}
                            <span className="block text-[10px] font-normal text-slate-400">{sub.id}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div>{sub.user}</div>
                            <span className="text-[10px] text-slate-400">{sub.email}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200">
                              {sub.plan}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-900">{sub.amount}</td>
                          <td className="py-3.5 px-4 text-slate-500">{sub.billingCycle}</td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                              sub.status === 'Active' 
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                : 'bg-amber-50 text-amber-700 border border-amber-200'
                            }`}>
                              {sub.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-500">{sub.renewal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SUB-VIEW B: PUBLISH FORM */}
            {adminSubTab === 'publish' && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 sm:p-6 max-w-2xl mx-auto">
                <div className="mb-4 pb-3 border-b border-slate-200">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Publish Regulatory Circular</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Manually publish a circular to make it immediately visible to all paying subscribers.
                  </p>
                </div>

                {publishSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">Circular Published Successfully!</div>
                      <div className="text-[11px] text-emerald-700">Redirecting to live regulatory feed view...</div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleCreateCircular} className="space-y-3.5 text-xs">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Circular Title / Regulation Headline *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Revised Stability Testing for Tropical Climate Zones" 
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Health Authority *</label>
                        <select 
                          value={newAuthority} 
                          onChange={(e) => setNewAuthority(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="US FDA">US FDA (United States)</option>
                          <option value="EMA">EMA (Europe)</option>
                          <option value="CDSCO">CDSCO (India)</option>
                          <option value="MHRA">MHRA (United Kingdom)</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Domain *</label>
                        <select 
                          value={newCategory} 
                          onChange={(e) => setNewCategory(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="Manufacturing Quality (GMP)">GMP Quality</option>
                          <option value="Cleanroom Standards">Cleanroom</option>
                          <option value="Packaging & Anti-Counterfeit">Packaging</option>
                          <option value="Drug Safety & Reporting">Drug Safety</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Priority *</label>
                        <select 
                          value={newUrgency} 
                          onChange={(e) => setNewUrgency(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="Critical">Critical</option>
                          <option value="Major">Major</option>
                          <option value="Mandatory">Mandatory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Plain English Summary *</label>
                      <textarea 
                        rows={3}
                        required
                        placeholder="Provide a 2-sentence summary explaining what changed and what actions are required..."
                        value={newSummary}
                        onChange={(e) => setNewSummary(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Impacted Departments</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Sterile formulation plants & QA leads" 
                        value={newWho}
                        onChange={(e) => setNewWho(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                      <button 
                        type="button" 
                        onClick={() => setAdminSubTab('subscribers')}
                        className="px-3.5 py-2 border border-slate-200 rounded-lg text-slate-600 font-semibold"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xs flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" /> Publish to Feed
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* SUB-VIEW C: AUTHORITY FEED SETTINGS */}
            {adminSubTab === 'connectors' && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Health Authority Sync Feeds</h3>
                    <p className="text-xs text-slate-400">Configure connection sync frequency and auto-publishing rules.</p>
                  </div>
                  <button 
                    onClick={() => alert('All authority connections refreshed.')}
                    className="text-xs font-semibold px-2.5 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" /> Refresh
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {connectors.map((item) => (
                    <div key={item.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.flag}</span>
                          <div>
                            <span className="font-bold text-xs text-slate-900 block">{item.name}</span>
                            <span className="text-[10px] text-slate-500 block truncate max-w-[120px]">{item.country}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">Sync: {item.interval}</span>
                        <button 
                          onClick={() => toggleAutoPublish(item.id)}
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                            item.autoPublish 
                              ? 'bg-slate-900 text-white' 
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          Auto: {item.autoPublish ? 'ON' : 'OFF'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </main>

      {/* Checkout Modal (Fully Responsive) */}
      {showCheckoutModal && chosenPlan && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-sm sm:max-w-md w-full p-5 sm:p-6 relative">
            <button 
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
              Confirm Subscription
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {chosenPlan.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Secure onboarding for your organization via Razorpay gateway.
            </p>

            <div className="my-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div className="flex justify-between items-center font-semibold text-slate-800 pb-2 border-b border-slate-200">
                <span>Billing Cycle</span>
                <span>Monthly Recurring</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-slate-900 pt-2">
                <span>Total Due</span>
                <span className="text-blue-600 text-base">{chosenPlan.priceINR}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                alert(`Proceeding to Razorpay checkout for ${chosenPlan.name} (${chosenPlan.priceINR}).`);
                setShowCheckoutModal(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <CreditCard className="w-4 h-4" /> Pay via Razorpay / Corporate UPI
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-2.5">
              256-bit encrypted • Instant tax invoice generated
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-5 text-center text-xs text-slate-400">
        <p>© 2026 Nexaro Healthcare Pvt Ltd. All rights reserved. Global Pharmaceutical Compliance Intelligence.</p>
      </footer>

    </div>
  );
}