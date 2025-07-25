import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/AddProperty.module.css';

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: '',
    location: '',
    beds: '',
    baths: '',
    sqft: '',
    price: '',
    type: 'rent',
    description: '',
    image: null,
    preview: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPropertyData({
          ...propertyData,
          image: file,
          preview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission to your backend here
    console.log('Property submitted:', propertyData);
    alert('Property added successfully!');
    
    // Reset form
    setPropertyData({
      title: '',
      location: '',
      beds: '',
      baths: '',
      sqft: '',
      price: '',
      type: 'rent',
      description: '',
      image: null,
      preview: null
    });
  };

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
        <h1 className={styles.title}>ADD NEW PROPERTY</h1>
        <div className={styles.placeholder}></div>
      </header>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Image Upload */}
          <div className={styles.imageSection}>
            <label className={styles.imageLabel}>
              {propertyData.preview ? (
                <img 
                  src={propertyData.preview} 
                  alt="Property preview" 
                  className={styles.imagePreview}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z" />
                    <path d="M8 11l-3 4h11l-4-6-3 4z" />
                    <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
                  </svg>
                  <span>Upload Property Image</span>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className={styles.imageInput}
              />
            </label>
          </div>

          {/* Property Details */}
          <div className={styles.formGroup}>
            <label htmlFor="title">Property Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={propertyData.title}
              onChange={handleChange}
              placeholder="e.g. Luxury 3 Bedroom Apartment"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={propertyData.location}
              onChange={handleChange}
              placeholder="e.g. Downtown Dubai, Burj Khalifa District"
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="beds">Bedrooms</label>
              <input
                type="number"
                id="beds"
                name="beds"
                value={propertyData.beds}
                onChange={handleChange}
                placeholder="0"
                min="0"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="baths">Bathrooms</label>
              <input
                type="number"
                id="baths"
                name="baths"
                value={propertyData.baths}
                onChange={handleChange}
                placeholder="0"
                min="0"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="sqft">Square Footage</label>
              <input
                type="number"
                id="sqft"
                name="sqft"
                value={propertyData.sqft}
                onChange={handleChange}
                placeholder="0"
                min="0"
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={propertyData.price}
                onChange={handleChange}
                placeholder="e.g. AED 2,850,000"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="type">Listing Type</label>
              <select
                id="type"
                name="type"
                value={propertyData.type}
                onChange={handleChange}
                className={styles.selectInput}
              >
                <option value="rent">For Rent</option>
                <option value="buy">For Sale</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={propertyData.description}
              onChange={handleChange}
              placeholder="Describe the property features, amenities, and unique selling points..."
              rows="4"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            ADD PROPERTY
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;