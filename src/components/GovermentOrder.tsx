import React, { useState } from 'react';
import '../styles/government-orders.css';
import { Link } from "react-router-dom";
import UtilityBar from "./navigation/UtilityBar";


export default function GovernmentOrders() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const governmentOrders = [
    {
      slNo: 1,
      orderName: "நிலம் தொடர்பான அரசானை",
      description: "நிலம் தொடர்பான Go 337 பக்கம் கொண்டது",
      downloadText: "பதிவிறக்கம்"
    },
    {
      slNo: 2,
      orderName: "வாரிசு சான்று",
      description: "வாரிசு சான்று பெறுவதற்குரிய தற்போதைய வழிகாட்டுதல்கள் குறித்த அரசாணை G.O.Ms.No.110 Dt:13.03.2024",
      downloadText: "பதிவிறக்கம்"
    },
    {
      slNo: 3,
      orderName: "அரசு புறம்போக்கு நிலங்கள் – மின் இணைப்பு - அரசாணை",
      description: "அரசு புறம்போக்கு அமைந்துள்ள வழிபாட்டு தலங்களுக்கு மின் இணைப்பு வழங்குவதற்குரிய அரசாணை",
      downloadText: "பதிவிறக்கம்"
    },
    {
      slNo: 4,
      orderName: "நில மாறுதல் நில உரிமாறுதல் குத்தகை நிலமதிப்பீடு குறித்த அரசாணைகள்",
      description: "பிறதுறைகளுக்கு தேவைப்படும் அரசு புறம்போக்கு நிலங்களுக்கு நில மாறுதல் / நில உரிமாறுதல் குத்தகை / குத்தகை / வழங்க நிலமதிப்பு நிர்ணயம் செய்வது தொடர்பான அரசாணை",
      downloadText: "பதிவிறக்கம்"
    },
    {
      slNo: 5,
      orderName: "கருணை அடிப்படை பணிநியமனம் – ஒருங்கிணைந்த சான்று",
      description: "கருணை அடிப்படையில் பணிநியமனம் பெறுவதற்கு வழங்கப்படும் ஒருங்கிணைந்த சான்று – தெளிவுரைகள் குறித்த அரசாணை",
      downloadText: "பதிவிறக்கம்"
    },
    {
      slNo: 6,
      orderName: "வசதியுரிமைச்சட்டம் – 1882",
      description: "பாதை, வெளிச்சம், காற்று தொடர்புடைய வசதியுரிமை சட்டம் குறித்த அரசிதழ்",
      downloadText: "பதிவிறக்கம்"
    }
  ];

  return (
    <div className="gov-orders-container">
      {/* Header */}
       <header className="w-full fixed top-0 z-50">
        <UtilityBar />
      
        {/* Main navbar */}
        <div className="backdrop-blur-md bg-white/10 border-b border-white/20 text-white py-4 px-6">
          <div className="w-full flex items-center justify-between">
            {/* Logo + tagline */}
            <div className="flex items-center space-x-4">
              <span className="text-2xl md:text-3xl font-bold">TSROA.GOV</span>
              <div className="hidden md:block border-l border-white/30 pl-4 ml-4">
                <span className="text-xs md:text-sm italic">
                  Official website of Government of TamilNadu
                </span>
              </div>
            </div>
      
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:bg-white/10 px-3 py-2 rounded transition-all duration-300">
                முகப்பு
              </Link>
              <Link to="/Intro" className="hover:bg-white/10 px-3 py-2 rounded transition-all duration-300">
                அறிமுகம்
              </Link>
              <Link to="/Activities" className="hover:bg-white/10 px-3 py-2 rounded transition-all duration-300">
                செயல்பாடுகள்
              </Link>
              <Link to="/Actions" className="hover:bg-white/10 px-3 py-2 rounded transition-all duration-300">
                நடவடிக்கைகள்
              </Link>
              <Link to="/Membership" className="hover:bg-white/10 px-3 py-2 rounded transition-all duration-300">
                உறுப்பினர் சேர்க்கை
              </Link>
           
              <Link to="/GovermentOrder" className="hover:bg-white/10 px-3 py-2 rounded transition-all duration-300">
                அரசாணைகள்
              </Link>
            </nav>
      
            {/* Mobile Hamburger */}
            {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      
          </div>
      
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col mt-2 space-y-2 md:hidden">
              <Link to="/" className="px-3 py-2 hover:bg-white/10 rounded">முகப்பு</Link>
              <Link to="/Intro" className="px-3 py-2 hover:bg-white/10 rounded">அறிமுகம்</Link>
              <Link to="/Activities" className="px-3 py-2 hover:bg-white/10 rounded">செயல்பாடுகள்</Link>
              <Link to="/Actions" className="px-3 py-2 hover:bg-white/10 rounded">நடவடிக்கைகள்</Link>
              <Link to="/Membership" className="px-3 py-2 hover:bg-white/10 rounded">உறுப்பினர் சேர்க்கை</Link>
              <Link to="/GovermentOrder" className="px-3 py-2 hover:bg-white/10 rounded">அரசாணைகள்</Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="gov-orders-hero">
        <div className="gov-orders-hero-content">
          <h1 className="gov-orders-hero-title">வருவாய்த்துறை அரசாணைகள்</h1>
          <p className="gov-orders-hero-description">
            வருவாய்த்துறை தொடர்பான முக்கிய அரசாணைகள் மற்றும் வழிகாட்டுதல்கள்
          </p>
        </div>
      </section>

      <div className="gov-orders-main-content">
        <div className="gov-orders-content-grid">
          {/* Main Content */}
          <div className="gov-orders-content-main">
            
            {/* Government Orders Table */}
            <div id="orders" className="gov-orders-card">
              <div className="gov-orders-card-header">
                <h2 className="gov-orders-card-title">📜 அரசாணைகள் பட்டியல்</h2>
              </div>
              <div className="gov-orders-card-content">
                <div className="gov-orders-table-container">
                  <table className="gov-orders-table">
                    <thead>
                      <tr>
                        <th className="gov-orders-th">வ.எண்</th>
                        <th className="gov-orders-th">அரசாணை</th>
                        <th className="gov-orders-th">குறிப்பு</th>
                        <th className="gov-orders-th">பதிவிறக்கம்</th>
                      </tr>
                    </thead>
                    <tbody>
                      {governmentOrders.map((order) => (
                        <tr key={order.slNo} className="gov-orders-row">
                          <td className="gov-orders-td gov-orders-td-center">{order.slNo}</td>
                          <td className="gov-orders-td gov-orders-td-left">
                            <div className="gov-orders-name">{order.orderName}</div>
                          </td>
                          <td className="gov-orders-td gov-orders-td-left">
                            <div className="gov-orders-description">{order.description}</div>
                          </td>
                          <td className="gov-orders-td gov-orders-td-center">
                            <button className="gov-orders-download-btn">
                              <span className="gov-orders-btn-icon">📥</span>
                              {order.downloadText}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div id="categories" className="gov-orders-card">
              <div className="gov-orders-card-header gov-orders-card-header-secondary">
                <h2 className="gov-orders-card-title">📂 அரசாணை வகைகள்</h2>
              </div>
              <div className="gov-orders-card-content">
                <div className="gov-orders-categories-grid">
                  <div className="gov-orders-category-card">
                    <div className="gov-orders-category-icon">🏞️</div>
                    <h3 className="gov-orders-category-title">நில தொடர்பான அரசாணைகள்</h3>
                    <p className="gov-orders-category-desc">நில மாறுதல், உரிமாறுதல், குத்தகை மற்றும் மதிப்பீடு தொடர்பான அரசாணைகள்</p>
                    <div className="gov-orders-category-count">3 அரசாணைகள்</div>
                  </div>

                  <div className="gov-orders-category-card">
                    <div className="gov-orders-category-icon">👥</div>
                    <h3 className="gov-orders-category-title">பணி நியமன அரசாணைகள்</h3>
                    <p className="gov-orders-category-desc">கருணை அடிப்படையில் பணி நியமனம் மற்றும் வாரிசு சான்று தொடர்பான அரசாணைகள்</p>
                    <div className="gov-orders-category-count">2 அரசாணைகள்</div>
                  </div>

                  <div className="gov-orders-category-card">
                    <div className="gov-orders-category-icon">⚖️</div>
                    <h3 className="gov-orders-category-title">சட்ட தொடர்பான அரசாணைகள்</h3>
                    <p className="gov-orders-category-desc">வசதியுரிமை சட்டம் மற்றும் பிற சட்டபூர்வ விதிமுறைகள் தொடர்பான அரசாணைகள்</p>
                    <div className="gov-orders-category-count">1 அரசாணை</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="gov-orders-card">
              <div className="gov-orders-card-header gov-orders-card-header-tertiary">
                <h2 className="gov-orders-card-title">⚠️ முக்கிய அறிவிப்பு</h2>
              </div>
              <div className="gov-orders-card-content">
                <div className="gov-orders-notice-box">
                  <div className="gov-orders-notice-icon">📢</div>
                  <div className="gov-orders-notice-content">
                    <h3 className="gov-orders-notice-title">அரசாணைகள் பற்றிய தகவல்</h3>
                    <ul className="gov-orders-notice-list">
                      <li>அனைத்து அரசாணைகளும் அதிகாரப்பூர்வ வெளியீடுகள் ஆகும்</li>
                      <li>புதுப்பிக்கப்பட்ட அரசாணைகள் தொடர்ந்து சேர்க்கப்படும்</li>
                      <li>PDF வடிவில் பதிவிறக்கம் செய்து கொள்ளலாம்</li>
                      <li>சந்தேகங்களுக்கு மாவட்ட ஆட்சியர் அலுவலகத்தை தொடர்பு கொள்ளவும்</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="gov-orders-sidebar">
            <div className="gov-orders-sidebar-card">
              <h3 className="gov-orders-sidebar-title">புள்ளி விவரங்கள்</h3>
              <div className="gov-orders-info-item">
                <span className="gov-orders-info-label">மொத்த அரசாணைகள்:</span>
                <span className="gov-orders-info-value">6</span>
              </div>
              <div className="gov-orders-info-item">
                <span className="gov-orders-info-label">வகைகள்:</span>
                <span className="gov-orders-info-value">3</span>
              </div>
              <div className="gov-orders-info-item">
                <span className="gov-orders-info-label">சமீபத்திய புதுப்பிப்பு:</span>
                <span className="gov-orders-info-value">மார்ச் 2024</span>
              </div>
            </div>

            <div className="gov-orders-sidebar-card">
              <h3 className="gov-orders-sidebar-title">வகை வாரியான பகிர்வு</h3>
              <div className="gov-orders-category-stats">
                <div className="gov-orders-stat-item">
                  <span className="gov-orders-stat-icon">🏞️</span>
                  <div className="gov-orders-stat-content">
                    <div className="gov-orders-stat-label">நில தொடர்பான</div>
                    <div className="gov-orders-stat-count">3</div>
                  </div>
                </div>
                <div className="gov-orders-stat-item">
                  <span className="gov-orders-stat-icon">👥</span>
                  <div className="gov-orders-stat-content">
                    <div className="gov-orders-stat-label">பணி நியமன</div>
                    <div className="gov-orders-stat-count">2</div>
                  </div>
                </div>
                <div className="gov-orders-stat-item">
                  <span className="gov-orders-stat-icon">⚖️</span>
                  <div className="gov-orders-stat-content">
                    <div className="gov-orders-stat-label">சட்ட தொடர்பான</div>
                    <div className="gov-orders-stat-count">1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gov-orders-sidebar-card">
              <h3 className="gov-orders-sidebar-title">முக்கிய தொடர்புகள்</h3>
              <div className="gov-orders-links">
                <a href="#" className="gov-orders-link">
                  <span className="gov-orders-link-icon">🏛️</span>
                  <span>தமிழ்நாடு அரசு</span>
                </a>
                <a href="#" className="gov-orders-link">
                  <span className="gov-orders-link-icon">📋</span>
                  <span>மாவட்ட ஆட்சியர் அலுவலகம்</span>
                </a>
                <a href="#" className="gov-orders-link">
                  <span className="gov-orders-link-icon">💼</span>
                  <span>வருவாய்த்துறை</span>
                </a>
                <a href="#" className="gov-orders-link">
                  <span className="gov-orders-link-icon">📧</span>
                  <span>தொடர்பு கொள்ள</span>
                </a>
              </div>
            </div>

            <div className="gov-orders-sidebar-card">
              <h3 className="gov-orders-sidebar-title">சமீபத்திய அரசாணைகள்</h3>
              <ul className="gov-orders-sidebar-list">
                <li>வாரிசு சான்று வழிகாட்டுதல் (மார்ச் 2024)</li>
                <li>நில மாறுதல் நடைமுறைகள்</li>
                <li>கருணை நியமன தெளிவுரைகள்</li>
                <li>மின் இணைப்பு வழிகாட்டுதல்</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}