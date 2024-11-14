
// ADDED SCROLLING
import React, { useState } from 'react';
import styles from './ProductButtons.module.css'; // Importing styles from CSS module

// List of category objects with name and id
const categories = [
  { name: 'All', id: 'all' },
  { name: 'Rough Pages Registers', id: 'rough-pages-registers' },
  { name: 'Neat Pages Registers', id: 'neat-pages-registers' },
  { name: 'Ball/Pointers Pens', id: 'ball-pointers-pens' },
  { name: 'Pages/Sheets', id: 'pages-sheets' },
  { name: 'Markers/Highlighters', id: 'markers-highlighters' },
  { name: 'Tapes', id: 'tapes' },
  { name: 'Plastic Files', id: 'plastic-files' },
  { name: 'Rulers', id: 'rulers' },
  { name: 'Drawing Related', id: 'drawing-related' },
  { name: 'Calculators', id: 'calculators' },
  // { name: 'Sports', id: 'sports' },
  { name: 'Others', id: 'others' }
];

// Main component to render category buttons
const ProductButtons = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // State for the currently selected category

  // Handle category selection
  const handleCategoryClick = (id) => {
    setSelectedCategory(id); // Set selected category
    onSelectCategory(id);    // Trigger callback for parent component
  };
  return (
    <div className={styles.buttonContainer}>
      {categories.map((category) => (
        <button
          key={category.id} // Use category id as the key for better performance
          onClick={() => handleCategoryClick(category.id)} // Handle click to select category
          className={`${styles.customButton} ${selectedCategory === category.id ? styles.activeButton : ''}`}
        >
          {category.name} {/* Display category name */}
        </button>
      ))}
    </div>
  );
};

export default ProductButtons;
