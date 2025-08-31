import React from "react";
import "../styles/Home.css";
import "../styles/Footer.css";
 // Keep the same CSS for now or create a new footer CSS file

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-footer-content">
        <div className="home-footer-grid">
          <div className="home-footer-section">
            <h4 className="home-footer-title">TSROA.GOV</h4>
            <p className="home-footer-subtitle">இந்திய அரசின் அதிகாரப்பூர்வ தளம்</p>
          </div>

          <div className="home-footer-section">
            <h4 className="home-footer-title">உதவி</h4>
            <ul className="home-footer-list">
              <li>உதவி மையம்</li>
              <li>தொடர்பு கொள்ள</li>
              <li>மாநில முகவரி</li>
              <li>அடிக்கடி கேட்கப்படும் கேள்விகள்</li>
            </ul>
          </div>

          <div className="home-footer-section">
            <h4 className="home-footer-title">எங்களை பற்றி</h4>
            <ul className="home-footer-list">
              <li>வெளிப்படைத்தன்மை</li>
              <li>விருதுகள்</li>
              <li>சமூக ஊடகம்</li>
              <li>புகுபதிகை</li>
            </ul>
          </div>

          <div className="home-footer-section">
            <h4 className="home-footer-title">கொள்கைகள்</h4>
            <ul className="home-footer-list">
              <li>அணுகல் கொள்கை</li>
              <li>இணைப்பு கொள்கை</li>
              <li>தனியுரிமைக் கொள்கை</li>
              <li>விதிமுறைகள்</li>
            </ul>
          </div>

          <div className="home-footer-section">
            <h4 className="home-footer-title">கருத்துகள்</h4>
            <ul className="home-footer-list">
              <li>கருத்துகள் & பரிந்துரைகள்</li>
              <li>எங்கள் ஆய்வில் பங்கேற்க</li>
              <li>தவறான உள்ளடக்கம் புகார்</li>
            </ul>
          </div>
        </div>

        <div className="home-footer-bottom">
          © 2025 TSROA.gov | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை
        </div>
      </div>
    </footer>
  );
}
