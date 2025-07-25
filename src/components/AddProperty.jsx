import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/AddProperty.module.css';

const AddProperty = () => {

  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState({
    title: '',
    location: '',
    street: '',
    apartment: '',
    description: '',
    type: 'Select',
    author: '',
    beds: '',
    baths: '',
    sqft: '',
    price: '',
    amenities: [],
    primaryPhoto: null,
    previewPrimary: null,
    secondaryPhotos: [],
    previewSecondary: []
  });

  const [characterCount, setCharacterCount] = useState({
    title: 0,
    description: 0
  });

  const amenitiesOptions = [
    "Balcony/Terrace",
    "Security Staff",
    "Gym",
    "Barbecue Area",
    "Kids Play Area",
    "Swimming Pool",
    "Pets Allowed",
    "Nearby Shopping Malls"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value
    });
    
    // Update character count
    if (name === 'title' || name === 'description') {
      setCharacterCount({
        ...characterCount,
        [name]: value.length
      });
    }
  };

  const handleAmenityChange = (amenity) => {
    const updatedAmenities = [...propertyData.amenities];
    if (updatedAmenities.includes(amenity)) {
      updatedAmenities.splice(updatedAmenities.indexOf(amenity), 1);
    } else {
      updatedAmenities.push(amenity);
    }
    
    setPropertyData({
      ...propertyData,
      amenities: updatedAmenities
    });
  };

  const handlePrimaryPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPropertyData({
          ...propertyData,
          primaryPhoto: file,
          previewPrimary: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecondaryPhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const previews = [];
      let loaded = 0;
      
      files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews[index] = reader.result;
          loaded++;
          
          if (loaded === files.length) {
            setPropertyData({
              ...propertyData,
              secondaryPhotos: files,
              previewSecondary: previews
            });
          }
        };
        reader.readAsDataURL(file);
      });
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
      street: '',
      apartment: '',
      description: '',
      type: 'Select',
      author: '',
      beds: '',
      baths: '',
      sqft: '',
      price: '',
      amenities: [],
      primaryPhoto: null,
      previewPrimary: null,
      secondaryPhotos: [],
      previewSecondary: []
    });
    
    setCharacterCount({
      title: 0,
      description: 0
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
        <div className={styles.trakheesiSection}>
          <button className={styles.trakheesiButton}><a
           href="https://trakheesi.dubailand.gov.ae/General/UserDisclamers.aspx"
          target="_blank"
          rel="noopener noreferrer"
           className={styles.trakheesiButton}
          >
            LINK MY TRAKHEESI
          </a></button>
          <div className={styles.orDivider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.orText}>OR</div>
            <div className={styles.dividerLine}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Title Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Title</h2>
              <div className={styles.counter}>{characterCount.title}/170</div>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="title"
                value={propertyData.title}
                onChange={handleChange}
                placeholder="Enter Text"
                maxLength={170}
                className={styles.inputField}
                required
              />
              <div className={styles.selectGroup}>
                <select
                  name="type"
                  value={propertyData.type}
                  onChange={handleChange}
                  className={styles.selectInput}
                >
                  <option value="Select">Select</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
                <input
                  type="text"
                  name="author"
                  value={propertyData.author}
                  onChange={handleChange}
                  placeholder="Author"
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Location</h2>
            </div>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Street</h3>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="street"
                  value={propertyData.street}
                  onChange={handleChange}
                  placeholder="Enter Address"
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Apart #</h3>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="apartment"
                  value={propertyData.apartment}
                  onChange={handleChange}
                  placeholder="Enter Apartment Number"
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Description</h2>
              <div className={styles.counter}>{characterCount.description}/1600</div>
            </div>
            <div className={styles.inputGroup}>
              <textarea
                name="description"
                value={propertyData.description}
                onChange={handleChange}
                placeholder="Enter text"
                maxLength={1600}
                rows="5"
                className={styles.textareaField}
                required
              />
            </div>
          </div>

          {/* Property Details Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Property details</h2>
            </div>
            <div className={styles.amenitiesGrid}>
              {amenitiesOptions.map((amenity, index) => (
                <div key={index} className={styles.amenityItem}>
                  <input
                    type="checkbox"
                    id={`amenity-${index}`}
                    checked={propertyData.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className={styles.checkbox}
                  />
                  <label htmlFor={`amenity-${index}`}>{amenity}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Add Photos Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Add photos</h2>
            </div>
            
            {/* Primary Photo */}
            <div className={styles.photoSection}>
              <div className={styles.photoHeader}>
                <h3 className={styles.subTitle}>Primary</h3>
                <span className={styles.photoRequired}>required</span>
              </div>
              <label className={styles.photoLabel}>
                {propertyData.previewPrimary ? (
                  <img 
                    src={propertyData.previewPrimary} 
                    alt="Primary property" 
                    className={styles.photoPreview}
                  />
                ) : (
                  <div className={styles.photoPlaceholder}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z" />
                      <path d="M8 11l-3 4h11l-4-6-3 4z" />
                      <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
                    </svg>
                    <span>Upload Primary Photo</span>
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handlePrimaryPhotoChange}
                  className={styles.photoInput}
                  required
                />
              </label>
            </div>
            
            {/* Secondary Photos */}
            <div className={styles.photoSection}>
              <div className={styles.photoHeader}>
                <h3 className={styles.subTitle}>Secondary</h3>
                <span className={styles.photoOptional}>optional</span>
              </div>
              <label className={styles.photoLabel}>
                {propertyData.previewSecondary.length > 0 ? (
                  <div className={styles.secondaryPhotos}>
                    {propertyData.previewSecondary.map((preview, index) => (
                      <img 
                        key={index}
                        src={preview} 
                        alt={`Secondary property ${index + 1}`} 
                        className={styles.photoPreview}
                      />
                    ))}
                    <div className={styles.addMorePhotos}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                      <span>Add More</span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.photoPlaceholder}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z" />
                      <path d="M8 11l-3 4h11l-4-6-3 4z" />
                      <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
                    </svg>
                    <span>Upload Secondary Photos</span>
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleSecondaryPhotoChange}
                  className={styles.photoInput}
                  multiple
                />
              </label>
            </div>
          </div>

          
        </form>
        <button type="submit" className={styles.submitButton}>
            ADD PROPERTY
          </button>
          <button onClick={()=>navigate('/leads')} className={styles.submitButton2}>
            GENERATE LEADS
          </button>
      </div>
    </div>
  );
};

export default AddProperty;