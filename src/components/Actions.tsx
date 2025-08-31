import React, { useState } from 'react';
import '../styles/actions.css';
import { Link } from "react-router-dom";
import UtilityBar from "./navigation/UtilityBar";

export default function Actions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="actions-container">
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
      <section id="overview" className="actions-hero">
        <div className="actions-hero-content">
          <h1 className="actions-hero-title">வருவாய்த்துறை அலுவலர் சங்க நடவடிக்கைகள்</h1>
          <p className="actions-hero-description">
            உறுப்பினர்களின் நலனுக்காகவும், சிறந்த நிர்வாகத்திற்காகவும் மேற்கொள்ளப்படும் முக்கிய நடவடிக்கைகள்
          </p>
        </div>
      </section>

      <div className="actions-main-content">
        <div className="actions-content-grid">
          {/* Main Content */}
          <div className="actions-content-main">
            
            {/* Administrative Actions */}
            <div id="administrative" className="actions-card">
              <div className="actions-card-header">
                <h2 className="actions-card-title">🏛️ நிர்வாக நடவடிக்கைகள்</h2>
              </div>
              <div className="actions-card-content">
                
                <div className="actions-section">
                  <h3 className="actions-section-title">மாறுதல் நியமனங்கள்</h3>
                  <div className="actions-highlight-box">
                    <p className="actions-text">
                      மாறுதல் நியமனங்களில் உறுதியான பாரபட்சமற்ற நடவடிக்கைகள் மேற்கொள்ளப்பட்டு வருகின்றன
                    </p>
                  </div>
                </div>

                <div className="actions-section">
                  <h3 className="actions-section-title">முறையீடுகள் மற்றும் பயிற்சிகள்</h3>
                  <div className="actions-list-grid">
                    <div className="actions-list-item">
                      <span className="actions-list-icon">📋</span>
                      <span>Asst.list பணியிடங்கள்</span>
                    </div>
                    <div className="actions-list-item">
                      <span className="actions-list-icon">📋</span>
                      <span>DT.list பணியிடங்கள்</span>
                    </div>
                    <div className="actions-list-item">
                      <span className="actions-list-icon">📋</span>
                      <span>Tahr.list பணியிடங்கள்</span>
                    </div>
                    <div className="actions-list-item">
                      <span className="actions-list-icon">🎓</span>
                      <span>Survey Training</span>
                    </div>
                    <div className="actions-list-item">
                      <span className="actions-list-icon">🎓</span>
                      <span>Bav.Sag Training</span>
                    </div>
                    <div className="actions-list-item">
                      <span className="actions-list-icon">👮</span>
                      <span>Police Training</span>
                    </div>
                    <div className="actions-list-item">
                      <span className="actions-list-icon">⚖️</span>
                      <span>Magisterial Training</span>
                    </div>
                    <div className="actions-list-item">
                      <span className="actions-list-icon">📝</span>
                      <span>உரிய முறையீடுகள்</span>
                    </div>
                  </div>
                </div>

                <div className="actions-section">
                  <h3 className="actions-section-title">நிர்வாக பேச்சுவார்த்தைகள்</h3>
                  <div className="actions-negotiation-box">
                    <p className="actions-text">
                      மாவட்ட நிர்வாகத்துடன் உறுதியான பேச்சுவார்த்தை மூலம் உறுப்பினர்களின் நலன்களை பாதுகாக்கும் நடவடிக்கைகள்
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Welfare Actions */}
            <div id="welfare" className="actions-card">
              <div className="actions-card-header actions-card-header-secondary">
                <h2 className="actions-card-title">🤝 நல நடவடிக்கைகள்</h2>
              </div>
              <div className="actions-card-content">
                
                <div className="actions-welfare-grid">
                  <div className="actions-welfare-card">
                    <div className="actions-welfare-icon">🛡️</div>
                    <h4 className="actions-welfare-title">பாதுகாப்பு நடவடிக்கைகள்</h4>
                    <p className="actions-welfare-desc">ஊழியர்களுக்கு உரிய பாதுகாப்பு நடவடிக்கைகள் வழங்கப்படுகின்றன</p>
                  </div>

                  <div className="actions-welfare-card">
                    <div className="actions-welfare-icon">💰</div>
                    <h4 className="actions-welfare-title">மருத்துவ நிதி</h4>
                    <p className="actions-welfare-desc">மருத்துவ நிதியாக உறுப்பினர்களிடமிருந்து வசூல் செய்து வழங்கும் நடவடிக்கை</p>
                  </div>

                  <div className="actions-welfare-card">
                    <div className="actions-welfare-icon">🏥</div>
                    <h4 className="actions-welfare-title">கருணை நியமனங்கள்</h4>
                    <p className="actions-welfare-desc">கருணை அடிப்படையில் பணி நியமனங்கள் பெற தொடர் முறையீடுகள்</p>
                  </div>

                  <div className="actions-welfare-card">
                    <div className="actions-welfare-icon">🌺</div>
                    <h4 className="actions-welfare-title">மகளிர் நிகழ்ச்சிகள்</h4>
                    <p className="actions-welfare-desc">மகளிர் தினவிழா நிகழ்ச்சிகள் மற்றும் பெண் ஊழியர்களுக்கான சிறப்பு திட்டங்கள்</p>
                  </div>
                </div>

                <div className="actions-financial-section">
                  <h3 className="actions-financial-title">💵 நிதி நடவடிக்கைகள்</h3>
                  <div className="actions-financial-achievements">
                    <div className="actions-achievement">
                      <div className="actions-achievement-amount">₹10,00,000</div>
                      <div className="actions-achievement-desc">மாநில மைய பதிய கட்டிட நிதி வசூல் செய்து வழங்கப்பட்டது</div>
                    </div>
                    <div className="actions-achievement">
                      <div className="actions-achievement-icon">🌊</div>
                      <div className="actions-achievement-desc">கேரளா வெள்ள நிவாரணம் வழங்கப்பட்டது</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Organizational Actions */}
            <div id="organizational" className="actions-card">
              <div className="actions-card-header">
                <h2 className="actions-card-title">🏢 நிறுவன நடவடிக்கைகள்</h2>
              </div>
              <div className="actions-card-content">
                
                <div className="actions-organizational-section">
                  <h3 className="actions-org-title">🏛️ கட்டிட நடவடிக்கைகள்</h3>
                  <div className="actions-building-activities">
                    <div className="actions-building-item">
                      <span className="actions-building-icon">🏢</span>
                      <div className="actions-building-content">
                        <h4>TNROA கட்டிடம்</h4>
                        <p>சேலம் மாவட்ட மையத்தின் TNROA கட்டிடம் தொடர்பான தொடர் நடவடிக்கைகள்</p>
                      </div>
                    </div>
                    <div className="actions-building-item">
                      <span className="actions-building-icon">⚡</span>
                      <div className="actions-building-content">
                        <h4>மின் வசதி மற்றும் மராமத்து</h4>
                        <p>கட்டிடத்திற்கு மின் வசதி மராமத்துப் பணிகள் மற்றும் அழகுபடுத்தும் பணிகள்</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="actions-organizational-section">
                  <h3 className="actions-org-title">👥 கூட்டங்கள் மற்றும் சந்திப்புகள்</h3>
                  <div className="actions-meetings-grid">
                    <div className="actions-meeting-type">
                      <div className="actions-meeting-icon">🏛️</div>
                      <h4>மாவட்ட பொதுக்குழு கூட்டங்கள்</h4>
                      <p>தொடர்ச்சியான பொதுக்குழு கூட்டங்கள் மற்றும் கொள்கை முடிவுகள்</p>
                    </div>
                    <div className="actions-meeting-type">
                      <div className="actions-meeting-icon">👔</div>
                      <h4>மாவட்ட நிர்வாகிகள் கூட்டங்கள்</h4>
                      <p>நிர்வாக குழு கூட்டங்கள் மற்றும் செயல்பாட்டு திட்டமிடல்</p>
                    </div>
                    <div className="actions-meeting-type">
                      <div className="actions-meeting-icon">🚶</div>
                      <h4>வட்டகிளைகளுக்கு பயணம்</h4>
                      <p>வட்டகிளைகளுக்கு தொடர்ந்து பயணம் மேற்கொண்டு தொடர்பு நிலைநிறுத்துதல்</p>
                    </div>
                    <div className="actions-meeting-type">
                      <div className="actions-meeting-icon">🤝</div>
                      <h4>தொடர் ஊழியர் சந்திப்பு</h4>
                      <p>தொடர் ஊழியர் சந்திப்பு இயக்கங்கள் மற்றும் கருத்துப் பரிமாற்றம்</p>
                    </div>
                  </div>
                </div>

                <div className="actions-organizational-section">
                  <h3 className="actions-org-title">📰 தகவல் பரப்புரை</h3>
                  <div className="actions-media-activities">
                    <div className="actions-media-item">
                      <span className="actions-media-icon">📢</span>
                      <div className="actions-media-content">
                        <h4>போராட்ட பிரச்சாரம்</h4>
                        <p>போராட்டத்திற்கான பிரச்சார இயக்கங்கள் மற்றும் விழிப்புணர்வு நிகழ்ச்சிகள்</p>
                      </div>
                    </div>
                    <div className="actions-media-item">
                      <span className="actions-media-icon">🗞️</span>
                      <div className="actions-media-content">
                        <h4>சங்கக்குரல் சந்தா</h4>
                        <p>உறுப்பினர்களிடமிருந்து முறையாக சங்கக்குரல் சந்தா மற்றும் உறுப்பினர் சந்தா வசூல்</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="actions-organizational-section">
                  <h3 className="actions-org-title">🤝 சமூக இணைப்பு</h3>
                  <div className="actions-social-box">
                    <div className="actions-social-item">
                      <span className="actions-social-icon">🤝</span>
                      <span>தோழமை இயக்க நடவடிக்கைகளில் பங்கேற்பு</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Summary */}
            <div className="actions-card">
              <div className="actions-card-header actions-card-header-tertiary">
                <h2 className="actions-card-title">📊 நடவடிக்கை சுருக்கம்</h2>
              </div>
              <div className="actions-card-content">
                <div className="actions-summary-grid">
                  <div className="actions-summary-stat">
                    <div className="actions-stat-number">20+</div>
                    <div className="actions-stat-label">வகையான நடவடிக்கைகள்</div>
                  </div>
                  <div className="actions-summary-stat">
                    <div className="actions-stat-number">₹10L+</div>
                    <div className="actions-stat-label">நிதி உதவி வழங்கப்பட்டது</div>
                  </div>
                  <div className="actions-summary-stat">
                    <div className="actions-stat-number">100%</div>
                    <div className="actions-stat-label">உறுப்பினர் கவரேஜ்</div>
                  </div>
                  <div className="actions-summary-stat">
                    <div className="actions-stat-number">365</div>
                    <div className="actions-stat-label">நாட்கள் தொடர்ச்சியான சேவை</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="actions-sidebar">
            <div className="actions-sidebar-card">
              <h3 className="actions-sidebar-title">முக்கிய நடவடிக்கைகள்</h3>
              <div className="actions-quick-stats">
                <div className="actions-quick-stat">
                  <span className="actions-quick-icon">🎯</span>
                  <span>நிர்வாக நடவடிக்கைகள்</span>
                </div>
                <div className="actions-quick-stat">
                  <span className="actions-quick-icon">🤝</span>
                  <span>நல நடவடிக்கைகள்</span>
                </div>
                <div className="actions-quick-stat">
                  <span className="actions-quick-icon">🏢</span>
                  <span>நிறுவன நடவடிக்கைகள்</span>
                </div>
                <div className="actions-quick-stat">
                  <span className="actions-quick-icon">📢</span>
                  <span>பிரச்சார நடவடிக்கைகள்</span>
                </div>
              </div>
            </div>

            <div className="actions-sidebar-card">
              <h3 className="actions-sidebar-title">சாதனைகள்</h3>
              <ul className="actions-sidebar-list">
                <li>₹10 லட்சம் நிதி திரட்டல்</li>
                <li>மருத்துவ நிதி வழங்கல்</li>
                <li>கேரளா வெள்ள நிவாரணம்</li>
                <li>TNROA கட்டிட மேம்பாடு</li>
                <li>தொடர் பயிற்சி திட்டங்கள்</li>
              </ul>
            </div>

            <div className="actions-sidebar-card">
              <h3 className="actions-sidebar-title">தொடர்ச்சியான பணிகள்</h3>
              <div className="actions-ongoing-items">
                <div className="actions-ongoing-item">
                  <span className="actions-ongoing-icon">🔄</span>
                  <span>வட்டகிளை தொடர்பு</span>
                </div>
                <div className="actions-ongoing-item">
                  <span className="actions-ongoing-icon">💬</span>
                  <span>பேச்சுவார்த்தைகள்</span>
                </div>
                <div className="actions-ongoing-item">
                  <span className="actions-ongoing-icon">📋</span>
                  <span>சந்தா வசூல்</span>
                </div>
                <div className="actions-ongoing-item">
                  <span className="actions-ongoing-icon">🏛️</span>
                  <span>கூட்டங்கள்</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}