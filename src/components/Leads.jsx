// Leads.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Leads.module.css'; 

const Leads = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const plans = [
    {
      id: 1,
      title: "Get Leads for 2 days",
      originalPrice: "1,500-AED",
      discountedPrice: "500 AED",
      days: 2,
      type: "popular"
    },
    {
      id: 2,
      title: "Get Leads for 5 days",
      originalPrice: "3,000-AED",
      discountedPrice: "1,000 AED",
      days: 5,
      type: ""
    },
    {
      id: 3,
      title: "Get Leads for 10 days",
      originalPrice: "6,000-AED",
      discountedPrice: "1,800 AED",
      days: 10,
      type: "recommended"
    },
    {
      id: 4,
      title: "Get Leads for 30 days",
      originalPrice: "10,000-AED",
      discountedPrice: "5,000 AED",
      days: 30,
      type: ""
    }
  ];

  const [selectedCurrency, setSelectedCurrency] = useState('AED');
  
  const currencies = [
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
    { code: 'QAR', name: 'Qatari Riyal', symbol: '﷼' },
    { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك' },
    { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب' },
    { code: 'OMR', name: 'Omani Rial', symbol: '﷼' }
  ];

    const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSave = () => {
    if (selectedPlan) {
      alert(`Plan selected: ${plans.find(p => p.id === selectedPlan).title}`);
    } else {
      alert("Please select a plan first");
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link to="/" className={styles.backButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>
          Back
        </Link>
        <h1 className={styles.title}>SELECT YOUR MARKETING PLAN</h1>
        <div className={styles.placeholder}></div>
      </header>

      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>Generate quality leads for your property listings</h2>
          <p>Choose a plan that fits your marketing needs and budget</p>
        </div>
        <div className={styles.currencySelector}>
            <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className={styles.currencySelect}
            >
            {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
                </option>
            ))}
            </select>
        </div>
        <div className={styles.plansContainer}>
          {plans.map(plan => (
            <div 
              key={plan.id}
              className={`${styles.planCard} ${selectedPlan === plan.id ? styles.selected : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.originalPrice}>{plan.originalPrice}</span>
                <span className={styles.discountedPrice}>{plan.discountedPrice}</span>
              </div>
              <div className={styles.daysContainer}>
                <div className={styles.daysBadge}>{plan.days} days</div>
                {plan.type !== "" && (
                  <div className={
                    plan.type === "popular"
                      ? styles.popular
                      : plan.type === "recommended"
                      ? styles.recommended
                      : ""
                  }>
                    {plan.type}
                  </div>
                )}
              </div>
              {selectedPlan === plan.id && (
                <div className={styles.selectedBadge}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
          
          <div 
            className={`${styles.planCard} ${styles.customCard} ${selectedPlan === 'custom' ? styles.selected : ''}`}
            onClick={() => handlePlanSelect('custom')}
          >
            <h3 className={styles.planTitle}>Custom</h3>
            <p className={styles.customText}>Create your own plan</p>
            <div className={styles.customIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </div>
            {selectedPlan === 'custom' && (
              <div className={styles.selectedBadge}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className={styles.actionBar}>
          <button 
            className={styles.saveButton}
            onClick={handleSave}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leads;