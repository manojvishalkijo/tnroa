  import React, { useState } from 'react';
  import { Link } from 'wouter';
  import '../styles/Home.css';
  import UtilityBar from "./navigation/UtilityBar";
  import logo from "./assets/logo.jpg";



  export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const departmentLeaders = [
      {
        id: 1,
      image: "https://www.tnroaslm.com/images/Leader-Photos.png"
      },
    
    ];

    const quickServices = [
      {
        title: "அவசர சேவை",
        subtitle: "இந்திய அரசின் பொதுச் சேவை",
        count: "94456 39514",
        bgColor: "#43a047"
      },
      {
        title: "வலைச் சேவை",
        subtitle: "ஆன்லைன் உதவி",
        count: "94456 39514",
        bgColor: "#43a047"
      },
      {
        title: "பணம் பரிமாற்றம்",
        subtitle: "மின்னணு சேவை",
        count: "(எண் காண்க)",
        bgColor: "#43a047"
      },
      {
        title: "வலைப் புகார்",
        subtitle: "ஆன்லைன் புகார் பதிவு",
        count: "(எண் காண்க)",
        bgColor: "#43a047"
      }
    ];

    const featuredServices = [
      {
        title: "அரசுப் பணிகள்",
        desc: "சிம்பிள் மற்றும் விரைவான சேவை",
        icon: "🏛️"
      },
      {
        title: "மின்னணு ஆவணங்கள்",
        desc: "ஆன்லைன் பயன்பாடுகள்",
        icon: "📋"
      },
      {
        title: "அதிகார பத்திரம்",
        desc: "அரசின் அதிகாரப்பூர்வ ஆவணம்",
        icon: "📄"
      },
      {
        title: "சட்ட ஆலோசனை",
        desc: "சட்ட சார்ந்த உதவி",
        icon: "⚖️"
      }
    ];

    const rightSidebarLinks = [
      { text: "வழிகாட்டும் இணைய தளம்", icon: "👉" },
      { text: "கிராம நிர்வாகம்", icon: "👉" },
      { text: "மாநில தகவல்கள்", icon: "👉" },
      { text: "வளர்ச்சி அறிக்கைகள்", icon: "👉" },
      { text: "வணிக உதவி", icon: "👉" },
      { text: "கல்வி வளங்கள்", icon: "👉" },
      { text: "புதிய திட்டங்கள்", icon: "👉" },
      { text: "சமூக சேவைகள்", icon: "👉" },
      { text: "லேபரட்டரி", icon: "👉" },
      { text: "மாநில வார அறிக்கை", icon: "👉" }
    ];

    return (
      <div className="home-container">
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
  <section
          className="relative min-h-screen flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url(https://gumlet.vikatan.com/vikatan%2F2021-12%2F2d97daac-ffd3-438d-9bfb-e64ba3b0d4f1%2F61b2e97e47227.jpg?rect=0%2C0%2C4167%2C2188&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-12 py-25 mt-40">
            <div className="max-w-9xl">
            <h1 className="text-6xl sm:text-12xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-tight">
    தமிழ்நாடு வருவாய்த்துறை அலுவலர் சங்கம்
    <br />
    நாமக்கல் மாவட்ட மையம்
  </h1>


            </div>
          </div>
        </section>


        {/* Main Content */}
        <div className="home-main-content">
          <div className="home-content-wrapper">
            
            {/* Leaders Section */}
            <div className="home-leaders-section">
              <h2 className="home-leaders-title">தமிழ்நாடு அரசு அலுவலர்கள் கூட்டம்</h2>
              <p className="home-leaders-subtitle">இயக்க உறுப்பினர்கள்</p>
              
              <div className="home-leaders-grid">
                {departmentLeaders.map((leader) => (
                  <div key={leader.id} className="home-leader-card">
                      <div className="home-leader-image">
                        <img src={leader.image}/>
                      </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="home-services-section">
              <div className="home-services-grid">
                {quickServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="home-service-card"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <h3 className="home-service-title">{service.title}</h3>
                    <p className="home-service-subtitle">{service.subtitle}</p>
                    <p className="home-service-count">{service.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Services */}
            <div className="home-featured-section">
              <div className="home-featured-left">
                <h3 className="home-featured-title">முக்கிய அரசுப் பணிகள்</h3>
                <div className="home-featured-grid">
                  {featuredServices.map((service, index) => (
                    <div key={index} className="home-featured-item">
                      <span className="home-featured-icon">{service.icon}</span>
                      <div className="home-featured-content">
                        <h4 className="home-featured-item-title">{service.title}</h4>
                        {service.desc && <p className="home-featured-item-desc">{service.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="home-featured-right">
                <h3 className="home-featured-title">இயக்க திட்டங்கள்</h3>
                <div className="home-featured-right-grid">
                  <div className="home-featured-right-item">முக்கிய பயன்பாடுகள்</div>
                  <div className="home-featured-right-item">அதிகார ஆவணங்கள்</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="home-right-sidebar">
            <div className="home-sidebar-header">
              <h3 className="home-sidebar-title">அரசின் பொது தகவல்கள்</h3>
              <div className="home-sidebar-date">02/12/2025</div>
            </div>
            
            <div className="home-sidebar-content">
              <ul className="home-sidebar-list">
                {rightSidebarLinks.map((link, index) => (
                  <li key={index} className="home-sidebar-item">
                    <span className="home-sidebar-icon">{link.icon}</span>
                    <span className="home-sidebar-text">{link.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        
      </div>
    );
  }


