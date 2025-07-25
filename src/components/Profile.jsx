import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Profile.module.css';

// Import images 
import profileImage from '../assets/profile-picture.jpg';
import propertyImage1 from '../assets/property-1.jpg';
import propertyImage2 from '../assets/property-2.jpg';
import propertyImage3 from '../assets/property-3.jpg';

const Profile = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const navigate = useNavigate()
  
  const properties = [
    {
      id: 1,
      title: "2 BED Beautiful View",
      location: "Azizi Riviera 58, Azizi Riviera, Meydan One, Meydan City, Dubai",
      beds: 2,
      baths: 2,
      sqft: 740,
      price: "AED 95,000/Yearly",
      type: "rent",
      image: propertyImage1
    },
    {
      id: 2,
      title: "1 BED Peaceful View",
      location: "Azizi Riviera 47, Azizi Riviera, Meydan One, Meydan City, Dubai",
      beds: 1,
      baths: 1,
      sqft: 464,
      price: "AED 65,000/Yearly",
      type: "rent",
      image: propertyImage2
    },
    {
      id: 3,
      title: "Modern 3BR City Center",
      location: "Downtown Dubai, Burj Khalifa District",
      beds: 3,
      baths: 3,
      sqft: 1850,
      price: "AED 2,850,000",
      type: "buy",
      image: propertyImage3
    }
  ];
  
  const filteredProperties = properties.filter(prop => {
    if (activeFilter === 'all') return true;
    return prop.type === activeFilter;
  });

  return (
    <div className={styles.container}>
      {/* Header */}
       <header className={styles.header}>
        <h1 className={styles.title}>TRUE BROKER</h1>
      </header> 

      {/* Profile Section */}
      <section className={styles.profileSection}>
        <div className={styles.profileImageContainer}>
          <img 
            src={profileImage} 
            alt="Rashed Majed" 
            className={styles.profileImage} 
          />
          <div className={styles.proBadge}>PRO</div>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>Rashed Majed</h2>
          <p className={styles.details}>5 Active Properties since 19.06.2025</p>
          <div className={styles.reraBadge}>RERA CARD</div>
        </div>
      </section>

      {/* Bio Section */}
      <section className={styles.bioSection}>
        <p className={styles.bio}>
          I am originally a European licensed broker and have been working on the UAE market for more than 5 years. 
          I have closed more than 300M in Dubai properties value. I work quickly and efficiently with my clients 
          and ensure their long term investment assets are yielding and appreciating.
        </p>
      </section>

      {/* Add Property Button */}
      <div className={styles.buttonContainer}>
        <button className={styles.addPropertyButton} onClick={()=>navigate('/add-property')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
          </svg>
          ADD NEW PROPERTY
        </button>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'all' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          ALL
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'buy' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('buy')}
        >
          BUY
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'rent' ? styles.activeFilter : ''}`}
          onClick={() => setActiveFilter('rent')}
        >
          RENT
        </button>
      </div>

      {/* Property List */}
      <div className={styles.propertyList}>
        {filteredProperties.map(property => (
          <div key={property.id} className={styles.propertyCard}>
            <img 
              src={property.image} 
              alt={property.title} 
              className={styles.propertyImage} 
            />
            <div className={styles.propertyDetails}>
              <h3 className={styles.propertyTitle}>{property.title}</h3>
              <p className={styles.propertyLocation}>{property.location}</p>
              <div className={styles.propertySpecs}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                  </svg>
                  {property.beds} Beds
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v4H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" />
                  </svg>
                  {property.baths} Baths
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 6c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2V8c0-1.104-.896-2-2-2H3zm0 2h18v9H3V8zm7 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  {property.sqft} sqft
                </span>
              </div>
              <div className={styles.propertyFooter}>
                <p className={styles.propertyPrice}>{property.price}</p>
                <Link to="/property-details" className={styles.viewDetails}>
                  →
                </Link>
              </div>
            </div>
            <div className={`${styles.propertyType} ${property.type === 'rent' ? styles.rentType : styles.buyType}`}>
              {property.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Footer */}
      <div className={styles.statsFooter}>
        <div className={styles.statItem}>
          <div className={styles.statValue}>5+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>300M+</div>
          <div className={styles.statLabel}>Closed Deals</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>97%</div>
          <div className={styles.statLabel}>Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;