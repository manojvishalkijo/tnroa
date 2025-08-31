import React, { useState } from 'react';
import '../styles/Membership.css';
import { Link } from "react-router-dom";
import UtilityBar from "./navigation/UtilityBar";
  import logo from "./assets/logo.jpg";

export default function Membership() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const membershipData = [
    { 
      slNo: 1, 
      circleName: "மாவட்ட ஆட்சியர் அலுவலகம்", 
      memberCount: 199, 
      membershipFee: 19900, 
      magazineFee: 29850, 
      total: 49750 
    },
    { 
      slNo: 2, 
      circleName: "சேலம்", 
      memberCount: 19, 
      membershipFee: 1900, 
      magazineFee: 2850, 
      total: 4750 
    },
    { 
      slNo: 3, 
      circleName: "சேலம் தெற்கு", 
      memberCount: 19, 
      membershipFee: 1900, 
      magazineFee: 2850, 
      total: 4750 
    },
    { 
      slNo: 4, 
      circleName: "சேலம் மேற்கு", 
      memberCount: 21, 
      membershipFee: 2100, 
      magazineFee: 3150, 
      total: 5250 
    },
    { 
      slNo: 5, 
      circleName: "வாழப்பாடி", 
      memberCount: 20, 
      membershipFee: 2100, 
      magazineFee: 3150, 
      total: 5250 
    },
    { 
      slNo: 6, 
      circleName: "பெ.நா.பாளையம்", 
      memberCount: 18, 
      membershipFee: 1800, 
      magazineFee: 2700, 
      total: 4500 
    },
    { 
      slNo: 7, 
      circleName: "ஆத்தூர்", 
      memberCount: 45, 
      membershipFee: 4500, 
      magazineFee: 6750, 
      total: 11250 
    },
    { 
      slNo: 8, 
      circleName: "கெங்கவல்லி", 
      memberCount: 15, 
      membershipFee: 1500, 
      magazineFee: 2250, 
      total: 3750 
    },
    { 
      slNo: 9, 
      circleName: "ஏற்காடு", 
      memberCount: 12, 
      membershipFee: 1200, 
      magazineFee: 1800, 
      total: 3000 
    },
    { 
      slNo: 10, 
      circleName: "காடையாம்பட்டி", 
      memberCount: 16, 
      membershipFee: 1600, 
      magazineFee: 2400, 
      total: 4000 
    },
    { 
      slNo: 11, 
      circleName: "ஓமலூர்", 
      memberCount: 24, 
      membershipFee: 2400, 
      magazineFee: 3600, 
      total: 6000 
    },
    { 
      slNo: 12, 
      circleName: "மேட்டூர்", 
      memberCount: 49, 
      membershipFee: 4900, 
      magazineFee: 7350, 
      total: 12250 
    },
    { 
      slNo: 13, 
      circleName: "எடப்பாடி", 
      memberCount: 20, 
      membershipFee: 2000, 
      magazineFee: 3000, 
      total: 5000 
    },
    { 
      slNo: 14, 
      circleName: "சங்ககிரி", 
      memberCount: 32, 
      membershipFee: 3200, 
      magazineFee: 4800, 
      total: 8000 
    }
  ];

  const totalRow = {
    memberCount: 509,
    membershipFee: 50900,
    magazineFee: 76350,
    total: 127250
  };

  return (
    <div className="membership-container">
      {/* Header */}
         <header className="w-full fixed top-0 z-50">
          <UtilityBar />
        
          {/* Main navbar */}
          <div className="backdrop-blur-md bg-white/10 border-b border-white/20 text-white py-4 px-6">
            <div className="w-full flex items-center justify-between">
              {/* Logo + tagline */}
              <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white">

  <img
      src={logo}
      alt="TSROA Logo"
      className="w-full h-full object-contain"
    />
                </div>
                <div className="hidden md:block border-l border-white/30 pl-4 ml-4">
                  <span className="text-xs md:text-sm italic">
                  TSROA.GOV                  
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
      <section id="overview" className="membership-hero">
        <div className="membership-hero-content">
          <h1 className="membership-hero-title">வருவாய்த்துறை அலுவலர் சங்க உறுப்பினர் சேர்க்கை</h1>
          <p className="membership-hero-description">
            2018 மற்றும் 2019 ஆம் ஆண்டிற்கான உறுப்பினர் சந்தா மற்றும் சங்கக்குரல் சந்தா வசூல் விவரங்கள்
          </p>
        </div>
      </section>

      <div className="membership-main-content">
        <div className="membership-content-grid">
          {/* Main Content */}
          <div className="membership-content-main">
            
            {/* Membership Statistics */}
            <div id="statistics" className="membership-card">
              <div className="membership-card-header">
                <h2 className="membership-card-title">📊 வட்டம் வாரியான உறுப்பினர் விவரங்கள்</h2>
              </div>
              <div className="membership-card-content">
                <div className="membership-table-container">
                  <table className="membership-table">
                    <thead>
                      <tr>
                        <th className="membership-th">வ.எண்</th>
                        <th className="membership-th">வட்டத்தின் பெயர்</th>
                        <th className="membership-th">உறுப்பினர் எண்ணிக்கை</th>
                        <th className="membership-th">உறுப்பினர் சந்தா</th>
                        <th className="membership-th">சங்கக்குரல் சந்தா</th>
                        <th className="membership-th">மொத்தம்</th>
                      </tr>
                    </thead>
                    <tbody>
                      {membershipData.map((row) => (
                        <tr key={row.slNo} className="membership-row">
                          <td className="membership-td membership-td-center">{row.slNo}</td>
                          <td className="membership-td membership-td-left">{row.circleName}</td>
                          <td className="membership-td membership-td-center">{row.memberCount}</td>
                          <td className="membership-td membership-td-right">₹{row.membershipFee.toLocaleString()}</td>
                          <td className="membership-td membership-td-right">₹{row.magazineFee.toLocaleString()}</td>
                          <td className="membership-td membership-td-right membership-td-total">₹{row.total.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="membership-total-row">
                        <td className="membership-td membership-td-total" colSpan={2}>மொத்தம்</td>
                        <td className="membership-td membership-td-center membership-td-total">{totalRow.memberCount}</td>
                        <td className="membership-td membership-td-right membership-td-total">₹{totalRow.membershipFee.toLocaleString()}</td>
                        <td className="membership-td membership-td-right membership-td-total">₹{totalRow.magazineFee.toLocaleString()}</td>
                        <td className="membership-td membership-td-right membership-td-total">₹{totalRow.total.toLocaleString()}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            {/* Summary Statistics */}
            <div className="membership-card">
              <div className="membership-card-header membership-card-header-secondary">
                <h2 className="membership-card-title">📈 சுருக்க புள்ளி விவரங்கள்</h2>
              </div>
              <div className="membership-card-content">
                <div className="membership-stats-grid">
                  <div className="membership-stat-card">
                    <div className="membership-stat-icon">👥</div>
                    <div className="membership-stat-number">{totalRow.memberCount}</div>
                    <div className="membership-stat-label">மொத்த உறுப்பினர்கள்</div>
                  </div>
                  <div className="membership-stat-card">
                    <div className="membership-stat-icon">💰</div>
                    <div className="membership-stat-number">₹{totalRow.membershipFee.toLocaleString()}</div>
                    <div className="membership-stat-label">உறுப்பினர் சந்தா</div>
                  </div>
                  <div className="membership-stat-card">
                    <div className="membership-stat-icon">📰</div>
                    <div className="membership-stat-number">₹{totalRow.magazineFee.toLocaleString()}</div>
                    <div className="membership-stat-label">சங்கக்குரல் சந்தா</div>
                  </div>
                  <div className="membership-stat-card">
                    <div className="membership-stat-icon">📊</div>
                    <div className="membership-stat-number">₹{totalRow.total.toLocaleString()}</div>
                    <div className="membership-stat-label">மொத்த வசூல்</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div id="downloads" className="membership-card">
              <div className="membership-card-header">
                <h2 className="membership-card-title">📥 உறுப்பினர் சந்தா விவரப்பட்டியல் பதிவிறக்கம்</h2>
              </div>
              <div className="membership-card-content">
                <p className="membership-download-description">
                  உறுப்பினர் சந்தா விவரப்பட்டியலை பதிவிறக்கம் செய்ய கீழே உள்ள வருடத்தை கிளிக் செய்யவும்.
                </p>
                <div className="membership-download-grid">
                  <div className="membership-download-card">
                    <div className="membership-download-icon">📋</div>
                    <h3 className="membership-download-title">2021 - 2022</h3>
                    <p className="membership-download-desc">உறுப்பினர் சந்தா விவரங்கள்</p>
                    <button className="membership-download-btn">
                      <span className="membership-btn-icon">📥</span>
                      பதிவிறக்கம்
                    </button>
                  </div>
                  <div className="membership-download-card">
                    <div className="membership-download-icon">📋</div>
                    <h3 className="membership-download-title">2022 - 2023</h3>
                    <p className="membership-download-desc">உறுப்பினர் சந்தா விவரங்கள்</p>
                    <button className="membership-download-btn">
                      <span className="membership-btn-icon">📥</span>
                      பதிவிறக்கம்
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="membership-sidebar">
            <div className="membership-sidebar-card">
              <h3 className="membership-sidebar-title">முக்கிய புள்ளி விவரங்கள்</h3>
              <div className="membership-info-item">
                <span className="membership-info-label">மொத்த வட்டங்கள்:</span>
                <span className="membership-info-value">14</span>
              </div>
              <div className="membership-info-item">
                <span className="membership-info-label">மொத்த உறுப்பினர்கள்:</span>
                <span className="membership-info-value">509</span>
              </div>
              <div className="membership-info-item">
                <span className="membership-info-label">மொத்த வசூல்:</span>
                <span className="membership-info-value">₹1,27,250</span>
              </div>
              <div className="membership-info-item">
                <span className="membership-info-label">ஆண்டு:</span>
                <span className="membership-info-value">2018-2019</span>
              </div>
            </div>

            <div className="membership-sidebar-card">
              <h3 className="membership-sidebar-title">அதிக உறுப்பினர் உள்ள வட்டங்கள்</h3>
              <ul className="membership-sidebar-list">
                <li>மாவட்ட ஆட்சியர் அலுவலகம் - 199</li>
                <li>மேட்டூர் - 49</li>
                <li>ஆத்தூர் - 45</li>
                <li>சங்ககிரி - 32</li>
                <li>ஓமலூர் - 24</li>
              </ul>
            </div>

            <div className="membership-sidebar-card">
              <h3 className="membership-sidebar-title">வசூல் விவரங்கள்</h3>
              <div className="membership-collection-stats">
                <div className="membership-collection-item">
                  <span className="membership-collection-icon">👥</span>
                  <div className="membership-collection-content">
                    <div className="membership-collection-label">உறுப்பினர் சந்தா</div>
                    <div className="membership-collection-amount">₹50,900</div>
                  </div>
                </div>
                <div className="membership-collection-item">
                  <span className="membership-collection-icon">📰</span>
                  <div className="membership-collection-content">
                    <div className="membership-collection-label">சங்கக்குரல் சந்தா</div>
                    <div className="membership-collection-amount">₹76,350</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}