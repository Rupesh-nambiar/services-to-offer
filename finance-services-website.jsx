import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle, TrendingUp, Shield, Award, Globe, Users, BarChart3, FileText, Calculator, Target, Mail, Linkedin, Phone, ChevronRight, Sparkles, PieChart, DollarSign } from 'lucide-react';

const FinanceServicesWebsite = () => {
  const [activeService, setActiveService] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            if (entry.target.id === 'stats' && !hasAnimated) {
              setHasAnimated(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [hasAnimated]);

  const services = [
    {
      icon: FileText,
      title: "Financial Reporting & Compliance",
      description: "IFRS-compliant financial statements, management accounts, and regulatory reporting that satisfy auditors and stakeholders.",
      features: [
        "Monthly/Quarterly/Annual financial statements",
        "IFRS 15 Revenue recognition implementation",
        "Management reporting packages with KPI dashboards",
        "Audit-ready documentation and support"
      ],
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: Calculator,
      title: "Bookkeeping & Accounting",
      description: "End-to-end accounting operations managed with precision, giving you real-time visibility into your financial position.",
      features: [
        "Full AP/AR cycle management",
        "Bank reconciliations and cash flow monitoring",
        "GL management and month-end close",
        "Multi-entity consolidation support"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Shield,
      title: "Internal Audit & Controls",
      description: "Risk-based audit services that strengthen controls, reduce compliance exposure, and drive operational efficiency.",
      features: [
        "Process and control evaluation",
        "Risk assessment and audit planning",
        "Compliance reviews (VAT, RERA, industry regulations)",
        "Management action plan tracking"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: TrendingUp,
      title: "Budgeting & Financial Planning",
      description: "Strategic financial planning that connects operational targets with capital allocation and growth objectives.",
      features: [
        "Annual budgets and rolling forecasts",
        "Variance analysis and performance reporting",
        "Cash flow projections and working capital optimization",
        "Investment appraisals and feasibility studies"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: DollarSign,
      title: "UAE VAT & Tax Compliance",
      description: "Expert VAT filing, FTA audit support, and tax advisory ensuring zero penalties and optimal compliance.",
      features: [
        "VAT return preparation and filing",
        "FTA audit representation and support",
        "VAT health checks and reconciliation",
        "Tax advisory for business transactions"
      ],
      gradient: "from-red-500/20 to-rose-500/20"
    },
    {
      icon: BarChart3,
      title: "ERP Implementation & Optimization",
      description: "Hands-on support for SAP, NAV, QuickBooks migrations and optimization—ensuring data integrity and process efficiency.",
      features: [
        "System migration and data conversion",
        "Process mapping and workflow design",
        "User training and documentation",
        "Post-implementation support and optimization"
      ],
      gradient: "from-indigo-500/20 to-violet-500/20"
    }
  ];

  const achievements = [
    { value: 50, label: "Reduction in Audit Discrepancies", suffix: "%" },
    { value: 30, label: "Procurement Cost Savings", suffix: "%" },
    { value: 50, label: "Improved Receivable Turnover", suffix: "%" },
    { value: 5, label: "Years UAE/GCC Experience", suffix: "+" }
  ];

  const credentials = [
    { icon: Award, title: "ACCA Qualified", description: "Full Member with AAA & AFM specializations" },
    { icon: Globe, title: "Multi-System Expertise", description: "SAP, NAV, QuickBooks, Tally, Xpedeon" },
    { icon: Shield, title: "Compliance Certified", description: "IFRS, UAE VAT, RERA, IIA Standards" },
    { icon: Users, title: "Enterprise Experience", description: "Sobha Realty, Star Cinemas, Multi-entity operations" }
  ];

  const workflowSteps = [
    { step: "01", title: "Discovery", description: "Understanding your business, challenges, and financial objectives" },
    { step: "02", title: "Scoping", description: "Defining deliverables, timelines, and success metrics" },
    { step: "03", title: "Execution", description: "Hands-on delivery with regular updates and transparent communication" },
    { step: "04", title: "Optimization", description: "Continuous improvement and proactive recommendations" }
  ];

  const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!hasAnimated) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [hasAnimated, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8 animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-200 font-medium">ACCA-Certified Financial Partner</span>
          </div>

          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            style={{ 
              animationDelay: '0.4s', 
              opacity: 0, 
              animationFillMode: 'forwards',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            Precision Finance Solutions
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              For Global Growth
            </span>
          </h1>

          <p 
            className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
          >
            Strategic financial management expertise without the enterprise overhead. 
            IFRS reporting, audit excellence, and compliance mastery—delivered with the agility your business demands.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a 
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg font-semibold text-slate-900 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
            >
              Start a Conversation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {credentials.map((cred, idx) => (
              <div key={idx} className="text-center p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                <cred.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-sm font-semibold text-amber-200">{cred.title}</div>
                <div className="text-xs text-slate-400 mt-1">{cred.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-400 rotate-90" />
        </div>
      </section>

      {/* Results Section */}
      <section id="stats" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Measurable <span className="text-amber-400">Impact</span>
            </h2>
            <p className="text-xl text-slate-400">Results that speak louder than credentials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div 
                key={idx}
                className={`p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-2xl text-center hover:border-amber-500/40 transition-all duration-500 ${
                  isVisible.stats ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-amber-400 mb-3">
                  <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
                </div>
                <div className="text-slate-300 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Service <span className="text-amber-400">Portfolio</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your business stage and industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-500 cursor-pointer ${
                  isVisible.services ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setActiveService(activeService === idx ? null : idx)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-amber-400" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-amber-100">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>

                <div className={`overflow-hidden transition-all duration-500 ${
                  activeService === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-slate-700/50 space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 text-amber-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  {activeService === idx ? 'Show less' : 'Learn more'}
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeService === idx ? 'rotate-90' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-blue-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why <span className="text-amber-400">Partner</span> With Me?
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100">Elite Credentials</h3>
                    <p className="text-slate-400">ACCA-qualified with advanced specializations in audit (AAA) and financial management (AFM). M.Com in Advanced Accountancy.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100">GCC Market Expertise</h3>
                    <p className="text-slate-400">5+ years of hands-on UAE experience with deep knowledge of regional regulations: IFRS, UAE VAT, FTA compliance, RERA escrow standards.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100">Results-Driven Approach</h3>
                    <p className="text-slate-400">Proven track record: 50% reduction in audit issues, 30% cost savings, and 50% improvement in cash collection—delivering value beyond compliance.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100">Enterprise-Grade Systems</h3>
                    <p className="text-slate-400">Proficient in SAP HANA/S4, Microsoft Dynamics NAV, QuickBooks, Tally—bridging SME tools and enterprise platforms seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-amber-100">Engagement Process</h3>
                
                <div className="space-y-6">
                  {workflowSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-2xl text-amber-400">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1 text-amber-100">{step.title}</h4>
                        <p className="text-slate-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <p className="text-sm text-amber-100 leading-relaxed">
                    <strong>Flexible Engagement Models:</strong> Monthly retainers, project-based scopes, or interim CFO support—structured to match your business cycle and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Industry <span className="text-amber-400">Experience</span>
            </h2>
            <p className="text-xl text-slate-400">Serving diverse sectors across the GCC region</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-3 text-amber-100">Real Estate & Construction</h3>
              <p className="text-slate-400 mb-4">
                Audit experience at Sobha Realty with expertise in revenue recognition (IFRS 15), escrow compliance, and project finance.
              </p>
              <div className="text-sm text-amber-400 font-semibold">SAP HANA · RERA Compliance · Multi-entity Consolidation</div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-3 text-amber-100">Entertainment & Hospitality</h3>
              <p className="text-slate-400 mb-4">
                Full finance operations for Star Cinemas (16 locations) including investment appraisals, KPI monitoring, and cost optimization.
              </p>
              <div className="text-sm text-amber-400 font-semibold">F&B Cost Control · Multi-location Reporting · Power BI</div>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3 text-amber-100">Professional Services & SMEs</h3>
              <p className="text-slate-400 mb-4">
                Audit and accounting for IT solutions, restaurants, chemical industry, and cooperative banking sectors.
              </p>
              <div className="text-sm text-amber-400 font-semibold">QuickBooks · Tally · End-to-end Bookkeeping</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/10" />
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's <span className="text-amber-400">Connect</span>
            </h2>
            <p className="text-xl text-slate-400">
              Ready to elevate your financial operations? Let's discuss how I can support your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:rupeshnambiar@hotmail.com"
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300 text-center"
            >
              <Mail className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-amber-100 mb-2">Email</div>
              <div className="text-sm text-slate-400 break-all">rupeshnambiar@hotmail.com</div>
            </a>

            <a 
              href="https://linkedin.com/in/rupeshsnambiar"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300 text-center"
            >
              <Linkedin className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-amber-100 mb-2">LinkedIn</div>
              <div className="text-sm text-slate-400">/in/rupeshsnambiar</div>
            </a>

            <a 
              href="tel:+971501870661"
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 transition-all duration-300 text-center"
            >
              <Phone className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-amber-100 mb-2">Phone</div>
              <div className="text-sm text-slate-400">+971 50 187 0661</div>
            </a>
          </div>

          <div className="p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-2xl text-center">
            <p className="text-lg text-amber-100 mb-4">
              <strong>Available for engagements:</strong> Monthly retainers · Project-based consulting · Interim finance leadership
            </p>
            <p className="text-slate-400">
              Based in Dubai, UAE · Serving clients across GCC, Asia, Europe, and North America
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Rupesh Nambiar
              </div>
              <div className="text-sm text-slate-400">ACCA · M.Com · B.Com</div>
            </div>

            <div className="flex gap-6">
              <a href="mailto:rupeshnambiar@hotmail.com" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/rupeshsnambiar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="tel:+971501870661" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>

            <div className="text-sm text-slate-500 text-center md:text-right">
              © 2026 Rupesh Nambiar
              <br />
              Dubai, United Arab Emirates
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgb(15 23 42);
        }

        ::-webkit-scrollbar-thumb {
          background: rgb(251 191 36 / 0.3);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgb(251 191 36 / 0.5);
        }
      `}</style>
    </div>
  );
};

export default FinanceServicesWebsite;
