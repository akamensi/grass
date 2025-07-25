import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MakeOffer.module.css';

const MakeOffer = () => {
  const [step, setStep] = useState(1);
  const [offerAmount, setOfferAmount] = useState(2800000);
  const [selectedMonth, setSelectedMonth] = useState(4); // April
  const [selectedDate, setSelectedDate] = useState(16);
  
  const months = [
    { id: 3, name: "MARCH" },
    { id: 4, name: "APRIL" },
    { id: 5, name: "MAY" },
    { id: 6, name: "JUNE" },
    { id: 7, name: "JULY" }
  ];
  
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  // Generate calendar days for the selected month
  const generateCalendar = () => {
    const daysInMonth = 30; // Simplified for this example
    const startDay = 3; // Wednesday (0 = Sunday, 1 = Monday, etc.)
    
    const calendar = [];
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < startDay; i++) {
      calendar.push({ day: null });
    }
    
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push({ day: i });
    }
    
    return calendar;
  };
  
  const calendarDays = generateCalendar();
  
  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value) {
      setOfferAmount(parseInt(value));
    } else {
      setOfferAmount(0);
    }
  };
  
  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };
  
  const handleSubmit = () => {
    alert(`Offer submitted!\nAmount: ${formatCurrency(offerAmount)}\nDeposit: ${formatCurrency(offerAmount * 0.1)}\nPossession Date: ${months.find(m => m.id === selectedMonth).name} ${selectedDate}`);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link to="/property-details" className={styles.backButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>
        </Link>
        <h1 className={styles.title}>Make an offer</h1>
        <div className={styles.steps}>
          {[1, 2, 3, 4].map(num => (
            <div 
              key={num}
              className={`${styles.step} ${step === num ? styles.activeStep : ''}`}
              onClick={() => setStep(num)}
            >
              {num}
            </div>
          ))}
        </div>
      </header>

      <div className={styles.content}>
        {/* Offer Amount Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Offer Amount</h2>
          <div className={styles.amountContainer}>
            <input
              type="text"
              value={formatCurrency(offerAmount)}
              onChange={handleAmountChange}
              className={styles.amountInput}
            />
          </div>
          
          <div className={styles.depositNote}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Automatic 10% Deposit required</span>
            <div className={styles.depositAmount}>
              {formatCurrency(offerAmount * 0.1)}
            </div>
          </div>
        </div>

        {/* Possession Date Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Possession Date</h2>
          
          <div className={styles.monthSelector}>
            {months.map(month => (
              <div
                key={month.id}
                className={`${styles.month} ${selectedMonth === month.id ? styles.selectedMonth : ''}`}
                onClick={() => setSelectedMonth(month.id)}
              >
                {month.name}
              </div>
            ))}
          </div>
          
          <div className={styles.calendar}>
            <div className={styles.daysHeader}>
              {days.map(day => (
                <div key={day} className={styles.dayHeader}>{day}</div>
              ))}
            </div>
            
            <div className={styles.daysGrid}>
              {calendarDays.map((dayInfo, index) => (
                <div 
                  key={index}
                  className={`${styles.dayCell} ${dayInfo.day === selectedDate ? styles.selectedDay : ''} ${!dayInfo.day ? styles.emptyCell : ''}`}
                  onClick={() => dayInfo.day && setSelectedDate(dayInfo.day)}
                >
                  {dayInfo.day}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <button className={styles.submitButton} onClick={handleSubmit}>
          OK
        </button>
      </div>
    </div>
  );
};

export default MakeOffer;