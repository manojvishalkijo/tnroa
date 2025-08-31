import React, { useState } from 'react';
import '../styles/Activities.css';
import UtilityBar from "./navigation/UtilityBar";
import { Link } from "react-router-dom";
  import logo from "./assets/logo.jpg";

export default function Activities() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="activities-container">
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
      <section id="overview" className="activities-hero">
        <div className="activities-hero-content">
          <h1 className="activities-hero-title">வருவாய்த்துறை அலுவலர் சங்க செயல்பாடுகள்</h1>
          <p className="activities-hero-description">
            1964-ல் துவக்கப்பட்ட நமது வருவாய்த்துறை அலுவலர் சங்கத்தின் செயல்பாடுகள் மற்றும் நோக்கங்கள்
          </p>
          <div className="activities-hero-date">
            <span className="activities-date-label">நிறுவப்பட்ட தேதி:</span>
            <span className="activities-date-value">6.10.1964</span>
          </div>
        </div>
      </section>

      <div className="activities-main-content">
        <div className="activities-content-grid">
          {/* Main Content */}
          <div className="activities-content-main">
            
            {/* Welcome Message */}
            <div id="message" className="activities-card">
              <div className="activities-card-header">
                <h2 className="activities-card-title">💬 உங்களோடு சில வார்த்தைகள்</h2>
              </div>
              <div className="activities-card-content">
                <div className="activities-greeting">
                  <h3 className="activities-greeting-title">அன்பார்ந்த சகோதர, சகோதரிகளே</h3>
                  <p className="activities-greeting-text">வணக்கம்</p>
                </div>
                
                <p className="activities-text">
                  6.10.1964 ல் துவக்கப்பட்ட நமது வருவாய்த்துறை அலுவலர் சங்கம் கடந்த 40 ஆண்டு காலமாக தொடர்ந்து சங்க உறுப்பினர்களின் நலனில் அக்கரை கொண்டு செயலாற்றி வருவதை தாங்கள் அறிவீர்கள்.
                </p>
                
                <div className="activities-highlight-box">
                  <h4 className="activities-highlight-title">சங்கத்தின் முக்கிய பணிகள்</h4>
                  <p className="activities-highlight-text">
                    உறுப்பினர்களின் சேவை நலன்கள், ஊதிய நலன்கள், பணி நலன்கள் என அனைத்து நலன்களையும் பாதுகாப்பதற்காக தொடர்ந்து பணியாற்றி வருகிறது.
                  </p>
                </div>
              </div>
            </div>

            {/* Objectives and Goals */}
            <div id="objectives" className="activities-card">
              <div className="activities-card-header activities-card-header-secondary">
                <h2 className="activities-card-title">
                  🎯 சங்கத்தின் நோக்கங்கள் மற்றும் பணிகள்
                </h2>
              </div>
              <div className="activities-card-content">
                <div className="activities-objectives-grid">
                  <div className="activities-objective-card">
                    <div className="activities-objective-icon">👥</div>
                    <h3 className="activities-objective-title">உறுப்பினர் நலன்</h3>
                    <p className="activities-objective-text">
                      சங்க உறுப்பினர்களின் சேவை நலன்கள், ஊதிய நலன்கள், பணி நலன்களை பாதுகாத்தல்
                    </p>
                  </div>
                  
                  <div className="activities-objective-card">
                    <div className="activities-objective-icon">📚</div>
                    <h3 className="activities-objective-title">கல்வி மற்றும் பயிற்சி</h3>
                    <p className="activities-objective-text">
                      வருவாய்த்துறை சார்ந்த சட்டம் மற்றும் விதிமுறைகள் குறித்த விழிப்புணர்வு ஏற்படுத்துதல்
                    </p>
                  </div>
                  
                  <div className="activities-objective-card">
                    <div className="activities-objective-icon">⚖️</div>
                    <h3 className="activities-objective-title">நீதி மற்றும் நேர்மை</h3>
                    <p className="activities-objective-text">
                      நிர்வாகத்தை செம்மைப்படுத்துதல் மற்றும் பொதுமக்களுக்கு சிறந்த சேவை வழங்குதல்
                    </p>
                  </div>
                  
                  <div className="activities-objective-card">
                    <div className="activities-objective-icon">🤝</div>
                    <h3 className="activities-objective-title">ஒற்றுமை</h3>
                    <p className="activities-objective-text">
                      சகோதரத்துவ உணர்வோடு அனைத்து உறுப்பினர்களும் ஒன்றிணைந்து செயல்படுதல்
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Updates and Regulations */}
            <div className="activities-card">
              <div className="activities-card-header">
                <h2 className="activities-card-title">
                  📖 சட்டம் மற்றும் விதி திருத்தங்கள்
                </h2>
              </div>
              <div className="activities-card-content">
                <p className="activities-text">
                  நாளுக்கு நாள் மாறி வரும் சட்டம் மற்றும் விதி திருத்தங்களினால் வருவாய்த்துரையில் உள்ள பல்வேறு அடிப்படையான விவரங்கள் பல்வேறு நிலைகளில் பணியாற்றும் நமது சகோதரர்கள் அறிந்து கொண்டு செயல்படுவது மிகவும் அவசியமாகும்.
                </p>
                
                <div className="activities-legal-updates">
                  <div className="activities-legal-item">
                    <h4 className="activities-legal-title">📋 வருவாய் விதிகள்</h4>
                    <p className="activities-legal-desc">அடிப்படை வருவாய் விதிகள் மற்றும் புதுப்பிப்புகள்</p>
                  </div>
                  
                  <div className="activities-legal-item">
                    <h4 className="activities-legal-title">🏛️ நிர்வாக உத்தரவுகள்</h4>
                    <p className="activities-legal-desc">அரசாணைகள் மற்றும் நிர்வாக வழிமுறைகள்</p>
                  </div>
                  
                  <div className="activities-legal-item">
                    <h4 className="activities-legal-title">📑 பதிவு முறைகள்</h4>
                    <p className="activities-legal-desc">சொத்து பதிவு மற்றும் ஆவண மேலாண்மை</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guidelines and Procedures */}
            <div id="guidelines" className="activities-card">
              <div className="activities-card-header activities-card-header-secondary">
                <h2 className="activities-card-title">
                  📝 வழிமுறைகள் மற்றும் நடைமுறைகள்
                </h2>
              </div>
              <div className="activities-card-content">
                <div className="activities-guidelines-section">
                  <div className="activities-guideline-item">
                    <div className="activities-guideline-number">1</div>
                    <div className="activities-guideline-content">
                      <h4 className="activities-guideline-title">தகவல் பரிமாற்றம்</h4>
                      <p className="activities-guideline-text">
                        வருவாய்த்துறையைச் சார்ந்த அனைத்துப் பொருட்கள் குறித்தும் விரிவான தகவல்களை உறுப்பினர்களுக்கு வழங்குதல்
                      </p>
                    </div>
                  </div>
                  
                  <div className="activities-guideline-item">
                    <div className="activities-guideline-number">2</div>
                    <div className="activities-guideline-content">
                      <h4 className="activities-guideline-title">பயிற்சி திட்டங்கள்</h4>
                      <p className="activities-guideline-text">
                        மேலோட்டமான விவரங்களோடு மட்டுமல்லாமல், ஆழமான புரிதலுக்கான பயிற்சி வகுப்புகள் நடத்துதல்
                      </p>
                    </div>
                  </div>
                  
                  <div className="activities-guideline-item">
                    <div className="activities-guideline-number">3</div>
                    <div className="activities-guideline-content">
                      <h4 className="activities-guideline-title">செயல்பாட்டு மேம்பாடு</h4>
                      <p className="activities-guideline-text">
                        நமது சங்க உறுப்பினர்கள் அனைவரும் வருவாய்த்துறை தொடர்புடைய சட்டவிதிகளை தெரிந்து கொண்டு செயல்படுத்துதல்
                      </p>
                    </div>
                  </div>
                  
                  <div className="activities-guideline-item">
                    <div className="activities-guideline-number">4</div>
                    <div className="activities-guideline-content">
                      <h4 className="activities-guideline-title">நிர்வாக மேம்பாடு</h4>
                      <p className="activities-guideline-text">
                        நிர்வாகத்தினை செம்மைப்படுத்துவதோடு, பொதுமக்களுக்கு சிறந்த சேவையினை வழங்குதல்
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="activities-card">
              <div className="activities-card-header">
                <h2 className="activities-card-title">
                  🎯 நமது நோக்கம்
                </h2>
              </div>
              <div className="activities-card-content">
                <div className="activities-mission-box">
                  <div className="activities-mission-icon">🌟</div>
                  <div className="activities-mission-content">
                    <h3 className="activities-mission-title">தொண்டு மனப்பான்மையுடன் சேவை</h3>
                    <p className="activities-mission-text">
                      நமது உறுப்பினர்கள் அனைவரும் தங்களால் முடிந்த வரை வருவாய்த்துறை தொடர்புடைய பல்வேறு சட்டவிதிகளை தெரிந்து கொண்டு செயல்படுத்துவதன் மூலம் நிர்வாகத்தினை செம்மைப்படுத்துவதோடு, பொதுமக்களுக்கு சிறந்த சேவையினை வழங்க வேண்டும் என்பதே நமது நோக்கமாகும்.
                    </p>
                  </div>
                </div>
                
                <div className="activities-commitment">
                  <h4 className="activities-commitment-title">நமது உறுதி</h4>
                  <ul className="activities-commitment-list">
                    <li>தொண்டு மனப்பான்மையுடன் கடமையாற்றுதல்</li>
                    <li>தொடர்ச்சியான கல்வி மற்றும் பயிற்சி</li>
                    <li>நேர்மையான மற்றும் திறமையான சேவை</li>
                    <li>சகோதரத்துவ உணர்வோடு ஒற்றுமையாக செயல்படுதல்</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="activities-sidebar">
            <div className="activities-sidebar-card">
              <h3 className="activities-sidebar-title">சங்க தகவல்கள்</h3>
              <div className="activities-info-item">
                <span className="activities-info-label">நிறுவப்பட்ட ஆண்டு:</span>
                <span className="activities-info-value">1964</span>
              </div>
              <div className="activities-info-item">
                <span className="activities-info-label">சேவை காலம்:</span>
                <span className="activities-info-value">60+ ஆண்டுகள்</span>
              </div>
              <div className="activities-info-item">
                <span className="activities-info-label">துறை:</span>
                <span className="activities-info-value">வருவாய்த்துறை</span>
              </div>
            </div>

            <div className="activities-sidebar-card">
              <h3 className="activities-sidebar-title">முக்கிய செயல்பாடுகள்</h3>
              <ul className="activities-sidebar-list">
                <li>உறுப்பினர் நல பாதுகாப்பு</li>
                <li>சட்ட மற்றும் விதி வழிகாட்டுதல்</li>
                <li>பயிற்சி திட்டங்கள்</li>
                <li>நிர்வாக மேம்பாடு</li>
                <li>தொண்டு சேவை</li>
              </ul>
            </div>

            <div className="activities-sidebar-card">
              <h3 className="activities-sidebar-title">தொடர்பு</h3>
              <div className="activities-contact-info">
                <p className="activities-contact-item">
                  <span className="activities-contact-icon">📧</span>
                  info@revenueassociation.org
                </p>
                <p className="activities-contact-item">
                  <span className="activities-contact-icon">📞</span>
                  0427-2345678
                </p>
                <p className="activities-contact-item">
                  <span className="activities-contact-icon">📍</span>
                  சேலம் மாவட்ட கட்டடம்
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}