import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/PropertyDetails.module.css';

import propertyMain from '../assets/property-2.jpg';
import propertyThumb1 from '../assets/Living-room-view.jpg';
import propertyThumb2 from '../assets/Kitchen.jpg';
import propertyThumb3 from '../assets/Bedroom.jpg';
import propertyThumb4 from '../assets/Bathroom.jpg';
import watermark from '../assets/profile-picture.jpg';


const PropertyDetails = () => {

  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link to="/profile" className={styles.backButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>
          Back
        </Link>
        <h1 className={styles.title}>PROPERTY DETAILS</h1>
        <button className={styles.shareButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 16c-.8 0-1.5.4-2 1l-8-4.7c.1-.3.1-.6.1-1s0-.7-.1-1l8-4.7c.5.6 1.2 1 2 1 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .4.1.7.1 1l-8 4.7c-.5-.6-1.2-1-2-1-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.4 2-1l8 4.7c0 .3-.1.6-.1 1 0 1.6 1.3 2.9 3 2.9s3-1.3 3-3-1.3-3-3-3z" />
          </svg>
        </button>
      </header>

      {/* Property Image with Watermark */}
      <div className={styles.imageContainer}>
        <img 
          src={propertyMain} 
          alt="Luxury Apartment" 
          className={styles.mainImage} 
        />
        <div className={styles.watermarkContainer}>
          <img 
            src={watermark} 
            alt="TRUE BROKER Watermark" 
            className={styles.watermark}
          />
        </div>
      </div>

      {/* Property Info */}
      <div className={styles.propertyInfo}>
        <div className={styles.propertyHeader}>
          <h1 className={styles.propertyTitle}>2 BED Beautiful View Ample Storage I Luxury Living</h1>
          <div className={styles.propertyType}>Apartment</div>
        </div>
        
        <p className={styles.location}>Azizi Riviero 59, Azizi Riviero, Meydan One, Meydan City, Dubai</p>
        
        <div className={styles.propertySpecs}>
          <div className={styles.specItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
            </svg>
            <span>2 Beds</span>
          </div>
          <div className={styles.specItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v4H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" />
            </svg>
            <span>2 Baths</span>
          </div>
          <div className={styles.specItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2V8c0-1.104-.896-2-2-2H3zm0 2h18v9H3V8zm7 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            <span>740 sqft</span>
          </div>
        </div>
      </div>

      {/* Property Highlights */}
      <div className={styles.highlightsSection}>
        <h2 className={styles.sectionTitle}>Property Highlights</h2>
        <ul className={styles.highlightsList}>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Prime Location – Situated in the sought-after Sobha Heartland. Just minutes away from "North London College Dubai", easy access to major highways, Meydan Racecourse, Dubai Hills, DXB Airport and Downtown Dubai.
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Modern Kitchen & Bathroom – Fitted with premium quality fixtures and ample storage space.
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Spacious balcony with panoramic city views
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Energy efficient appliances and smart home features
          </li>
        </ul>
        <button className={styles.readMore}>
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>

      {/* Property Details */}
      <div className={styles.detailsSection}>
        <h2 className={styles.sectionTitle}>Property details</h2>
        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M7 11h10v2H7z" />
              </svg>
            </div>
            <span>Balcony/Terrace</span>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 10h-2V8h-2v2h-2v2h2v2h2v-2h2v-2z" />
                <path d="M10 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                <path d="M16.5 17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                <path d="M6.5 17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
              </svg>
            </div>
            <span>Swimming Pool</span>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 19h16V5H4v14z" />
                <path d="M10.67 13.02c-.23.23-.51.34-.84.34-.33 0-.61-.11-.84-.34-.23-.23-.34-.51-.34-.84 0-.33.11-.61.34-.84.23-.23.51-.34.84-.34.33 0 .61.11.84.34.23.23.34.51.34.84 0 .33-.11.61-.34.84z" />
                <path d="M15 16h-5v-1.5h5V16z" />
                <path d="M15 12h-5v-1.5h5V12z" />
                <path d="M15 8h-5V6.5h5V8z" />
              </svg>
            </div>
            <span>Gym</span>
          </div>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 9v4H6V9H4v6h16V9z" />
                <path d="M12 2L4 7v2h16V7l-8-5zm0 9.53l6 3.75V17H6v-1.72l6-3.75z" />
              </svg>
            </div>
            <span>Kids Play Area</span>
          </div>
        </div>
      </div>

      {/* Additional Images */}
      <div className={styles.additionalImages}>
        <h2 className={styles.sectionTitle}>More Photos</h2>
        <div className={styles.imageGrid}>
          <img src={propertyThumb1} alt="Living room" className={styles.gridImage} />
          <img src={propertyThumb2} alt="Kitchen" className={styles.gridImage} />
          <img src={propertyThumb3} alt="Bedroom" className={styles.gridImage} />
          <img src={propertyThumb4} alt="Bathroom" className={styles.gridImage} />
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactCard}>
          <div className={styles.agentInfo}>
            <div className={styles.agentImage}>
              <img src={watermark} alt="Agent" className={styles.agentImage} />
            </div>
            <div>
              <h3 className={styles.agentName}>Rashed Majed</h3>
              <p className={styles.agentTitle}>TRUE BROKER</p>
            </div>
          </div>
          <p className={styles.contactText}>Contact me for a private showing or more information</p>
          <div className={styles.contactButtons}>
            <a
    href="https://www.whatsapp.com/"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.messageButton}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
    Send Message
  </a>
            <button onClick={()=>navigate('/make-offer')} className={styles.callButton}>
              Make an Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;