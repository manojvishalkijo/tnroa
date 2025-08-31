import React, { useState } from 'react';
import '../styles/intro.css';
import { Link } from "react-router-dom";
import UtilityBar from "./navigation/UtilityBar";
  import logo from "./assets/logo.jpg";

export default function Intro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="intro-container">
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
      <section id="home" className="intro-hero">
        <div className="intro-hero-content">
          <h1 className="intro-hero-title">சேலம் மாவட்டம் அறிமுகம்</h1>
          <p className="intro-hero-description">
            தமிழ்நாட்டின் முக்கியமான மாவட்டங்களில் ஒன்றான சேலம் மாவட்டத்தின் வரலாறு, புவியியல் மற்றும் நிர்வாக தகவல்கள்
          </p>
        </div>
      </section>

      <div className="intro-main-content">
        <div className="intro-content-grid">
          {/* Main Content */}
          <div className="intro-content-main">
            
            {/* Introduction */}
            <div className="intro-card">
              <div className="intro-card-header">
                <h2 className="intro-card-title">மாவட்ட அறிமுகம்</h2>
              </div>
              <div className="intro-card-content">
                <p className="intro-text">
                  சேலம் மாவட்டம் சோழநாட்டின் ஒரு பகுதியாக பண்டைய நாட்களில் இருந்து வந்துள்ளது. சோழ மன்னர்கள் காலத்தில் இது ராசாச்சரிய சதுர்வேதி மங்களம் என அழைக்கப்பட்டுள்ளது. பதின்மூன்றாம் நூற்றாண்டில் மைசூர் சுல்தான்களின் கட்டுப்பாட்டில் இருந்தது. பின்னர் அது திப்பு சுல்தானின் கட்டுப்பாட்டில் இருந்தது.
                </p>
                
                <div className="intro-highlight-box">
                  <h3 className="intro-highlight-title">பிரிட்டிஷ் காலம்</h3>
                  <p className="intro-highlight-text">
                    பிரிட்டிஷ் கிழக்கிந்தியக் கம்பெனி படைக்கும் திப்பு சூல்தானுக்கும் இடையே 1792-இல் நடைபெற்ற போரை தொடர்ந்து ஒரு ஒப்பந்தம் ஏற்பட்டது. இதன் அடிப்படையில் திப்பு சூல்தானிடம் இருந்து பரம்பரை பகுதிகள் பிரிட்டிஷ் கிழக்கிந்தியக் கம்பெனிக்கு வந்தன.
                  </p>
                </div>

                <div className="intro-fact">
                  <p className="intro-fact-text">தமிழ்நாட்டின் மிகப்பெரிய மாவட்டமாக சேலம் 1965 வரை இருந்தது</p>
                </div>
              </div>
            </div>

            {/* Historical Timeline */}
            <div id="history" className="intro-card">
              <div className="intro-card-header intro-card-header-secondary">
                <h2 className="intro-card-title">
                  📅 வரலாற்று காலக்கிரமம்
                </h2>
              </div>
              <div className="intro-card-content">
                <div className="intro-timeline">
                  <div className="intro-timeline-item">
                    <div className="intro-timeline-dot"></div>
                    <h3 className="intro-timeline-year">1947</h3>
                    <p className="intro-timeline-text">சேலம் மாவட்டம் சுதந்திர இந்தியாவின் ஒரு பகுதியானது</p>
                  </div>
                  
                  <div className="intro-timeline-item">
                    <div className="intro-timeline-dot"></div>
                    <h3 className="intro-timeline-year">1961</h3>
                    <p className="intro-timeline-text">திருசெங்கோடு வட்டத்தில் இருந்து சங்ககிரி வட்டம் பிரிந்து உதயமானது</p>
                  </div>
                  
                  <div className="intro-timeline-item">
                    <div className="intro-timeline-dot"></div>
                    <h3 className="intro-timeline-year">1965</h3>
                    <p className="intro-timeline-text">சேலம் மாவட்டம் இரண்டாக பிரிக்கப்பட்டது - சேலம் மற்றும் தர்மபுரி மாவட்டங்கள் உருவாயின</p>
                  </div>

                  <div className="intro-timeline-item">
                    <div className="intro-timeline-dot"></div>
                    <h3 className="intro-timeline-year">1997</h3>
                    <p className="intro-timeline-text">சேலம் மாவட்டம் மீண்டும் பிரிக்கப்பட்டு நாமக்கல் மாவட்டம் புதிதாக உருவாகப்பட்டது</p>
                  </div>

                  <div className="intro-timeline-item">
                    <div className="intro-timeline-dot"></div>
                    <h3 className="intro-timeline-year">2013</h3>
                    <p className="intro-timeline-text">சேலம் வட்டம் மூன்று வட்டங்களாக பிரிக்கப்பட்டு, சேலம், சேலம்(மேற்கு), சேலம்(தெற்கு) என மூன்று வட்டங்களாக உதயமானது</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Resources */}
            <div id="resources" className="intro-card">
              <div className="intro-card-header">
                <h2 className="intro-card-title">
                  ⛰️ இயற்கை வளம்
                </h2>
              </div>
              <div className="intro-card-content">
                <p className="intro-text">
                  சேலம் மாவட்டம் பெரும்பகுதி, செம்மண் மற்றும் கரிசல் மண் வகையினை கொண்டது. இங்கு காவிரியும், வெள்ளாறும், வசிஷ்ட நதியும் ஓடுகிறது. இம்மாவட்டம் குறிஞ்சி திணையைச் சார்ந்தது.
                </p>
                
                <div className="intro-resource-grid">
                  <div className="intro-resource-card intro-resource-rivers">
                    <h3 className="intro-resource-title">
                      💧 முக்கிய நதிகள்
                    </h3>
                    <ul className="intro-resource-list">
                      <li>• காவிரி நதி</li>
                      <li>• வெள்ளாறு</li>
                      <li>• வசிஷ்ட நதி</li>
                    </ul>
                  </div>
                  
                  <div className="intro-resource-card intro-resource-mountains">
                    <h3 className="intro-resource-title">
                      ⛰️ முக்கிய மலைகள்
                    </h3>
                    <ul className="intro-resource-list">
                      <li>• ஏற்காடு</li>
                      <li>• சேர்வராயன் மலை</li>
                      <li>• கல்வராயன் மலை</li>
                      <li>• கஞ்சமலை</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mineral Resources */}
            <div className="intro-card">
              <div className="intro-card-header intro-card-header-secondary">
                <h2 className="intro-card-title">
                  💎 கனிவளம்
                </h2>
              </div>
              <div className="intro-card-content">
                <div className="intro-mineral-grid">
                  <div className="intro-mineral-card intro-mineral-iron">
                    <h3 className="intro-mineral-title">இரும்புத்தாது</h3>
                    <p className="intro-mineral-text">கஞ்சமலை, தீர்த்தமலை முதலிய மலைகளில் சுமார் 45 கோடி டன் எடையுள்ள இரும்புத்தாது உள்ளது</p>
                  </div>
                  
                  <div className="intro-mineral-card intro-mineral-bauxite">
                    <h3 className="intro-mineral-title">பாக்சைட்</h3>
                    <p className="intro-mineral-text">சேர்வராயன் மலைப்பகுதியில் அலுமினியம் தயாரிப்பதற்கு தேவையான பாக்சைட் அதிக அளவில் உள்ளது</p>
                  </div>
                  
                  <div className="intro-mineral-card intro-mineral-magnesite">
                    <h3 className="intro-mineral-title">மாக்னசைட்</h3>
                    <p className="intro-mineral-text">தாரமங்கலம் பகுதியில் மாக்னசைட் கனிமம் கணிசமான அளவில் காணப்படுகிறது</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agriculture & Industries */}
            <div className="intro-card">
              <div className="intro-card-header">
                <h2 className="intro-card-title">
                  🌾 வேளாண்மை மற்றும் தொழில்வளம்
                </h2>
              </div>
              <div className="intro-card-content">
                <div className="intro-economy-grid">
                  <div className="intro-economy-section">
                    <h3 className="intro-economy-title">வேளாண்மை</h3>
                    <p className="intro-economy-text">
                      சேலம் மாவட்டத்தில் நெல், கரும்பு, வாழை, பருத்தி, சோளம், மாம்பழம் ஆகியவை ஆண்டு முழுவதும் பயிரிடப்படுகின்றது.
                    </p>
                    <div className="intro-crop-tags">
                      <span className="intro-crop-tag">நெல்</span>
                      <span className="intro-crop-tag">கரும்பு</span>
                      <span className="intro-crop-tag">வாழை</span>
                      <span className="intro-crop-tag">பருத்தி</span>
                      <span className="intro-crop-tag">காபி</span>
                    </div>
                  </div>
                  
                  <div className="intro-economy-section">
                    <h3 className="intro-economy-title">தொழில்வளம்</h3>
                    <p className="intro-economy-text">
                      சேலம் மாவட்டத்தில் சேலம் (உடையாப்பட்டி), ஆத்தூர் (செல்லியம்பளையம்) பகுதிகளில் பெரிய அளவிலான நூல்பலைகள் உள்ளன.
                    </p>
                    <div className="intro-industry-tags">
                      <span className="intro-industry-tag">நெசவுத்தொழில்</span>
                      <span className="intro-industry-tag">சிமெண்ட்</span>
                      <span className="intro-industry-tag">எஃகு</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tourist Places */}
            <div id="tourism" className="intro-card">
              <div className="intro-card-header intro-card-header-secondary">
                <h2 className="intro-card-title">
                  📍 முக்கிய சுற்றுலா இடங்கள்
                </h2>
              </div>
              <div className="intro-card-content">
                <div className="intro-tourism-section">
                  {/* Mettur Dam */}
                  <div className="intro-tourism-place">
                    <h3 className="intro-tourism-title">மேட்டூர் அணை</h3>
                    <p className="intro-tourism-text">
                      மேட்டூர் அணை காவிரி ஆற்றின் மீது கட்டப்பட்டுள்ள ஒரு அணையாகும். இது சேலம் மாவட்டத்திலுள்ள மேட்டூர் என்னும் ஊரில் கட்டப்பட்டுள்ளதால் அவ்வாறு அழைக்கப்படுகிறது. மேட்டூர் நீர்த்தேக்கம் கட்டி முடிக்கப்பட்ட போது, இது தான் ஆசியாவிலேயே மிக உயரமானதும் உலகிலேயே மிகப்பெரியதுமான ஏரியாக விளங்கியது.
                    </p>
                  </div>

                  {/* Yercaud */}
                  <div className="intro-tourism-place">
                    <h3 className="intro-tourism-title">ஏற்காடு</h3>
                    <p className="intro-tourism-text">
                      ஏற்காடு என்பது தமிழ்நாட்டின் சேலம் மாவட்டத்தில் அமைந்துள்ள கோடை வாழிட நகராகும். இது கிழக்குத் தொடர்ச்சி மலைத்தொடரில் உள்ள சேர்வராயன் மலையில் அமைந்துள்ளது. சுமார் 383 சதுர கிலோ மீட்டர் கொண்ட ஏற்காட்டில் இயற்கை எழில் மிகுந்த குன்றும் அதையொட்டி அமைந்துள்ள ஏரியும் சுற்றுலாப் பயணிகளை கவர்ந்திழுக்கும் வகையில் உள்ளது.
                    </p>
                  </div>

                  {/* Sugavaneshwarar Temple */}
                  <div className="intro-tourism-place">
                    <h3 className="intro-tourism-title">சுகவனேசுவரர் கோவில்</h3>
                    <p className="intro-tourism-text">
                      இக்கோவில் இலக்கிய சான்றுகளை கொண்டு பார்க்கும் போது கி.பி.7 – 8-ம் நுற்றாண்டில் கட்டப்பட்டிருக்கலாம் என கருதப்படுகிறது.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="intro-sidebar">
            <div className="intro-sidebar-card">
              <h3 className="intro-sidebar-title">மாவட்ட தகவல்கள்</h3>
              <div className="intro-info-item">
                <span className="intro-info-label">மாவட்ட தலைநகர்:</span>
                <span className="intro-info-value">சேலம்</span>
              </div>
              <div className="intro-info-item">
                <span className="intro-info-label">மொழி:</span>
                <span className="intro-info-value">தமிழ்</span>
              </div>
              <div className="intro-info-item">
                <span className="intro-info-label">பிராந்தியம்:</span>
                <span className="intro-info-value">தமிழ்நாடு</span>
              </div>
            </div>

            <div className="intro-sidebar-card">
              <h3 className="intro-sidebar-title">முக்கிய தகவல்கள்</h3>
              <ul className="intro-sidebar-list">
                <li>மாவட்ட ஆட்சியர் அலுவலகம்</li>
                <li>வருவாய் கோட்டம்</li>
                <li>தாலுக்கா அலுவலகம்</li>
                <li>வட்டாட்சியர் அலுவலகம்</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}